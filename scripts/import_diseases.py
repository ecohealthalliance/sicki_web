import contextlib
from urllib import urlopen

def import_diseases(db):
    diseases = db.diseases

    CKAN_URL = "https://ckan-datastore.s3.amazonaws.com/2013-11-12T18:22:32.991Z/google-define-disease-definitions.csv"

    with contextlib.closing(urlopen(CKAN_URL)) as raw_csv:
        for line in raw_csv.read().split('\n')[1:]:
            if line:
                name, definition, synonyms = line.split(',')
                for synonym in synonyms.split('  ') + [name]:
                    if synonym:
                        if not diseases.find_one({'name': synonym.lower()}):
                            diseases.insert({
                                'name': synonym.lower(),
                                'definition':definition,
                                'synonyms':synonyms
                            })