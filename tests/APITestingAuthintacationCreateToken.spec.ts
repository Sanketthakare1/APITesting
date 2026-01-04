import { test, expect } from '@playwright/test';

let tokenValue: string;

test.beforeAll(async ({ request }) => {
  const generateToken = await request.post(
    'https://restful-booker.herokuapp.com/auth',
    {
      data: {
        username: 'admin', 
        password: 'password123'
      }
    }
  );

  expect(generateToken.status()).toBe(200);

  const responseBody = await generateToken.json();
  tokenValue = responseBody.token;

  expect(tokenValue).toBeTruthy();
  console.log('Generated Token:', tokenValue);
});

test('Authentication of PUT call using Token', async ({ request }) => {

  const resPut = await request.put(
    'https://restful-booker.herokuapp.com/booking/1',
    {
      headers: {
        Cookie: `token=${tokenValue}`
      },
      data: {
        firstname: 'Jamesaa',
        lastname: 'Brown',
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
          checkin: '2018-01-01',
          checkout: '2019-01-01'
        },
        additionalneeds: 'Breakfast'
      }
    }
  );

  expect(resPut.status()).toBe(200);
});
