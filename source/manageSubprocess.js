import EventEmitter from 'events'
import childProcess from 'child_process'

// manage forked subprocess allowing to restart the subprocess on demand.
export class ManageSubprocess extends EventEmitter {
  subprocess // child subprocess
  cliAdapterPath // the path to the cli entrypoint file, that will receive arguments from the child process fork function and pass it to the programmatic module api.
  argumentList // cached arguments to be used for running subprocesses

  constructor({ cliAdapterPath }) {
    super()
    this.cliAdapterPath = cliAdapterPath
    // clean up if an error goes unhandled.
    process.on('exit', () => this.subprocess && this.subprocess.kill())
    process.on('SIGINT', () => console.log('Caught interrupt signal') && process.exit(0))
  }

  runInSubprocess() {
    if (this.subprocess) this.subprocess.kill()

    this.argumentList = arguments.length == 0 ? this.argumentList || [] : arguments

    let stringifyArgs = JSON.stringify(this.argumentList) // parametrs for module to be run in subprocess.
    // running in subprocess prevents allows to control the application and terminate it when needed.
    this.subprocess = childProcess
      .fork(this.cliAdapterPath, [stringifyArgs], {
        stdio: [0, 1, 2, 'ipc'],
        execArgv: [
          // '--inspect-brk=1272', // inspect subprocess with random port to prevent conflicts with the main process in case it's inspect flag was turned on.
          '--no-lazy', // for debugging purposes will load modules sequentially
        ],
      })
      .on('exit', () => console.log(`subprocess ${this.subprocess.pid} exited.`))
      .on('message', message => {
        if (message?.status == 'ready') this.emit('ready')
      })
      .on('close', code => {
        if (code === 8) console.error('Error detected, waiting for changes.')
      })

    return this.subprocess
  }
}
