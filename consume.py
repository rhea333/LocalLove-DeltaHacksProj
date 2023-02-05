import requests

def RemoveBigCompanies(companies):
    url = 'http://127.0.0.1:8000/DeltaHacks9Big/'
    response = requests.get(url)
    list_of_big_business = response.json()
    for business in list_of_big_business:

        
        companies = [i for i in companies if i['name'] != business['name']]

    """url = 'http://127.0.0.1:8000/DeltaHacks9Small/'
    for small_business in companies:

        requests.post(url, json = small_business)"""

    print(companies)

    companies = [i for i in companies if i['name'] != business['name']]

    url = 'http://127.0.0.1:8000/DeltaHacks9Small/'
    for small_business in companies:
        business = {'name': small_business['name'], 'photos': small_business['photos'], 'rating': small_business['rating']}
        requests.post(url, json = small_business)

    return companies

def DeleteAllSmallBusiness():
    url = 'http://127.0.0.1:8000/DeltaHacks9Small'
    response = requests.get(url)
    list_of_companies = response.json()
    for company in list_of_companies:
        requests.delete(url + '/' + str(company['id']))
