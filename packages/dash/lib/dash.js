
/*this checks if EID ribbon should be applied*/
Template.dash.helpers({
	isEID: function(){
		/*console.log(this.eid.val)*/
		if (this.eid.val == 1)
		 return true;
	},
	dataSlice: function(date, seq){
		console.log(date)
		year = date.substring(0,4)
		return year[seq];
	}
});