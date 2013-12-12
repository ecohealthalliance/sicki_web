Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('homePage', {path: '/'}),
  this.route('entriesList', {path: '/list'}),
  this.route('entriesGrid', {path: '/grid'}),
  this.route('slickMin', {path: '/slickmin'}),
  this.route('tabPage', {path: '/tabs'}),
  this.route('dash', {path: '/dash'})
});