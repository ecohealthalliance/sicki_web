Template.handson.rendered = function () {
$("#example1grid").handsontable({
    colHeaders: ["", "Kia", "Nissan", "Toyota", "Honda"],        
  });

  var data = [
    ["2008", 10, 11, 12, 13],
    ["2009", 20, 11, 14, 13],
    ["2010", 30, 15, 12, 13]
  ];

  $("#example1grid").handsontable("loadData", data);
    
  $('th').css('background-color', 'red');
};