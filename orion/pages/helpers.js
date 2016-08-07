// React
import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Component, Provider, ApplicationComponent} from 'tide/components';
import {Router, Route, browserHistory, Link} from 'react-router';
import {StyleGuidePage} from 'orion/base/layout';

export class HelpersPage extends StyleGuidePage {
    sidebar() {
        return (
          <ul>
              <li><a href="/"> ← Home </a></li>
              <li><a href="#classnames">Class Names</a></li>
          </ul>
        )
    }
    
    theme() {
        return (
          <div className="section-container l-row-gut-4">
          
          </div>
        )
    }

    
    main() {
        return (
          <div>
              <div class="section-container">
                  <h1 class="section_title"><a name="classnames">Helpers</a></h1>
                  <code>.l-float-left</code>
                  <code>.l-float-right</code>
                  <code>.l-clear</code>
                  <code>.l-inline</code>
                  <code>.l-hidden</code>
                  <code>.l-no-margin</code>
                  <code>.l-no-padding</code>
                  <code>.l-center-txt</code>
                  <code>.l-hidden</code>
              </div>
          </div>
        )
    }
    
}