$(()=>{
    let pre_nav_height = $(".pre--nav--").innerHeight();
    $("header").css("top" , pre_nav_height);
    $(".hide-prenav").on("click" , function(){
        $("header").animate({
            "top" : '0'
        } , 300)
    })
 
})

