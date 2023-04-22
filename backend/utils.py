from bs4 import BeautifulSoup
import requests
from mail import send_mail_notification
from sms import send_sms_notification

def get_stock_prices(url):
    print("fetching stock price")
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


def send_notification(notification_method, stock_symbol, price_threshold, stock_price):
    # Implement notification logic here
    if notification_method == "email":
        send_mail_notification(stock_symbol,price_threshold,stock_price)
    elif notification_method == "text":
        send_sms_notification(stock_symbol,price_threshold,stock_price)
    

    print(f"the notification of {stock_symbol} is sent through {notification_method}")


def get_check_interval(check_frequency):
    if check_frequency == 'hourly':
        return 3600
    elif check_frequency == 'daily':
        return 86400
    elif check_frequency == 'weekly':
        return 604800
    elif check_frequency == 'monthly':
        return 2592000  # assuming 30 days per month
    else:
        return 3600  # default to every hour
