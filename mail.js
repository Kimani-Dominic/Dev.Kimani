// const msg = {
//     to: 'test@example.com',
//     from: 'test@example.com', 
//     subject: 'Sending with SendGrid is Fun',
//     text: 'and easy to do anywhere, even with JavaScript',
//     html: '<strong>and easy to do anywhere, even with JavaScript</strong>',
//   };
  
//   fetch('https://api.sendgrid.com/v3/mail/send', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer YOUR_SENDGRID_API_KEY',
//     },
//     body: JSON.stringify(msg),
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Failed to send email');
//     }
//     console.log('Email sent');
//   })
//   .catch(error => {
//     console.error(error);
//   });
  