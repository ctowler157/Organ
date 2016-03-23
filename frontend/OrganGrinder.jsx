var React = require('react');
var ReactDOM = require('react-dom');
var util = require('./util/KeyListener');
var Organ = require('./components/Organ');


$(function () {
  ReactDOM.render(
    <Organ />, document.getElementById("content")
  );
});
