import json

with open('timeseries.json') as json_file:
    timeseries = json.load(json_file)
    
with open('centroids.json') as json_file:
    countries = json.load(json_file)
    
output = {"type":"FeatureCollection","features":[]}
for c in countries:
    cc = {"type": "Feature", "id": c["name"], "geometry": {"type": "Point", "coordinates": [c["long"], c["lat"]]}, "properties": {}}
    try:
        cvd = timeseries[cc["id"]]
        first, last = 0, len(cvd)-1
        cc["properties"]["first"] = cvd[first]["confirmed"]
        cc["properties"]["last"] = cvd[last]["confirmed"]
        print(cc["id"], ";", cc["properties"]["first"], ";", cc["properties"]["last"])
        output["features"].append(cc)
    except:
        print("ERROR", cc["id"])
    
with open("2-world.json", "w") as write_file:
    json.dump(output, write_file)
    