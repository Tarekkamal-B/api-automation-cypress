describe("Post Calls",()=>{

    it("Approach1- Hard coded json object",()=>{

        const requestBody = 
                           {
                                title: 'Econmy',
                                body: 'the resut of',
                                userId: 4
                            };

        cy.request
            ({
                method: 'POST',
                url: 'https://jsonplaceholder.typicode.com/posts',
                body: requestBody

            })
            .then((response)=>{

                expect(response.status).to.eq(201);
                expect(response.body.title).to.eq('Econmy');
                expect(response.body.body).to.eq('the resut of');
                expect(response.body.userId).to.eq(4);
            })
    })


    it("Approach2- Dynamically generating json object",()=>{

        const requestBody = 
                           {
                                title: Math.random().toString(5).substring(2),
                                body: Math.random().toString(15).substring(2),
                                userId: (Math.floor(Math.random() * 90) + 10)
                            };

        cy.request
            ({
                method: 'POST',
                url: 'https://jsonplaceholder.typicode.com/posts',
                body: requestBody

            })
            .then((response)=>{

                expect(response.status).to.eq(201);
                expect(response.body.title).to.eq(requestBody.title);
                expect(response.body.body).to.eq(requestBody.body);
                expect(response.body.userId).to.eq(requestBody.userId);
            })
    })


    it("Approach3- using Fixture",()=>{

        cy.fixture('PostRequestBody.json').as('requestBody');

        cy.get('@requestBody').then((requestBody)=>{

        cy.request
            ({
                method: 'POST',
                url: 'https://jsonplaceholder.typicode.com/posts',
                body: requestBody

            })
            .then((response)=>{

                expect(response.status).to.eq(201);
                expect(response.body.title).to.eq(requestBody.title);
                expect(response.body.body).to.eq(requestBody.body);
                expect(response.body.userId).to.eq(requestBody.userId);
                // assertion for existing of the properties and it's value 
                expect(response.body).has.property('title',requestBody.title);
                expect(response.body).has.property('body',requestBody.body);
                expect(response.body).has.property('userId',requestBody.userId);

            })
        })

    })
})