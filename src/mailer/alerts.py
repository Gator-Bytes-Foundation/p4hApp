import os
import sys

current_dir = os.path.dirname(os.path.abspath(__file__))
p4hApp_dir = os.path.abspath(os.path.join(current_dir, "../../"))
sys.path.append(p4hApp_dir)

from email.message import EmailMessage
from src.helpers.load_secrets import secrets
import smtplib
from flask import Flask, request, jsonify
from src import app

EMAIL_SENDER = secrets.get("gmail_email")


def send_confirmation_email(recipient_email):
    subject = "Confirmation Email"
    content = "Thank you for signing up. Your account is now confirmed."
    email_data = {'subject': subject, 'content': content, 'recipient': recipient_email}
    send_email_helper(email_data)

def send_password_reset_email(recipient_email):
    subject = "Password Reset"
    content = "Please follow the link to reset your password."
    email_data = {'subject': subject, 'content': content, 'recipient': recipient_email}
    send_email_helper(email_data)

def send_email_helper(email_data):
    msg = EmailMessage()
    msg.set_content(email_data['content'], subtype='html')
    msg['Subject'] = email_data['subject']
    msg['To'] = email_data['recipient']
    msg['From'] = EMAIL_SENDER

    bot = secrets.get("gmail_email")
    password = secrets.get("gmail_app_pwd")

    try:
        smtp_server = smtplib.SMTP('smtp.gmail.com', 587)
        smtp_server.starttls()
        smtp_server.login(bot, password)
        smtp_server.send_message(msg)
        smtp_server.quit()
        print(f"Email sent to {email_data['recipient']} with subject {email_data['subject']}")
        response = {'success': True}
    except Exception as e:
        print(f"Error sending email: {e}")
        response = {'success': False}

    return jsonify(response)


# MAILER ------ EXAMPLE ROUTE ----

# @app.route('/api/send_email', methods=['POST'])
# def send_email():
#     data = request.get_json()
#     if data['emailType'] == 'confirmation':
#         send_confirmation_email(data['userEmail'])
#     elif data['emailType'] == 'reset_password':
#         send_password_reset_email(data['userEmail'])