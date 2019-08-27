var d =document.getElementById('dibujito');
var caja=document.getElementById('caja');
var boton = document.getElementById('boton');
var linezo= d.getContext("2d");
var lineas = 50;

function dibujoporlinea(){
    var xxx= parseInt(caja.value);

 
    var i =0;
    var yi,xf;
    var colorcito="red";
    
 
 
 }

for(i=0; i<lineas; i++){
    yi=10*i;
    xf =10*(i+1);
    dibujar_lineas(colorcito,0,yi,xf,500);
    
    dibujar_lineas("blue",yi,0,500,xf);
    dibujar_lineas("green",0,500-yi,xf,0);
    dibujar_lineas("black",yi,500,500,500-yi);
}




boton.addEventListener('click', dibujoporlinea);



function dibujar_lineas(color,xinicial,yinicial,xfinal,yfinal){
    linezo.beginPath();
    linezo.strokeStyle =color;
    linezo.moveTo(xinicial , yinicial);
    linezo.lineTo(xfinal,yfinal);
    linezo.stroke();
    linezo.closePath();
}

