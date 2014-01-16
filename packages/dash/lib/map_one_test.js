Template.mapOneTest.rendered = function() {
  var self = this;
  self.node = self.find("svg");

  if (! self.handle) {
  	self.handle = Deps.autorun(function () {
/* Width */
			var w = 600;
			/* Height */
			var h = 300;

			/* Choose an event */
			var eid = 20;

			/* set outcome */
			var deaths = 20;

			/* Map projection (mercator) */
			var projection = d3.geo.mercator()
								   .translate([w/2, h/2])
								   .scale([100]);

			/* Generate path */
			var path = d3.geo.path()
							 .projection(projection)
							 .pointRadius(Math.sqrt(parseInt(deaths) * 10));

			/* create SVG element */
			var svg = d3.select("body")
						.append("svg")
						.attr("width", w)
						.attr("height", h);

			/* Load GeoJSON */
			d3.json("oceans.json", function(json) {

				d3.json("centroids.json", function(eids) {

					for (var key in eids.features) {
					   var obj = eids.features[key].properties;
					   /*console.log(obj.properties)*/
					   for (var prop in obj) {
					      // check  this is object's own property 
					      // not from prototype prop inherited
					      if(obj.hasOwnProperty(prop)){
					        //console.log(prop + " = " + obj[prop]);
					        if (obj[prop]== 'HED_'+ eid){
					        	//console.log(eids.features[key])
					        	json.features.push(eids.features[key])
					        	break; // TODO fix this break
					        }
					      }
					   }
					}

				
				/* Bind data and create one path per GeoJSON feature */
				svg.selectAll("path")
				   .data(json.features)
				   .enter()
				   .append("path")
				   .attr("d", path)
				   .style("fill", function(d) {
                        /* Identify data type */
						var type = d.geometry.type;
						if (type=='Point') {
						/* If feature is a point make red */
						    return "crimson"; 
						} 
						else {
							/* If feature is a polygon make the ocean blue */
							return "steelblue";
						}
					});

			});
		});
});			
}
}

Template.map.destroyed = function () {
  this.handle && this.handle.stop();
};
