declare module WebdriverIO {
    // adding command to `browser`
    interface Browser {
        browserCustomCommand: (arg) => void
        waitAndClick: () => void
        waitAndSendkeys:() => void
    }
}