var React = require('react');
var Key = require('./Key');
var NoteMapping = require('./../constants/NoteMapping');

var Organ = React.createClass({
  render: function () {
    var keys = Object.keys(NoteMapping).map(function (key) {
      return NoteMapping[key];
    });
    keys = keys.sort().map(function (el, i) {
      return <li key={i}><Key noteName={el}/></li>;
    });

    return(
      <ul className="organ group">
        {keys}
      </ul>
    );
  }
});

module.exports = Organ;
