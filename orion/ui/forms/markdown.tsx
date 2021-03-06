import * as React from "react";
import * as PropTypes from 'prop-types';
import {View} from "tide";
import markdown_it from "markdown-it";

/**
 * @class
 * Display markdown content
 */
export class MarkdownText extends View {
    static propTypes = {
        text: PropTypes.string.isRequired
    };

    /**
     * @private
     * @param content
     * @returns {{__html: string}}
     */
    _convert(content) {
        let md = markdown_it({
            html      : false,
            linkify   : true,
            typography: true
        });

        //md.use(plugin, options)
        return {__html: md.render(content)}
    }

    /**
     * Render the content
     * @returns {XML}
     */
    render() {
        let raw_markup = this._convert(this.props.text);
        return <div className="markdown" dangerouslySetInnerHTML={raw_markup}/>;
    }
}