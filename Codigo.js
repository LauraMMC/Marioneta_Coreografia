noStroke();

//Avatar
var av = new Avatar(Avatar.getName(12));
//Limites
av.setLimit(0,-10,10);
av.setLimit(1,0,30);
av.setLimit(2,0,30);
av.setLimit(3,0,30);
av.setLimit(4,0,30);
av.setLimit(6, -15, 15);
av.setLimit(8, -15, 15);
//Tamaño Avatar
av.scale(0.8);

//Avatar 1
var av1 = new Avatar(Avatar.getName(10));
//Limites A1
av1.setLimit(0, -5, 10); 
av1.setLimit(1,  0, 90);
av1.setLimit(2,  0, 90);
av1.setLimit(3, 0, 90);
av1.setLimit(4,  0, 90);
av1.setLimit(6, -10, 10);
av1.setLimit(8, -10, 10);
//Tamaño Avatar 1
av1.scale(0.8);

//Avatar 2
var av2 = new Avatar(Avatar.getName(21));
//Tamaño Avatar 2
av2.scale(0.6);

//Avatar 3
var av3 = new Avatar(Avatar.getName(24));
//Tamaño Avatar 3
av3.scale(0.6);

//Avatar 4
var av4 = new Avatar(Avatar.getName(25));
//Tamaño Avatar 4
av4.scale(0.6);

//Variables
var p1 = 400;
var p2 = 200;
var dib = 100;
var speed = 0.8;
var speed2 = 1.2;

//Caracteristica de flashes
var flashes = function(luces){
    fill(250, 255, 214);
    for(var i=0; i <= luces; i++){
        var x = random(10, 380);
        var y = random(120, 280);
        var tam = random(5,30);
        ellipse(x,y,tam,tam);
    }
};

draw = function() {
    //Fondo y flashes
    background(3, 8, 28);
    flashes(1.5);

    //Velocidades
    p1-=speed;
    dib+=speed2;
    
    //Avatar 2
    av2.draw(dib-280,p2+140);
    
    //Avatar 3
    av3.draw(dib,p2+140);
    
    //Avatar 4
    av4.draw(dib-680,p2+140);
    
    //Pasarela
    fill(20, 20, 20);
    rect(0, 334, width, height);
    //Linea pasarela
    fill(255, 255, 255);
    rect(0, 370, width, 1);
    
    //Texto
    var brilla = random(120,200);
    fill(brilla, 100, 155);
    textSize(25);
    text("Pasarela de Baile", 98, 394);

    // Avatar
    av.draw(p1,p2);
    //Movimiento extremidades
    av.next(0);
    av.next(1);
    av.next(2);
    av.next(3);
    av.next(4);
    av.next(6);
    av.next(8);
    
    //Avatar 1
    av1.draw(p1+280,p2);
    //Movimiento extremidades A1
    av1.next(0);
    av1.next(1);
    av1.next(2);
    av1.next(3);
    av1.next(4);
    av1.next(6);
    av1.next(8);
};
