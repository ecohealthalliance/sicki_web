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
    eventName: 'Yersinia pestis (Al-Azzizat, Libya, 1976)',
    pathogens:{ 
      pathogenDrugResistance:'',
      pathogenReportedName:'',
      pathogenClass:'',
      pathogenFamily:'',
      pathogenSpecies:'',
      pathogenAuthority:'',
      pathogenTaxOrder:'',
      pathogenGenus:'',
      pathogenSubSpecies:''
      },
    location:{
      locationLocationName:'Al-Azzizat',
      locationPlaceName:'',
      locationLatitude:'',
      locationLongitude:'',
      locationCity:'',
      locationSubnationalRegion:'northeast Libya',
      locationNation:'Libya',
      locationContinent:'Africa'
      },
    host:{
      hostReportedName:'camel',
      hostClass:'mammalia',
      hostFamily:'Camelidae',
      hostSpecies:'',
      hostAuthority:'',
      hostTaxOrder:'',
      hostGenus:'Camelus',
      hostSubSpecies:''
      },
    disease: 'plague',
    startDate: '1976-02-26',
    startDateISO:'1976-02-26',
    endDate:'',
    endDateISO:'',
    hostAge:'',
    hostUse:'eaten',
    transitionModel:'close: 4 patients had skinned the camel, 1 dealer who distrubuted meat, 7 had eaten or handled camel meat, 1 daughter of meal dealer',
    zoonoticType:'zoonotic from wildlife',
    numberInfected:13,
    prevalence:'6% of the village (13 of 215 people)',
    duration:'',
    symptomsReported:'febrile illness, buboes',
    hostSex:'',
    sampleType:'serology',
    driver:'',
    eid:1,
    eidCategory:'expanding host range: \"these incidents confirm previous reports that the camel and the goat are susceptible to naturally occurring plague infection and have a significant role in the dissemination of human plague\"',
    domesticationStatus:'peri domestic',
    numberOfDeaths:5,
    contact:'',
    notes:'',
    economics:{
      avgAgeOfInfected:'adult ',
      avgAgeDeath:'adult',
      tradeTravelRestrictions:5,
      numHospitalizedInEvent:15,
      avgCosPerTreatmentInEvent:'',
      perCapitaNationalGDPInYearOfEvent:'',
      avgLifeExpectancyInCountryAndYearOfEvent:61.5,
      },
    year: 1976,
    url: 'http://en.wikipedia.org/wiki/Spanish_flu',
    x: 0.7589090881347656,
    y: 0.372,
    title: "party on",
    abstract: "An outbreak of plague caused by Yersinia pestis began on February 26, 1976 in Al-Azzizat, Libya.  All 13 patients had direct or indirect contact with infected camel meat.  Patients presented with febrile illness and buboes.  A total of five patients died.  This event proved that camels are in fact susceptible to plague and can serve as natural hosts, showing an expansion of host range.  There is no clear driver to this event (135).",
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
    body: 'Carla: do we have more info about the drivers of this EID'
  });

  Comments.insert({
    entryId: eidOneId,
    userId: carla._id,
    author: carla.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'Nico: we will need to follow-up with the primary research'
  });

  var eidOneId = Entries.insert({
    qid: 456,
    district: 'solola',
    village: 'jucanya',
    eidID: 2,
    outbreak: 'Oropouche virus (Sangre Grande, Trinidad, 1955)',
    location: 'Sangre Grande, Trinidad',
    year: 1955,
    host: 'primate',
    eid: 'deforestation',
    url: 'http://en.wikipedia.org/wiki/Henipavirus#Nipah_virus',
    x: 0.2789090881347656, 
    y: 0.782, 
    title: 'party on',
    deaths: 1,
    abstract: 'A 24-year old male charcoal burner acquired Oropouche fever on September 25, 1955 in the Melajo Forest outside of Sangre Grande, Trinidad.  Initial attempts at determining host and vector species for this pathogen did not provide definitive answers but suggested that it was a vector-borne (mosquito) pathogen present in various primate hosts.  The patient presented with nonspecific symptoms of fever, backache, and cough that lasted only three days and resolved on their own.  Recent governmental deforestation programs allowed charcoal burners to reside near their work site in open huts for long periods of time, increasing exposure probability.  This event marks the evolution of an existing organism that was determined to be a novel species, Oropouche virus (46)',
    userId: carla._id,
    author: carla.profile.name,
    submitted: now - 10 * 3600 * 1000,
    commentsCount: 0,
    upvoters: [], votes: 0
  });

  Comments.insert({
    entryId: eidOneId,
    userId: kris._id,
    author: kris.profile.name,
    submitted: now - 3 * 3600 * 1000,
    body: 'Nico: does this differ from the Hotspots statistic?'
  });

  Comments.insert({
    entryId: eidOneId,
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'Kris: yes, we will need more follow-up'
  });

  Entries.insert({
    qid: 789,
    district: 'solola',
    village: 'jucanya',
    eidID: 3,
    outbreak: 'Human Immunodeficiency Virus 2 (Guinea Bissau, 1960)',
    location: 'Guinea Bissau',
    year: 1960,
    host: 'primate',
    eid: 'conflict',
    url: 'http://en.wikipedia.org/wiki/E_coli',
    x: 0.5689090881347656, 
    y: 0.662, 
    title: "party on",
    deaths: 2,
    abstract: "In 1978, a 43 year old male living in Portugal died of complications from numerous opportunistic infections. Reportedly, the patient presented with, \" (a) history of intermittent fever for 4 years and diarrhea, weight loss, and abdominal pain for 2 years ... was grossly wasted ... had an enlarged liver ... and had fluctuating hepatitis with episodes of fever, hepatosplenomegaly, lymphadenopathy and jaundice\" (104).  In 1987, HIV-2 was identified in serum samples taken from the patient during his hospitalization in 1978, making this the earliest confirmed case of HIV-2 infection. The patient had lived in Guinea-Bissau, a former Portuguese colony, from 1956 to 1966, a country identified with widespread emergence of HIV-2 infection (376, 339). It is possible that destabilization of the region, because of the Guinea-Bissau war of independence (1963-1974), coupled with possible HIV-2 infection of the blood supply during that time period drove the emergence of HIV-2 (339). ",
    userId: zach._id,
    author: zach.profile.name,
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
    questionHelper: 'unique number for EID event',
    questionType: 'number',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 9 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 1,
    questionTitle: 'eventName',
    question: 'event name',
    questionHelper: 'events are always referred to by Pathogen (Location, year) ex. Brachiola vesicularum (Czech Republic, 1998)',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 9 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 2,
    questionTitle: 'pathogens',
    question: 'pathogen names',
    questionHelper: 'names of pathogens implicated',
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
    question: 'location',
    questionHelper: 'location for EID event',
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
    question: 'host for diease',
    questionHelper: 'hosts implicated in the event',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 9 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 5,
    questionTitle: 'disease',
    question: 'disease',
    questionHelper: 'as it is referred to in the literature about the event, not necessarily what it is referred to now',
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
    question: 'start date',
    questionHelper: 'when did event start',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 9 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 8,
    questionTitle: 'startDateISO',
    question: 'start Date ISO',
    questionHelper: 'event start date in ISO format yyyymmdd (as much of this info as is available)',
    questionType: 'number',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 9 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 9,
    questionTitle: 'endDate',
    question: 'end date for event',
    questionHelper: 'date event ended',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 10,
    questionTitle: 'endDateISO',
    question: 'event end date in ISO format yyyymmdd (as much of this info as is available)',
    questionType: 'number',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 11,
    questionTitle: 'hostAge',
    question: 'host age',
    questionHelper: 'age of host',
    questionType: 'number',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 12,
    questionTitle: 'hostUse',
    question: 'host use',
    questionHelper: 'how did the human come in contact with the intermediate host?',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 13,
    questionTitle: 'transitionModel',
    question: 'transition model',
    questionHelper: 'how is the pathogen transmitted to humans?',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 14,
    questionTitle: 'zoonoticType',
    question: 'zoonotic type',
    questionHelper: 'what is the origin of the animal involved?',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });
    
  Questions.insert({
    questionNumber: 15,
    questionTitle: 'numberInfected',
    question: 'number infected',
    questionHelper: 'How many infected?',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 16,
    questionTitle: 'prevalence',
    question: 'prevalence',
    questionHelper: 'only report if given, do not look up population data',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 17,
    questionTitle: 'duration',
    question: 'duration',
    questionHelper: 'how long did this specific event last?',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 18,
    questionTitle: 'symptomsReported',
    question: 'symptoms reported',
    questionHelper: 'use direct language and include frequency of symptom among patients if its reported (e.g. fever (100%), malaise (85%)...)',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 19,
    questionTitle: 'hostSex',
    question: 'host sex',
    questionHelper: 'Sex of host',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 19,
    questionTitle: 'sampleType',
    question: 'sample type',
    questionHelper: 'Type of sample',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });
   
  Questions.insert({
    questionNumber: 20,
    questionTitle: 'driver',
    question: 'driver',
    questionHelper: 'what caused this emergence event? fill in from drop down menu, but include direct language',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });
   
  Questions.insert({
    questionNumber: 21,
    questionTitle: 'eidCategory',
    question: 'EID category',
    questionHelper: 'why is this considered an EID?',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 22,
    questionTitle: 'domesticationStatus',
    question: 'domestication status',
    questionHelper: 'domestication status of non-human host',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });
    
  Questions.insert({
    questionNumber: 23,
    questionTitle: 'numberOfDeaths',
    question: 'number of deaths',
    questionHelper: 'number of deaths',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 24,
    questionTitle: 'contact',
    question: 'contact',
    questionHelper: 'any contact info for individuals involved in event or experts in the particular field',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 25,
    questionTitle: 'notes',
    question: 'notes',
    questionHelper: 'any other info you feel relevant to include that doesn’t fit into a category (show discretion- most of the things we are interested in have a category)',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 26,
    questionTitle: 'pathogenDrugResistance',
    question: 'pathogen drug resistance',
    questionHelper: 'use the 1\=yes, 0\=no system. If one, include what it is resistant to',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 26,
    questionTitle: 'pathogenReportedName',
    question: 'pathogen reported name',
    questionHelper: 'how is the pathogen reported in initial literature \- often this is different from current taxonomic classifications or the pathogen is unknown at time of event (e.g. \"a novel Rickettsia species\") ',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

/* pathogen tab */

  Questions.insert({
    questionNumber: 27,
    questionTitle: 'taxonomy',
    question: 'group of taxonomy questions',
    questionHelper: 'pathogenClass, pathogenFamily, pathogenFamily, pathogenSpecies, pathogenAuthority, pathogenTaxOrder, pathogenGenus, pathogenSubSpecies, pathogen_class etc. (NCBI Taxonomy Browser is a useful resource for this and also gives \"pathogen authority\" (who named the pathogen and when)',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

/* host tab */

  Questions.insert({
    questionNumber: 28,
    questionTitle: 'host',
    question: 'group of host questions',
    questionHelper: 'hostReportedName, hostClass, hostFamily, hostSpecies, hostAuthority, hostTaxOrder, hostGenus, hostSubSpecies, all host taxonomy, self explanatory. NCBI Taxonomy Browser useful',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

/* Taxonomy tab */

  Questions.insert({
    questionNumber: 27,
    questionTitle: 'taxonomy',
    question: 'group of taxonomy questions',
    questionHelper: 'pathogenClass, pathogenFamily, pathogenFamily, pathogenSpecies, pathogenAuthority, pathogenTaxOrder, pathogenGenus, pathogenSubSpecies, pathogen_class etc. (NCBI Taxonomy Browser is a useful resource for this and also gives \"pathogen authority\" (who named the pathogen and when)',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });
  
  /* Location tab */

  Questions.insert({
    questionNumber: 28,
    questionTitle: 'locationLocationName',
    question: 'location name',
    questionHelper: 'what is the reported location name',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 29,
    questionTitle: 'locationPlaceName',
    question: 'location place name',
    questionHelper: 'can be more specific such as name as hospital or name of village. any direct language used in report to describe location',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 30,
    questionTitle: 'locationLatitude',
    question: 'latitude',
    questionHelper: 'can be more specific such as name as hospital or name of village. any direct language used in report to describe location',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 31,
    questionTitle: 'locationLongitude',
    question: 'longitude',
    questionHelper: 'only use if reported in literature, do not look it up',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });
    
  Questions.insert({
    questionNumber: 32,
    questionTitle: 'locationCity',
    question: 'locationCity',
    questionHelper: 'only use if reported in literature, do not look it up',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 33,
    questionTitle: 'locationSubnationalRegion',
    question: 'location subnational region',
    questionHelper: 'e.g. Southern France or Wisconsin',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 34,
    questionTitle: 'locationNation',
    question: 'location nation',
    questionHelper: 'can use background knowledge, doesn’t need to be directly reported',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 35,
    questionTitle: 'locationContinent',
    question: 'location continent',
    questionHelper: 'can use background knowledge, doesn’t need to be directly reported',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

/* Economics Tab */
  Questions.insert({
    questionNumber: 36,
    questionTitle: 'avgAgeOfInfected',
    question: 'average age of infected',
    questionHelper: 'only use if reported in literature, do not look it up',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });
 
  Questions.insert({
    questionNumber: 37,
    questionTitle: 'avgAgeDeath',
    question: 'average age of death',
    questionHelper: '',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 38,
    questionTitle: 'tradeTravelRestrictions',
    question: ' trade and travel restrictions',
    questionHelper: 'was there any restriction of people or goods as a result of this disease event? (does not include quarantine of patients)',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });
 
  Questions.insert({
    questionNumber: 39,
    questionTitle: 'numHospitalizedInEvent',
    question: '# hospitalized',
    questionHelper: 'num hosp',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 40,
    questionTitle: 'avgCosPerTreatmentInEvent',
    question: 'avg. cost of treatment',
    questionHelper: 'again, only if reported, do not try to figure out',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 41,
    questionTitle: 'perCapitaNationalGDPInYearOfEvent',
    question: 'per capita GDP in place and year of event. ',
    questionHelper: 'data.worldbank.org useful',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 42,
    questionTitle: 'avgLifeExpectancyInCountryAndYearOfEvent',
    question: 'avg. life expectancy   in place and year of event',
    questionHelper: 'again world bank useful',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });
}

