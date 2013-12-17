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
    deaths: 10
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