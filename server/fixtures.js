if (Entries.find().count() === 0) {
  Entries.insert({
    outbreak: 'Spanish Flu',
    location: 'Global',
    url: 'http://en.wikipedia.org/wiki/Spanish_flu',
    host: 'human',
    eid: 'poverty',
    x: 0.7589090881347656, 
    y: 0.372, 
    title: "party on",
    deaths: 10,
    abstract: "Twelve cases of abscesses due to Mycobacterium chelonae were documented in West Hartlepool, England, in 1966.  All patients had received histamine injections from the same clinic that used multi dose containers for injection fluids.  These containers were contaminated, and patients presented with painful abscesses that varied in size and shape but all discharged a thin fluid.  This event was driven by antimicrobial agent use and a breakdown of public health measures that should ensure sterile vaccine practices.  This marked the evolution of an existing organism, but the displayed antimicrobial resistance suggested that the pathogen had been circulating in the environment for a significant amount of time."
  }); 
  Entries.insert({
    outbreak: 'Nipah Outbreak',
    location: 'Malaysia',
    host: 'Bat',
    eid: 'habitat change',
    url: 'http://en.wikipedia.org/wiki/Henipavirus#Nipah_virus',
    x: 0.2789090881347656, 
    y: 0.782, 
    title: "party on",
    deaths: 1
  }); 
  Entries.insert({
    outbreak: 'E Coli',
    location: 'Canada',
    host: 'Cattle',
    eid: 'land use',
    url: 'http://en.wikipedia.org/wiki/E_coli',
    x: 0.5689090881347656, 
    y: 0.662, 
    title: "party on",
    deaths: 2
  });
}