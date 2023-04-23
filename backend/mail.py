from flask_mail import Message
from flask import Flask
from app import app,mail

def send_email(subject, recipients, body):
    with app.app_context():
        msg = Message(subject=subject, recipients=recipients)
        msg.body = body
        mail.send(msg)

def send_mail_notification(stock_symbol, price_threshold, stock_price,email):

    subject = f'{stock_symbol} price alert'
    recipients = []
    recipients.append(email)
    body = f'The price of {stock_symbol} has exceeded the price threshold of {price_threshold}. The current price is {stock_price}.'
    print(f"sending mail to {recipients}")
    send_email(subject, recipients, body)
