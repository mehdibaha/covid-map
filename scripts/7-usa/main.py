import json

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
    for r in response:
        company_name = r['cellValuesByColumnId']['fldBWaqJq0Z1LZjNH']
        all_status = r['cellValuesByColumnId'].get('fld29mFhwLNN8tJ1i')
        if all_status:
            all_status = [to_status[s] for s in all_status]
        print(company_name, all_status)

import_hiring()
