Template.entriesList2.helpers({
  entries: function() {
    /*return Entries.find();*/
    return Entries;
  },
  fields: function() {
    return [
      {
        key: 'eventName.val',
        label: 'EventName'
      }, {
        key: 'dates.startDate.val',
        label: 'Start Date'
      }, {
        key: 'dates.endDate.val',
        label: 'End Date'
      }
    ];
  }
});