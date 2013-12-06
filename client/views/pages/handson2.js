
Template.handson2.rendered = function () {

var data = Entries.find().fetch();

/* old test code
var data2 = [
  {
    outbreak: 'Spanish Flu',
    location: 'Global',
    url: 'http://en.wikipedia.org/wiki/Spanish_flu'
  }, 
  {
    outbreak: 'Nipah Outbreak',
    location: 'Malaysia',
    url: 'http://en.wikipedia.org/wiki/Henipavirus#Nipah_virus'
  }, 
  {
    outbreak: 'E Coli',
    location: 'Canada',
    url: 'http://en.wikipedia.org/wiki/E_coli'
  }
];
*/
  
  $('#example1').handsontable({
    data: data,
    colHeaders: true,
    rowHeaders: true,
    minSpareRows: 1
  });
  
  $('#example1 table').addClass('table');
  
  $('.options input').on('change', function () {
    var method = this.checked ? 'addClass' : 'removeClass';
    $('#example1').find('table')[method](this.getAttribute('data-type'));
  });
  
  
  function bindDumpButton() {
      $('body').on('click', 'button[name=dump]', function () {
        var dump = $(this).data('dump');
        var $container = $(dump);
        console.log('data of ' + dump, $container.handsontable('getData'));
      });
    }
  bindDumpButton();

};