let stepx = 1
let stepy = 1

function setup(){
    createCanvas(400,400);

}

function draw(){
    background(198, 145, 79);
    stroke(102, 85, 64);
    strokeWeight(5);
    for(i = 0;i<=4;i++){
        line(0,width/4*i,width,width/4*i);
        line(height/4*i,0,height/4*i,height);
    }
    noStroke()
    textSize(30);
    textAlign(CENTER);
    text('4',(width/4*stepx)-width/8,(height/4*stepy)-width/8);

}

function keyPressed(){
    console.log(keyCode);
    stepx++;
}
