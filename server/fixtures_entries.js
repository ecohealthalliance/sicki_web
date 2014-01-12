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
  "eidID" : "1",
  "author" : "Tilchin",
  "characteristics" : {
    "numberInfected" : {
      "value" : "45",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.206634,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : "512"
    },
    "symptomsReported" : {
      "value" : "no symptoms- just confirmed isolate of bacteria",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.206644,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : "512"
    },
    "numberOfDeaths" : {
      "value" : "35",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.206646,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : "512"
    },
    "prevalence" : {
      "value" : "in patients: 1993/01-1993/06= 1.26/1000, 1993/07-1993/12= 6.62/1,000, 1994/01-06= 8.15, 1993/07-12= 6.28. average staff prevalence= 11%",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.206642,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : "512"
    }
  },
    "abstract" : {
    "value" : "An outbreak of gentamicin resistant Acinetobacter baumannii infection occurred in 35 patients and ten staff at the intensive care unit of Sir Charles Gairdner Hospital in Perth, Australia.  In a retrospective study it was determined that incidence rose from 1.26 cases per 1000 in January to June of 1993, to 6.62 cases per 1000 for July to December, 1993.  The infection manifested differently among patients with the most common cases comprising of pneumonia, central venous catheter infection, and urinary tract infection.  This event was driven by human susceptibility to infection and antimicrobial agent use, and represents a new drug resistance and increase in incidence.",
    "author" : "Tilchin",
    "userId" : 1,
    "submitted" : 1389508081.206413,
    "rank" : {
      "upvotes" : 0,
      "downvotes" : 0,
      "eha" : true
    },
    "ref" : "512"
  },

  "userId" : 1,
  "locations" : {
    "placeName" : {
      "value" : "Intensive Care Unit of Sir Charles Gairdner Hospital",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.206552,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : "512.0"
    },
    "name" : {
      "value" : "Nedlands",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.206535,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : "512.0"
    },
    "city" : {
      "value" : "Nedlands",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.206562,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : "512.0"
    },
    "latitude" : {
      "value" : "",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.206559,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : ""
    },
    "subnationalRegion" : {
      "value" : "Western Australia",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.206565,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : "512.0"
    },
    "continent" : {
      "value" : "Australia",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.206568,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : "512.0"
    },
    "longitude" : {
      "value" : "",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.206561,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : ""
    },
    "nation" : {
      "value" : "Australia",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.206567,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : "512.0"
    }
  },
  "rank" : {
    "eha" : true
  },

  "eidCategory" : {
    "value" : "increased incidence, new drug resistance",
    "author" : "Tilchin",
    "userId" : 1,
    "submitted" : 1389508081.2064,
    "rank" : {
      "upvotes" : 0,
      "downvotes" : 0,
      "eha" : true
    },
    "ref" : "512"
  },
  "contacts" : {
    "affiliation" : "",
    "blob" : {
      "ref" : "",
      "value" : ""
    },
    "firstName" : "",
    "author" : "Tilchin",
    "submitted" : 1389508081.206649,
    "lastName" : "",
    "userID" : "",
    "email" : "",
    "rank" : {
      "upvotes" : 0,
      "downvotes" : 0,
      "eha" : true
    },
    "userId" : 1
  },
  "sampleType" : {
    "value" : "There were five different primary initial sites of isolation of GRAB in the 45 cases: sputum or other respiratory tract specimen (including bronchial alveolar lavage) (35 cases=77%); wounds (five cases=11%); central venous catheter tips (three cases=6%); blood (one case=2%); and urine (one case=2%).",
    "author" : "Tilchin",
    "userId" : 1,
    "submitted" : 1389508081.206432,
    "rank" : {
      "upvotes" : 0,
      "downvotes" : 0,
      "eha" : true
    },
    "ref" : "512"
  },
  "eventName" : "Acinetobacter baumannii gentamycin-res (Australia, 1993)",
  "upvotes" : 0,
  "downvotes" : 0,
  "driver" : {
    "value" : "human susceptibility to infection, antimicrobial agent use",
    "author" : "Tilchin",
    "userId" : 1,
    "submitted" : 1389508081.206434,
    "rank" : {
      "upvotes" : 0,
      "downvotes" : 0,
      "eha" : true
    },
    "ref" : "512, Jones et al."
  },
  "transmissionModel" : {
    "value" : "close: \"Carriage of GRAB on staff hands was demonstrated as the most likely source of infection.\"",
    "author" : "Tilchin",
    "userId" : 1,
    "submitted" : 1389508081.206423,
    "rank" : {
      "upvotes" : 0,
      "downvotes" : 0,
      "eha" : true
    },
    "ref" : "512"
  },
  "pathogens" : {
    "genus" : {
      "value" : "Acinetobacter",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.20652,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : "http://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=470&lvl=3&lin=f&keep=1&srchmode=1&unlock"
    },
    "taxOrder" : {
      "value" : "Pseudomonadales",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.206518,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : "http://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=470&lvl=3&lin=f&keep=1&srchmode=1&unlock"
    },
    "family" : {
      "value" : "Moraxellaceae",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.206498,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : "http://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=470&lvl=3&lin=f&keep=1&srchmode=1&unlock"
    },
    "subSpecies" : {
      "value" : "",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.206522,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : ""
    },
    "drugResistance" : {
      "value" : "1.0",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.206479,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : ""
    },
    "reportedName" : {
      "value" : "",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.206482,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : ""
    },
    "class" : {
      "value" : "Gammaproteobacteria",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.206495,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : "http://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=470&lvl=3&lin=f&keep=1&srchmode=1&unlock"
    },
    "authority" : {
      "value" : "",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.206511,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : ""
    },
    "species" : {
      "value" : "Acinetobacter baumannii multiple drug-res",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.206508,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : "Jones et al."
    }
  },
  "dates" : {
    "duration" : {
      "value" : "retrospective study 2 years, median ICU stay 16 days",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.206631,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : "512"
    },
    "startDate" : {
      "submitted" : 1389508081.206627,
      "author" : "Tilchin",
      "userId" : 1,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "formValue" : "1993-01-01",
      "value" : "1993-01-01",
      "ref" : "512"
    },
    "endDate" : {
      "submitted" : 1389508081.206629,
      "author" : "Tilchin",
      "userId" : 1,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "formValue" : "1994-12-31",
      "value" : "1994-12-31",
      "ref" : "512"
    }
  },
  "zoonoticType" : {
    "value" : "non-zoonotic",
    "author" : "Tilchin",
    "userId" : 1,
    "submitted" : 1389508081.20643,
    "rank" : {
      "upvotes" : 0,
      "downvotes" : 0,
      "eha" : true
    },
    "ref" : "512"
  },
  "notes" : {
    "value" : "",
    "author" : "Tilchin",
    "userId" : 1,
    "submitted" : 1389508081.206421,
    "rank" : {
      "upvotes" : 0,
      "downvotes" : 0,
      "eha" : true
    },
    "ref" : ""
  },
  "economics" : {
    "avgLifeExpectEventCountryYear" : {
      "value" : "77.9",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.206672,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : "data.worldbank.org"
    },
    "avgAgeDeath" : {
      "value" : "no death",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.206653,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : "512.0"
    },
    "perCapitaNatGDPEventYear" : {
      "value" : "17678.0",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.20667,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : "data.worldbank.org"
    },
    "avgAgeInfected" : {
      "value" : "51.0",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.206651,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : "512.0"
    },
    "tradeTravelRestrictions" : {
      "value" : "0.0",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.20666,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : "512.0"
    },
    "avgCostPerTreatment" : {
      "value" : "",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.206663,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : ""
    },
    "numHospitalized" : {
      "value" : "45.0",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.206661,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : "512.0"
    }
  },
  "disease" : {
    "value" : "\"Among 45 cases...27 cases met the CDC criteria for infection..pneumonia (74%), bacteremia (7%), CVC related infections (22%), empyema (4%), urinary tract infection (11%), and wound infection (4%)\"",
    "author" : "Tilchin",
    "userId" : 1,
    "submitted" : 1389508081.206391,
    "rank" : {
      "upvotes" : 0,
      "downvotes" : 0,
      "eha" : true
    },
    "ref" : "512"
  },
  "submitted" : 1389508081.206722,
  "hosts" : {
    "hostUse" : {
      "value" : "providing hospital care",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.206583,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : "512"
    },
    "family" : {
      "value" : "Hominidae",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.206599,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : "NIH"
    },
    "authority" : {
      "value" : "",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.206603,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : ""
    },
    "sex" : {
      "value" : "",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.206576,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : ""
    },
    "reportedName" : {
      "value" : "human",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.20659,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : "512.0"
    },
    "class" : {
      "value" : "mammalia",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.206597,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : "NIH"
    },
    "domesticationStatus" : {
      "value" : "",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.206578,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : ""
    },
    "species" : {
      "value" : "Homo sapiens",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.206601,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : "NIH"
    },
    "age" : {
      "value" : "average 51 yr",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.206581,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : "512"
    },
    "subSpecies" : {
      "value" : "",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.206619,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : ""
    },
    "genus" : {
      "value" : "Homo",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.206616,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : "NIH"
    },
    "taxOrder" : {
      "value" : "Primates",
      "author" : "Tilchin",
      "userId" : 1,
      "submitted" : 1389508081.206605,
      "rank" : {
        "upvotes" : 0,
        "downvotes" : 0,
        "eha" : true
      },
      "ref" : "NIH"
    }
  },
  "eid" : {
    "value" : "1",
    "author" : "Tilchin",
    "userId" : 1,
    "submitted" : 1389508081.206395,
    "rank" : {
      "upvotes" : 0,
      "downvotes" : 0,
      "eha" : true
    },
    "ref" : "512"
  },
  "commentsCount" : 0

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
    eidID: 2,
    eventName: 'Oropouche virus (Sangre Grande, Trinidad, 1955)',
    disease: [
      {name:'Oropouche virus', ref: [135,567, 789], automate: false, expert: true, upvotes: 20, downvotes:15},
      {name:'Orophouch', ref:456, upvotes:4}
    ],
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

} /*end if*/
