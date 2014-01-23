Meteor.publish('entries', function(options) {
  return Entries.find({}, options);
});

Meteor.publish('singleEntry', function(id) {
  return id && Entries.find(id);
});

Meteor.publish('questions', function(options) {
  return Questions.find({}, options);
});

Meteor.publish('singleQuestion', function(id) {
  return id && Questions.find(id);
});

Meteor.publish('comments', function(entryId) {
  return Comments.find({entryId: entryId});
});

Meteor.publish('notifications', function() {
  return Notifications.find({userId: this.userId});
});

Meteor.publish('references', function(options) {
  return References.find({}, options);
});

Meteor.publish('singleReference', function(id) {
  return id && References.find(id);
});

Meteor.publish('diseases', function(options) {
  return Diseases.find({}, options);
});

Meteor.publish('symptoms', function(options) {
  return Symptoms.find({}, options);
});