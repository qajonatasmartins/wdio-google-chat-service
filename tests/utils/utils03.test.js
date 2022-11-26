const { assert } = require("chai"),
    { testPass } = require("../../src/utils")

describe(`Utils`, () => {

    it(`[TC-08] - validate return message testPass >= 1`, async () => {
        let totalTests = ['[TC-08]'], message = await testPass(totalTests)
        await assert.equal(totalTests.length, 1)
        await assert.equal(message, '✔️ Tests run successfully \n\n[TC-08]\n')
    })

    it(`[TC-09] - validate return message testPass = 0`, async () => {
        let totalTests = [], message = await testPass(totalTests)
        await assert.equal(totalTests.length, 0)
        await assert.equal(message, '✔️ Tests run successfully \n\n\t- N/D\n\n')
    })

    it(`[TC-10] - validate return message testPass undefined`, async () => {
        let totalTests, message = await testPass(totalTests)
        await assert.equal(totalTests, undefined)
        await assert.equal(message, `The param 'tests' is undefined. error: TypeError: Cannot read properties of undefined (reading 'length')`)
    })
})