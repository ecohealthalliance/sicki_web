// Fixture data 
if (Entries.find().count() === 0) {
  var now = new Date().getTime();

  // create users
  var nicoId = Meteor.users.insert({
    profile: { name: 'nicopresto' }
  });
  var nico = Meteor.users.findOne(nicoId);

  var carlaId = Meteor.users.insert({
    profile: { name: 'ctilchin' }
  });
  var carla = Meteor.users.findOne(carlaId);

  var zachId = Meteor.users.insert({
    profile: { name: 'zgold' }
  });
  var zach = Meteor.users.findOne(zachId);

  var sajanId = Meteor.users.insert({
    profile: { name: 'sravindran' }
  });
  var sajan = Meteor.users.findOne(sajanId);

  var sarahId = Meteor.users.insert({
    profile: { name: 'selwood' }
  });
  var sarah = Meteor.users.findOne(sarahId);

  var krisId = Meteor.users.insert({
    profile: { name: 'kmurray' }
  });
  var kris = Meteor.users.findOne(krisId);

  var eidOneId = Entries.insert({
    qid: 123,
    district: 'solola',
    village: 'jucanya',
    eidID: 1,
    outbreak: 'Spanish Flu',
    location: 'Global',
    year: 2013,
    url: 'http://en.wikipedia.org/wiki/Spanish_flu',
    host: 'human',
    eid: 'poverty',
    x: 0.7589090881347656, 
    y: 0.372, 
    title: "party on",
    deaths: 10,
    abstract: "Twelve cases of abscesses due to Mycobacterium chelonae were documented in West Hartlepool, England, in 1966.  All patients had received histamine injections from the same clinic that used multi dose containers for injection fluids.  These containers were contaminated, and patients presented with painful abscesses that varied in size and shape but all discharged a thin fluid.  This event was driven by antimicrobial agent use and a breakdown of public health measures that should ensure sterile vaccine practices.  This marked the evolution of an existing organism, but the displayed antimicrobial resistance suggested that the pathogen had been circulating in the environment for a significant amount of time.",
    userId: carla._id,
    author: carla.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 2
  });

  Comments.insert({
    entryId: eidOneId,
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 3 * 3600 * 1000,
    body: 'Carla: are we sure about the year of this EID'
  });

  Comments.insert({
    entryId: eidOneId,
    userId: carla._id,
    author: carla.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'Nico: yes I checked the original reference'
  });

  Entries.insert({
    qid: 456,
    district: 'solola',
    village: 'jucanya',
    eidID: 2,
    outbreak: 'Nipah Outbreak',
    location: 'Malaysia',
    year: 2012,
    host: 'Bat',
    eid: 'habitat change',
    url: 'http://en.wikipedia.org/wiki/Henipavirus#Nipah_virus',
    x: 0.2789090881347656, 
    y: 0.782, 
    title: "party on",
    deaths: 1,
    userId: zach._id,
    author: zach.profile.name,
    submitted: now - 10 * 3600 * 1000,
    commentsCount: 0,
    upvoters: [], votes: 0
  });

  Entries.insert({
    qid: 789,
    district: 'solola',
    village: 'jucanya',
    eidID: 3,
    outbreak: 'E Coli',
    location: 'Canada',
    year: 2013,
    host: 'Cattle',
    eid: 'land use',
    url: 'http://en.wikipedia.org/wiki/E_coli',
    x: 0.5689090881347656, 
    y: 0.662, 
    title: "party on",
    deaths: 2,
    userId: kris._id,
    author: kris.profile.name,
    submitted: now - 12 * 3600 * 1000,
    commentsCount: 0,
    upvoters: [], votes: 0
  });
}

if (Questions.find().count() === 0) {

  var nicoId = Meteor.users.insert({
    profile: { name: 'nicopresto' }
  });
  var nico = Meteor.users.findOne(nicoId);

  Questions.insert({
    questionNumber: 0,
    questionTitle: 'eidID',
    question: 'EID Identification (eidID) number',
    questionHelper: 'Unique number for EID event',
    questionType: 'number',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 9 * 3600 * 1000,
    commentsCount: 0
  });


  Questions.insert({
    questionNumber: 1,
    questionTitle: 'eventName',
    question: 'Unique name for EID event',
    questionHelper: 'Give the event a unique name',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 9 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 2,
    questionTitle: 'pathogens',
    question: 'Pathogen names',
    questionHelper: 'Names of pathogens implicated',
    questionType: 'dropdown',
    questionDrop: '{"pathA":"Pathogen A", "pathB":"PathogenB"}',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 9 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 3,
    questionTitle: 'location',
    question: 'Location',
    questionHelper: 'Location for EID event',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 9 * 3600 * 1000,
    commentsCount: 0
  });

/* convert this to datetime */
  Questions.insert({
    questionNumber: 4,
    questionTitle: 'host',
    question: 'Host for diease',
    questionHelper: 'Hosts implicated in the event',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 9 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 5,
    questionTitle: 'disease',
    question: 'Name of disease',
    questionHelper: 'Name of disease',
    questionType: 'dropdown',
    questionDrop: '{"diseaseA":"Disease A", "diseaseB":"Disease B"}',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 9 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 6,
    questionTitle: 'startDate',
    question: 'Event start sate',
    questionHelper: 'When did event start',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 9 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 8,
    questionTitle: 'startDateISO',
    question: 'Start Date ISO',
    questionHelper: 'Date in ISO format yyyymmdd',
    questionType: 'number',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 9 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 9,
    questionTitle: 'endDate',
    question: 'End date for event',
    questionHelper: 'Date event ended',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 10,
    questionTitle: 'endDateISO',
    question: 'Date event ended in ISO format',
    questionType: 'number',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 11,
    questionTitle: 'hostAge',
    question: 'Age of host',
    questionHelper: 'Age of host',
    questionType: 'number',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

    Questions.insert({
    questionNumber: 12,
    questionTitle: 'hostUse',
    question: 'Use of host',
    questionHelper: 'Host use',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });
}