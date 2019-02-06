# nodejsLiveReload
- **File watcher module wrapper** using `chokidar.watch` - reveiving a list of file paths to watch and triggers events on changes. 
- **Run webapps with livereloading** - Used as a live reload tool for reloading browser and server depending on files changed.

____

[TODO list](/documentation/TODO.md)
____

Some notes regarding filesystem watch: 
- **chokidar polling** - Legacy file changes checking using 'usePolling' flag for chokidar.
- **Increasing OS file watch number** - check maximum number of inotify watches - cat /proc/sys/fs/inotify/max_user_watches -  as per https://unix.stackexchange.com/questions/13751/kernel-inotify-watch-limit-reached
- **Docker inotify compatibility with Windows** - to allow Linux inotify to fire a file change event use - "docker-volume-watcher" on the Windows host (it is a python program that watches files on the host using native directory/files change triggers, rather than polling).

___

### 🔑 License: [MIT](/.github/LICENSE)
