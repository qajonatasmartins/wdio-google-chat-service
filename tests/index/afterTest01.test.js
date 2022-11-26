const GoogleChatService = require('../../src'),
    google = new GoogleChatService(), { assert } = require('chai')

describe(`Index`, () => {

    it('[CT-01] - validate result passed', async () => {
        let ct01 = { title: '[TC-01] - Validate test passed' },
            resultData = { passed: true }

        await google.afterTest(ct01, undefined, resultData)
        await assert.equal(google.passed[0], '\t✅ [TC-01] - Validate test passed\n')
    })
})
