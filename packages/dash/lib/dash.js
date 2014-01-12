
/*this checks if EID ribbon should be applied*/
Template.dash.helpers({
	isEID: function(){
		console.log(this.eid.value)
		if (this.eid.value == 1)
		 return true;
	}
});