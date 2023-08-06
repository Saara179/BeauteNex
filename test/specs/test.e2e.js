import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    for(let i=0; i<10; i++){
        it('should login with valid credentials. running ' + i + ' times', async () => {
            await browser.maximizeWindow();
            await LoginPage.open()
            await LoginPage.login('tomsmith', 'SuperSecretPassword!')
            await expect(SecurePage.flashAlert).toBeExisting()
            await expect(SecurePage.flashAlert).toHaveTextContaining(
                'You logged into a secure area!')
        })
    }
})

