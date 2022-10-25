import LoginPage from '../pageobjects/login.page'
import SecurePage from '../pageobjects/secure.page'

describe('My Login application - Falha', () => {

    beforeEach(`Login`, async () => {
        await LoginPage.open()
        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
    })

    it('failed 1', async () => {
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!!!')
    });

    it('failed 2', async () => {
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!!!')
    });
});


