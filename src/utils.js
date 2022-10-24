const { spec } = require('pactum'),
    sendMessage = async function (webhook, message) {
        if (message !== '') {
            await spec()
                .post(webhook)
                .withHeaders('Content-Type', 'application/json;charset=UTF-8')
                .withBody(`{
                                "text": "${message}"
                            }`)
        }
    },
    addTestFail = async function (tests, error) {
        return await `\t❌ ${tests.title}\n\t\t${error}\n`
    },
    testFail = async function (tests) {
        return `🐞 Tests execution failure \n\n${tests.length === 0 ? '\t- N/D\n' : tests} \n`
    },
    testPass = async function (tests) {
        return `✔️ Tests run successfully \n\n${tests.length === 0 ? '\t- N/D\n' : tests}\n`
    }


module.exports = {
    sendMessage,
    testFail,
    testPass,
    addTestFail
}