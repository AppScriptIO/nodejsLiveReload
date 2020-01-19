import path from 'path'
import assert from 'assert'
import BrowserSync from 'browser-sync'
import EventEmitter from 'events'
import childProcess from 'child_process'
// import proxyMiddleware from 'http-proxy-middleware'

process.on('SIGINT', () => {
  console.log('Caught interrupt signal - test container level')
  process.exit(0)
})

export class ServerLivereload extends EventEmitter {
  constructor({ filename }) {
    super()
    this.nodeProcess
    this.filename = filename
    // clean up if an error goes unhandled.
    process.on('exit', () => {
      if (this.nodeProcess) this.nodeProcess.kill()
    })
  }

  reload() {
    if (this.nodeProcess) this.nodeProcess.kill()

    // node = childProcess.fork('babelCompile.entrypoint.js', { cwd: '/app/serverSide', stdio:'inherit', execArgv: debugArguments})
    // node = childProcess.spawn('node', ['babelCompile.entrypoint.js'], { cwd: '/app/serverSide', stdio:[0,1,2] })
    this.nodeProcess = childProcess
      .fork(this.filename, { cwd: this.filename, stdio: 'inherit', execArgv: {} })
      .on('message', m => this.emit('serverReloadComplete'))
      .on('close', code => {
        if (code === 8) console.error('Error detected, waiting for changes.')
      })
  }
}

export function browserLivereload({
  targetProject, // `Project class` instance created by `scriptManager` from the configuration file of the target project.
  filename = 'entrypoint.js',
  host = 'localhost',
  // File list to watch - Uses globs array for defining files patterns - https://github.com/isaacs/node-glob
  watchFileList_clientSide,
  watchFileList_serverSide,
} = {}) {
  console.info(`☕ Running script "${filename}".`)

  assert(targetProject, `targetProject must be passed.`)
  let targetProjectRootPath = targetProject.configuration.rootPath
  let rootServiceConfig = targetProject.configuration.configuration?.apiGateway?.service.find(item => item.subdomain == null /*Root service*/)
  assert(rootServiceConfig, `Root service must be configured in the projects apiGateway configuration.`)
  let targetServerHost = targetProject.configuration.configuration?.runtimeVariable?.HOST
  assert(targetServerHost, `HOST runtime variable must be configured in the project's runtimeVariable configuration.`)

  let browserSync = BrowserSync.create('Info - locahost server')
  browserSync.init({
    host: host,
    port: 9090, // the newly proxified port, which provides access to the running server and injects livereload script.
    proxy: {
      target: `${targetServerHost}:${rootServiceConfig.port}`, // existing running server
      // ws: true // when localhost webapp uses websocket also.
    },
    ui: {
      port: 9901,
      weinre: {
        port: 9902,
      },
    },
    logLevel: 'debug',
    logConnections: true,
    open: false, // open browser false.
    scriptPath: () => `http://${host}/browser-sync/browser-sync-client.js`,
  })

  // let serverLivereload = new ServerLivereload({ filename })
  // serverLivereload.on('serverReloadComplete', () => browserSync.reload())
  // serverLivereload.reload()
}
