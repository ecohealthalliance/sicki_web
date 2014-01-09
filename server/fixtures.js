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
