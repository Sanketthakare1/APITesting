import { test, expect } from '@playwright/test';

test('Post API request - Create Booking', async ({ request }) => {

  // Send POST request
  const response = await request.post('/booking', {
    data: {
      firstname: 'Jim',
      lastname: 'Brown',
      totalprice: 111,
      depositpaid: true,
      bookingdates: {
        checkin: '2018-01-01',
        checkout: '2019-01-01'
      },
      additionalneeds: 'Breakfast'
    }
  });

  // Validate response status
//   expect(response.status()).toBe(200);
//   expect(response.ok()).toBeTruthy();

  // Parse response JSON
  const responseBody = await response.json();
  console.log(responseBody);

//   // Validate booking id exists
//   expect(responseBody.bookingid).toBeTruthy();

  // Validate booking details
  expect(responseBody.booking).toMatchObject({
    firstname: 'Jim',
    lastname: 'Brown',
    totalprice: 111,
    depositpaid: true,
    bookingdates: {
      checkin: '2018-01-01',
      checkout: '2019-01-01'
    },
    additionalneeds: 'Breakfast'
  });
});
