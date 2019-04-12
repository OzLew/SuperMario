class Mario{
	constructor(animation, x, y){
		this.animation = animation 
		this.x = x
		this.y = y
		this.index = 0
		this.index2 = 5
	}

	draw(){
		image(this.animation[floor(this.index) % 4], this.x, this.y, 75, 125)
	}

	move(){
		if(keyIsDown(LEFT_ARROW)){
			this.index = this.x -= 5
		}else if(keyIsDown(RIGHT_ARROW)){
			this.index = this.x += 5
		}else if(keyIsDown(UP_ARROW)){
			image(this.animation[floor(this.index2) % 10], this.x, this.y, 75, 125)
			this.index2 = this.y -=1
		}
	}
}