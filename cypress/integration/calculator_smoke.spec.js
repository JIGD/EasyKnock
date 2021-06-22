import calcValues from '../fixtures/calculator_pass_values.json'
import { calculateProceeds } from './calcUtils'
import { calcResultsValue } from './calcUtils'
import { clickResultsCTA } from './calcUtils'


describe('Leaseback calculator smoke test', () => {

    it('Should calculate cash proceeds', () => {

      cy.visit('https://www.easyknock.com/programs/sellstay')
      
      //Set some values
      calculateProceeds(calcValues.homeValue, calcValues.mortgageBalance, calcValues.liens);
      calcResultsValue().should('have.text', '$46,500')
      clickResultsCTA()
      cy.url().should('include','getoffer')
    })
  })