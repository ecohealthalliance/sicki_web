Template.outbreaksList.helpers({
  entries: function() {
    return Entries.find(); /*toggle off for reactive-table */
    /*return Entries;*/    /*toggle on for reactive-table */
  },
  fields: function() {
    return [
      {
        key: 'eventName.valQuote',
        label: 'EventName'
      }, {
        key: 'dates.startDate.valQuote',
        label: 'Start Date'
      }, {
        key: 'dates.endDate.valQuote',
        label: 'End Date'
      }
    ];
  },
  attrs: function() {
        entries: '_id'
  }
});

Template.outbreaksList.events({
  'click #outbreaks-table tbody tr': function(event) {
    var entryId;
    entryId = $(event.currentTarget).attr('entry');
    return Router.go('entryView', {
      _id: entryId
    });
  }
});