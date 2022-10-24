const { sendMessage, testFail, testPass, addTestFail } = require("./utils")
let passed = [], failed = [], resultTests = [], description = '🎯 Test execution\n\n'

class GoogleChatService {

    constructor(options, caps, config) {
        this.options = options
        this.caps = caps
        this.config = config
    }

    async afterTest(test, context, result) {
        if (result.passed) {
            await passed.push(`\t✅ ${test.title}\n`)
        }
        if (!result.passed) {
            let testError = result.error.message.replace(/[\u001b\u009b][-[+()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, ""),
                format = '```'
            await failed.push(await addTestFail(test, `${format}${testError}${format}`))
        }
    }

    async afterSession() {

        if (this.config.framework !== `mocha`) {
            await console.log(`Not supported '${this.config.framework}' framework`)
        }

        if (!this.options.notifyOnlyOnFailure) {
            resultTests.push(
                description,
                await testPass(passed),
                await testFail(failed)
            )
        }

        if (this.options.notifyOnlyOnFailure && resultTests.length !== 0) {
            resultTests.push(
                description,
                await testFail(failed)
            )
        }

        await sendMessage(this.options.webhook, (resultTests.join('')).replace(/,/g, ""))
    }
}

module.exports = GoogleChatService