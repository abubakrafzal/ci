const slack = require ('wdio-slack-reporter').default;

module.exports = {
    reporters: ['slack'],
    reporterOptions: {
        slack: {
            notify: process.env.SLACK || true,
            webhook: "https://hooks.slack.com/services/..." || process.env.SLACK_WEBHOOK,
            notifyOnlyOnFailure: process.env.SLACK_FAILURE_ONLY || false,
            username: 'TestBot',
            // An optional message to include at the top of the notification
            message: 'This is an optional message',
            // results-Optional: Provide a link to the results, below is an example of linking to
            // the build results on Jenkins
            results: process.env.JENKINS_URL,
        }
    },
    // ...
};