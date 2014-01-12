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
      "ref" : "512",
      "value" : "45",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "symptomsReported" : {
      "ref" : "512",
      "value" : "no symptoms- just confirmed isolate of bacteria",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "numberOfDeaths" : {
      "ref" : "512",
      "value" : "0",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "prevalence" : {
      "ref" : "512",
      "value" : "in patients: 1993/01-1993/06= 1.26/1000, 1993/07-1993/12= 6.62/1,000, 1994/01-06= 8.15, 1993/07-12= 6.28. average staff prevalence= 11%",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    }
  },
  "refs" : [ ],
  "locations" : {
    "placeName" : {
      "ref" : "512.0",
      "value" : "Intensive Care Unit of Sir Charles Gairdner Hospital",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "name" : {
      "ref" : "512.0",
      "value" : "Nedlands",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "city" : {
      "ref" : "512.0",
      "value" : "Nedlands",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "latitude" : {
      "ref" : "",
      "value" : "",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "subnationalRegion" : {
      "ref" : "512.0",
      "value" : "Western Australia",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "continent" : {
      "ref" : "512.0",
      "value" : "Australia",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "longitude" : {
      "ref" : "",
      "value" : "",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "nation" : {
      "ref" : "512.0",
      "value" : "Australia",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    }
  },
  "eidCategory" : {
    "ref" : "512",
    "value" : "increased incidence, new drug resistance",
    "metaData" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : 1389563622.067435,
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    }
  },
  "sickiID" : {
    "ref" : "jones",
    "value" : "1.0",
    "metaData" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : 1389563622.067435,
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    }
  },
  "contacts" : {
    "firstName" : "",
    "lastName" : "",
    "userID" : "",
    "affiliation" : "",
    "blob" : {
      "ref" : "",
      "value" : ""
    },
    "email" : "",
    "metaData" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : 1389563622.067435,
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    }
  },
  "sampleType" : {
    "ref" : "512",
    "value" : "There were five different primary initial sites of isolation of GRAB in the 45 cases: sputum or other respiratory tract specimen (including bronchial alveolar lavage) (35 cases=77%); wounds (five cases=11%); central venous catheter tips (three cases=6%); blood (one case=2%); and urine (one case=2%).",
    "metaData" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : 1389563622.067435,
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    }
  },
  "eventName" : {
    "ref" : "jones",
    "value" : "Acinetobacter baumannii gentamycin-res (Australia, 1993)",
    "metaData" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : 1389563622.067435,
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    }
  },
  "metaData" : {
    "reviewer" : "Tilchin",
    "votes" : {
      "down" : 0,
      "up" : 0
    },
    "userId" : 0,
    "submitted" : 1389563622.076794,
    "rank" : {
      "auto" : false,
      "top" : true,
      "expert" : false,
      "eha" : true
    }
  },
  "abstract" : {
    "ref" : "512",
    "value" : "An outbreak of gentamicin resistant Acinetobacter baumannii infection occurred in 35 patients and ten staff at the intensive care unit of Sir Charles Gairdner Hospital in Perth, Australia.  In a retrospective study it was determined that incidence rose from 1.26 cases per 1000 in January to June of 1993, to 6.62 cases per 1000 for July to December, 1993.  The infection manifested differently among patients with the most common cases comprising of pneumonia, central venous catheter infection, and urinary tract infection.  This event was driven by human susceptibility to infection and antimicrobial agent use, and represents a new drug resistance and increase in incidence.",
    "metaData" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : 1389563622.067435,
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    }
  },
  "driver" : {
    "ref" : "512, Jones et al.",
    "value" : "human susceptibility to infection, antimicrobial agent use",
    "metaData" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : 1389563622.067435,
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    }
  },
  "refsCount" : 0,
  "transmissionModel" : {
    "ref" : "512",
    "value" : "close: \"Carriage of GRAB on staff hands was demonstrated as the most likely source of infection.\"",
    "metaData" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : 1389563622.067435,
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    }
  },
  "pathogens" : {
    "genus" : {
      "ref" : "http://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=470&lvl=3&lin=f&keep=1&srchmode=1&unlock",
      "value" : "Acinetobacter",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "taxOrder" : {
      "ref" : "http://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=470&lvl=3&lin=f&keep=1&srchmode=1&unlock",
      "value" : "Pseudomonadales",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "family" : {
      "ref" : "http://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=470&lvl=3&lin=f&keep=1&srchmode=1&unlock",
      "value" : "Moraxellaceae",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "subSpecies" : {
      "ref" : "",
      "value" : "",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "drugResistance" : {
      "ref" : "",
      "value" : "1.0",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "reportedName" : {
      "ref" : "",
      "value" : "",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "class" : {
      "ref" : "http://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=470&lvl=3&lin=f&keep=1&srchmode=1&unlock",
      "value" : "Gammaproteobacteria",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "authority" : {
      "ref" : "",
      "value" : "",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "species" : {
      "ref" : "Jones et al.",
      "value" : "Acinetobacter baumannii multiple drug-res",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    }
  },
  "dates" : {
    "duration" : {
      "ref" : "512",
      "value" : "retrospective study 2 years, median ICU stay 16 days",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "startDate" : {
      "ref" : "512",
      "formValue" : "1993-01-01",
      "value" : "1993-01-01",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "endDate" : {
      "ref" : "512",
      "formValue" : "1994-12-31",
      "value" : "1994-12-31",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    }
  },
  "zoonoticType" : {
    "ref" : "512",
    "value" : "non-zoonotic",
    "metaData" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : 1389563622.067435,
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    }
  },
  "notes" : {
    "ref" : "",
    "value" : "",
    "metaData" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : 1389563622.067435,
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    }
  },
  "economics" : {
    "avgLifeExpectEventCountryYear" : {
      "ref" : "data.worldbank.org",
      "value" : "77.9",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "avgAgeDeath" : {
      "ref" : "512.0",
      "value" : "no death",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "perCapitaNatGDPEventYear" : {
      "ref" : "data.worldbank.org",
      "value" : "17678.0",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "avgAgeInfected" : {
      "ref" : "512.0",
      "value" : "51.0",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "tradeTravelRestrictions" : {
      "ref" : "512.0",
      "value" : "0.0",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "avgCostPerTreatment" : {
      "ref" : "",
      "value" : "",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "numHospitalized" : {
      "ref" : "512.0",
      "value" : "45.0",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    }
  },
  "disease" : {
    "ref" : "512",
    "value" : "\"Among 45 cases...27 cases met the CDC criteria for infection..pneumonia (74%), bacteremia (7%), CVC related infections (22%), empyema (4%), urinary tract infection (11%), and wound infection (4%)\"",
    "formValue" : "\"Pneumonia (74%), bacteremia (7%), CVC related infections (22%), empyema (4%), urinary tract infection (11%), and wound infection (4%)\"",
    "metaData" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : 1389563622.067435,
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    }
  },
  "hosts" : {
    "hostUse" : {
      "ref" : "512",
      "value" : "providing hospital care",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "family" : {
      "ref" : "NIH",
      "value" : "Hominidae",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "authority" : {
      "ref" : "",
      "value" : "",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "sex" : {
      "ref" : "",
      "value" : "",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "reportedName" : {
      "ref" : "512.0",
      "value" : "human",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "class" : {
      "ref" : "NIH",
      "value" : "mammalia",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "domesticationStatus" : {
      "ref" : "",
      "value" : "",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "species" : {
      "ref" : "NIH",
      "value" : "Homo sapiens",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "age" : {
      "ref" : "512",
      "value" : "average 51 yr",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "subSpecies" : {
      "ref" : "",
      "value" : "",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "genus" : {
      "ref" : "NIH",
      "value" : "Homo",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "taxOrder" : {
      "ref" : "NIH",
      "value" : "Primates",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    }
  },
  "eid" : {
    "ref" : "512",
    "value" : "1",
    "metaData" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : 1389563622.067435,
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    }
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








  var sickiTwoId = Entries.insert({

  "characteristics" : {
    "numberInfected" : {
      "ref" : "459",
      "value" : "1",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "symptomsReported" : {
      "ref" : "",
      "value" : "",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "numberOfDeaths" : {
      "ref" : "",
      "value" : "",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "prevalence" : {
      "ref" : "",
      "value" : "",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    }
  },
  "refs" : [ ],
  "locations" : {
    "placeName" : {
      "ref" : "Jones et al.",
      "value" : "Edinburgh Royal Infirmary Ecosse",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "name" : {
      "ref" : "Jones et al.",
      "value" : "Edinburgh",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "city" : {
      "ref" : "Jones et al.",
      "value" : "Edinburgh",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "latitude" : {
      "ref" : "",
      "value" : "",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "subnationalRegion" : {
      "ref" : "",
      "value" : "",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "continent" : {
      "ref" : "Jones et al.",
      "value" : "Europe",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "longitude" : {
      "ref" : "",
      "value" : "",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "nation" : {
      "ref" : "Jones et al.",
      "value" : "United Kingdom",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    }
  },
  "eidCategory" : {
    "ref" : "459",
    "value" : "new drug resistance",
    "metaData" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : 1389563622.067435,
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    }
  },
  "sickiID" : {
    "ref" : "jones",
    "value" : "2.0",
    "metaData" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : 1389563622.067435,
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    }
  },
  "contacts" : {
    "firstName" : "",
    "lastName" : "",
    "userID" : "",
    "affiliation" : "",
    "blob" : {
      "ref" : "",
      "value" : ""
    },
    "email" : "",
    "metaData" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : 1389563622.067435,
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    }
  },
  "sampleType" : {
    "ref" : "459",
    "value" : "direct blood",
    "metaData" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : 1389563622.067435,
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    }
  },
  "eventName" : {
    "ref" : "jones",
    "value" : "Acinetobacter baumannii imipenem-res (UK, 1985)",
    "metaData" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : 1389563622.067435,
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    }
  },
  "metaData" : {
    "reviewer" : "Tilchin",
    "votes" : {
      "down" : 0,
      "up" : 0
    },
    "userId" : 0,
    "submitted" : 1389563622.114659,
    "rank" : {
      "auto" : false,
      "top" : true,
      "expert" : false,
      "eha" : true
    }
  },
  "abstract" : {
    "ref" : "459",
    "value" : "An imipenem-resistant Acinetobacter baumannii strain was isolated from a patient at the Edinburgh Royal Infirmary in the United Kingdom in 1985.  No patient data was reported, but the infection was likely transmitted nosocomially. The event is driven by antimicrobial agent use and marks a new drug resistance.",
    "metaData" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : 1389563622.067435,
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    }
  },
  "driver" : {
    "ref" : "459",
    "value" : "antimicrobial agent use",
    "metaData" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : 1389563622.067435,
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    }
  },
  "refsCount" : 0,
  "transmissionModel" : {
    "ref" : "459",
    "value" : "close (nosocomial)",
    "metaData" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : 1389563622.067435,
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    }
  },
  "pathogens" : {
    "genus" : {
      "ref" : "http://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=470&lvl=3&lin=f&keep=1&srchmode=1&unlock",
      "value" : "Acinetobacter",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "taxOrder" : {
      "ref" : "http://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=470&lvl=3&lin=f&keep=1&srchmode=1&unlock",
      "value" : "Pseudomonadales",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "family" : {
      "ref" : "http://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=470&lvl=3&lin=f&keep=1&srchmode=1&unlock",
      "value" : "Moraxellaceae",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "subSpecies" : {
      "ref" : "",
      "value" : "",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "drugResistance" : {
      "ref" : "495.0",
      "value" : "1, resistant to: imipenem, penicillins, and and cephaloridine",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "reportedName" : {
      "ref" : "495.0",
      "value" : "Acinetobacter baumannii 6B92",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "class" : {
      "ref" : "http://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=470&lvl=3&lin=f&keep=1&srchmode=1&unlock",
      "value" : "Gammaproteobacteria",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "authority" : {
      "ref" : "",
      "value" : "",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "species" : {
      "ref" : "Jones et al.",
      "value" : "Acinetobacter baumannii multiple drug-res",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    }
  },
  "dates" : {
    "duration" : {
      "ref" : "",
      "value" : "",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "startDate" : {
      "ref" : "459",
      "formValue" : "1985",
      "value" : "1985",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "endDate" : {
      "ref" : "459",
      "formValue" : "1985",
      "value" : "1985",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    }
  },
  "zoonoticType" : {
    "ref" : "459",
    "value" : "non-zoonotic",
    "metaData" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : 1389563622.067435,
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    }
  },
  "notes" : {
    "ref" : "",
    "value" : "",
    "metaData" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : 1389563622.067435,
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    }
  },
  "economics" : {
    "avgLifeExpectEventCountryYear" : {
      "ref" : "data.worldbank.org",
      "value" : "74.6",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "avgAgeDeath" : {
      "ref" : "",
      "value" : "",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "perCapitaNatGDPEventYear" : {
      "ref" : "data.worldbank.org",
      "value" : "8210.0",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "avgAgeInfected" : {
      "ref" : "",
      "value" : "",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "tradeTravelRestrictions" : {
      "ref" : "459.0",
      "value" : "0.0",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "avgCostPerTreatment" : {
      "ref" : "",
      "value" : "",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "numHospitalized" : {
      "ref" : "459.0",
      "value" : "1.0",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    }
  },
  "disease" : {
    "ref" : "459",
    "value" : "none reported, but likely nosocomial",
    "metaData" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : 1389563622.067435,
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    }
  },
  "hosts" : {
    "hostUse" : {
      "ref" : "459",
      "value" : "none",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "family" : {
      "ref" : "",
      "value" : "",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "authority" : {
      "ref" : "",
      "value" : "",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "sex" : {
      "ref" : "",
      "value" : "",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "reportedName" : {
      "ref" : "459.0",
      "value" : "none",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "class" : {
      "ref" : "",
      "value" : "",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "domesticationStatus" : {
      "ref" : "",
      "value" : "",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "species" : {
      "ref" : "",
      "value" : "",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "age" : {
      "ref" : "",
      "value" : "",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "subSpecies" : {
      "ref" : "",
      "value" : "",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "genus" : {
      "ref" : "",
      "value" : "",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    },
    "taxOrder" : {
      "ref" : "",
      "value" : "",
      "metaData" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : 1389563622.067435,
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      }
    }
  },
  "eid" : {
    "ref" : "459",
    "value" : "1",
    "metaData" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : 1389563622.067435,
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    }
  },
  "commentsCount" : 0

  });

  Comments.insert({
    entryId: sickiTwoId,
    userId: kris._id,
    author: kris.profile.name,
    submitted: now - 3 * 3600 * 1000,
    body: 'Nico: does this differ from the Hotspots statistic?'
  });

  Comments.insert({
    entryId: sickiTwoId,
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'Kris: yes, we will need more follow-up'
  });

} /*end if*/
