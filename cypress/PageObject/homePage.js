class HomePage{

    getStarted(){
        cy.get('.btn-primary > .text').click()
    }
}
export default HomePage