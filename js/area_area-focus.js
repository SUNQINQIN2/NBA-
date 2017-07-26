window.onload=function(){
   function $(id){
    return document.getElementById(id);

  }
        // 循环轮播到某个特定的帧 
        $("slide-one").mouseenter=function(){
            $("myCarousel").carousel(0);
            alert("dddd");
        };
        $("slide-two").mouseenterr=function(){
            $("myCarousel").carousel(1);
        };
        $("slide-three").mouseenterr=function(){
            $("myCarousel").carousel(2);
        };
        $("slide-four").mouseenter=function(){
            $("myCarousel").carousel(3);
        };
}
