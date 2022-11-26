const { sendMessage, testFail, testPass, addTestFail } = require("./utils")

class GoogleChatService {

    constructor(options, caps, config, passed = [], failed = [], resultTests = [], description = '🎯 Test execution\n\n') {
        this.options = options
        this.caps = caps
        this.config = config
        this.passed = passed
        this.failed = failed
        this.resultTests = resultTests
        this.description = description
    }

    async afterTest(test, context, result) {
        if (result.passed) {
            await this.passed.push(`\t✅ ${test.title}\n`)
        }
        if (!result.passed) {
            let testError = result.error.message.replace(/[\u001b\u009b][-[+()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, ""),
                format = '```'
            await this.failed.push(await addTestFail(test, `${format}${testError}${format}`))
        }
    }

    async afterSession() {

        if (this.config.framework !== `mocha`) {
            await console.log(`Not supported '${this.config.framework}' framework`)
        }

        if (!this.options.notifyOnlyOnFailure) {
            this.resultTests.push(
                this.description,
                await testPass(this.passed),
                await testFail(this.failed)
            )
        }

        if (this.options.notifyOnlyOnFailure && resultTests.length !== 0) {
            this.resultTests.push(
                this.description,
                await testFail(this.failed)
            )
        }

        await sendMessage(this.options.webhookUrl, (this.resultTests.join('')).replace(/,/g, ""))
    }
}

module.exports = GoogleChatService