Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { 
    return [Meteor.subscribe('notifications')]
  }
});

ReferencesListController = RouteController.extend({
  template: 'referencesList',
  increment: 5,
  limit: function() {
    return parseInt(this.params.referencesLimit) || this.increment; 
  },
  findOptions: function() {
    return {sort: this.sort, limit: this.limit()};
  },
  waitOn: function() {
    return Meteor.subscribe('references', this.findOptions());
  },
  data: function() {
    return {
      references: References.find({}, this.findOptions()),
      nextPath: this.nextPath()
    };
  }
});


AscendingReferencesListController = ReferencesListController.extend({
  sort: {id: 1, _id: -1},
  nextPath: function() {
    return Router.routes.ascendingReferences.path({referencesLimit: this.limit() + this.increment})
  }
});

DiseasesListController = RouteController.extend({
  template: 'diseasesTable',
  increment: 5,
  limit: function() {
    return parseInt(this.params.diseasesLimit) || this.increment; 
  },
  findOptions: function() {
    return {sort: this.sort, limit: this.limit()};
  },
  waitOn: function() {
    return Meteor.subscribe('diseases', this.findOptions());
  },
  data: function() {
    return {
      diseases: Diseases.find({}, this.findOptions()),
      nextPath: this.nextPath()
    };
  }
});


AscendingDiseasesListController = DiseasesListController.extend({
  sort: {id: 1, _id: -1},
  nextPath: function() {
    return Router.routes.ascendingDiseases.path({diseasesLimit: this.limit() + this.increment})
  }
});

SymptomsListController = RouteController.extend({
  template: 'symptomsTable',
  increment: 5,
  limit: function() {
    return parseInt(this.params.symptomsLimit) || this.increment; 
  },
  findOptions: function() {
    return {sort: this.sort, limit: this.limit()};
  },
  waitOn: function() {
    return Meteor.subscribe('symptoms', this.findOptions());
  },
  data: function() {
    return {
      symptoms: Symptoms.find({}, this.findOptions()),
      nextPath: this.nextPath()
    };
  }
});

AscendingSymptomsListController = SymptomsListController.extend({
  sort: {id: 1, _id: -1},
  nextPath: function() {
    return Router.routes.ascendingSymptoms.path({symptomsLimit: this.limit() + this.increment})
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

AscendingEntriesListController = EntriesListController.extend({
  sort: {eidID: -1, _id: -1},
  nextPath: function() {
    return Router.routes.ascendingEntries.path({entriesLimit: this.limit() + this.increment})
  }
});

OutbreaksListController = RouteController.extend({
  template: 'outbreaksList',
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

AscendingOutbreaksListController = OutbreaksListController.extend({
  sort: {submitted: -1, _id: -1},
  nextPath: function() {
    return Router.routes.ascendingOutbreaks.path({entriesLimit: this.limit() + this.increment})
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

AscendingQuestionsListController = QuestionsListController.extend({
  sort: {questionNumber: 1, _id: -1},
  nextPath: function() {
    return Router.routes.ascendingQuestions.path({questionsLimit: this.limit() + this.increment})
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
  this.route('testList', {path: '/test'});

  /* Resources Routing */
  this.route('resourcesPage', {path: '/resources'});

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

  /* Diseases Routing */
  this.route('ascendingDiseases', {
    path: '/diseases/:diseasesLimit?',
    controller: AscendingDiseasesListController
  });

  /* Symptoms Routing */
  this.route('ascendingSymptoms', {
    path: '/symptoms/:symptomsLimit?',
    controller: AscendingSymptomsListController
  });

  /* References Routing */
  this.route('ascendingReferences', {
    path: '/references/:referencesLimit?',
    controller: AscendingReferencesListController
  });

  this.route('pdfPage', {path: '/pdf'});
  this.route('libraryPage', {path: '/library'});
  this.route('referenceSubmitNew', {path: '/refsub'});

  /* Outbreaks Routing */
  this.route('ascendingOutbreaks', {
    path: '/list',
    controller: AscendingOutbreaksListController
  });

  /* DataMate Routing */

  this.route('ascendingEntries', {
    path: '/entries/:entriesLimit?',
    controller: AscendingEntriesListController
  });

  this.route('ascendingQuestions', {
    path: '/questions/:questionsLimit?',
    controller: AscendingQuestionsListController
  });
  
  this.route('bestEntries', {
    path: '/best/:entriesLimit?',
    controller: BestEntriesListController
  });
  
  this.route('entryView', {
    path: '/entry/:_id',
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
    path: '/entry/:_id/edit',
    waitOn: function() {
      return [
        Meteor.subscribe('singleEntry', this.params._id),
        Meteor.subscribe('comments', this.params._id),
        Meteor.subscribe('questions')
      ];
    },
    data: function() { return Entries.findOne(this.params._id); }
  });
  
  this.route('entrySubmitNew', {
    path: '/submit',
    waitOn: function() {
      return [
        Meteor.subscribe('questions')
      ];
    },
    disableProgress: true
  });

  this.route('questionView', {
    path: '/question/:_id',
    waitOn: function() {
      return [
        Meteor.subscribe('singleQuestion', this.params._id)
      ];
    },
    data: function() { return Questions.findOne(this.params._id); }
  });

  this.route('questionEdit', {
    path: '/question/:_id/edit',
    waitOn: function() { 
      return Meteor.subscribe('singleQuestion', this.params._id);
    },
    data: function() { return Questions.findOne(this.params._id); }
  });

  this.route('questionSubmitNew', {
    path: '/submitquestion',
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