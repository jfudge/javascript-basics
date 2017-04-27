window.onload = function() {

    console.log('Hello World!');

    setInterval(function() {

        var date = new Date();

        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();

        document.getElementById('generated').innerHTML = hour + ':' + minute + ':' + second;
    }, 500);
}