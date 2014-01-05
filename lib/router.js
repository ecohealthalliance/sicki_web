Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { 
    return [Meteor.subscribe('notifications')]
  }
});

EntriesListController = RouteController.extend({
  template: 'entriesList',
  increment: 5,
  limit: function() {
    return parseInt(this.params.entriesLimit) || this.increment; 
  },
  findOptions: function() {
    return {sort: this.sort, limit: this.limit()};
  },
  waitOn: function() {
    return Meteor.subscribe('entries', this.findOptions());
  },
  data: function() {
    return {
      entries: Entries.find({}, this.findOptions()),
      nextPath: this.nextPath()
    };
  }
});

EntriesListController2 = RouteController.extend({
  template: 'entriesList2',
  increment: 5,
  limit: function() {
    return parseInt(this.params.entriesLimit) || this.increment; 
  },
  findOptions: function() {
    return {sort: this.sort, limit: this.limit()};
  },
  waitOn: function() {
    return Meteor.subscribe('entries', this.findOptions());
  },
  data: function() {
    return {
      entries: Entries.find({}, this.findOptions()),
      nextPath: this.nextPath()
    };
  }
});

NewEntriesListController = EntriesListController.extend({
  sort: {submitted: -1, _id: -1},
  nextPath: function() {
    return Router.routes.newEntries.path({entriesLimit: this.limit() + this.increment})
  }
});

NewEntriesListController2 = EntriesListController2.extend({
  sort: {submitted: -1, _id: -1},
  nextPath: function() {
    return Router.routes.makeEntryList.path({entriesLimit: this.limit() + this.increment})
  }
});

QuestionsListController = RouteController.extend({
  template: 'questionsList',
  increment: 5, 
  limit: function() { 
    return parseInt(this.params.questionsLimit) || this.increment; 
  },
  findOptions: function() {
    return {sort: this.sort, limit: this.limit()};
  },
  waitOn: function() {
    return Meteor.subscribe('questions', this.findOptions());
  },
  data: function() {
    return {
      questions: Questions.find({}, this.findOptions()),
      nextPath: this.nextPath()
    };
  }
});

NewQuestionsListController = QuestionsListController.extend({
  sort: {submitted: -1, _id: -1},
  nextPath: function() {
    return Router.routes.newQuestions.path({questionsLimit: this.limit() + this.increment})
  }
});

BestEntriesListController = EntriesListController.extend({
  sort: {votes: -1, submitted: -1, _id: -1},
  nextPath: function() {
    return Router.routes.bestEntries.path({entriesLimit: this.limit() + this.increment})
  }
});

Router.map(function() {
  this.route('homePage', {path: '/'});
  this.route('adminPage', {path: '/admin'});
  this.route('aboutPage', {path: '/about'});
  this.route('entriesGrid', {path: '/grid'});
  this.route('slickMin', {path: '/slickmin'});
  this.route('tabPage', {path: '/tabs'});
  this.route('pdfPage', {path: '/pdf'});
  this.route('diseasePage', {path: '/diseases'});
  this.route('libraryPage', {path: '/library'});

  this.route('makeEntryList', {
    path: '/list',
    controller: NewEntriesListController2
  });

  /* Dash Routing */

  this.route('dash', {
  	path: '/dash/:_id',
    waitOn: function() {
      return [
        Meteor.subscribe('singleEntry', this.params._id),
        Meteor.subscribe('comments', this.params._id),
        Meteor.subscribe('questions')
      ];
    },
  	data: function () {
  		return Entries.findOne({_id: this.params._id});
  	}});

  /* DataMate Routing */

  this.route('newEntries', {
    path: '/new/:entriesLimit?',
    controller: NewEntriesListController
  });

  this.route('newQuestions', {
    path: '/newq/:questionsLimit?',
    controller: NewQuestionsListController
  });
  
  this.route('bestEntries', {
    path: '/best/:entriesLimit?',
    controller: BestEntriesListController
  });
  
  this.route('entryPage', {
    path: '/entries/:_id',
    waitOn: function() {
      return [
        Meteor.subscribe('singleEntry', this.params._id),
        Meteor.subscribe('comments', this.params._id),
        Meteor.subscribe('questions')
      ];
    },
    data: function() { return Entries.findOne(this.params._id); }
  });

  this.route('entryEdit', {
    path: '/entries/:_id/edit',
    waitOn: function() {
      return [
        Meteor.subscribe('singleEntry', this.params._id),
        Meteor.subscribe('comments', this.params._id),
        Meteor.subscribe('questions')
      ];
    },
    data: function() { return Entries.findOne(this.params._id); }
  });
  
  this.route('entrySubmit', {
    path: '/submit',
    waitOn: function() {
      return [
        Meteor.subscribe('questions')
      ];
    },
    disableProgress: true
  });

  this.route('questionPage', {
    path: '/questions/:_id',
    waitOn: function() {
      return [
        Meteor.subscribe('singleQuestion', this.params._id)
      ];
    },
    data: function() { return Questions.findOne(this.params._id); }
  });

  this.route('questionEdit', {
    path: '/questions/:_id/edit',
    waitOn: function() { 
      return Meteor.subscribe('singleQuestion', this.params._id);
    },
    data: function() { return Questions.findOne(this.params._id); }
  });

  this.route('questionSubmit', {
    path: '/submitq',
    disableProgress: true
  });

});

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn())
      this.render(this.loadingTemplate);
    else
      this.render('accessDenied');
    
    this.stop();
  }
};

Router.before(requireLogin, {only: 'entrySubmit'});
Router.before(function() { clearErrors() });