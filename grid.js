class grid {


    constructor(x, y, value, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.value = value;
    }

    move(direction) {
        if(direction == "left"){
            this.i--;
        }
        if(direction == "right"){
            this.i++;
        }
        if(direction == "up"){
            this.j--;
        }
        if(direction == "down"){
            this.j++;
        }
    }
}