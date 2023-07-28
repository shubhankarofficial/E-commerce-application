import nodemailer from 'nodemailer';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { Template } from './Template';

export async function sendOrderNoticeEmail({ creditCardDetails, orderDetails }) {

    console.log("Details?", creditCardDetails, orderDetails);
  let transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 587,
    secure: false,
    auth: {
      user: '3dfe37483c7040',
      pass: 'becc23f43c2f30',
    },
  });

  await transporter.sendMail({
    from: 'shubhankargarg78@gmail.com', // Replace with any email address you prefer
    to: 'shubhankargarg78@gmail.com', // Replace with any email address you prefer
    subject: 'Order received!!',
    html: ReactDOMServer.renderToString(< Template creditCardDetails={creditCardDetails} orderDetails={orderDetails} />)
  });

  console.info('SENT A MESSAGE');
}