/*This can be used to strip a URL*/
Template.referencesListItem.helpers({
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
});