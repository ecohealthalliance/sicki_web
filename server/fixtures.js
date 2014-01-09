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
    disease: [
      {name:'plague', ref: [135,567, 789], expert: 'yes', upvotes: 20, downvotes:15},
      {name:'black death', ref:456, upvotes:4}
    ],
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
      avgCostPerTreatmentInEvent:'',
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
    questionType: 'text',
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
    question: 'host for disease',
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
    questionType: 'text',
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
    questionNumber: 7,
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
    questionNumber: 8,
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
    questionNumber: 9,
    questionTitle: 'endDateISO',
    question: 'event end date',
    questionHelper: 'ISO format yyyymmdd (as much of this info as is available)',
    questionType: 'number',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 10,
    questionTitle: 'hostAge',
    question: 'host age',
    questionHelper: 'age of host',
    questionType: 'dropdown',
    questionDrop: {
      "adult":"Adult", 
      "juvenile":"Juvenile",
      "neonate":"Neonate",
      "unknown":"Unknown"
    },
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 11,
    questionTitle: 'hostUse',
    question: 'host use',
    questionHelper: 'how did the human come in contact with the intermediate host?',
    questionType: 'dropdown',
    questionDrop: {
      "hunted":"Hunted", 
      "eaten":"Eaten", 
      "trade":"Markets or Traded", 
      "none":"None", 
      "unknown":"Unknown"
    },
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 12,
    questionTitle: 'transitionModel',
    question: 'transition model',
    questionHelper: 'how is the pathogen transmitted to humans?',
    questionType: 'dropdown',
    questionDrop: {
      "close":"Close",
      "sexual":"Sexual",
      "vertical":"Vertical",
      "vector":"Vector",
      "unknown":"Unknown"
    },
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 13,
    questionTitle: 'zoonoticType',
    question: 'zoonotic type',
    questionHelper: 'what is the origin of the animal involved?',
    questionType: 'dropdown',
    questionDrop: {
      "zooWild":"Zoonotic from wildlife", 
      "zooDomestic":"Zoonotic from domestic", 
      "zooUnknown":"Zoonotic from unknown origin", 
      "nonZoo":"Non-zoonotic"
    },
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });
    
  Questions.insert({
    questionNumber: 14,
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
    questionNumber: 15,
    questionTitle: 'prevalence',
    question: 'prevalence',
    questionHelper: 'only report if given, do not look up population data',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

  /*TODO*/
  Questions.insert({
    questionNumber: 16,
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
    questionNumber: 17,
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
    questionNumber: 18,
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
    questionType: 'dropdown',
    questionDrop: {
      "serology":"Serology",
      "directBlood":"Direct Blood",
      "directFaecal":"Direct Faecal",
      "directOther":"Direct Other"
    },
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
    questionType: 'dropdown',
    questionDrop: {
      "humanSuscept":"Human susceptibility to infection",
      "antimicrobial":"Antimicrobial agent use",
      "agriculture":"Agricultural industry changes",
      "travelCommerce":"International travel and commerce",
      "warFamine":"War and famine",
      "medicalIndustry":"Medical industry changes",
      "climateWeather":"Climate and weather",
      "demographics":"Human demographics and behaviour",
      "publicHealthBreakdown":"Breakdown of public health measures",
      "bushMeat":"Bush meat",
      "otherIndustries":"Other industries",
      "unspecified":"Unspecified"
    },
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
    questionType: 'dropdown',
    questionDrop: {
      "wild":"Wild",
      "domestic":"Domestic",
      "periDomestic":"Peri-domestic",
      "unknown":"Unknown"
    },
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
    questionNumber: 27,
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
    questionNumber: 28,
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
    questionNumber: 29,
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
    questionNumber: 30,
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
    questionNumber: 31,
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
    questionNumber: 32,
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
    questionNumber: 33,
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
    questionNumber: 34,
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
    questionNumber: 35,
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
    questionNumber: 36,
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
    questionNumber: 37,
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
    questionNumber: 38,
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
    questionNumber: 39,
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
    questionNumber: 40,
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
    questionNumber: 41,
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
    questionNumber: 42,
    questionTitle: 'numHospitalizedInEvent',
    question: 'number hospitalized',
    questionHelper: 'num hosp',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 43,
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
    questionNumber: 44,
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
    questionNumber: 45,
    questionTitle: 'avgLifeExpectancyInCountryAndYearOfEvent',
    question: 'avg. life expectancy in place and year of event',
    questionHelper: 'again world bank useful',
    questionType: 'text',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

  Questions.insert({
    questionNumber: 46,
    questionTitle: 'abstract',
    question: 'brief description of event',
    questionHelper: 'Brief summary',
    questionType: 'textarea',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });
}

if (References.find().count() === 0) {

  References.insert({
    "id": 739,
    "type": "article-journal",
    "title": "Cases of cat-associated human plague in the Western US, 1977-1998",
    "container-title": "Clinical Infectious Diseases",
    "page": "893-900",
    "volume": "30",
    "abstract": "Exposure to cats infected with Yersinia pestis is a recently recognized risk for human plague in the US. Twenty-three cases of cat-associated human plague (5 of which were fatal) occurred in 8 western states from 1977 through 1998, which represent 7.7% of the total 297 cases reported in that period. Bites, scratches, or other contact with infectious materials while handling infected cats resulted in 17 cases of bubonic plague, 1 case of primary septicemic plague, and 5 cases of primary pneumonic plague. The 5 fatal cases were associated with misdiagnosis or delays in seeking treatment, which resulted in overwhelming infection and various manifestations of the systemic inflammatory response syndrome. Unlike infections acquired by flea bites, the occurrence of cat-associated human plague did not increase significantly during summer months. Plague epizootics in rodents also were observed less frequently at exposure sites for cases of cat-associated human plague than at exposure sites for other cases. The risk of cat-associated human plague is likely to increase as residential development continues in areas where plague foci exist in the western US. Enhanced awareness is needed for prompt diagnosis and treatment.",
    "URL": "file:///home/nicopresto/Dropbox/docs/lit/Appendix_150207.Data/PDF/Gage-2000-Cases of cat-associa-0403827456/Gage-2000-Cases of cat-associa.pdf",
    "note": "6",
    "shortTitle": "Cases of cat-associated human plague in the Western US, 1977-1998",
    "author": [
      {
        "family": "Gage",
        "given": "K. L."
      },
      {
        "family": "Dennis",
        "given": "D. T."
      },
      {
        "family": "Orloski",
        "given": "K. A."
      },
      {
        "family": "Ettestad",
        "given": "P."
      },
      {
        "family": "Brown",
        "given": "T. L."
      },
      {
        "family": "Reynolds",
        "given": "P. J."
      },
      {
        "family": "Pape",
        "given": "W. J."
      },
      {
        "family": "Fritz",
        "given": "C. L."
      },
      {
        "family": "Carter",
        "given": "L. G."
      },
      {
        "family": "Stein",
        "given": "J. D."
      }
    ],
    "issued": {
      "date-parts": [
        [
          "2000"
        ]
      ]
    }
  });

  References.insert({
    "id": 525,
    "type": "article-journal",
    "title": "Cat bite transmission of Yersinia pestis infection to man",
    "container-title": "J S Afr Vet Assoc",
    "page": "165-9",
    "volume": "46",
    "abstract": "The transmission of bubonic plague from the kitten of a domestic cat to a man by means of a bite on a finger is described. The human case was complicated by the development of a secondary meningitis, followed, after specific therapy, by protracted recovery. The kitten showed swollen lymph nodes of the head and neck, frothing at the mouth and nostrils, and signs of an acute infectious disease which had a fatal termination. Yersinia pestis was isolated on about the 8th day from the cerebrospinal fluid of the man. The foster mother of the kitten exhibited signs of spinal and cerebral meningitis but recovered following treatment; her serum contained plague antibody levels of 1:512 and 1:1024 on the 22nd and 34th days respectively after the first evidence of illness. Three litter mates of the kitten also died. The outbreak occurred on a farm in the Graaff-Reinet district of the eastern Cape Province, which is situated about 160 km from the nearest known natural plague focus.",
    "note": "2",
    "shortTitle": "Cat bite transmission of Yersinia pestis infection to man",
    "author": [
      {
        "family": "Thornton",
        "given": "D. J."
      },
      {
        "family": "Tustin",
        "given": "R. C."
      },
      {
        "family": "Pienaar",
        "given": "B. J."
      },
      {
        "family": "Pienaar",
        "given": "W. N."
      },
      {
        "family": "Bubb",
        "given": "H. D."
      }
    ],
    "issued": {
      "date-parts": [
        [
          "1975"
        ]
      ]
    }
  });

  References.insert({
    "id": 403,
    "type": "article-journal",
    "title": "Complete genome sequence of a multiple drug resistant Salmonella enterica serovar Typhi CT18",
    "container-title": "Nature",
    "page": "848-52",
    "volume": "413",
    "abstract": "Salmonella enterica serovar Typhi (S. typhi) is the aetiological agent of typhoid fever, a serious invasive bacterial disease of humans with an annual global burden of approximately 16 million cases, leading to 600,000 fatalities. Many S. enterica serovars actively invade the mucosal surface of the intestine but are normally contained in healthy individuals by the local immune defence mechanisms. However, S. typhi has evolved the ability to spread to the deeper tissues of humans, including liver, spleen and bone marrow. Here we have sequenced the 4,809,037-base pair (bp) genome of a S. typhi (CT18) that is resistant to multiple drugs, revealing the presence of hundreds of insertions and deletions compared with the Escherichia coli genome, ranging in size from single genes to large islands. Notably, the genome sequence identifies over two hundred pseudogenes, several corresponding to genes that are known to contribute to virulence in Salmonella typhimurium. This genetic degradation may contribute to the human-restricted host range for S. typhi. CT18 harbours a 218,150-bp multiple-drug-resistance incH1 plasmid (pHCM1), and a 106,516-bp cryptic plasmid (pHCM2), which shows recent common ancestry with a virulence plasmid of Yersinia pestis.",
    "URL": "file:///home/nicopresto/Dropbox/docs/lit/Appendix_150207.Data/PDF/Parkhill-2001-Complete genome sequ-3925884160/Parkhill-2001-Complete genome sequ.pdf",
    "note": "6858",
    "shortTitle": "Complete genome sequence of a multiple drug resistant Salmonella enterica serovar Typhi CT18",
    "author": [
      {
        "family": "Parkhill",
        "given": "J."
      },
      {
        "family": "Dougan",
        "given": "G."
      },
      {
        "family": "James",
        "given": "K. D."
      },
      {
        "family": "Thomson",
        "given": "N. R."
      },
      {
        "family": "Pickard",
        "given": "D."
      },
      {
        "family": "Wain",
        "given": "J."
      },
      {
        "family": "Churcher",
        "given": "C."
      },
      {
        "family": "Mungall",
        "given": "K. L."
      },
      {
        "family": "Bentley",
        "given": "S. D."
      },
      {
        "family": "Holden",
        "given": "M. T."
      },
      {
        "family": "Sebaihia",
        "given": "M."
      },
      {
        "family": "Baker",
        "given": "S."
      },
      {
        "family": "Basham",
        "given": "D."
      },
      {
        "family": "Brooks",
        "given": "K."
      },
      {
        "family": "Chillingworth",
        "given": "T."
      },
      {
        "family": "Connerton",
        "given": "P."
      },
      {
        "family": "Cronin",
        "given": "A."
      },
      {
        "family": "Davis",
        "given": "P."
      },
      {
        "family": "Davies",
        "given": "R. M."
      },
      {
        "family": "Dowd",
        "given": "L."
      },
      {
        "family": "White",
        "given": "N."
      },
      {
        "family": "Farrar",
        "given": "J."
      },
      {
        "family": "Feltwell",
        "given": "T."
      },
      {
        "family": "Hamlin",
        "given": "N."
      },
      {
        "family": "Haque",
        "given": "A."
      },
      {
        "family": "Hien",
        "given": "T. T."
      },
      {
        "family": "Holroyd",
        "given": "S."
      },
      {
        "family": "Jagels",
        "given": "K."
      },
      {
        "family": "Krogh",
        "given": "A."
      },
      {
        "family": "Larsen",
        "given": "T. S."
      },
      {
        "family": "Leather",
        "given": "S."
      },
      {
        "family": "Moule",
        "given": "S."
      },
      {
        "family": "O'Gaora",
        "given": "P."
      },
      {
        "family": "Parry",
        "given": "C."
      },
      {
        "family": "Quail",
        "given": "M."
      },
      {
        "family": "Rutherford",
        "given": "K."
      },
      {
        "family": "Simmonds",
        "given": "M."
      },
      {
        "family": "Skelton",
        "given": "J."
      },
      {
        "family": "Stevens",
        "given": "K."
      },
      {
        "family": "Whitehead",
        "given": "S."
      },
      {
        "family": "Barrell",
        "given": "B. G."
      }
    ],
    "issued": {
      "date-parts": [
        [
          "2001"
        ]
      ]
    }
  });

  References.insert({
    "id": 1827,
    "type": "article-journal",
    "title": "Multidrug resistance in Yersinia pestis mediated by a transferable plasmid",
    "container-title": "N Engl J Med",
    "page": "677-80",
    "volume": "337",
    "URL": "file:///home/nicopresto/Dropbox/docs/lit/Appendix_150207.Data/PDF/Galimand-1997-Multidrug resistance-3239176192/Galimand-1997-Multidrug resistance.pdf",
    "note": "10",
    "shortTitle": "Multidrug resistance in Yersinia pestis mediated by a transferable plasmid",
    "author": [
      {
        "family": "Galimand",
        "given": "M."
      },
      {
        "family": "Guiyoule",
        "given": "A."
      },
      {
        "family": "Gerbaud",
        "given": "G."
      },
      {
        "family": "Rasoamanana",
        "given": "B."
      },
      {
        "family": "Chanteau",
        "given": "S."
      },
      {
        "family": "Carniel",
        "given": "E."
      },
      {
        "family": "Courvalin",
        "given": "P."
      }
    ],
    "issued": {
      "date-parts": [
        [
          "1997"
        ]
      ]
    }
  });

  References.insert({
    "id": 665,
    "type": "article-journal",
    "title": "Occurrence and clinical importance of the pathogenic serogroup O: 5, 27 of Yersinia enterocolitica in the Federal Republic of Germany and methods for its serological and bacteriological identification",
    "container-title": "Zentralbl Bakteriol Mikrobiol Hyg [A]",
    "page": "197-204",
    "volume": "269",
    "abstract": "Despite its world-wide distribution, the pathogenic serogroup O: 5, 27 of Yersinia enterocolitica (Y. e.) has scarcely been considered in the Federal Republic of Germany. In the 1980 to 1986 period, a total of 74 strains from patients was identified at the National Reference Centre for Salmonella, Hamburg. The clinical manifestations of the cases was not different from those associated with Y. e. O: 3 and O: 9 infections. Six out of 8 patients from whom serum samples were available, developed moderate agglutination titres (1:80-1:1280). Only 8 of the 74 strains were negative in in vitro virulence tests. A list of biochemical tests is given which permit a differentiation of the pathogenic serogroup O: 5, 27 from the apathogenic Y. e. O: 5 which is widely distributed in the environment. Serological studies revealed different H antigens in both serogroups. The O antigen factor 27, and a subfactor O: 5(2) which is typical of Y. e. serogroup O: 5, are further differential markers; the production of both factor sera is described. Besides serogroups O: 3 and O: 9, Y. e. O: 5, 27 must be considered as an aetiological agent of human yersiniosis in the Federal Republic of Germany.",
    "call-number": "0005",
    "note": "2",
    "shortTitle": "Occurrence and clinical importance of the pathogenic serogroup O: 5, 27 of Yersinia enterocolitica in the Federal Republic of Germany and methods for its serological and bacteriological identification",
    "author": [
      {
        "family": "Aleksic",
        "given": "S."
      },
      {
        "family": "Bockemuhl",
        "given": "J."
      },
      {
        "family": "Wuthe",
        "given": "H. H."
      },
      {
        "family": "Aleksic",
        "given": "V."
      }
    ],
    "issued": {
      "date-parts": [
        [
          "1988"
        ]
      ]
    }
  });

  References.insert({
    "id": 2816,
    "type": "article-journal",
    "title": "Plague in camels and goats: their role in human epidemics",
    "container-title": "Journal of Infectious Diseases",
    "page": "724-726",
    "volume": "141",
    "abstract": "In 1976, in a small, remote Libyan village, one apparently sick camel was slaughtered and skinned, and the camel meat was distributed for human comsumption. A few days later, 15 villagers suffered a severe febrile illness. Of the five individuals who had participated in the killing and dispensation of the camel, all were dead within four days. When samples of serum from nine of the remaining patients were examined, seven were found to be positive for plague as determined by the passive hemagglutination test. Another six persons became ill after killing two goats, and the serum of one goat contained antibodies to Yersinia pestis. Because all of the remaining patients except one were treated early enough, they recovered. These incidents confirm previous reports that the camel and the goat are susceptible to naturally occurring plague infection and have a significant role in the dissemination of human plague.",
    "URL": "file:///home/nicopresto/Dropbox/docs/lit/Appendix_150207.Data/PDF/Christie-1980-Plague in camels and-3205580032/Christie-1980-Plague in camels and.pdf",
    "call-number": "0059",
    "note": "6",
    "shortTitle": "Plague in camels and goats: their role in human epidemics",
    "author": [
      {
        "family": "Christie",
        "given": "A. B."
      },
      {
        "family": "Chen",
        "given": "T. H."
      },
      {
        "family": "Elberg",
        "given": "S. S."
      }
    ],
    "issued": {
      "date-parts": [
        [
          "1980"
        ]
      ]
    }
  });

  References.insert({
    "id": 2171,
    "type": "article-journal",
    "title": "Studies on Yersinia enterocolitica with special reference to bacterial diagnosis and occurrence in human acute enteric disease",
    "container-title": "Acta Pathologica et Microbiologica Scandinavica",
    "page": "5",
    "volume": "206, Suppl",
    "shortTitle": "Studies on Yersinia enterocolitica with special reference to bacterial diagnosis and occurrence in human acute enteric disease",
    "author": [
      {
        "family": "Nilehn",
        "given": "B."
      }
    ],
    "issued": {
      "date-parts": [
        [
          "1969"
        ]
      ]
    }
  });

  References.insert({
    "id": 3128,
    "type": "article-journal",
    "title": "Surveillance de la sensibilité aux antibiotiques des souches de Yersinia pestis à Madagascar de 1989 à 1995",
    "container-title": "Arch Inst Pasteur Madagascar",
    "page": "108-110",
    "volume": "62",
    "shortTitle": "Surveillance de la sensibilité aux antibiotiques des souches de Yersinia pestis à Madagascar de 1989 à 1995",
    "author": [
      {
        "family": "Rasoamanana",
        "given": "B."
      },
      {
        "family": "Leroy",
        "given": "F."
      },
      {
        "family": "Raharimanana",
        "given": "C."
      },
      {
        "family": "Chanteau",
        "given": "S."
      }
    ],
    "issued": {
      "date-parts": [
        [
          "1995"
        ]
      ]
    }
  });

}

