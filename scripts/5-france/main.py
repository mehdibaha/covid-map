import json
import csv
from bs4 import BeautifulSoup
import requests
from mapbox import Geocoder

# Setting default headers to avoing getting flagged
headers = requests.utils.default_headers()
headers.update({ 'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:52.0) Gecko/20100101 Firefox/52.0'})

# Retrieving content
def retrieve_links(start_page=1, end_page=1):
    o_links = []
    get_url = lambda page: f'https://www.leetchi.com/fr/cagnottes?q=covid&p={page}'
    for page in range(start_page, end_page+1):
        req = requests.get(get_url(page), headers)
        soup = BeautifulSoup(req.content, 'html.parser')
        links = soup('a', class_='fundraising-card__link', href=True)
        temp = [l.get('href') for l in links]
        o_links.extend([l.get('href') for l in links])
    o_links = list(set(o_links))
    with open("links.json", "w") as write_file:
        json.dump(o_links, write_file)
    return o_links

# retrieve_links(end_page=45) # run once to generate links to visit

def retrieve_campaigns():
    with open('links.json') as json_file:
        links = json.load(json_file)
    campaigns = []
    for l in links:
        req = requests.get(l, headers)
        soup = BeautifulSoup(req.content, 'html.parser')
        try:
            amount = soup('h1', class_='o-article-status__heading c-header__heading')[0].text.replace('\n', '').replace(' ', '').replace(' ', '').replace('€', '')
            number = soup('div', class_='c-contribution')[0].text.replace('\n', '')
            number = number.replace('Participations', '').replace('Participation', '').replace('Participaciones', '').replace('Contributions', '')
            locations = soup('a', class_='label-geolocation')
            locations = list(set([l.text.replace('\n', '') for l in locations]))
            if int(amount) > 0:
                l = []
                l.append(amount)
                l.append(number)
                l.extend(locations)
                campaigns.append(l)
        except Exception as e:
            print(len(campaigns), e)
            pass
        
    with open('campaigns.csv', 'w', newline='') as csvfile:
        writer = csv.writer(csvfile, delimiter=';')
        for c in campaigns:
            writer.writerow(c)

# retrieve_campaigns(end_page=45) # run once to generate campaigns
       
def geolocate_campaigns():
    geocoder = Geocoder(access_token='pk.eyJ1IjoibWVoZGliYWhhIiwiYSI6ImNrOGZ3bWdmMDAya24zZm8xbGJkYWw3cXkifQ.fS6Ny7_0bZ7swBKW7rvgEQ')
    
    with open('campaigns.csv', mode='r') as csv_file:
        csv_reader = list(csv.DictReader(csv_file, delimiter=';'))
    
    with open('locations.csv', 'w', newline='') as csvfile:
        writer = csv.writer(csvfile, delimiter=';')
        writer.writerow(['id', 'amount', 'number', 'longitude', 'latitude'])
        i = 1
        for row in csv_reader:
            if row.get('location1'):
                search = f"{row['location1']} {row['location2']} {row['location3']}"
                response = geocoder.forward(search, country=['fr'], limit=1)
                geojson = response.geojson()
                print(geojson)
                if geojson['features']:
                    writer.writerow([i, row['amount'], row['number'], geojson['features'][0]['center'][0], geojson['features'][0]['center'][1]])
                    i += 1

# geolocate_campaigns() # run once to geolocate campaigns

def fill_departments():
    geocoder = Geocoder(access_token='pk.eyJ1IjoibWVoZGliYWhhIiwiYSI6ImNrOGZ3bWdmMDAya24zZm8xbGJkYWw3cXkifQ.fS6Ny7_0bZ7swBKW7rvgEQ')
    
    with open('departments.json') as json_file:
        departments = json.load(json_file)
        
    with open('locations.csv', mode='r') as csv_file:
        locations = list(csv.DictReader(csv_file, delimiter=';'))
        
    for f in departments['features']:
        f['properties']['amount'] = 0

    for l in locations:
        response = geocoder.reverse(lon=l['longitude'], lat=l['latitude'], types=['region'], limit=1).geojson()
        dep_code = response['features'][0]['properties']['short_code'].split('-')[1]
        match = None
        for f in departments['features']:
            if f['properties']['code'] == dep_code:
                    f['properties']['amount'] += float(l['amount'])

    with open("5-france.json", "w") as write_file:
        json.dump(departments, write_file)
    
fill_departments()