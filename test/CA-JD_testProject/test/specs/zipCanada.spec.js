/**
 * test with page objects
 */

/*

Test suites for Valid and Invalid Canada Postal codes

Will accept anything, does not need province set to function

*/

//zipCanadaV.data
//countryV valid2 is Canada
//provinceV.validDefault is AB, but noted to be set to ontario?

import RegisterPage from '../pageobjects/register.page.js'
import { testValues } from '../testData/testData.js'

describe('Addressing the Canada Postal field on the page, this positive test suite, zipCanada application...', () => {
    it('will ensure validity of format, EP change to test case #', async () => {
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
               
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.valid2, testValues.cityV.validDefault, testValues.provinceV.validDefault, testValues.zipCanadaV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
        await RegisterPage.nextButton.click()
        await browser.pause(1000)
        
        await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')
        
    })       
            
    })

  /*
  
  Likely need other valid tests for Canada Postal, initial requirements are "7 characters" and "Must have proper format"
  Therefore, format should test for A1A 2B2 with respect to alternating char type, as well as ensuring presence of space.
  But, only disallows symbols.  

  */


//provinceV.validDefault
//zipCanadaI.data

    describe('Addressing the Canada Postal field on the page, this negative test suite, zipCanada application...', () => {
        it('will ensure invalidity of 6 chars, BVA change to test case #', async () => {
            // no space (or 6 char), invalid1
            await RegisterPage.open()
            await expect(RegisterPage.firstNameField).toBeExisting()
            await browser.pause(1000)       
    
            await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.valid2, testValues.cityV.validDefault, testValues.provinceV.validDefault, testValues.zipCanadaI.invalid1, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
           
            await RegisterPage.nextButton.click()
            await browser.pause(1000)
            //await expect(RegisterPage.regSolo).toBeExisting()
            await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')
            
        })

        it('will ensure invalidity of 8 chars, BVA change to test case #', async () => {
            // 8 char, invalid2
            await RegisterPage.open()
            await expect(RegisterPage.firstNameField).toBeExisting()
            await browser.pause(1000)       
    
            await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.valid2, testValues.cityV.validDefault, testValues.provinceV.validDefault, testValues.zipCanadaI.invalid2, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
           
            await RegisterPage.nextButton.click()
            await browser.pause(1000)
            //await expect(RegisterPage.regSolo).toBeExisting()
            await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')
            
        })
    
        it('will ensure invalidity of 6 chars, EP change to test case #', async () => {
            //5 char, invalid3
            await RegisterPage.open()
            await expect(RegisterPage.firstNameField).toBeExisting()
            await browser.pause(1000)       
    
            await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.valid2, testValues.cityV.validDefault, testValues.provinceV.validDefault, testValues.zipCanadaI.invalid3, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
           
            await RegisterPage.nextButton.click()
            await browser.pause(1000)
            //await expect(RegisterPage.regSolo).toBeExisting()
            await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')
            
        })


        it('will ensure invalidity of symbols, EP change to test case #', async () => {
            //No symbols invalid4
            await RegisterPage.open()
            await expect(RegisterPage.firstNameField).toBeExisting()
            await browser.pause(1000)       
    
            await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.valid2, testValues.cityV.validDefault, testValues.provinceV.validDefault, testValues.zipCanadaI.invalid4, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
           
            await RegisterPage.nextButton.click()
            await browser.pause(1000)
            //await expect(RegisterPage.regSolo).toBeExisting()
            await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')
            
        })

        /*
        
        Need invalid5, 9 chars for other EP?
        
        */


         
        })

