
/*window.onload=function(){
  function $(id){
    return document.getElementById(id);

  }
  $("tab-title2").onmouseover=function(){
     $("block-body2").style.display="block";
     $("block-body1").style.display="none";
   
     $("tab-title2").style.color="#D74343";
      $("tab-title1").style.color="blue";

  }   
   $("tab-title1").onmouseover=function(){
     $("block-body1").style.display="block";
     $("block-body2").style.display="none";
     $("tab-title1").style.color="#D74343";
      $("tab-title2").style.color="blue";
  }    
 
}*/
$(document).ready(function(){
  $("#tab-title1").mouseover(function(){
      $("#block-body1").show().siblings().hide();
  })
  $("#tab-title2").mouseover(function(){
      $("#block-body2").show().siblings().hide();
  })
})