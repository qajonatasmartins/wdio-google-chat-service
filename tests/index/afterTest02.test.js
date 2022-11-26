const GoogleChatService = require('../../src'),
    google = new GoogleChatService(), { assert } = require('chai')

describe(`Index`, () => {

    it('[CT-02] - validate result failed', async () => {
        let ct02 = { title: '[TC-02] - Validate test failed' },
            resultData = { passed: false, error: { message: '[TC-02] - Ab1!@#$%ˆ&*()_+?<>;:"˜[]{}\|=-/.,' } },
            expectedFailedResults = '```[TC-02] - Ab1!@#$%ˆ&*()_+?<>;:"˜[]{}\|=-/.,```'

        await google.afterTest(ct02, undefined, resultData)
        await assert.equal(google.failed[0], `\t❌ ${ct02.title}\n\t\t${expectedFailedResults}\n`)
    })
})
