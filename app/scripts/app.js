import React from 'react';
import Home from './components/home';

let injectTapEventPlugin = require("react-tap-event-plugin");
//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

window.React = React;
const mountNode = document.getElementById('app');

React.render(<Home/>, mountNode);
