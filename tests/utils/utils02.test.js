const { assert } = require("chai"),
    { testFail } = require("../../src/utils")

describe(`Utils`, () => {

    it(`[TC-05] - validate return message testFail >= 1`, async () => {
        let totalTests = ['[TC-05]'], message = await testFail(totalTests)
        await assert.equal(totalTests.length, 1)
        await assert.equal(message, '🐞 Tests execution failure \n\n[TC-05] \n')
    })

    it(`[TC-06] - validate return message testFail = 0`, async () => {
        let totalTests = [], message = await testFail(totalTests)
        await assert.equal(totalTests.length, 0)
        await assert.equal(message, '🐞 Tests execution failure \n\n\t- N/D\n \n')
    })

    it(`[TC-07] - validate return message testFail undefined`, async () => {
        let totalTests, message = await testFail(totalTests)
        await assert.equal(totalTests, undefined)
        await assert.equal(message, `The param 'tests' is undefined. error: TypeError: Cannot read properties of undefined (reading 'length')`)
    })
})