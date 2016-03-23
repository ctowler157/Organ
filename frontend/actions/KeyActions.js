var OrganDispatcher = require('./../Dispatcher/Dispatcher');
var NoteMapping = require('./../constants/NoteMapping');
var NoteConstants = require('./../constants/NoteConstants');


var KeyActions = {
  handleKeyUp: function (e){
    var note = NoteMapping[e.keyCode];
    if (note){
      var action = {
        actionType: NoteConstants.NOTE_STOPPED,
        note: NoteMapping[e.keyCode]
      };

      OrganDispatcher.dispatch(action);
    }
  },

  handleKeyDown: function (e){
    var note = NoteMapping[e.keyCode];
    if (note){
      var action = {
        actionType: NoteConstants.NOTE_STARTED,
        note: NoteMapping[e.keyCode]
      };

      OrganDispatcher.dispatch(action);
    }
  }

};

module.exports = KeyActions;
