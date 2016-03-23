
var Track = function (attr) {
  this.name = attr.name;
  this.roll = attr.roll || [];
};

Track.prototype.startRecording = function () {
  this.roll = [];
  this.startTime = Date.now();
};

Track.prototype.addNotes = function (notes) {
  var timeSlice = Date.now() - this.startTime;
  this.roll.push({timeSlice: timeSlice, notes: notes});
};

Track.prototype.stopRecording = function () {
  this.addNotes([]);
};

module.exports = Track;
