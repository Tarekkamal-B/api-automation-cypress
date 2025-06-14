describe("Parsing JSON Response",()=>{

    it("Parsing Simple JSON Response",()=>{

        cy.request({

                    method: 'GET',
                    url: 'https://fakestoreapi.com/products/'

        }).then((response)=>{

            expect(response.status).equal(200);

            expect(response.body[0].title).to.eq("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops");
            expect(response.body[0].price).to.eq(109.95);

            expect(response.body[1].rating.rate).to.eq(4.1);
            expect(response.body[1].rating.count).to.eq(259);

        })

    })


    it("Parsing Complex JSON Response",()=>{

        let totalPrice = 0;

        cy.request({

                    method: 'GET',
                    url: 'https://fakestoreapi.com/products/',
                    qs:{limit:5}

        }).then((response)=>{
            expect(response.status).equal(200);
            response.body.forEach((element)=>{

                totalPrice += element.price;
            });

            expect(totalPrice).to.eq(899.23);
        })

    })

})