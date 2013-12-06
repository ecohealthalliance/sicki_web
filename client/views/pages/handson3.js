Template.handson3.rendered = function () {

var data = Entries.find().fetch();

$("#example1").handsontable({
    data: data,
    rowHeaders: true,
    colHeaders: true,
    colWidths: [55, 80, 80, 80, 80, 80, 80],
    columnSorting: true,
    contextMenu: true,
    persistentState: true
  });
  
  var HOT = $('#example1').handsontable('getInstance');
  
  $('.reset-state').on('click', function(){
  
    HOT.PluginHooks.run('persistentStateReset');
  
    HOT.updateSettings({
      columnSorting: true,
      manualColumnMove:true,
      manualColumnResize: true
    });
  
    $(".state-loaded").fadeOut(300);
  });
  
  
  var storedData = {};
  
  HOT.PluginHooks.run('persistentStateLoad', '_persistentStateKeys', storedData);
  
  var savedKeys = storedData.value;
  
  if(savedKeys && savedKeys.length > 0){
    $(".state-loaded").show();
  }
  
  
  function bindDumpButton() {
      $('body').on('click', 'button[name=dump]', function () {
        var dump = $(this).data('dump');
        var $container = $(dump);
        console.log('data of ' + dump, $container.handsontable('getData'));
      });
    }
  bindDumpButton();

};