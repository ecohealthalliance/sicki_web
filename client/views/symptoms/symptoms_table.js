Template.symptomsTable.helpers({
	symptomsWithRank: function() {
		this.symptoms.rewind();
		return this.symptoms.map(function(symptom, index, cursor) {
		symptom._rank = index;
		return symptom;
	});
	},
	/* TODO: fix so no jump to top of page on click more */
	hasMoreSymptoms: function(){
		this.symptoms.rewind();
		return Router.current().limit() == this.symptoms.fetch().length;
	},
 	symptoms: function() {
	    return Symptoms;
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
        key: 'source',
        label: 'Source'
      }
    ];
  }
});


