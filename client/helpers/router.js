Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('homePage', {path: '/'}),
  this.route('entriesList', {path: '/list'}),
  this.route('entriesGrid', {path: '/grid'}),
  this.route('entriesTable', {path: '/table'}),
  this.route('tables', {path: '/d3tables'}),
  this.route('dataTables', {path: '/datatable'}),
  this.route('slickTable', {path: '/slicktable'}),
  this.route('slickMin', {path: '/slickmin'}),
  this.route('accord', {path: '/accord'}),
  this.route('tabPage', {path: '/tabs'}),
  this.route('handson', {path: '/handson'}),
  this.route('handson2', {path: '/handson2'}),
  this.route('handson3', {path: '/handson3'})

});