var android = location.href.match(/#android$/) || navigator.userAgent.match(/Android/i) != null;
var web_ios_win = navigator.userAgent.match(/Macintosh|Windows|Safari/i) != null;
$.smartbanner({
  title: 'GoodCity',
  author: 'Crossroads',
  icon: '/assets/images/goodcity-logo.png',
  iconGloss: false,
  hideOnInstall: true,
  force: web_ios_win ? null : (android ? 'android' :  'ios'),
  daysHidden: 0,
  daysReminder: 7,
  layer: true
});
