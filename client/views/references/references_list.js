Template.referencesList.helpers({
  referencesWithRank: function() {
    this.references.rewind();
    return this.references.map(function(reference, index, cursor) {
      reference._rank = index;
      return reference;
    });
  },
  /* TODO: fix so no jump to top of page on click more */
  hasMoreReferences: function(){
    this.references.rewind();
    return Router.current().limit() == this.references.fetch().length;
  },
  references: function() {
    return References;
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
    return {reference: '_id'}
  }
});


Template.referencesList.events({
  'click #references-table tbody tr': function(event) {
    var refId;
    refId = $(event.currentTarget).attr('reference');
    return Router.go('referenceView', {
      _id: refId
    });
  }
});
