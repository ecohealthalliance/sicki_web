Template.resourcesPage.rendered = function() {
  $('#demoFour').listnav({ 
    includeNums: false 
  });

  $('.demoTwo').listnav({ 
    includeAll: false,  
    noMatchText: 'There are no matching entries.' 
  }); 
 }