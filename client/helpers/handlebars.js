Handlebars.registerHelper('pluralize', function(n, thing) {
  // fairly stupid pluralizer
  if (n === 1) {
    return '1 ' + thing;
  } else {
    return n + ' ' + thing + 's';
  }
});

Handlebars.registerHelper('arrayify',function(obj){
    result = [];
    if (typeof obj == 'string') {
    	obj = JSON.parse(obj)
    }
    for (var key in obj) result.push({name:key,value:obj[key]});
    return result;
});

Handlebars.registerHelper('list', function(items, options) {
  var out = "<ul>";
  for(var i=0, l=items.length; i<l; i++) {
    out = out + "<li>" + options.fn(items[i]) + "</li>";
  }
  return out + "</ul>";
});

Handlebars.registerHelper('expert', function(items, options) {
  expertObj = _.filter(items, function(ex){ 
    return ex.expert==true;});
  return options.fn(expertObj[0]);
});

/*
Handlebars.registerHelper('ehaRank', function(items, options) {
  ehaObj = _.filter(items, function(ex){
    console.log(ex.metaData.rank.eha)
    return ex.metaData.rank.eha==true;});
  return options.fn(expertObj[0]);
});
*/