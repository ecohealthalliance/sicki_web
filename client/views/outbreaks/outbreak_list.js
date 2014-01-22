Template.outbreaksList.helpers({
  entries: function() {
    /*return Entries.find();*/ /*toggle off for reactive-table */
    return Entries;    /*toggle on for reactive-table */
  },
  fields: function() {
    return [
      {
        key: 'val.eventName.valQuote',
        label: 'EventName'
      }, {
        key: 'val.dates.startDate.valForm',
        label: 'Start Date'
      }, {
        key: 'val.dates.endDate.valForm',
        label: 'End Date'
      }
    ];
  },
      attrs: function() {
        return {entry: '_id'}

  }
});

Template.outbreaksList.events({
  'click #outbreaks-table tbody tr': function(event) {
    var entryId;
    entryId = $(event.currentTarget).attr('entry');
    return Router.go('dash', {
      _id: entryId
    });
  }
});