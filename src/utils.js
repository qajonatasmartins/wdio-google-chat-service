const { spec } = require('pactum'),
    sendMessage = async function (webhookUrl, message) {
        if (message !== '') {
            await spec()
                .post(webhookUrl)
                .withHeaders('Content-Type', 'application/json;charset=UTF-8')
                .withBody(`{
                                "text": "${message}"
                            }`)
        }
    },
    addTestFail = async function (tests, error) {
        try {
            return `\t❌ ${tests.title}\n\t\t${error}\n`
        } catch (error) {
            return `the param 'tests' and 'error' is not difined`
        }

    },
    testFail = async function (tests) {
        try {
            return `🐞 Tests execution failure \n\n${tests.length === 0 ? '\t- N/D\n' : tests} \n`
        } catch (error) {
            return `The param 'tests' is undefined. error: ${error}`
        }
    },
    testPass = async function (tests) {
        try {
            return `✔️ Tests run successfully \n\n${tests.length === 0 ? '\t- N/D\n' : tests}\n`
        } catch (error) {
            return `The param 'tests' is undefined. error: ${error}`
        }
    }


module.exports = {
    sendMessage,
    testFail,
    testPass,
    addTestFail
}