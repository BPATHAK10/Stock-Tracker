from flask import request, jsonify
from app import app
from bs4 import BeautifulSoup
import requests
import time
import threading

@app.route('/', methods=['GET'])
def home():
    print("dlafjalsdkf")

    return jsonify({"success":"yess"})

@app.route('/check-stock', methods=['POST'])
def stock_price_alert():
    stock_symbol = request.json['stock-symbol']
    price_threshold = request.json['price-threshold']
    check_frequency = request.json['check-frequency']
    notification_method = request.json['notif-method']

    print(stock_symbol,price_threshold,check_frequency,notification_method)

    # Retrieve the stock price from Yahoo Finance API
     # Construct the URL for the Yahoo Finance API
    url = f'https://finance.yahoo.com/quote/{stock_symbol}/history?p={stock_symbol}'   
    print(f'url is {url}')

    stock_price = get_stock_prices(url)
    print(f'latest stock price is {stock_price}')


    def check_price(stock_price):
        # Compare the stock price to the price threshold and send notification if necessary
        if float(stock_price) >= float(price_threshold):
            send_notification(notification_method, stock_symbol, price_threshold, stock_price)

        # Set up a timer to check the stock price at the desired frequency
        # check_interval = get_check_interval(check_frequency)
        check_interval = 10
        while True:
            time.sleep(check_interval)
            stock_price = get_stock_prices(url)
            if float(stock_price) >= float(price_threshold):
                send_notification(notification_method, stock_symbol, price_threshold, stock_price)

    t= threading.Thread(target=check_price,args=(stock_price,))
    t.start()


    # return redirect('/')

    return jsonify({"success":"you will now receive notifications about the stock"})

def send_notification(notification_method, stock_symbol, price_threshold, stock_price):
    # Implement notification logic here
    print(f"the notification of {stock_symbol} is sent")


def get_check_interval(check_frequency):
    if check_frequency == 'every-hour':
        return 3600
    elif check_frequency == 'every-day':
        return 86400
    else:
        return 3600


def get_stock_prices(url):
    response = requests.get(url,headers={'User-Agent': 'Custom'})
    print(response.status_code)
    soup = BeautifulSoup(response.content, 'html.parser')

    # print(soup)
    table = soup.find('table',{'data-test':'historical-prices'})
    headers = [th.text.strip() for th in table.select('thead th')]
    rows = []
    for row in table.select('tbody tr'):
        rows.append([td.text.strip() for td in row.select('td')])

    #store the prices in a variable
    data = []
    for row in rows:
        data.append(dict(zip(headers, row)))

    latest_price = data[0]["Close*"]
    return float(latest_price.replace(',',''))

def get_unix_timestamps(period):
    # Convert the period string to Unix timestamps
    if period == '1d':
        period1 = int(time.time()) - 86400
        period2 = int(time.time())
    elif period == '5d':
        period1 = int(time.time()) - 5*86400
        period2 = int(time.time())
    elif period == '1mo':
        period1 = int(time.time()) - 31*86400
        period2 = int(time.time())
    elif period == '3mo':
        period1 = int(time.time()) - 3*31*86400
        period2 = int(time.time())
    elif period == '6mo':
        period1 = int(time.time()) - 6*31*86400
        period2 = int(time.time())
    elif period == '1y':
        period1 = int(time.time()) - 365*86400
        period2 = int(time.time())
    elif period == '5y':
        period1 = int(time.time()) - 5*365*86400
        period2 = int(time.time())
    else:
        period1 = None
        period2 = None

    return period1, period2