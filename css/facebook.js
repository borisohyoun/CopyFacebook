  
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

        // if($(".cont_wrap").css('width'))

        var curWidth = $("#fb_box").css('width');

        if(parseInt(curWidth)<=1021){
            $('.ch_zo').css('display','none');
            $('.ch_ff').css('position','fixed');
        }else{

        }

})