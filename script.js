// script.js
function updateTime() {
    var now = new Date();
    var hours = ('0' + now.getHours()).slice(-2);
    var minutes = ('0' + now.getMinutes()).slice(-2);
    var seconds = ('0' + now.getSeconds()).slice(-2);
    var timeString = hours + ':' + minutes + ':' + seconds;
    document.getElementById('time').textContent = timeString;
}

// 每秒更新一次时间
setInterval(updateTime, 1000);

// 初始化时钟
updateTime();
