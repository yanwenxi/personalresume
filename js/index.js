FastClick.attach(document.body);//解决延迟300ms问题
new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    pagination: '.swiper-pagination',
    paginationType: 'fraction',
    onSlideChangeEnd: function (swiper){
        var slideAry = swiper.slides,//一共有多少个翻页，因为实现无缝默认前后多加一个，所以为7加2页
            curIn = swiper.activeIndex,
            total = slideAry.length;
        var targetId = 'page';
        switch (curIn) {
            case 0:
                targetId += total - 2;
                break;
            case (total - 1):
                targetId += 1;
                break;
            default:
                targetId += curIn;
        }
        //->给当前的活动快设置ID即可,还要把其余的移除
        [].forEach.call(slideAry, function (item, index) {
            if (curIn === index) {
                item.id = targetId;
                return;
            }
            item.id = null;
        });
    }
});

//排除特大屏幕。
~function () {
    var desW = 640,
        desH = 960,
        winW = document.documentElement.clientWidth,
        winH = document.documentElement.clientHeight,
        ratio = winW / desW,
        ratio1 = winH / desH;
    var oMain = document.getElementsByClassName('main')[0];
    if (winW > desW) {
        oMain.style.width = desW + 'px';
        oMain.style.margin = '0 auto';
        return;
    }
    document.documentElement.style.fontSize = 100 * ratio + "px";
}();

//music
//->MUSIC
~function () {
    var musicMenu = document.getElementById('musicMenu'),
        musicAudio = document.getElementById('musicAudio');

    musicMenu.addEventListener('click', function () {
        if (musicAudio.paused) {//->暂停
            musicAudio.play();
            musicMenu.className = 'music move';
            return;
        }
        musicAudio.pause();
        musicMenu.className = 'music';
    }, false);

    function controlMusic() {
        musicAudio.volume = 0.1;
        musicAudio.play();
        musicAudio.addEventListener('canplay', function () {
            musicMenu.style.display = 'block';
            musicMenu.className = 'music move';
        }, false);
    }

    window.setTimeout(controlMusic, 1000);
}();
//检测pc还是移动
~function () {
    var reg1 = /AppleWebKit.*Mobile/i,
        reg2 = /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/;

    //->条件成立说明当前页面是运行在移动端设备中的
    if (reg1.test(navigator.userAgent) || reg2.test(navigator.userAgent)) {

    } else {
        alert("友情提醒：本简历不支持PC端，请用移动设备观看！按F12也可在控制台查看哦");
    }
}();

