import React, {PropTypes} from "react";
import classNames from "classnames/bind";
import {View} from "tide/components";

/*
 Helpers
 ------

 // Basic div that knows about how to handle our props

 <Div center />

 .l-center-txt : center text elements
 .l-center: center non text eleemnts
 .l-float-left
 .l-float-right
 .l-clear
 .l-inline
 .l-hidden
 */

//
export class Div extends View {
    static propTypes = {
        inline: React.PropTypes.bool,
        center: React.PropTypes.bool,
        float: React.PropTypes.string,
        hidden: React.PropTypes.bool,
        clear: React.PropTypes.bool
    };

    static defaultProps = {
        inline: false,
        centerText: false,
        float: 'none',
        hidden: false,
        clear: false
    };

    static computeClass(props) {
        let divClass = classNames({
            'l-inline': props.inline,
            'l-float-left': props.float == 'left',
            'l-float-right': props.float == 'right',
            'l-hidden': props.hidden,

            'l-clear': props.clear,
            'l-clearfix': props.clearfix,

            'l-center-txt': props.centerText
        });

        if (props.className) {
            return props.className + ' ' + divClass;
        }
        else {
            return divClass;
        }
    };

    render() {
        let {className, center, hidden, float, clear, clearfix, centerText, children, ...other} = this.props;
        return <div className={Div.computeClass(this.props)} {...other}>{this.props.children}</div>;
    }
}