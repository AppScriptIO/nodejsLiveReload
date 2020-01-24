import path from 'path'
import assert from 'assert'
import BrowserSync from 'browser-sync'
import { watchFile } from '@deployment/nodejsLiveReload'
// import proxyMiddleware from 'http-proxy-middleware'

export async function browserLivereload({
  targetProject, // `Project class` instance created by `scriptManager` from the configuration file of the target project.
  rootServicePort = 8080,
  rootServiceHost = 'localhost',
  watchPathList = false,
} = {}) {
  assert(targetProject, `targetProject must be passed.`)

  let browserSync = BrowserSync.create('BrowserProxySever'),
    browserSyncProxy = { port: 9090, host: 'localhost' }

  process.on('SIGINT', () => browserSync.exit()) // make sure to close socket to prevent hanging node process.

  browserSync.init({
    host: browserSyncProxy.host,
    port: browserSyncProxy.port, // the newly proxified port, which provides access to the running server and injects livereload script.
    proxy: {
      target: `${rootServiceHost}:${rootServicePort}`, // existing running server
      // ws: true // when localhost webapp uses websocket also.
    },
    ui: {
      port: 9901,
      weinre: {
        port: 9902,
      },
    },
    logLevel: 'info' || 'debug',
    logConnections: true,
    open: false, // open browser false.
    scriptPath: () => `http://${browserSyncProxy.host}:${browserSyncProxy.port}/browser-sync/browser-sync-client.js`,
  })

  function restart() {
    browserSync.reload()
  }

  if (watchPathList && Array.isArray(watchPathList))
    await watchFile({
      // to be run after file notification
      triggerCallback: () => restart(),
      // TODO: make sure explicitly adding `./node_modules/` into the this array, will prevent it from being ignored.
      fileArray: watchPathList,
      ignoreNodeModules: true,
      logMessage: true,
    })

  return { restart }
}
