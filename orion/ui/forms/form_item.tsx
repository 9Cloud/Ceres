import {View, ITideContext} from "tide";
import * as React from "react";
import * as PropTypes from 'prop-types';
import {computed, action, toJS as mobxToJS, IObservableArray} from "mobx";
import {capitalize_words} from "tide/utils/string";
import {Form} from "./form";

/**
 * All form elements inherit from this. To use in creating your own elements, you must write a render() & register()
 * function.
 *
 * Important: FormItems must be nested within a Form component.
 */
export class FormItem extends View {
    static propTypes = {
        name: PropTypes.string.isRequired,
        label: PropTypes.string,
        placeholder: PropTypes.string,
        on_set_value: PropTypes.func
    };

    static defaultProps = {
        placeholder: "",
        label: null,
        on_set_value: null
    };

    static contextTypes = {
        form: PropTypes.object,
        ...View.contextTypes
    };

    context: ITideContext & {
        form: Form
    };

    props: {
        name?: string,
        value?: any,
        placeholder?: string,
        [index: string]: any
    };


    /**
     * @protected
     */
    register() {
         this.form.register(this.props.name, null, this);
    }

    reset(){
        this.set_value(null);
    }

    /**
     * Called via React
     */
    componentWillMount() {
        super.componentWillMount();

        // Sanity checking
        if (this.props.name === undefined) {
            throw "Name of form item cannot be left undefined"
        }
        if (this.props.value !== undefined) {
            throw ReferenceError("Value should not be given via props. " +
                "It should be set on the enclosing form via intitial prop.")
        }

        this.register();
    }

    /**
     * Return the form that gives this item context
     * @returns {Form}
     */
    get form() : Form {
        return this.context.form;
    }


    /**
     * Return the internal value if defined, otherwise return form context
     * @returns {*}
     */
    @computed get value() {
        return this.form.get(this.props.name).value;
    }

    /**
     * Set the internal state and form context
     * @param {*} new_value
     * @param {*} should_validate
     */
    @action set_value(new_value, should_validate = true) {
        // this._value = val;
        let {name, on_set_value} = this.props;

        console.debug(`${name} | prev value`, this.context.form.get(name).value);
        console.debug(`${name} | new value`, new_value);

        if(!this.form.enabled){
            return;
        }

        this.form.set(name, new_value);

        if(should_validate){
            this.validate();
        }

        if(on_set_value){
            on_set_value(new_value);
        }
    }

    /**
     * Validate a given item, recording errors as a side effect
     */
    @action validate(){
        // Replace errors with new validations
        const new_errors = this.form.validate(this.props.name, this.value)
        this.errors.replace(new_errors);
    }

    /**
     * Return a JSON serializable form of this object
     * @returns {json|object}
     */
    toJS() {
        return mobxToJS(this.value);
    }

    /**
     * Return the errors found during validation
     * @returns {IObservableArray.<string>}
     */
    @computed get errors()  : IObservableArray<string> {
        return this.form.get_errors(this.props.name);
    }


    /**
     * Is there an error on this item?
     * @returns {boolean}
     */
    @computed get has_error() {
        return this.errors.length > 0;
    }

    /**
     * Add an error to this item
     * @param {string} message
     */
    add_error(message: string) {
        this.errors.push(message);
    }

    /**
     * Remove all errors found for this item
     */
    clear_errors() {
        this.errors.clear();
    }

    /**
     * Helper: Return the label based on the item's props: name or label
     * @returns {string}
     */
    get label(){
        return (this.props.label === null) ? capitalize_words(this.props.name) : this.props.label;
    }
}