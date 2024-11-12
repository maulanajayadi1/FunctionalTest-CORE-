import { expect } from '@wdio/globals'
import LoginPage from '../features/pageobjects/login.page'
import SecurePage from '../../../features/pageobjects/Procurement/Sprint NOV1 2024/secure.page'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
        await expect(SecurePage.flashAlert).toMatchElementSnapshot('flashAlert')
    })
})

