import { emailTemplate } from "@/lib/Email/template";
import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/sendMail";
import { SendMailOptions } from "nodemailer";

// Create new job
export async function POST(req: Request) {
  try {
    const reqBody = await req.json();

    if (!reqBody) {
      return NextResponse.json({ status: "Data Not Found" }, { status: 400 });
    }

    const { selectedCountry, email, fullName, brandName, fleetSize, businessType, teamSize, locations, country, state, city, postalCode, address, contactNumber, brandModels, brands } = reqBody;

    const emailData = {
      email,
      fullName,
      brandName,
      fleetSize,
      businessType,
      teamSize,
      locations,
      country,
      state,
      city,
      postalCode,
      address,
      contactNumber,
      brandModels,
      brands,
      selectedCountry,
    }

    console.log(emailData, 'emailData from backend');

    const emailHtml = emailTemplate(emailData);

    const emailOptions: SendMailOptions = {
      to: 'sarkarsoumik215@gmail.com',
      subject: "✨ Someone showed early interest 🚗",
      html: emailHtml,
    }

    const emailResponse = await sendEmail(emailOptions);

    console.log(emailResponse, 'emailResponse');


    return NextResponse.json({
      message: "Email sent successfully",
      data: reqBody,
      status: 201,
    });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json(
      { status: "fail", error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 },
    );
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');
    const emailOptions: SendMailOptions = {
      to: 'sarkarsoumik215@gmail.com',
      subject: "✨ Someone subscribed to the newsletter 🚗",
      html: `<!DOCTYPE html>
<html lang="en" style="margin: 0; padding: 0; box-sizing: border-box;">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Subscriber - Newsletter</title>
  <style>
    /* Reset some default styles */
    body, h1, h2, h3, h4, h5, h6, p, ol, ul {
      margin: 0;
      padding: 0;
      font-family: 'Helvetica Neue', Arial, sans-serif;
    }

    body {
      background-color: #f5f5f5;
      color: #333;
      line-height: 1.6;
    }

    /* Container styles */
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 30px;
      background-color: white;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    /* Header styles */
    .header {
      text-align: center;
      padding-bottom: 20px;
      border-bottom: 1px solid #e0e0e0;
    }

    .header h1 {
      font-size: 24px;
      font-weight: bold;
      color: #0077b6;
    }

    /* Content styles */
    .content {
      padding: 20px 0;
    }

    .content p {
      margin-bottom: 16px;
    }

    /* Footer styles */
    .footer {
      text-align: center;
      font-size: 14px;
      color: #666;
      padding-top: 20px;
      border-top: 1px solid #e0e0e0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>✨ Someone subscribed to the newsletter 🚗</h1>
    </div>
    <div class="content">
      <p>Hello Admin,</p>
      <p>A new user with email <b>${email}</b> has subscribed to the newsletter.</p>
    </div>
    <div class="footer">
      <p>This is an automated message, please do not reply.</p>
    </div>
  </div>
</body>
</html>
            `,
    }

    const emailResponse = await sendEmail(emailOptions);

    console.log(emailResponse, 'emailResponse');


    return NextResponse.json({
      message: "Subscribed successfully!",
      status: 201,
    });


    return NextResponse.json({ message: "Hello, World!" }, { status: 200 });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json(
      { status: "fail", error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 },
    );
  }
}
