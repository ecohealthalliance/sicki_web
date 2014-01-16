Template.diseasesTable.helpers({
	diseasesWithRank: function() {
		this.diseases.rewind();
		return this.diseases.map(function(disease, index, cursor) {
		disease._rank = index;
		return disease;
	});
	},
	/* TODO: fix so no jump to top of page on click more */
	hasMoreDiseases: function(){
		this.diseases.rewind();
		return Router.current().limit() == this.diseases.fetch().length;
	},
 	diseases: function() {
	    return Diseases;
	 },
	fields: function() {
    return [
      {
        key: 'name',
        label: 'Name'
      }, {
        key: 'definition',
        label: 'Definition'
      }, {
        key: 'synonyms',
        label: 'Synonyms'
      }
    ];
  }
});


