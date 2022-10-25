import LoginPage from '../pageobjects/login.page'
import SecurePage from '../pageobjects/secure.page'

describe('My Login application - failed and successfully', () => {

    beforeEach(`Login`, async () => {
        await LoginPage.open()
        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
    })

    it('successfully', async () => {
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });

    it('failed', async () => {
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!!!')
    });
});


