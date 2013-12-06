var postsData = [
  {
    disease: 'Spanish Flu',
    location: 'Global',
    url: 'http://en.wikipedia.org/wiki/Spanish_flu'
  }, 
  {
    disease: 'Nipah Outbreak',
    location: 'Malaysia',
    url: 'http://en.wikipedia.org/wiki/Henipavirus#Nipah_virus'
  }, 
  {
    disease: 'E Coli',
    location: 'Canada',
    url: 'http://en.wikipedia.org/wiki/E_coli'
  }
];
Template.postsList.helpers({
  posts: postsData
});