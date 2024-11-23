interface EmailTemplateProps {
    email: string;
    fullName: string;
    brandName: string;
    fleetSize: string;
    businessType: string;
    teamSize: string;
    locations: string;
    country: string;
    state: string;
    city: string;
    postalCode: string;
    address: string;
    contactNumber: string;
    brandModels: {
        [key: string]: string[];
    };
    selectedCountry: string;
}


export const emailTemplate = (data: EmailTemplateProps) => {
    return `
    <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Business Information</title>
            </head>
            <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f0f4f8; -webkit-font-smoothing: antialiased; line-height: 1.4;">
      
                <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f0f4f8; padding: 20px;">
                    <tr>
                        <td align="center">
                            <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin: 0 auto;">
                      
                                <tr>    
                                    <td style="background: linear-gradient(to right, #2563eb, #1d4ed8); padding: 32px; text-align: center;">
                                        <h1 style="color: #ffffff; font-size: 24px; margin: 0; padding: 0;">${data.brandName}</h1>
                                        <p style="color: #e6f0ff; margin: 8px 0 0 0; font-size: 16px;">Business Information</p>
                                    </td>
                                </tr>

                              
                                <tr>
                                    <td style="padding: 32px;"> 
                                        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f0f7ff; border-radius: 8px; margin-bottom: 24px;">
                                            <tr>
                                                <td style="padding: 24px;">
                                                    <h2 style="color: #1e40af; font-size: 18px; margin: 0 0 16px 0;">Primary Contact</h2>
                                                    <table width="100%" cellpadding="0" cellspacing="0">
                                                        <tr>
                                                            <td width="120" style="color: #2563eb; font-weight: 500; padding: 8px 0;">Full Name:</td>
                                                            <td style="color: #374151; padding: 8px 0;">${data.fullName}</td>
                                                        </tr>
                                                        <tr>
                                                            <td style="color: #2563eb; font-weight: 500; padding: 8px 0;">Email:</td>
                                                            <td style="color: #374151; padding: 8px 0;">${data.email}</td>
                                                        </tr>
                                                        <tr>
                                                            <td style="color: #2563eb; font-weight: 500; padding: 8px 0;">Phone:</td>
                                                            <td style="color: #374151; padding: 8px 0;">${data.contactNumber}</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>

                                        <!-- Business Details Section -->
                                        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; border-radius: 8px; margin-bottom: 24px;">
                                            <tr>
                                                <td style="padding: 24px;">
                                                    <h2 style="color: #1f2937; font-size: 18px; margin: 0 0 16px 0;">Business Details</h2>
                                                    <table width="100%" cellpadding="0" cellspacing="0">
                                                        <tr>
                                                            <td width="50%" style="padding-bottom: 16px;">
                                                                <span style="color: #4b5563; font-weight: 500; display: block; margin-bottom: 4px;">Business Type</span>
                                                                <span style="color: #1f2937;">${data.businessType}</span>
                                                            </td>
                                                            <td width="50%" style="padding-bottom: 16px;">
                                                                <span style="color: #4b5563; font-weight: 500; display: block; margin-bottom: 4px;">Fleet Size</span>
                                                                <span style="color: #1f2937;">${data.fleetSize}</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="50%" style="padding-bottom: 16px;">
                                                                <span style="color: #4b5563; font-weight: 500; display: block; margin-bottom: 4px;">Team Size</span>
                                                                <span style="color: #1f2937;">${data.teamSize}</span>
                                                            </td>
                                                            <td width="50%" style="padding-bottom: 16px;">
                                                                <span style="color: #4b5563; font-weight: 500; display: block; margin-bottom: 4px;">Locations</span>
                                                                <span style="color: #1f2937;">${data.locations}</span>
                                                            </td>
                                                        </tr>
                                                        
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; border-radius: 8px; margin-bottom: 24px;">
                                            <tr>
                                                <td style="padding: 24px;">
                                                    <h2 style="color: #1f2937; font-size: 18px; margin: 0 0 16px 0;">Country Details</h2>
                                                    <table width="100%" cellpadding="0" cellspacing="0">
                                                        <tr>
                                                            <td width="50%" style="padding-bottom: 16px;">
                                                                <span style="color: #4b5563; font-weight: 500; display: block; margin-bottom: 4px;">Selected Country</span>
                                                                <span style="color: #1f2937;">${data.selectedCountry}</span>
                                                            </td>
                                                             
                                                        </tr>

                                                    </table>
                                                </td>
                                            </tr>
                                        </table>


                            <!-- Brand Models Section -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f0f7ff; border-radius: 8px; margin-bottom: 24px;">
                                <tr>
                                    <td style="padding: 24px;">
                                        <h2 style="color: #1e40af; font-size: 18px; margin: 0 0 16px 0;">${data.fullName} selected this brands and models</h2>
                                        <table width="100%" cellpadding="0" cellspacing="0">
                                            ${Object.entries(data.brandModels).map(([brand, models]) => `
                                                <tr>
                                                    <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                                                    <p style="color: #2563eb; font-weight: 600; margin: 0 0 8px 0;">${brand}</p>
                                                    <p style="color: #374151; margin: 0; line-height: 1.5;">
                                                        ${models ? models.join(', ') : 'No compatible models found'}
                                                    </p>
                                                    </td>
                                                </tr>
                                            `).join('')}
                                        </table>
                                    </td>
                                </tr>
                            </table>


                                        <!-- Address Section -->
                                        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; border-radius: 8px;">
                                            <tr>
                                                <td style="padding: 24px;">
                                                    <h2 style="color: #1f2937; font-size: 18px; margin: 0 0 16px 0;">Location Details</h2>
                                                    <p style="color: #1f2937; font-weight: 500; margin: 0 0 4px 0;">${data.address}</p>
                                                    <p style="color: #374151; margin: 0 0 4px 0;">${data.city}, ${data.state} ${data.postalCode}</p>
                                                    <p style="color: #374151; margin: 0;">${data.country}</p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>

                                <!-- Footer -->
                                <tr>
                                    <td style="background-color: #f9fafb; border-top: 1px solid #f3f4f6; padding: 24px; text-align: center;">
                                        <p style="color: #6b7280; font-size: 14px; margin: 0 0 8px 0;">This email was sent automatically in response to your business information submission.</p>
                                        <p style="color: #6b7280; font-size: 14px; margin: 0;">Please do not reply to this email.</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </body>
            </html>
    `
}