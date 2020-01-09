$(function(){

    //页面缩放公共
    var resizePage = function() {
        var clientH = $(window).height();
        var bi = clientH/$('body').height();

        $('body').css({
            width: 1920,
            height: 1080,
            overflow:'hidden'
        });
        $('body').css('transform','scale('+bi+')');
        $('body').css('transform-origin','left top 0');

        var marginLeft = (parseFloat(document.documentElement.clientWidth) - parseFloat($('body').css('width'))*bi)/2;
        $('body').css('margin-left',marginLeft+'px');

        // $('html').height(clientH*bi);
    };
    resizePage();
    $(window).resize(resizePage);


});