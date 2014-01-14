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
      "refBlob" : "512",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : "45"
    },
    "symptomsReported" : {
      "refBlob" : "512",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : "no symptoms- just confirmed isolate of bacteria"
    },
    "numberOfDeaths" : {
      "refBlob" : "512",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : "0"
    },
    "prevalence" : {
      "refBlob" : "512",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : "in patients: 1993/01-1993/06= 1.26/1000, 1993/07-1993/12= 6.62/1,000, 1994/01-06= 8.15, 1993/07-12= 6.28. average staff prevalence= 11%"
    }
  },
  "refs" : [ ],
  "locations" : {
    "placeName" : {
      "refBlob" : "512.0",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : "Intensive Care Unit of Sir Charles Gairdner Hospital"
    },
    "name" : {
      "refBlob" : "512.0",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : "Nedlands"
    },
    "city" : {
      "refBlob" : "512.0",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : "Nedlands"
    },
    "latitude" : {
      "refBlob" : "",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : ""
    },
    "subnationalRegion" : {
      "refBlob" : "512.0",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : "Western Australia"
    },
    "continent" : {
      "refBlob" : "512.0",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : "Australia"
    },
    "longitude" : {
      "refBlob" : "",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : ""
    },
    "nation" : {
      "refBlob" : "512.0",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
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
    "submitted" : "2014-01-13T05:08:51.762Z",
    "rank" : {
      "auto" : false,
      "top" : true,
      "expert" : false,
      "eha" : true
    }
  },
  "eidCategory" : {
    "refBlob" : "512",
    "meta" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : "2014-01-13T05:08:51.756Z",
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    },
    "ref" : [ ],
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
      "submitted" : "2014-01-13T05:08:51.756Z",
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    },
    "ref" : "ehaID",
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
      "submitted" : "2014-01-13T05:08:51.756Z",
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    },
    "blob" : {
      "refBlob" : "",
      "ref" : [ ],
      "val" : ""
    },
    "email" : ""
  },
  "sampleType" : {
    "refBlob" : "512",
    "meta" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : "2014-01-13T05:08:51.756Z",
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    },
    "ref" : [ ],
    "val" : "There were five different primary initial sites of isolation of GRAB in the 45 cases: sputum or other respiratory tract specimen (including bronchial alveolar lavage) (35 cases=77%); wounds (five cases=11%); central venous catheter tips (three cases=6%); blood (one case=2%); and urine (one case=2%)."
  },
  "eventName" : {
    "refBlob" : "Jones et al. SI",
    "meta" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : "2014-01-13T05:08:51.756Z",
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    },
    "ref" : [ ],
    "val" : "Acinetobacter baumannii gentamycin-res (Australia, 1993)"
  },
  "abstract" : {
    "refBlob" : "512",
    "meta" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : "2014-01-13T05:08:51.756Z",
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    },
    "ref" : [ ],
    "val" : "An outbreak of gentamicin resistant Acinetobacter baumannii infection occurred in 35 patients and ten staff at the intensive care unit of Sir Charles Gairdner Hospital in Perth, Australia.  In a retrospective study it was determined that incidence rose from 1.26 cases per 1000 in January to June of 1993, to 6.62 cases per 1000 for July to December, 1993.  The infection manifested differently among patients with the most common cases comprising of pneumonia, central venous catheter infection, and urinary tract infection.  This event was driven by human susceptibility to infection and antimicrobial agent use, and represents a new drug resistance and increase in incidence."
  },
  "driver" : {
    "refBlob" : "512, Jones et al.",
    "meta" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : "2014-01-13T05:08:51.756Z",
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    },
    "ref" : [ ],
    "val" : "human susceptibility to infection, antimicrobial agent use"
  },
  "refsCount" : 0,
  "transmissionModel" : {
    "refBlob" : "512",
    "meta" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : "2014-01-13T05:08:51.756Z",
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    },
    "ref" : [ ],
    "val" : "close: \"Carriage of GRAB on staff hands was demonstrated as the most likely source of infection.\""
  },
  "pathogens" : {
    "genus" : {
      "refBlob" : "http://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=470&lvl=3&lin=f&keep=1&srchmode=1&unlock",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : "Acinetobacter"
    },
    "taxOrder" : {
      "refBlob" : "http://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=470&lvl=3&lin=f&keep=1&srchmode=1&unlock",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : "Pseudomonadales"
    },
    "family" : {
      "refBlob" : "http://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=470&lvl=3&lin=f&keep=1&srchmode=1&unlock",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : "Moraxellaceae"
    },
    "subSpecies" : {
      "refBlob" : "",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : ""
    },
    "drugResistance" : {
      "refBlob" : "",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : "1.0"
    },
    "reportedName" : {
      "refBlob" : "",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : ""
    },
    "class" : {
      "refBlob" : "http://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=470&lvl=3&lin=f&keep=1&srchmode=1&unlock",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : "Gammaproteobacteria"
    },
    "authority" : {
      "refBlob" : "",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : ""
    },
    "species" : {
      "refBlob" : "Jones et al.",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : "Acinetobacter baumannii multiple drug-res"
    }
  },
  "dates" : {
    "duration" : {
      "refBlob" : "512",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : "retrospective study 2 years, median ICU stay 16 days"
    },
    "startDate" : {
      "valForm" : "1993-01-01",
      "refBlob" : "512",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : "1993-01-01"
    },
    "endDate" : {
      "valForm" : "1994-12-31",
      "refBlob" : "512",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : "1994-12-31"
    }
  },
  "zoonoticType" : {
    "refBlob" : "512",
    "meta" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : "2014-01-13T05:08:51.756Z",
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    },
    "ref" : [ ],
    "val" : "non-zoonotic"
  },
  "notes" : {
    "refBlob" : "",
    "meta" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : "2014-01-13T05:08:51.756Z",
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    },
    "ref" : [ ],
    "val" : ""
  },
  "economics" : {
    "avgLifeExpectEventCountryYear" : {
      "refBlob" : "data.worldbank.org",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
          },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : "77.9"
    },
    "avgAgeDeath" : {
      "refBlob" : "512.0",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : "no death"
    },
    "perCapitaNatGDPEventYear" : {
      "refBlob" : "data.worldbank.org",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : "17678.0"
    },
    "avgAgeInfected" : {
      "refBlob" : "512.0",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : "51.0"
    },
    "tradeTravelRestrictions" : {
      "refBlob" : "512.0",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : "0.0"
    },
    "avgCostPerTreatment" : {
      "refBlob" : "",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : ""
    },
    "numHospitalized" : {
      "refBlob" : "512.0",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : "45.0"
    }
  },
  "disease" : {
    "refBlob" : "512",
    "meta" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : "2014-01-13T05:08:51.756Z",
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    },
    "ref" : [ ],
    "val" : "\"Among 45 cases...27 cases met the CDC criteria for infection..pneumonia (74%), bacteremia (7%), CVC related infections (22%), empyema (4%), urinary tract infection (11%), and wound infection (4%)\""
  },
  "hosts" : {
    "hostUse" : {
      "refBlob" : "512",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : "providing hospital care"
    },
    "family" : {
      "refBlob" : "NIH",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : "Hominidae"
    },
    "authority" : {
      "refBlob" : "",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : ""
    },
    "sex" : {
      "refBlob" : "",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : ""
    },
    "reportedName" : {
      "refBlob" : "512.0",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : "human"
    },
    "class" : {
      "refBlob" : "NIH",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : "mammalia"
    },
    "domesticationStatus" : {
      "refBlob" : "",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : ""
    },
    "species" : {
      "refBlob" : "NIH",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : "Homo sapiens"
    },
    "age" : {
      "refBlob" : "512",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : "average 51 yr"
    },
    "subSpecies" : {
      "refBlob" : "",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : ""
    },
    "genus" : {
      "refBlob" : "NIH",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : "Homo"
    },
    "taxOrder" : {
      "refBlob" : "NIH",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-13T05:08:51.756Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "ref" : [ ],
      "val" : "Primates"
    }
  },
  "eid" : {
    "refBlob" : "512",
    "meta" : {
      "reviewer" : "eha",
      "votes" : {
        "down" : 0,
        "up" : 0
      },
      "userId" : 0,
      "submitted" : "2014-01-13T05:08:51.756Z",
      "rank" : {
        "auto" : false,
        "top" : true,
        "expert" : false,
        "eha" : true
      }
    },
    "ref" : [ ],
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
