describe("Headers & Cookies & Bearer Token Auth",()=>{

    let authToken;

    before("Creating Access Token",()=>{
    
        cy.request({

                    method: 'POST',
                    url: 'https://simple-books-api.glitch.me/api-clients/',
                    headers: { 'Content-Type': 'application/json' },
                    body: {    
                            clientName: 'AWEC',
                            clientEmail: Math.random().toString(5).substring(2)+'@gmail.com'
                          }
        }).then((response)=>{
            authToken = response.body.accessToken;
        });
    });
    
    
    it("Creating new oreder",()=>{

        cy.request({
                    method: 'POST',
                    url: 'https://simple-books-api.glitch.me/orders',
                    headers: { 
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${authToken}`
                             },
                    body: {
                            "bookId": 4,
                            "customerName": "afeweb"
                          }
        }).then((response)=>{
            expect(response.status).equal(201);
            expect(response.body.created).to.eq(true);
        });
    });


    it("Fetching All Orders",()=>{

        cy.request({
                    method: 'GET',
                    url: 'https://simple-books-api.glitch.me/orders',
                    headers: {
                                'Content-Type': 'application/json',
                                'authorization': `Bearer ${authToken}`
                             },
                    cookies: {
                                'cookieName': 'mycookie'
                             }         

        }).then((response)=>{
            expect(response.status).equal(200);
            expect(response.body).has.length(1);
        })
    })
    

})