import json
import csv
from serpapi.google_search_results import GoogleSearchResults
import time


def import_hiring():
    with open('response.json') as json_file:
        response = json.load(json_file)
    response = response['data']['table']['rows']
    to_status = {
        'selRlu2da0HoRqkdp': 'Hiring',
        'seludBpCXMZOWTaUr': 'Hiring freeze',
        'selmjZr4gfWrPXbao': 'Layoffs',
        'seltcBvKaSTibB0H9': 'Offers rescinded'
    }
    with open('hirings.csv', 'w', newline='') as csvfile:
        writer = csv.writer(csvfile, delimiter=';')
        writer.writerow(['id', 'company', 'status'])
        i = 1
        for r in response:
            company_name = r['cellValuesByColumnId']['fldBWaqJq0Z1LZjNH']
            all_status = r['cellValuesByColumnId'].get('fld29mFhwLNN8tJ1i')
            if all_status:
                all_status = [to_status[s] for s in all_status]
            all_status_n = ""
            if all_status:
                if any(neg in all_status for neg in ['Layoffs', 'Hiring freeze', 'Offers rescinded']):
                    all_status_n = 'Freeze'
                else:
                    all_status_n = 'Hiring'
                print(company_name, all_status_n)
                writer.writerow([i, company_name, all_status_n])
                i += 1


# import_hiring() # run once to generate data

def import_locations():
    params = {
        "hl": "en",
        "gl": "us",
        "google_domain": "google.com",
        "api_key": "550793bf576080db90a6392a62372dc5134e77a6a91953e5447e31dbd774ecbc"
    }
    with open('hirings.csv', mode='r') as csv_file:
        hirings = list(csv.DictReader(csv_file, delimiter=';'))
    with open('7-usa.csv', 'w', newline='') as csvfile:
        writer = csv.writer(csvfile, delimiter=';')
        writer.writerow(['id', 'company', 'status', 'longitude', 'latitude'])
        for h in hirings:
            print(f"Searching for ... {h['company']}")
            params['q'] = h['company']
            client = GoogleSearchResults(params)
            map = client.get_dict().get('local_map')
            if map and map.get('gps_coordinates'):
                long, lat = map['gps_coordinates']['longitude'], map['gps_coordinates']['latitude']
                print(h['company'], h['status'], long, lat)
                writer.writerow([h['company'], h['status'], long, lat])
                time.sleep(1)
    
import_locations()