
import{test,expect} from '@playwright/test';
import { request } from 'node:http';


test("Delete API", async({request})=>{

    const delRe = await request.delete("/booking/2");
    expect(delRe.status()).toBe(200);

            const text= await  delRe.text();
            console.log(text);
            expect(text).toEqual("Created");

    const resGET = await request.get("https://restful-booker.herokuapp.com/booking/2");
    console.log(resGET.status());
    expect(resGET.status()).toBe(404);  

})