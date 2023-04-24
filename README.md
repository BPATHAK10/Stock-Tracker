# Stock Tracker

Stock Tracker is a stock price notification web application that allows users to receive notifications when the price of a given stock reaches a certain threshold. The application allows users to enter a stock ticker symbol and a price threshold, and it sends a notification (e.g., an email or a text message) to the user when the stock's price reaches or exceeds the threshold.

## Features:

- Stock price monitoring: Users can select a stock ticker symbol and a price threshold, and the application monitors the stock's price and sends a notification when the threshold is reached.
- Notification system: The application sends notifications (e.g., an email or a text message) to the user when the stock's price reaches or exceeds the threshold.
- User settings: Users can manage their notification settings, including the email address or phone number to which notifications should be sent and the threshold price and also the frequency of checks for the stock.

## Technologies:

- Python: The back-end of the application is built using the Python programming language.
- Flask: Flask is a lightweight web framework used to build web application.
- React : React is a JavaScript library for building user interfaces.
- Flask-mail: Flask-Mail is an extension for Flask that simplifies the process of sending  emails from a Flask application.
- Twillo : Twilio is a cloud communications platform that provides APIs for SMS, voice, and video messaging.

## Installation:

1. Clone the project repository
2. Navigate to the project directory in the command line.
3. Create a Python virtual environment for the project using virtualenv or venv.
4. Activate the virtual environment using the appropriate command for your OS (e.g. source venv/bin/activate on Linux/MacOS or venv\Scripts\activate on Windows).
5. Install the Python dependencies using `pip install -r requirements.txt`.
6. Navigate to the frontend directory in the command line.
7. Install the Node.js dependencies using `npm install`.
8. Start the react app with `npm start`
9. Navigate back to the project root directory.
10. Start the Flask development server using `python app.py`.

The web application should now be accessible at the specified URL (e.g. http://localhost:3000).

## Usage:

1. Enter the proper stock symbol from yahoo finance.
2. Enter a price threshold and set your notification settings.
3. Also set the frequency of check for the price
4. Wait for the stock price to reach or exceed the threshold, and receive a notification.

