const { sendMessage, testFail, testPass } = require("./utils")
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
            await failed.push(`\t❌ ${test.title}\n`)
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