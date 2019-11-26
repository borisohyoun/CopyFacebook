  
$(document).ready(function() {
    // $('.ad_img').each(function() {
    // var maxWidth = 284;  //틀의 넓이
    // var maxHeight = 153;  //틀의 높이
    // var ratio ;  //비율 을 정의만 함
    // var adImgWidth = $(this).width();   //지금 이미지의 넓이 
    // var adImgHeight = $(this).height();  //지금 이미지의 높이
  
    // // Check if the current width is larger than the max
    // if(adImgWidth > maxWidth){
    //     ratio = maxWidth / width;   // get ratio for scaling image
    //     $(this).css("width", maxWidth); // Set new width
    //     $(this).css("height", height * ratio);  // Scale height based on ratio
    //     height = height * ratio;    // Reset height to match scaled image
    // }
  
    // var width = $(this).width();    // Current image width
    // var height = $(this).height();  // Current image height
  
    // // Check if current height is larger than max
    // if(adImgHeight > maxHeight){
    //     ratio = maxHeight / height; // get ratio for scaling image
    //     $(this).css("height", maxHeight);   // Set new height
    //     $(this).css("width", width * ratio);    // Scale width based on ratio
    //     width = width * ratio;    // Reset width to match scaled image
    // }
    // if($('#ad_feed').offset().top = 44){

    // }
    
        $("#ad_feed").sticky({topSpacing:43});

        $(window).resize(function(){
            var curWidth = parseInt($(this).width());
            // $("#wrapper").text(width);
            if (curWidth < 1012) {
                $(".visi-chat").css('display','none');
                $(".ch_ff").css('right','30px');
           } else{
                $(".visi-chat").css('display','block');
                $(".ch_ff").css('right','0');
           } 
        }).resize(); // 로딩되면서 창크기에 맞추기 위해 한 번 부름

});