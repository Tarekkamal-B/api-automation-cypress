describe("HTTP Request",()=>{

    it("Get Call",()=>{

        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts')
            .its('status').should('equal',200);
    })

    it("POST Call",()=>{

        cy.request({

                method: 'POST',
                url:'https://jsonplaceholder.typicode.com/posts',
                body:{
                        title: 'foo',
                        body: 'bar',
                        userId: 1, 
                     }
        })
        .its('status').should('equal',201);
    })


    it("PUT Call",()=>{

        cy.request({

                method: 'PUT',
                url:'https://jsonplaceholder.typicode.com/posts/1',
                body:{
                        title: 'updating',
                        body: 'whats new',
                        userId: 15, 
                     }
        })
        .its('status').should('equal',200);
    })


    it("Delete Call",()=>{

        cy.request('DELETE','https://jsonplaceholder.typicode.com/posts/1')
            .its('status').should('equal',200);

    })
})

