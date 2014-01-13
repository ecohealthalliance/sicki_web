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

var sickiOneId = Entries.insert({
  "characteristics" : {
    "numberInfected" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "512",
      "val" : "45"
    },
    "symptomsReported" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "512",
      "val" : "no symptoms- just confirmed isolate of bacteria"
    },
    "numberOfDeaths" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "512",
      "val" : "0"
    },
    "prevalence" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "512",
      "val" : "in patients: 1993/01-1993/06= 1.26/1000, 1993/07-1993/12= 6.62/1,000, 1994/01-06= 8.15, 1993/07-12= 6.28. average staff prevalence= 11%"
    }
  },
  "refs" : [ ],
  "locations" : {
    "placeName" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "512.0",
      "val" : "Intensive Care Unit of Sir Charles Gairdner Hospital"
    },
    "name" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "512.0",
      "val" : "Nedlands"
    },
    "city" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "512.0",
      "val" : "Nedlands"
    },
    "latitude" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "",
      "val" : ""
    },
    "subnationalRegion" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "512.0",
      "val" : "Western Australia"
    },
    "continent" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "512.0",
      "val" : "Australia"
    },
    "longitude" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "",
      "val" : ""
    },
    "nation" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "512.0",
      "val" : "Australia"
    }
  },
  "meta" : {
    "reviewer" : "Tilchin",
    "votes" : {
      "down" : 0,
      "up" : 0
    },
    "userId" : 0,
    "submitted" : 1389571746.934933,
    "rank" : {
      "auto" : false,
      "top" : true,
      "expert" : false,
      "eha" : true
    }
  },
  "eidCategory" : {
    "meta" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : 1389571746.895151,
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    },
    "ref" : "512",
    "val" : "increased incidence, new drug resistance"
  },
  "sickiID" : {
    "meta" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : 1389571746.895151,
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    },
    "ref" : "jones",
    "val" : "1.0"
  },
  "contacts" : {
    "firstName" : "",
    "lastName" : "",
    "userID" : "",
    "affiliation" : "",
    "meta" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : 1389571746.895151,
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    },
    "blob" : {
      "ref" : "",
      "val" : ""
    },
    "email" : ""
  },
  "sampleType" : {
    "meta" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : 1389571746.895151,
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    },
    "ref" : "512",
    "val" : "There were five different primary initial sites of isolation of GRAB in the 45 cases: sputum or other respiratory tract specimen (including bronchial alveolar lavage) (35 cases=77%); wounds (five cases=11%); central venous catheter tips (three cases=6%); blood (one case=2%); and urine (one case=2%)."
  },
  "eventName" : {
    "meta" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : 1389571746.895151,
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    },
    "ref" : "jones",
    "val" : "Acinetobacter baumannii gentamycin-res (Australia, 1993)"
  },
  "abstract" : {
    "meta" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : 1389571746.895151,
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    },
    "ref" : "512",
    "val" : "An outbreak of gentamicin resistant Acinetobacter baumannii infection occurred in 35 patients and ten staff at the intensive care unit of Sir Charles Gairdner Hospital in Perth, Australia.  In a retrospective study it was determined that incidence rose from 1.26 cases per 1000 in January to June of 1993, to 6.62 cases per 1000 for July to December, 1993.  The infection manifested differently among patients with the most common cases comprising of pneumonia, central venous catheter infection, and urinary tract infection.  This event was driven by human susceptibility to infection and antimicrobial agent use, and represents a new drug resistance and increase in incidence."
  },
  "driver" : {
    "meta" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : 1389571746.895151,
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    },
    "ref" : "512, Jones et al.",
    "val" : "human susceptibility to infection, antimicrobial agent use"
  },
  "refsCount" : 0,
  "transmissionModel" : {
    "meta" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : 1389571746.895151,
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    },
    "ref" : "512",
    "val" : "close: \"Carriage of GRAB on staff hands was demonstrated as the most likely source of infection.\""
  },
  "pathogens" : {
    "genus" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "http://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=470&lvl=3&lin=f&keep=1&srchmode=1&unlock",
      "val" : "Acinetobacter"
    },
    "taxOrder" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "http://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=470&lvl=3&lin=f&keep=1&srchmode=1&unlock",
      "val" : "Pseudomonadales"
    },
    "family" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "http://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=470&lvl=3&lin=f&keep=1&srchmode=1&unlock",
      "val" : "Moraxellaceae"
    },
    "subSpecies" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "",
      "val" : ""
    },
    "drugResistance" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "",
      "val" : "1.0"
    },
    "reportedName" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "",
      "val" : ""
    },
    "class" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "http://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=470&lvl=3&lin=f&keep=1&srchmode=1&unlock",
      "val" : "Gammaproteobacteria"
    },
    "authority" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "",
      "val" : ""
    },
    "species" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "Jones et al.",
      "val" : "Acinetobacter baumannii multiple drug-res"
    }
  },
  "dates" : {
    "duration" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "512",
      "val" : "retrospective study 2 years, median ICU stay 16 days"
    },
    "startDate" : {
      "valForm" : "1993-01-01",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "512",
      "val" : "1993-01-01"
    },
    "endDate" : {
      "valForm" : "1994-12-31",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "512",
      "val" : "1994-12-31"
    }
  },
  "zoonoticType" : {
    "meta" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : 1389571746.895151,
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    },
    "ref" : "512",
    "val" : "non-zoonotic"
  },
  "notes" : {
    "meta" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : 1389571746.895151,
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    },
    "ref" : "",
    "val" : ""
  },
  "economics" : {
    "avgLifeExpectEventCountryYear" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "data.worldbank.org",
      "val" : "77.9"
    },
    "avgAgeDeath" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "512.0",
      "val" : "no death"
    },
    "perCapitaNatGDPEventYear" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "data.worldbank.org",
      "val" : "17678.0"
    },
    "avgAgeInfected" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "512.0",
      "val" : "51.0"
    },
    "tradeTravelRestrictions" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "512.0",
      "val" : "0.0"
    },
    "avgCostPerTreatment" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "",
      "val" : ""
    },
    "numHospitalized" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "512.0",
      "val" : "45.0"
    }
  },
  "disease" : {
    "meta" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : 1389571746.895151,
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    },
    "ref" : "512",
    "val" : "\"Among 45 cases...27 cases met the CDC criteria for infection..pneumonia (74%), bacteremia (7%), CVC related infections (22%), empyema (4%), urinary tract infection (11%), and wound infection (4%)\""
  },
  "hosts" : {
    "hostUse" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "512",
      "val" : "providing hospital care"
    },
    "family" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "NIH",
      "val" : "Hominidae"
    },
    "authority" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "",
      "val" : ""
    },
    "sex" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "",
      "val" : ""
    },
    "reportedName" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "512.0",
      "val" : "human"
    },
    "class" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "NIH",
      "val" : "mammalia"
    },
    "domesticationStatus" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "",
      "val" : ""
    },
    "species" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "NIH",
      "val" : "Homo sapiens"
    },
    "age" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "512",
      "val" : "average 51 yr"
    },
    "subSpecies" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "",
      "val" : ""
    },
    "genus" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "NIH",
      "val" : "Homo"
    },
    "taxOrder" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389571746.895151,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : "NIH",
      "val" : "Primates"
    }
  },
  "eid" : {
    "meta" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : 1389571746.895151,
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    },
    "ref" : "512",
    "val" : "1"
  },
  "commentsCount" : 0

  });



  Comments.insert({
    entryId: sickiOneId,
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 3 * 3600 * 1000,
    body: 'Carla: do we have more info about the drivers of this EID'
  });

  Comments.insert({
    entryId: sickiOneId,
    userId: carla._id,
    author: carla.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'Nico: we will need to follow-up with the primary research'
  });


} /*end if*/
