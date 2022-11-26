const { assert } = require("chai"),
    { addTestFail, testFail, testPass, sendMessage } = require("../../src/utils")

describe(`Utils`, () => {

    it(`[TC-04] - validate return message addTestFail`, async () => {
        let ct04 = { title: '[TC-04] - validate return message addTestFail', error: '[TC-04] - Ab1!@#$%ˆ&*()_+?<>;:"˜[]{}\|=-/.,' },
            message = await addTestFail(ct04, ct04.error)
        await assert.equal(message, '\t❌ [TC-04] - validate return message addTestFail\n\t\t[TC-04] - Ab1!@#$%ˆ&*()_+?<>;:"˜[]{}|=-/.,\n')
    })
})