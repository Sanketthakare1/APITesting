import{test , request} from "@playwright/test"

let baa;
test.beforeEach ("Before all" ,async()=>{

  baa=   await request.newContext({

        baseURL:"https://restful-booker.herokuapp.com",
         extraHTTPHeaders:{
             Accept: "application/json";
         }

     })
})


test("API GET Request 1",async({request})=>{

     const a=  await request.get("https://restful-booker.herokuapp.com/booking",{
        headers:{

            Accept: "application/json";
            

            

        }
    
});
     console.log(await a.json());
})

test("API GET Request 2",async()=>{

    const req=   await request.newContext({

         baseURL:"https://restful-booker.herokuapp.com",
         extraHTTPHeaders:{
             Accept: "application/json";
         }
       })

        const res= await  req.get("/booking");
        console.log(await res.json());
})

test("Api  GET request 3",async()=>{
     
       const res= await   baa.get("/booking");
       console.log(baa.json())
       
         }
         
})

