var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_x=100;
car2_x=100;
car1_y=100;
car2_y=200;
car1_width=80;
car2_width=80;
car1_height=80;
car2_height=80;
car1_image="car1.png";
car2_image="car2.png";
background_image="racing.jpg";
console.log(background_image);
function add(){
    bg_img=new Image();
    bg_img.onload=uploadbg;
    bg_img.src=background_image;
    car1_img=new Image();
    car1_img.onload=uploadcar1;
   car1_img.src=car1_image;
   car2_img=new Image();
   car2_img.onload=uploadcar2;
   car2_img.src=car2_image;
}
function uploadbg(){
    ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1_img,car1_x,car1_y,car1_width,car1_height);
}
function uploadcar2(){
    ctx.drawImage(car2_img,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keypressed=e.keyCode;
console.log(keypressed);
if (keypressed=='37'){
    car1left();
    console.log("leftkey");
}
if (keypressed=='38'){
    car2left();
    console.log("leftkey");
}
if (keypressed=='39'){
    car1right();
    console.log("rightkey");
}
if (keypressed=='40'){
    car2right();
    console.log("rightkey");
}
}
function car1left(){
    if(car1_x>=0){
        car1_x=car1_x-10;
        console.log("x="+car1_x+"y="+car1_y);
        uploadbg();
        uploadcar1();
        uploadcar2();
    }
}
function car2left(){
if(car2_x>=0){
    car2_x=car2_x-10;
    console.log("x="+car2_x+"y="+car2_y);
    uploadbg();
    uploadcar2();
    uploadcar1();
}
}
function car1right(){
    if(car1_x<=700){
        car1_x=car1_x+10;
        console.log("y="+car1_y+"x="+car1_x);
        uploadbg();
        uploadcar1();
        uploadcar2();
    }
}
function car2right(){
    if(car2_x<=700){
       car2_x=car2_x+10;
        console.log("y="+car2_y+"x="+car2_x);
        uploadbg();
        uploadcar2();
        uploadcar1();
    }
}



