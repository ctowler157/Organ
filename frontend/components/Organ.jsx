var React = require('react');
var Key = require('./Key');
var NoteMapping = require('./../constants/NoteMapping');
var Recorder = require('./Recorder');

var Organ = React.createClass({
  render: function () {
    var keys = Object.keys(NoteMapping).map(function (key) {
      return NoteMapping[key];
    });
    keys = keys.sort().map(function (el, i) {
      return <li key={i}><Key noteName={el}/></li>;
    });

    return(
      <div>
        <ul className="organ group">
          {keys}
        </ul>
        <Recorder />
      </div>
    );
  }
});

module.exports = Organ;
