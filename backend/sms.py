from twilio.rest import Client
import os
from dotenv import load_dotenv

def send_sms_notification(stock_symbol, price_threshold, stock_price):

    load_dotenv()
    # Your Twilio account SID and auth token
    account_sid = os.environ.get('sid')
    auth_token = os.environ.get('auth_token')

    # Create a Twilio client
    client = Client(account_sid, auth_token)

    body = f'The price of {stock_symbol} has exceeded the price threshold of {price_threshold}. The current price is {stock_price}.'
    
    # Send an SMS message
    message = client.messages.create(
        body=body,
        from_='+16073897181',
        to='++977 9861 468329'
    )

    # Print the message SID
    print(message.sid)
    