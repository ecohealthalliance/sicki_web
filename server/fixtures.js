if (Entries.find().count() === 0) {
  Entries.insert({
    outbreak: 'Spanish Flu',
    location: 'Global',
    url: 'http://en.wikipedia.org/wiki/Spanish_flu'
  }); 
  Entries.insert({
    outbreak: 'Nipah Outbreak',
    location: 'Malaysia',
    url: 'http://en.wikipedia.org/wiki/Henipavirus#Nipah_virus'
  }); 
  Entries.insert({
    outbreak: 'E Coli',
    location: 'Canada',
    url: 'http://en.wikipedia.org/wiki/E_coli'
  });
}