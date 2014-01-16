import argparse
import pymongo

from import_diseases import import_diseases
from import_symptoms import import_symptoms

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('-port', help="mongodb port", default=27017)
    parser.add_argument('-db', help="mongodb db", default="meteor")
    args = parser.parse_args()

    db = pymongo.Connection('localhost', int(args.port))[args.db]

    import_diseases(db)
    import_symptoms(db)