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

  "refsCount" : 0,
  "val" : {
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "retrospective study 2 years, median ICU stay 16 days",
        "ref" : [ ],
        "val" : ""
      },
      "startDate" : {
        "valForm" : "1993-01-01",
        "val" : "",
        "refBlob" : "512",
        "meta" : {
          "reviewer" : "eha",
          "votes" : {
            "down" : 0,
            "up" : 0
          },
          "userId" : 0,
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "1993-01-01",
        "ref" : [ ]
      },
      "endDate" : {
        "valForm" : "1994-12-31",
        "val" : "",
        "refBlob" : "512",
        "meta" : {
          "reviewer" : "eha",
          "votes" : {
            "down" : 0,
            "up" : 0
          },
          "userId" : 0,
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "1994-12-31",
        "ref" : [ ]
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
        "submitted" : "2014-01-16T22:40:53.823Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "valQuote" : "non-zoonotic",
      "ref" : [ ],
      "val" : "non-zoonotic"
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
        "submitted" : "2014-01-16T22:40:53.823Z",
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
    "eidCategory" : {
      "refBlob" : "512",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-16T22:40:53.823Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "valQuote" : "increased incidence, new drug resistance",
      "ref" : [ ],
      "val" : ""
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
        "submitted" : "2014-01-16T22:40:53.823Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "valQuote" : "human susceptibility to infection, antimicrobial agent use",
      "ref" : [ ],
      "val" : "Human susceptibility to infection"
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
        "submitted" : "2014-01-16T22:40:53.823Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "valQuote" : "An outbreak of gentamicin resistant Acinetobacter baumannii infection occurred in 35 patients and ten staff at the intensive care unit of Sir Charles Gairdner Hospital in Perth, Australia.  In a retrospective study it was determined that incidence rose from 1.26 cases per 1000 in January to June of 1993, to 6.62 cases per 1000 for July to December, 1993.  The infection manifested differently among patients with the most common cases comprising of pneumonia, central venous catheter infection, and urinary tract infection.  This event was driven by human susceptibility to infection and antimicrobial agent use, and represents a new drug resistance and increase in incidence.",
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "77.9",
        "ref" : [ ],
        "val" : ""
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "no death",
        "ref" : [ ],
        "val" : ""
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "17678.0",
        "ref" : [ ],
        "val" : ""
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "51.0",
        "ref" : [ ],
        "val" : ""
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "0.0",
        "ref" : [ ],
        "val" : ""
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "",
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "45.0",
        "ref" : [ ],
        "val" : ""
      }
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
        "submitted" : "2014-01-16T22:40:53.823Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "valQuote" : "There were five different primary initial sites of isolation of GRAB in the 45 cases: sputum or other respiratory tract specimen (including bronchial alveolar lavage) (35 cases=77%); wounds (five cases=11%); central venous catheter tips (three cases=6%); blood (one case=2%); and urine (one case=2%).",
      "ref" : [ ],
      "val" : "Serology"
    },
    "disease" : {
      "val" : "",
      "icd10" : "",
      "refBlob" : "512",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-16T22:40:53.823Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "valQuote" : "\"Among 45 cases...27 cases met the CDC criteria for infection..pneumonia (74%), bacteremia (7%), CVC related infections (22%), empyema (4%), urinary tract infection (11%), and wound infection (4%)\"",
      "ref" : [ ]
    },
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "Intensive Care Unit of Sir Charles Gairdner Hospital",
        "ref" : [ ],
        "val" : ""
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "Nedlands",
        "ref" : [ ],
        "val" : ""
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "Nedlands",
        "ref" : [ ],
        "val" : ""
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "",
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "Western Australia",
        "ref" : [ ],
        "val" : ""
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "Australia",
        "ref" : [ ],
        "val" : ""
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "",
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "Australia",
        "ref" : [ ],
        "val" : ""
      }
    },
    "eventName" : {
      "refBlob" : "jones",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-16T22:40:53.823Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "valQuote" : "Acinetobacter baumannii gentamycin-res (Australia, 1993)",
      "ref" : [ ],
      "val" : ""
    },
    "transmissionModel" : {
      "refBlob" : "512",
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-16T22:40:53.823Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "valQuote" : "close: \"Carriage of GRAB on staff hands was demonstrated as the most likely source of infection.\"",
      "ref" : [ ],
      "val" : "close"
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "providing hospital care",
        "ref" : [ ],
        "val" : ""
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "Hominidae",
        "ref" : [ ],
        "val" : ""
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "",
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "",
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "human",
        "ref" : [ ],
        "val" : ""
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "mammalia",
        "ref" : [ ],
        "val" : ""
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "",
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "Homo sapiens",
        "ref" : [ ],
        "val" : ""
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "average 51 yr",
        "ref" : [ ],
        "val" : "adult"
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "",
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "Homo",
        "ref" : [ ],
        "val" : ""
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "Primates",
        "ref" : [ ],
        "val" : ""
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
        "submitted" : "2014-01-16T22:40:53.823Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "valQuote" : "1",
      "ref" : [ ],
      "val" : ""
    },
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "45",
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "no symptoms- just confirmed isolate of bacteria",
        "ref" : [ ],
        "val" : "none"
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "0",
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "in patients: 1993/01-1993/06= 1.26/1000, 1993/07-1993/12= 6.62/1,000, 1994/01-06= 8.15, 1993/07-12= 6.28. average staff prevalence= 11%",
        "ref" : [ ],
        "val" : ""
      }
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "Acinetobacter",
        "ref" : [ ],
        "val" : ""
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "Pseudomonadales",
        "ref" : [ ],
        "val" : ""
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "Moraxellaceae",
        "ref" : [ ],
        "val" : ""
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "",
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "1.0",
        "ref" : [ ],
        "val" : ""
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "",
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "Gammaproteobacteria",
        "ref" : [ ],
        "val" : ""
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "",
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
          "submitted" : "2014-01-16T22:40:53.823Z",
          "rank" : {
            "auto" : false,
            "top" : true,
            "expert" : false,
            "eha" : true
          }
        },
        "valQuote" : "Acinetobacter baumannii multiple drug-res",
        "ref" : [ ],
        "val" : ""
      }
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
        "submitted" : "2014-01-16T22:40:53.823Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "valQuote" : "",
      "ref" : [ ],
      "val" : ""
    },
    "sickiID" : {
      "meta" : {
        "reviewer" : "eha",
        "votes" : {
          "down" : 0,
          "up" : 0
        },
        "userId" : 0,
        "submitted" : "2014-01-16T22:40:53.823Z",
        "rank" : {
          "auto" : false,
          "top" : true,
          "expert" : false,
          "eha" : true
        }
      },
      "valQuote" : "1.0",
      "ref" : "ehaID",
      "val" : ""
    }
  },
  "refs" : [ ],
  "comments" : [ ],
  "meta" : {
    "reviewer" : "Tilchin",
    "votes" : {
      "down" : 0,
      "up" : 0
    },
    "userId" : 0,
    "submitted" : "2014-01-16T22:40:53.861Z",
    "rank" : {
      "auto" : false,
      "top" : true,
      "expert" : false,
      "eha" : true
    }
  },
  "valQuote" : {
    
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
