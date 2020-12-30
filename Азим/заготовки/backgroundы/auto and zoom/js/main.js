$(document).ready(function(){
    $('header').mkinfinite({
        maxZoom:1.4,
        animationTime:4000,
        imagesRatio:(940/720),
        isFixedBG:true,
        zoomIn:true,
        // imagesList:new Array(
        //     './img/sakura-tree-2033997.jpg',

        //     './img/scenic-view-of-mountain-1666021.jpg',

        //     './img/sunlight-beaming-on-green-trees-1477430.jpg',
        // )
    });
})