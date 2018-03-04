let stepx = 1
let stepy = 1
let randnumber;

function setup(){
    createCanvas(400,400);
    randnumber = int(random(1,3));
    //text(str(randnumber*2),(width/4*stepx)-width/8,(height/4*stepy)-width/8);
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
    text(str(randnumber*2),(width/4*stepx)-width/8,(height/4*stepy)-width/8);

}

function keyPressed(){
    //console.log(stepx);
    console.log(int(random(1,3)));
    randnumber = int(random(1,3));

    if (keyCode == LEFT_ARROW) {
        stepx--;
    } else if (keyCode == RIGHT_ARROW) {
        stepx++;
    } else if(keyCode == UP_ARROW){
        stepy--;
    }else if(keyCode == DOWN_ARROW){
        stepy++;
    }
    //stepx++;
}
