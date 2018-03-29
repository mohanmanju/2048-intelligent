let stepx = 1
let stepy = 1
let randnumber;
let cells = [];

function setup() {
    createCanvas(400, 400);
    randnumber = int(random(1, 3));
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            var cell = new grid(i, j, "", "red");
            console.log(i, j);
            cells.push(cell);

        }

    }
    //text(str(randnumber*2),(width/4*stepx)-width/8,(height/4*stepy)-width/8);
}

function draw() {
    background(198, 145, 79);
    stroke(102, 85, 64);
    strokeWeight(10);
    // for (i = 0; i <= 4; i++) {
    //     line(0, width / 4 * i, width, width / 4 * i);
    //     line(height / 4 * i, 0, height / 4 * i, height);
    // }
    for (var i = 0; i < cells.length; i++) {
        rect((width / 4) * cells[i].x, (width / 4) * cells[i].y, 100, 100, 10);
        if (cells[i].value != "") {
            fill(cells[i].color);
        }

    }
    fill(255);
    stroke(0);
    textSize(30);
    textAlign(CENTER);
    text(str(randnumber * 2), (width / 4 * stepx) - width / 8, (height / 4 * stepy) - width / 8);

}

function keyPressed() {
    //console.log(stepx);
    console.log(int(random(1, 3)));
    randnumber = int(random(1, 3));

    if (keyCode == LEFT_ARROW) {
        if (stepx > 1) {
            stepx--;
        }
    } else if (keyCode == RIGHT_ARROW) {
        if (stepx < 4) {
            stepx++;
        }
    } else if (keyCode == UP_ARROW) {
        if (stepy > 1) {
            stepy--;
        }
    } else if (keyCode == DOWN_ARROW) {
        if (stepy < 4) {
            stepy++;
        }
    }
    //stepx++;
}
