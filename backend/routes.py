from flask import request, jsonify
from app import app
from utils import *

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
        check_interval = get_check_interval(check_frequency)
        # check_interval = 1000
        while True:
            time.sleep(check_interval)
            stock_price = get_stock_prices(url)
            if float(stock_price) >= float(price_threshold):
                send_notification(notification_method, stock_symbol, price_threshold, stock_price)

    t= threading.Thread(target=check_price,args=(stock_price,))
    t.start()


    # return redirect('/')

    return jsonify({"success":"you will now receive notifications about the stock"})
