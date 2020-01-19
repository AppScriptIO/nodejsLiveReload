import chokidar from 'chokidar'
import { Promise } from 'core-js'

// Watch files and when a modification detected, execute callback
export function watchFile({
  fileArray,
  triggerCallback,
  // Following delay solves the issue of closley received notifications, preventing duplicate actions for the same related notifications (e.g. docker-windows-volume-watcher mistakengly triggers duplicate notifications for each chagne).
  notificationTriggerDelay = 100, // 100 ms between accepting notifications and triggering action. This prevents duplicate executions fron wrong immediate duplicate notification fo the container.
  notificationTrigger = true, // on / off switch for taking action after a notification received
  ignoreNodeModules = true,
  logMessage = false, // console log messages on events e.g. log list of files being watched.
}) {
  let watcher = chokidar.watch(fileArray, {
    ignored: ignoreNodeModules ? new RegExp(/node_modules/) : false,
    usePolling: false,
  })

  return new Promise((resolve, reject) => {
    watcher
      .on('ready', path => {
        if (logMessage) {
          console.group('• Watching the following list of paths:')
          console.log(watcher.getWatched()) // list watched filse
          console.groupEnd()
        } else console.log('• Watching JS files.')
        resolve()
      })
      .on('add', path => {
        // when target/path added to watcher
        // console.log(`File ${path} has been added`)
      })
      .on('change', path => {
        if (notificationTrigger) {
          if (logMessage) console.log(`• File ${path} has been changed.`)
          triggerCallback()
        }
        // allow triggering of action from next notification only after delay.
        notificationTrigger = false
        setTimeout(() => {
          notificationTrigger = true
        }, notificationTriggerDelay)
      })
      .on('unlink', path => {
        if (logMessage) console.log(`• File ${path} has been removed. No action taken regarding running tests.`)
      })
  })
}
