import { test ,expect } from '@playwright/test';



test("Fetch the header validate Response",async({request})=>{

  const getResponse =  await request.get("/booking/1");
     const getheader = getResponse.headers();
     console.log(getheader);
     expect(getheader.server).toEqual("Heroku");
     expect(getheader['x-powered-by']).toEqual('Express');

     console.log("*************************************");

         const getArray = getResponse.headersArray();
         console.log(getArray);
})