import {Component} from "tide/components";
import React, {PropTypes} from "react";
import {observable, computed, action, toJS as mobxToJS, map as mobxMap} from "mobx";
import * as mobxReact from "mobx-react";
import classNames from "classnames/bind";
import {capitalize_words} from 'orion/utils/string';
import {Spacer} from 'orion/ui/helpers';

/**
 * All form elements inherit from this.
 *
 * To use. You must write a render()
 */
export class FormItem extends Component {
    static propTypes = {
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string,
        placeholder: React.PropTypes.string
    };

    static defaultProps = {
        placeholder: "",
        label: null
    };

    static contextTypes = {
        form: React.PropTypes.object
    };

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

    register() {
        this.form.register(this.props.name, null, this);
    }

    get form() {
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
        let {name} = this.props;

        console.debug(`${name} | prev value`, this.context.form.get(name).value);
        console.debug(`${name} | new value`, new_value);

        this.form.set(name, new_value);

        if(should_validate){
            this.validate();
        }
    }

    @action validate(){
        debugger;
        // Replace errors with new validations
        const new_errors = this.form.validate(this.props.name, this.value);
        this.errors.replace(new_errors);
    }

    toJS() {
        return this.value;
    }

    @computed get errors() {
        return this.form.get_errors(this.props.name);
    }

    // Error Handling
    @computed get has_error() {
        return this.errors.length > 0;
    }

    add_error(message) {
        this.errors.push(message);
    }

    clear_errors() {
        this.errors.clear();
    }

    // Helpers
    get label(){
        return (this.props.label === null) ? capitalize_words(this.props.name) : this.props.label;
    }
}