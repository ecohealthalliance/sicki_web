Template.slickMin.rendered = function () {

/* collection data*/
var data = Entries.find().fetch();


/*
var data = [
  {
    eventName: 'Spanish Flu',
    location: 'Global'
  }, 
  {
    eventName: 'Nipah Outbreak',
    location: 'Malaysia'
  }, 
  {
    eventName: 'E Coli',
    location: 'Canada'
  }
];
*/

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
    { id: "eventName", name: "eventName", field: "eventName" },
    { id: "location", name: "location", field: "location" }
];
    
var options = {
    enableCellNavigation: true,
    enableColumnReorder: false
};

var slickgrid = new Slick.Grid('#myGrid', data, cols, options);

};