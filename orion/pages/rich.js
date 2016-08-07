// React
import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Component, Provider, ApplicationComponent} from 'tide/components';
import {Router, Route, browserHistory, Link} from 'react-router';
import {StyleGuidePage} from 'orion/base/layout';
import {NewMessage} from 'orion/ui/_new_message';

export class RichComponents extends StyleGuidePage {
    sidebar() {
        return (
          <ul>
              <li><a href="/"> ← Home </a></li>
              <li><a href="#colors">Nothing yet</a></li>
          </ul>
        )
    }
    
    main() {
        return(
          <div>
              <h1>Rich Components</h1>
              <div>
                  <NewMessage />
              </div>
          </div>
        )
    }
    
}