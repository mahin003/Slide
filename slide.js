const getAllImage= document.getElementsByClassName("slide-img");
const Left= document.getElementById("left-arrow");
const Right= document.getElementById("right-arrow");

const dots= document.getElementsByClassName("dot");
console.log(dots);

const dotLen= dots.length;
// Right.addEventListener("click",RightClick);

let slideIndex = 0;
const slideLength = getAllImage.length;
 

for(var i=0; i<slideLength; i++){
    console.log("ok");
    getAllImage[i].style.display="none";
}  

for(var i=0;i<dotLen;i++){
    dots[i].addEventListener("click", function(){
        console.log("clicked");
        sliding(i);
    })
}



Right.addEventListener("click",function(){
    console.log("right");
    sliding(slideIndex);
});

Left.addEventListener("click",function(){
    console.log("Left");
    sliding(slideIndex-2);
});

sliding(slideIndex);
function sliding(n){
   slideIndex=n;
    if(slideIndex<0){
        slideIndex= slideLength-1;
    }
    if(slideIndex >= slideLength ){
        // console.log("con ",slideIndex);
        slideIndex = 0;  
      }
    for(var i=0; i<slideLength; i++){
        // console.log("ok");
        getAllImage[i].style.display="none";
    }
    console.log("ck ",n)
    
   //console.log("work ",slideIndex);
   getAllImage[slideIndex].style.display="block";
   slideIndex++;
    
}setInterval( function(){sliding(slideIndex);},2000);