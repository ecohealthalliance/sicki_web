Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('homePage', {path: '/'}),
  this.route('postsList', {path: '/list'})
});