Template.slickMin.rendered = function () {

/* collection data
var data = Entries.find().fetch();
*/

var data = [
  {
    outbreak: 'Spanish Flu',
    location: 'Global'
  }, 
  {
    outbreak: 'Nipah Outbreak',
    location: 'Malaysia'
  }, 
  {
    outbreak: 'E Coli',
    location: 'Canada'
  }
];

/* original data
var data = [
    {
        field_1: "value1",
        field_2: "value2"
    }, {
        field_1: "value3",
        field_2: "value4"
    }
];
*/

var cols = [
    { id: "outbreak", name: "outbreak", field: "outbreak" },
    { id: "location", name: "location", field: "location" }
];
    
var options = {
    enableCellNavigation: true,
    enableColumnReorder: false
};

var slickgrid = new Slick.Grid('#myGrid', data, cols, options);

};