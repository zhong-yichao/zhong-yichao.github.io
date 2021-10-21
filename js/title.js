// 浏览器切换改变标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.querySelector('[rel="icon"]').setAttribute('href', "/img/funny.ico");
        document.title = '( ๑ŏ ﹏ ŏ๑ )请不要忘记我';
        clearTimeout(titleTime);
    }
    else {
        document.querySelector('[rel="icon"]').setAttribute('href', "/img/favicon.ico");
        document.title = '(｡>∀<｡)欢迎回来' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});