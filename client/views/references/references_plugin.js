Template.referencesPlugin.helpers({
    refLink: function(){
      console.log(this.refs)
      console.log(References.find({rights: {$in:this.refs}}).count())
      return References.find({rights: {$in:this.refs}});
    },
  fields: function() {
    return [
    {
      key: 'date',
      label: 'Date'
    }, {
      key: 'title',
      label: 'Title'
    }, {
      key: 'publicationTitle',
      label: 'Journal'
    }
    ];
  },
  attrs: function() {
    return {refLink: '_id'}
  }
});

Template.referencesPlugin.events({
  'click #references-plugin tbody tr': function(event) {
    var refId;
    refId = $(event.currentTarget).attr('refLink');
    return Router.go('referenceView', {
      _id: refId
    });
  }
});
