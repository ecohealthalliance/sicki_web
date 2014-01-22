/*This can be used to strip a URL*/
Template.referencesListItem.helpers({
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  },
  getYear: function(date) {
  	console.log(date)
  	year = date.substring(6, 10) - 0
  	console.log(year)
  	return year;
  }
});