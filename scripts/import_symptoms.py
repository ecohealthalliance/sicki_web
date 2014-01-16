import contextlib
from urllib import urlopen

def import_symptoms(db):
    symptoms = db.symptoms

    CKAN_URL = "https://ckan-datastore.s3.amazonaws.com/2013-11-12T18:19:11.105Z/medicinenet-symptom-definitions.csv"

    with contextlib.closing(urlopen(CKAN_URL)) as raw_csv:
        for line in raw_csv.read().split('\n')[1:]:
            if line:
                name, definition, source = line.split(',')
                if not symptoms.find_one({'name': name.lower()}):
                    symptoms.insert({
                        'name': name.lower(),
                        'definition': definition,
                        'source':source
                    })