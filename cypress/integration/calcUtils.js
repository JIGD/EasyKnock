//Common commands can be added as custom commands but since this is pretty limited to the calculator it's better to limit it
export let calculateProceeds = (homeValue, mortgageBalance, liens) => {
    cy.get('#homeValue').type(homeValue)
    cy.get('#mortgageBalance').type(mortgageBalance)
    cy.get('#liens').type(liens)
    cy.get('form').contains('Calculate').click()
  }

  export let calcResultsValue = () => {
    return cy.xpath('//span[contains(@class,"ResultsValue")]')
  }

  export let proceedsErrorAppears = () => {
    cy.xpath('//*[contains(@class,"ResultsError")]').should('exist')
  }
  
  export let clickResultsCTA = () => {
    cy.xpath('//div[contains(@class,"ResultsCTA")]').click()
  }