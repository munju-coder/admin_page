
    $("document").ready( function(){

      $(".left_menu > p").click(function(){
        if ($(this).next().css("display") == "none") {
          // $(".sub_menu").hide(); 다음요소가 나오면 전에요소가 접힘
          $(this).next().show();
          $(this).children("i:eq(1)").attr('class', 'fa fa-angle-up');
          $(this).children("i:eq(1)").css("margin-left","5px");

        } else {
          $(this).next().hide();
          $(this).children("i:eq(1)").attr('class', 'fa fa-angle-down');
          
        }        
      });  

      

    });
    $("document").ready(function(){
      //var l_height = $(".header_left").height();
      var c_height = $(".content").height();

      $(".header_left").css("height", c_height + "px");
      /* console.log(l_height);
      console.log(c_height); */

      /* if(c_height > l_height)
      {
          $(".header_left").css("height", c_height + "px");
      } */
  });