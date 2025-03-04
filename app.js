const btn =document.getElementById("btn");
function randomColor(){
 let letter ='0123456789ABCDEF';
 let color = "#";

 let i=0;
 for ( i=0; i<6 ;i++ ){
    color+=letter[Math.floor(Math.random() *16)];
 } 
   return color;

}
 btn.addEventListener('click', () =>{
    document.body.style.backgroundColor = randomColor();
 }
)