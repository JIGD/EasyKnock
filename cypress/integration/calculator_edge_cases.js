import calcValues from '../fixtures/calculator_pass_values.json'
import failcalcValues from '../fixtures/calculator_fail_values.json'
import { calculateProceeds } from './calcUtils'
import { calcResultsValue } from './calcUtils'
import { proceedsErrorAppears } from './calcUtils'

describe('Leaseback calculator edge cases', () => {

    it('should not accept home value when it\'s too high', () => {

      cy.visit('https://www.easyknock.com/programs/sellstay')
      
      calculateProceeds(failcalcValues.homeValue.tooHigh, calcValues.mortgageBalance, calcValues.liens)
      proceedsErrorAppears()
    })

    it('should not accept home value when it\'s too low', () => {

      cy.visit('https://www.easyknock.com/programs/sellstay')
      
      calculateProceeds(failcalcValues.homeValue.tooLow, calcValues.mortgageBalance, calcValues.liens)
      proceedsErrorAppears()
    })

    it('should calculate cash proceeds to 0', () => {

      cy.visit('https://www.easyknock.com/programs/sellstay')
      
      //Set some values

      calculateProceeds(calcValues.homeValue, '35045', '31,455,');
      calcResultsValue().should('have.text', '$0')
    })

    it('should return a failure condition if the value is below 0', () => {

      cy.visit('https://www.easyknock.com/programs/sellstay')
      
      //Set some values

      calculateProceeds(calcValues.homeValue, failcalcValues.mortgageBalance, '0');
      proceedsErrorAppears()
    })
    
  })