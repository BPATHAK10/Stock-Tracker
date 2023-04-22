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
    stock_symbol = request.json['stock_symbol']
    price_threshold = request.json['threshold_price']
    check_frequency = request.json['frequency']
    notification_method = request.json['notification_type']

    print(stock_symbol,price_threshold,check_frequency,notification_method)

    # Retrieve the stock price from Yahoo Finance API
     # Construct the URL for the Yahoo Finance API
    url = f'https://finance.yahoo.com/quote/{stock_symbol}/history?p={stock_symbol}'   
    print(f'url is {url}')

    try:
        stock_price = get_stock_prices(url)
        print(f'latest stock price of {stock_symbol} is {stock_price}')
    
    except:
        return jsonify({"error": "Invalid stock symbol"}), 400



    def check_price(stock_price):
        # Compare the stock price to the price threshold and send notification if necessary
        if float(stock_price) >= float(price_threshold):
            # send_notification(notification_method, stock_symbol, price_threshold, stock_price)
            print("send notif")

        # Set up a timer to check the stock price at the desired frequency
        # check_interval = get_check_interval(check_frequency)
        check_interval = 10
        while True:
            time.sleep(check_interval)
            stock_price = get_stock_prices(url)
            print(f'latest stock price of {stock_symbol} is {stock_price}')
            if float(stock_price) >= float(price_threshold):
                print("send notif")
                # send_notification(notification_method, stock_symbol, price_threshold, stock_price)

    t= threading.Thread(target=check_price,args=(stock_price,))
    t.start()


    # return redirect('/')

    return jsonify({"success":"you will now receive notifications about the stock"})
