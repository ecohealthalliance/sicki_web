Template.referenceSubmitNew.events({
	"change select[name=referenceType]":function () {
		if ($("select[name=referenceType]").val() == 'article')
			/* call handlebars template here */
			/* call Template.referenceFields then pass JSON object for contect
			e.g. refType.article-journal
			pass the htlm before the show */
			$("#dropOptions").show();
		else
			$("#dropOptions").hide();
	}
});