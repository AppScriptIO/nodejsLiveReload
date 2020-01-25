"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.browserLivereload = browserLivereload;
var _assert = _interopRequireDefault(require("assert"));
var _browserSync = _interopRequireDefault(require("browser-sync"));
var _nodejsLiveReload = require("@deployment/nodejsLiveReload");


async function browserLivereload({
  targetProject,
  rootServicePort = 8080,
  rootServiceHost = 'localhost',
  watchPathList = false } =
{}) {
  (0, _assert.default)(targetProject, `targetProject must be passed.`);

  let browserSync = _browserSync.default.create('BrowserProxySever'),
  browserSyncProxy = { port: 9090, host: 'localhost' };

  process.on('SIGINT', () => browserSync.exit());

  browserSync.init({
    host: browserSyncProxy.host,
    port: browserSyncProxy.port,
    proxy: {
      target: `${rootServiceHost}:${rootServicePort}` },


    ui: {
      port: 9901,
      weinre: {
        port: 9902 } },


    logLevel: 'info' || 'debug',
    logConnections: true,
    open: false,
    scriptPath: () => `http://${browserSyncProxy.host}:${browserSyncProxy.port}/browser-sync/browser-sync-client.js` });


  function restart() {
    browserSync.reload();
  }

  if (watchPathList && Array.isArray(watchPathList))
  await (0, _nodejsLiveReload.watchFile)({

    triggerCallback: () => restart(),

    fileArray: watchPathList,
    ignoreNodeModules: true,
    logMessage: true });


  return { restart };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9icm93c2VyQ2xpZW50UmVsb2FkLmpzIl0sIm5hbWVzIjpbImJyb3dzZXJMaXZlcmVsb2FkIiwidGFyZ2V0UHJvamVjdCIsInJvb3RTZXJ2aWNlUG9ydCIsInJvb3RTZXJ2aWNlSG9zdCIsIndhdGNoUGF0aExpc3QiLCJicm93c2VyU3luYyIsIkJyb3dzZXJTeW5jIiwiY3JlYXRlIiwiYnJvd3NlclN5bmNQcm94eSIsInBvcnQiLCJob3N0IiwicHJvY2VzcyIsIm9uIiwiZXhpdCIsImluaXQiLCJwcm94eSIsInRhcmdldCIsInVpIiwid2VpbnJlIiwibG9nTGV2ZWwiLCJsb2dDb25uZWN0aW9ucyIsIm9wZW4iLCJzY3JpcHRQYXRoIiwicmVzdGFydCIsInJlbG9hZCIsIkFycmF5IiwiaXNBcnJheSIsInRyaWdnZXJDYWxsYmFjayIsImZpbGVBcnJheSIsImlnbm9yZU5vZGVNb2R1bGVzIiwibG9nTWVzc2FnZSJdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTs7O0FBR08sZUFBZUEsaUJBQWYsQ0FBaUM7QUFDdENDLEVBQUFBLGFBRHNDO0FBRXRDQyxFQUFBQSxlQUFlLEdBQUcsSUFGb0I7QUFHdENDLEVBQUFBLGVBQWUsR0FBRyxXQUhvQjtBQUl0Q0MsRUFBQUEsYUFBYSxHQUFHLEtBSnNCO0FBS3BDLEVBTEcsRUFLQztBQUNOLHVCQUFPSCxhQUFQLEVBQXVCLCtCQUF2Qjs7QUFFQSxNQUFJSSxXQUFXLEdBQUdDLHFCQUFZQyxNQUFaLENBQW1CLG1CQUFuQixDQUFsQjtBQUNFQyxFQUFBQSxnQkFBZ0IsR0FBRyxFQUFFQyxJQUFJLEVBQUUsSUFBUixFQUFjQyxJQUFJLEVBQUUsV0FBcEIsRUFEckI7O0FBR0FDLEVBQUFBLE9BQU8sQ0FBQ0MsRUFBUixDQUFXLFFBQVgsRUFBcUIsTUFBTVAsV0FBVyxDQUFDUSxJQUFaLEVBQTNCOztBQUVBUixFQUFBQSxXQUFXLENBQUNTLElBQVosQ0FBaUI7QUFDZkosSUFBQUEsSUFBSSxFQUFFRixnQkFBZ0IsQ0FBQ0UsSUFEUjtBQUVmRCxJQUFBQSxJQUFJLEVBQUVELGdCQUFnQixDQUFDQyxJQUZSO0FBR2ZNLElBQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxNQUFNLEVBQUcsR0FBRWIsZUFBZ0IsSUFBR0QsZUFBZ0IsRUFEekMsRUFIUTs7O0FBT2ZlLElBQUFBLEVBQUUsRUFBRTtBQUNGUixNQUFBQSxJQUFJLEVBQUUsSUFESjtBQUVGUyxNQUFBQSxNQUFNLEVBQUU7QUFDTlQsUUFBQUEsSUFBSSxFQUFFLElBREEsRUFGTixFQVBXOzs7QUFhZlUsSUFBQUEsUUFBUSxFQUFFLFVBQVUsT0FiTDtBQWNmQyxJQUFBQSxjQUFjLEVBQUUsSUFkRDtBQWVmQyxJQUFBQSxJQUFJLEVBQUUsS0FmUztBQWdCZkMsSUFBQUEsVUFBVSxFQUFFLE1BQU8sVUFBU2QsZ0JBQWdCLENBQUNFLElBQUssSUFBR0YsZ0JBQWdCLENBQUNDLElBQUssc0NBaEI1RCxFQUFqQjs7O0FBbUJBLFdBQVNjLE9BQVQsR0FBbUI7QUFDakJsQixJQUFBQSxXQUFXLENBQUNtQixNQUFaO0FBQ0Q7O0FBRUQsTUFBSXBCLGFBQWEsSUFBSXFCLEtBQUssQ0FBQ0MsT0FBTixDQUFjdEIsYUFBZCxDQUFyQjtBQUNFLFFBQU0saUNBQVU7O0FBRWR1QixJQUFBQSxlQUFlLEVBQUUsTUFBTUosT0FBTyxFQUZoQjs7QUFJZEssSUFBQUEsU0FBUyxFQUFFeEIsYUFKRztBQUtkeUIsSUFBQUEsaUJBQWlCLEVBQUUsSUFMTDtBQU1kQyxJQUFBQSxVQUFVLEVBQUUsSUFORSxFQUFWLENBQU47OztBQVNGLFNBQU8sRUFBRVAsT0FBRixFQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnXG5pbXBvcnQgQnJvd3NlclN5bmMgZnJvbSAnYnJvd3Nlci1zeW5jJ1xuaW1wb3J0IHsgd2F0Y2hGaWxlIH0gZnJvbSAnQGRlcGxveW1lbnQvbm9kZWpzTGl2ZVJlbG9hZCdcbi8vIGltcG9ydCBwcm94eU1pZGRsZXdhcmUgZnJvbSAnaHR0cC1wcm94eS1taWRkbGV3YXJlJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYnJvd3NlckxpdmVyZWxvYWQoe1xuICB0YXJnZXRQcm9qZWN0LCAvLyBgUHJvamVjdCBjbGFzc2AgaW5zdGFuY2UgY3JlYXRlZCBieSBgc2NyaXB0TWFuYWdlcmAgZnJvbSB0aGUgY29uZmlndXJhdGlvbiBmaWxlIG9mIHRoZSB0YXJnZXQgcHJvamVjdC5cbiAgcm9vdFNlcnZpY2VQb3J0ID0gODA4MCxcbiAgcm9vdFNlcnZpY2VIb3N0ID0gJ2xvY2FsaG9zdCcsXG4gIHdhdGNoUGF0aExpc3QgPSBmYWxzZSxcbn0gPSB7fSkge1xuICBhc3NlcnQodGFyZ2V0UHJvamVjdCwgYHRhcmdldFByb2plY3QgbXVzdCBiZSBwYXNzZWQuYClcblxuICBsZXQgYnJvd3NlclN5bmMgPSBCcm93c2VyU3luYy5jcmVhdGUoJ0Jyb3dzZXJQcm94eVNldmVyJyksXG4gICAgYnJvd3NlclN5bmNQcm94eSA9IHsgcG9ydDogOTA5MCwgaG9zdDogJ2xvY2FsaG9zdCcgfVxuXG4gIHByb2Nlc3Mub24oJ1NJR0lOVCcsICgpID0+IGJyb3dzZXJTeW5jLmV4aXQoKSkgLy8gbWFrZSBzdXJlIHRvIGNsb3NlIHNvY2tldCB0byBwcmV2ZW50IGhhbmdpbmcgbm9kZSBwcm9jZXNzLlxuXG4gIGJyb3dzZXJTeW5jLmluaXQoe1xuICAgIGhvc3Q6IGJyb3dzZXJTeW5jUHJveHkuaG9zdCxcbiAgICBwb3J0OiBicm93c2VyU3luY1Byb3h5LnBvcnQsIC8vIHRoZSBuZXdseSBwcm94aWZpZWQgcG9ydCwgd2hpY2ggcHJvdmlkZXMgYWNjZXNzIHRvIHRoZSBydW5uaW5nIHNlcnZlciBhbmQgaW5qZWN0cyBsaXZlcmVsb2FkIHNjcmlwdC5cbiAgICBwcm94eToge1xuICAgICAgdGFyZ2V0OiBgJHtyb290U2VydmljZUhvc3R9OiR7cm9vdFNlcnZpY2VQb3J0fWAsIC8vIGV4aXN0aW5nIHJ1bm5pbmcgc2VydmVyXG4gICAgICAvLyB3czogdHJ1ZSAvLyB3aGVuIGxvY2FsaG9zdCB3ZWJhcHAgdXNlcyB3ZWJzb2NrZXQgYWxzby5cbiAgICB9LFxuICAgIHVpOiB7XG4gICAgICBwb3J0OiA5OTAxLFxuICAgICAgd2VpbnJlOiB7XG4gICAgICAgIHBvcnQ6IDk5MDIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgbG9nTGV2ZWw6ICdpbmZvJyB8fCAnZGVidWcnLFxuICAgIGxvZ0Nvbm5lY3Rpb25zOiB0cnVlLFxuICAgIG9wZW46IGZhbHNlLCAvLyBvcGVuIGJyb3dzZXIgZmFsc2UuXG4gICAgc2NyaXB0UGF0aDogKCkgPT4gYGh0dHA6Ly8ke2Jyb3dzZXJTeW5jUHJveHkuaG9zdH06JHticm93c2VyU3luY1Byb3h5LnBvcnR9L2Jyb3dzZXItc3luYy9icm93c2VyLXN5bmMtY2xpZW50LmpzYCxcbiAgfSlcblxuICBmdW5jdGlvbiByZXN0YXJ0KCkge1xuICAgIGJyb3dzZXJTeW5jLnJlbG9hZCgpXG4gIH1cblxuICBpZiAod2F0Y2hQYXRoTGlzdCAmJiBBcnJheS5pc0FycmF5KHdhdGNoUGF0aExpc3QpKVxuICAgIGF3YWl0IHdhdGNoRmlsZSh7XG4gICAgICAvLyB0byBiZSBydW4gYWZ0ZXIgZmlsZSBub3RpZmljYXRpb25cbiAgICAgIHRyaWdnZXJDYWxsYmFjazogKCkgPT4gcmVzdGFydCgpLFxuICAgICAgLy8gVE9ETzogbWFrZSBzdXJlIGV4cGxpY2l0bHkgYWRkaW5nIGAuL25vZGVfbW9kdWxlcy9gIGludG8gdGhlIHRoaXMgYXJyYXksIHdpbGwgcHJldmVudCBpdCBmcm9tIGJlaW5nIGlnbm9yZWQuXG4gICAgICBmaWxlQXJyYXk6IHdhdGNoUGF0aExpc3QsXG4gICAgICBpZ25vcmVOb2RlTW9kdWxlczogdHJ1ZSxcbiAgICAgIGxvZ01lc3NhZ2U6IHRydWUsXG4gICAgfSlcblxuICByZXR1cm4geyByZXN0YXJ0IH1cbn1cbiJdfQ==