// Parent selector

// (function(){
//     // alert('Page loaded successfully')
//     var x = $('.grandchild').parent()
//     console.log(x);
//     // x.css('color','purple')
//     x.css('border','10px solid purple')

// })(jQuery);


// Parents Selector

(function(){
    $('.grandchild').parents().css('border','10px solid red')

})(jQuery);