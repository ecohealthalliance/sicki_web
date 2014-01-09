
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
