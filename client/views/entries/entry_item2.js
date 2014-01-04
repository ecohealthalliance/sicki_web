/*This can be used to strip a URL*/
Template.entryItem2.helpers({
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
});