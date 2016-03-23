var Store = require('flux/utils').Store;
var OrganDispatcher = require('./../Dispatcher/Dispatcher');
var KeyStore = new Store(OrganDispatcher);
var NoteConstants =  require('./../constants/NoteConstants');

var _notes = [];
var addNote = function (note) {
  if (_notes.indexOf(note) === -1){
    _notes.push(note);
    KeyStore.__emitChange();
  }
};

var removeNote = function (note) {
  if (_notes.indexOf(note) !== -1){
    _notes.splice(_notes.indexOf(note), 1);
    KeyStore.__emitChange();
  }
};

KeyStore.__onDispatch = function(payload) {
  switch (payload.actionType){
    case NoteConstants.NOTE_STARTED :
      addNote(payload.note);
      break;
    case NoteConstants.NOTE_STOPPED :
      removeNote(payload.note);
      break;
  }

  KeyStore.includes = function (note) {
    return _notes.includes(note);
  };

  KeyStore.notes = function () {
    return _notes.slice();
  };
};

module.exports = KeyStore;
