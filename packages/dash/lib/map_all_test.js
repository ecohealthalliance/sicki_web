Template.mapAllTest.rendered = function() {
  var self = this;
  self.node = self.find("svg");

  if (! self.handle) {
  	self.handle = Deps.autorun(function () {
/* Width */
			var w = 600;
			/* Height */
			var h = 300;

			/* Choose an event */
			var eid = 200;

			/* set outcome */
			var deaths = 5;

			/* Map projection (mercator) */
			var projection = d3.geo.mercator()
								   .translate([w/2, h/2])
								   .scale([100]);

			/* Generate path */
			var path = d3.geo.path()
							 .projection(projection)
							 .pointRadius(Math.sqrt(parseInt(deaths) * 10));

			/* create SVG element */
			var svg = d3.select("#mapAll")
						.append("svg")
						.attr("width", w)
						.attr("height", h);

			/* Load GeoJSON */
			d3.json("ocean_eids.json", function(json) {
				
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
}
}

Template.map.destroyed = function () {
  this.handle && this.handle.stop();
};
