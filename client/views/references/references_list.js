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
    return References.find();
  },
  fields: function() {
    return [
      {
        key: 'id',
        label: 'ID'
      }, {
        key: 'title',
        label: 'Title'
      }, {
        key: 'container-title',
        label: 'Journal'
      }
    ];
  }
});
