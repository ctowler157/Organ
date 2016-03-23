var React = require('react');
var KeyStore = require('./../stores/KeyStore');
var Note = require('./../util/Note');
var Tones = require('./../constants/Tones');

var Key = React.createClass({
  getInitialState: function (){
    return {pressed: 'unpressed'};
  },

  componentDidMount: function () {
    var freq = (Tones[this.props.noteName]);
    this.note = new Note(freq);
    this.keyToken = KeyStore.addListener(this.toggleKey);
  },

  componentWillUnmount: function() {
    this.keyToken.remove();
  },

  toggleKey: function (){
    if (KeyStore.includes(this.props.noteName)){
      this.note.start();
      this.setState({ pressed: "pressed" });
    } else {
      this.note.stop();
      this.setState({ pressed: "unpressed" });
    }
  },

  render: function () {
    var string = this.props.noteName;
    var sharp = (string.includes('s'))? " sharp" : "";
    var className = this.state.pressed + sharp;
    return(
      <div className={className}></div>
    );
  }
});

module.exports = Key;
