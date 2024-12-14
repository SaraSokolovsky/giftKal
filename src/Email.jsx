import React from 'react';
import emailjs from 'emailjs-com';

const SendEmailButton = () => {
  const sendEmail = () => {
    const templateParams = {
      to_name: 'Your Name', // שם השולח
      message: 'This is an automated message.',
      from_name: 'Sender', // שם השולח, יכול להיות כל דבר
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((err) => {
        console.error('Error sending email:', err);
      });
  };

  return (
    <button onClick={sendEmail}>
      שלח אימייל
    </button>
  );
};

export default SendEmailButton;
