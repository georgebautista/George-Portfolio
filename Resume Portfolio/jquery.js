$(document).ready(function(){
  $("#resume-btn").click(function(){
    $("#resume").toggle(1000);
  });
})


  $("#portfolio-btn").click(function(){
    $(".portfolio").slideToggle(1000);
  });

  $("#contacts-btn").click(function(){
    $(".last").slideToggle(1000);
  });

  $("#modal-one").click(function(){
    $("#resume").toggle(1000, function(){
      $(".portfolio").toggle(1000, function(){
          $(".last").toggle(1000, function(){            
          });
      });
    });
  });
