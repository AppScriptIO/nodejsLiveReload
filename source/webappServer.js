import path from 'path'
const BrowserSync = require('browser-sync')
import config from '../configuration/configuration.js'
const ServerLivereload = require('./utility/processReload.js')

export function runWebappServer({
    filename = 'entrypoint.js',
    fileBasePath = 'path' || config.directory.serverSidePath, // /project/application/distribution/serverSide/
    targetAppHost = 'localhost',
    targetAppPort = 9903,
    browserSync, // BrowserSync instance
    serverLivereload,
    // File list to watch - Uses globs array for defining files patterns - https://github.com/isaacs/node-glob
    watchFileList_clientSide,
    watchFileList_serverSide,
} = {}) {
    console.info(`☕ Running script "${filePath}${filename}". With arguments: debugArguments.join()`)

    browserSync = BrowserSync.create('Info - locahost server')
    browserSync.init({
        host: targetAppHost,
        port: targetAppPort,
        proxy: {
            target: targetAppHost,
            // ws: true // when localhost webapp uses websocket also.
        },
        ui: {
            port: 9901,
            weinre: { // remove debugger
                port: 9902
            }
        },
        // logLevel: 'debug',
        logConnections: true,
        open: false, // open browser false.
        scriptPath: () => `http://${targetAppHost}/browser-sync/browser-sync-client.js`
    })

    // serverLivereload = new ServerLivereload(debugArguments, { filename, filePath })
    // serverLivereload.on('reload', () => {
    //     browserSync.reload()
    // })

    // serverLivereload.reload()
}
