const GoogleChatService = require('../../src'),
    google = new GoogleChatService(), { assert } = require('chai')

describe(`Index`, () => {

    it('[CT-03] - validate result failed and passed', async () => {

        let ct03_1 = { title: '[TC-03] - Validate test passed' },
            resultData_1 = { passed: true },
            expectedFailedResults = '```[TC-03] - Ab1!@#$%ˆ&*()_+?<>;:"˜[]{}\|=-/.,```',
            ct03_2 = { title: '[TC-03] - Validate test failed' },
            resultData_2 = { passed: false, error: { message: '[TC-03] - Ab1!@#$%ˆ&*()_+?<>;:"˜[]{}\|=-/.,' } }

        await google.afterTest(ct03_1, undefined, resultData_1)
        await google.afterTest(ct03_2, undefined, resultData_2)

        await assert.equal(google.passed[0], '\t✅ [TC-03] - Validate test passed\n')
        await assert.equal(google.failed[0], `\t❌ ${ct03_2.title}\n\t\t${expectedFailedResults}\n`)
    })
})
