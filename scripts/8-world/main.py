import csv
import json

def import_stats(type='physicians'):
    with open(f'{type}.csv', mode='r') as csv_file:
        data = list(csv.DictReader(csv_file, delimiter=','))
    with open(f'{type}-2.csv', 'w', newline='') as csvfile:
        writer = csv.writer(csvfile, delimiter=',')
        writer.writerow(['country', 'country_code', 'num_pop'])
        for d in data:
            year = 2019
            while not d[str(year)] and year > 1960:
                year -= 1
            if d[str(year)]:
                writer.writerow([d['Country Name'], d['Country Code'], d[str(year)]])
        
import_stats(type='physicians') # run once to generate data
import_stats(type='nurses') # run once to generate data

def import_centroids(type='physicians'):
    with open(f'{type}-2.csv', mode='r') as csv_file:
        data = list(csv.DictReader(csv_file, delimiter=','))
    with open('../2-world/centroids.json') as json_file:
        countries = json.load(json_file)
    with open(f'{type}-3.csv', 'w', newline='') as csvfile:
        writer = csv.writer(csvfile, delimiter=',')
        writer.writerow(['country', 'country_code', 'num_pop', 'latitude', 'longitude'])
        for d in data:
            match = [r for r in countries if r['name'] == d['country']]
            if match:
                match = match[0]
                writer.writerow([d['country'], d['country_code'], d['num_pop'], match['lat'], match['long']])
            
import_centroids(type='physicians')
import_centroids(type='nurses')

def import_populations(type='physicians'):
    with open(f'{type}-3.csv', mode='r') as csv_file:
        data = list(csv.DictReader(csv_file, delimiter=','))
    with open(f'populations.csv', mode='r') as csv_file:
        populations = list(csv.DictReader(csv_file, delimiter=','))
    with open(f'8-world-{type}.csv', 'w', newline='') as csvfile:
        writer = csv.writer(csvfile, delimiter=',')
        writer.writerow(['country', 'country_code', 'num_pop', 'latitude', 'longitude', 'population', 'num'])
        for d in data:
            match = [p for p in populations if p['Country_Code'] == d['country_code']]
            if match and match[0]['Year_2016']:
                match = match[0]
                writer.writerow(
                    [
                        d['country'], d['country_code'], d['num_pop'], d['latitude'], d['longitude'],
                        int(match['Year_2016']),
                        int(float(match['Year_2016'])*float(d['num_pop'])/1000)
                    ]
                )
                
import_populations(type='physicians')
import_populations(type='nurses')