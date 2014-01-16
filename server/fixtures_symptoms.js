if (Symptoms.find().count() === 0) {

	Symptoms.insert({
	"definition" : "An inflammation of a bursa causing friction between tissues of the body.", 
	"name" : "bursitis", 
	"source" : "medicinenet" 
	});

	Symptoms.insert({
	"definition" : "A build up of calcium in body tissue  causing the tissue to harden.", 
	"name" : "calcifications", 
	"source" : "medline plus"
	});

	Symptoms.insert({
	"definition" : "A weakened an enlarged heart muscle that pumps blood less effectively to the body.", 
	"name" : "cardiomyopathy", 
	"source" : "medicinenet" 
	});

	Symptoms.insert({
	"definition" : "Inflammation of the heart.", 
	"name" : "carditis", 
	"source" : "medicinenet"
	});

	Symptoms.insert({
	"definition" : "Inflammation of the uterine cervix.", 
	"name" : "cervicitis", 
	"source" : "medicinenet"
	});
}