"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.runWebappServer = runWebappServer;

var _functionalityConfig = _interopRequireDefault(require("./functionality.config.js"));const BrowserSync = require('browser-sync');
const ServerLivereload = require('./utility/processReload.js');

function runWebappServer({
  filename = 'entrypoint.js',
  fileBasePath = 'path' || _functionalityConfig.default.directory.serverSidePath,
  targetAppHost = 'localhost',
  targetAppPort = 9903,
  browserSync,
  serverLivereload,

  watchFileList_clientSide,
  watchFileList_serverSide } =
{}) {
  console.info(`☕ Running script "${filePath}${filename}". With arguments: debugArguments.join()`);

  browserSync = BrowserSync.create('Info - locahost server');
  browserSync.init({
    host: targetAppHost,
    port: targetAppPort,
    proxy: {
      target: targetAppHost },


    ui: {
      port: 9901,
      weinre: {
        port: 9902 } },



    logConnections: true,
    open: false,
    scriptPath: () => `http://${targetAppHost}/browser-sync/browser-sync-client.js` });








}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS93ZWJhcHBTZXJ2ZXIuanMiXSwibmFtZXMiOlsiQnJvd3NlclN5bmMiLCJyZXF1aXJlIiwiU2VydmVyTGl2ZXJlbG9hZCIsInJ1bldlYmFwcFNlcnZlciIsImZpbGVuYW1lIiwiZmlsZUJhc2VQYXRoIiwiY29uZmlnIiwiZGlyZWN0b3J5Iiwic2VydmVyU2lkZVBhdGgiLCJ0YXJnZXRBcHBIb3N0IiwidGFyZ2V0QXBwUG9ydCIsImJyb3dzZXJTeW5jIiwic2VydmVyTGl2ZXJlbG9hZCIsIndhdGNoRmlsZUxpc3RfY2xpZW50U2lkZSIsIndhdGNoRmlsZUxpc3Rfc2VydmVyU2lkZSIsImNvbnNvbGUiLCJpbmZvIiwiZmlsZVBhdGgiLCJjcmVhdGUiLCJpbml0IiwiaG9zdCIsInBvcnQiLCJwcm94eSIsInRhcmdldCIsInVpIiwid2VpbnJlIiwibG9nQ29ubmVjdGlvbnMiLCJvcGVuIiwic2NyaXB0UGF0aCJdLCJtYXBwaW5ncyI6Ijs7QUFFQSx3RkFEQSxNQUFNQSxXQUFXLEdBQUdDLE9BQU8sQ0FBQyxjQUFELENBQTNCO0FBRUEsTUFBTUMsZ0JBQWdCLEdBQUdELE9BQU8sQ0FBQyw0QkFBRCxDQUFoQzs7QUFFTyxTQUFTRSxlQUFULENBQXlCO0FBQzVCQyxFQUFBQSxRQUFRLEdBQUcsZUFEaUI7QUFFNUJDLEVBQUFBLFlBQVksR0FBRyxVQUFVQyw2QkFBT0MsU0FBUCxDQUFpQkMsY0FGZDtBQUc1QkMsRUFBQUEsYUFBYSxHQUFHLFdBSFk7QUFJNUJDLEVBQUFBLGFBQWEsR0FBRyxJQUpZO0FBSzVCQyxFQUFBQSxXQUw0QjtBQU01QkMsRUFBQUEsZ0JBTjRCOztBQVE1QkMsRUFBQUEsd0JBUjRCO0FBUzVCQyxFQUFBQSx3QkFUNEI7QUFVNUIsRUFWRyxFQVVDO0FBQ0pDLEVBQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFjLHFCQUFvQkMsUUFBUyxHQUFFYixRQUFTLDBDQUF0RDs7QUFFQU8sRUFBQUEsV0FBVyxHQUFHWCxXQUFXLENBQUNrQixNQUFaLENBQW1CLHdCQUFuQixDQUFkO0FBQ0FQLEVBQUFBLFdBQVcsQ0FBQ1EsSUFBWixDQUFpQjtBQUNiQyxJQUFBQSxJQUFJLEVBQUVYLGFBRE87QUFFYlksSUFBQUEsSUFBSSxFQUFFWCxhQUZPO0FBR2JZLElBQUFBLEtBQUssRUFBRTtBQUNIQyxNQUFBQSxNQUFNLEVBQUVkLGFBREwsRUFITTs7O0FBT2JlLElBQUFBLEVBQUUsRUFBRTtBQUNBSCxNQUFBQSxJQUFJLEVBQUUsSUFETjtBQUVBSSxNQUFBQSxNQUFNLEVBQUU7QUFDSkosUUFBQUEsSUFBSSxFQUFFLElBREYsRUFGUixFQVBTOzs7O0FBY2JLLElBQUFBLGNBQWMsRUFBRSxJQWRIO0FBZWJDLElBQUFBLElBQUksRUFBRSxLQWZPO0FBZ0JiQyxJQUFBQSxVQUFVLEVBQUUsTUFBTyxVQUFTbkIsYUFBYyxzQ0FoQjdCLEVBQWpCOzs7Ozs7Ozs7QUF5QkgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuY29uc3QgQnJvd3NlclN5bmMgPSByZXF1aXJlKCdicm93c2VyLXN5bmMnKVxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2Z1bmN0aW9uYWxpdHkuY29uZmlnLmpzJ1xuY29uc3QgU2VydmVyTGl2ZXJlbG9hZCA9IHJlcXVpcmUoJy4vdXRpbGl0eS9wcm9jZXNzUmVsb2FkLmpzJylcblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bldlYmFwcFNlcnZlcih7XG4gICAgZmlsZW5hbWUgPSAnZW50cnlwb2ludC5qcycsXG4gICAgZmlsZUJhc2VQYXRoID0gJ3BhdGgnIHx8IGNvbmZpZy5kaXJlY3Rvcnkuc2VydmVyU2lkZVBhdGgsXG4gICAgdGFyZ2V0QXBwSG9zdCA9ICdsb2NhbGhvc3QnLFxuICAgIHRhcmdldEFwcFBvcnQgPSA5OTAzLFxuICAgIGJyb3dzZXJTeW5jLCAvLyBCcm93c2VyU3luYyBpbnN0YW5jZVxuICAgIHNlcnZlckxpdmVyZWxvYWQsXG4gICAgLy8gRmlsZSBsaXN0IHRvIHdhdGNoIC0gVXNlcyBnbG9icyBhcnJheSBmb3IgZGVmaW5pbmcgZmlsZXMgcGF0dGVybnMgLSBodHRwczovL2dpdGh1Yi5jb20vaXNhYWNzL25vZGUtZ2xvYlxuICAgIHdhdGNoRmlsZUxpc3RfY2xpZW50U2lkZSxcbiAgICB3YXRjaEZpbGVMaXN0X3NlcnZlclNpZGUsXG59ID0ge30pIHtcbiAgICBjb25zb2xlLmluZm8oYOKYlSBSdW5uaW5nIHNjcmlwdCBcIiR7ZmlsZVBhdGh9JHtmaWxlbmFtZX1cIi4gV2l0aCBhcmd1bWVudHM6IGRlYnVnQXJndW1lbnRzLmpvaW4oKWApXG5cbiAgICBicm93c2VyU3luYyA9IEJyb3dzZXJTeW5jLmNyZWF0ZSgnSW5mbyAtIGxvY2Fob3N0IHNlcnZlcicpXG4gICAgYnJvd3NlclN5bmMuaW5pdCh7XG4gICAgICAgIGhvc3Q6IHRhcmdldEFwcEhvc3QsXG4gICAgICAgIHBvcnQ6IHRhcmdldEFwcFBvcnQsXG4gICAgICAgIHByb3h5OiB7XG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldEFwcEhvc3QsXG4gICAgICAgICAgICAvLyB3czogdHJ1ZSAvLyB3aGVuIGxvY2FsaG9zdCB3ZWJhcHAgdXNlcyB3ZWJzb2NrZXQgYWxzby5cbiAgICAgICAgfSxcbiAgICAgICAgdWk6IHtcbiAgICAgICAgICAgIHBvcnQ6IDk5MDEsXG4gICAgICAgICAgICB3ZWlucmU6IHsgLy8gcmVtb3ZlIGRlYnVnZ2VyXG4gICAgICAgICAgICAgICAgcG9ydDogOTkwMlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvLyBsb2dMZXZlbDogJ2RlYnVnJyxcbiAgICAgICAgbG9nQ29ubmVjdGlvbnM6IHRydWUsXG4gICAgICAgIG9wZW46IGZhbHNlLCAvLyBvcGVuIGJyb3dzZXIgZmFsc2UuXG4gICAgICAgIHNjcmlwdFBhdGg6ICgpID0+IGBodHRwOi8vJHt0YXJnZXRBcHBIb3N0fS9icm93c2VyLXN5bmMvYnJvd3Nlci1zeW5jLWNsaWVudC5qc2BcbiAgICB9KVxuXG4gICAgLy8gc2VydmVyTGl2ZXJlbG9hZCA9IG5ldyBTZXJ2ZXJMaXZlcmVsb2FkKGRlYnVnQXJndW1lbnRzLCB7IGZpbGVuYW1lLCBmaWxlUGF0aCB9KVxuICAgIC8vIHNlcnZlckxpdmVyZWxvYWQub24oJ3JlbG9hZCcsICgpID0+IHtcbiAgICAvLyAgICAgYnJvd3NlclN5bmMucmVsb2FkKClcbiAgICAvLyB9KVxuXG4gICAgLy8gc2VydmVyTGl2ZXJlbG9hZC5yZWxvYWQoKVxufVxuIl19