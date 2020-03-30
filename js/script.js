
    $("document").ready( function(){

      //메뉴
      $(".left_menu > p").click(function(){
        if ($(this).next().css("display") == "none") {
          
          $(this).next().show();
          $(this).children("i:eq(1)").attr('class', 'fa fa-angle-up');
          $(this).children("i:eq(1)").css("margin-left","5px");

        } else {
          $(this).next().hide();
          $(this).children("i:eq(1)").attr('class', 'fa fa-angle-down');
          
        }        
      });  

      //left header -> 높이 계산하여 적용.
      var c_height = $(".content").height();

      $(".header_left").css("height", c_height + "px");
      
      //수정 링크연결 적용.
      $(".btn_m").each(function(i){

        console.log(i);
        $(this).click(function(){
            var seq = $(this).parents().siblings(".seq").text();
            var val = $(this).val();
            console.log(val);

            location.href = "../board/board_write.html?seq=" + seq;
        });
        
      });
    
    });
