var React = require('react');
var Track = require('./../util/Track');
var KeyStore = require('./../stores/KeyStore');

var Recorder = React.createClass({
  getInitialState: function () {
    var track = new Track({name: "name"});
    return ({isRecording: false, track: track});
  },

  startRecording: function () {
    this.setState({isRecording: true});
    var track = this.state.track;
    this.recordingToken = KeyStore.addListener(this.addNotes);
    track.startRecording();
  },

  stopRecording: function () {
    this.setState({isRecording: false});
    this.state.track.stopRecording();
    this.recordingToken.remove();
  },

  addNotes: function() {
    var notes = KeyStore.notes();
    var track = this.state.track;
    track.addNotes(notes);
  },

  toggleRecording: function () {
    if (this.state.isRecording) {
      this.stopRecording();
    } else {
      this.startRecording();
    }
  },

  play: function () {
    console.log(this.state.track.roll);
  },

  render: function () {
    var recordClass = "record" + (this.state.isRecording? ' on' : '');
    return(
      <div className="buttons">
        <button className={recordClass} onClick={this.toggleRecording}>
          Record
        </button>
        <button className="play" onClick={this.play}>
          Play
        </button>
      </div>
    );
  }
});

module.exports = Recorder;
