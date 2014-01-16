if (Diseases.find().count() === 0) {

	Diseases.insert({
		"definition" : "Abscesses most often found in the mouth  lungs  or gastrointestinal tract caused by Actinomyces bacteria that enter after surgery  trauma  or other infection.",
		"synonyms" : "",
		"name" : "actinomycosis"
		});

	Diseases.insert({
		"definition" : "Severe abdominal pain  nausea  and vomiting caused by consumption of undercooked seafood containing larvae of the nematode  Anisakis simplex.", 
		"synonyms" : "Anisakis", 
		"name" : "anisakiasis" 
	});

	Diseases.insert({
		"definition" : "An acute disease caused by inhalation  ingestion  or cutaneous exposure to a highly lethal bacterium.", 
		"synonyms" : "",
		"name" : "anthrax"
	});

	Diseases.insert({
		"definition" : "Infection from the Junin virus that presents with flu-like symptoms and then may progress to cause vascular  renal  hematological  or neurological alterations.", 
		"synonyms" : "O'Higgins disease  mal de los rastrojos  stubble disease", 
		"name" : "o'higgins disease"
	});

}