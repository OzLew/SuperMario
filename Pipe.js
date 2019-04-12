class Pipe{
	constructor(img,x,y, w, h){
		this.img = img
		this.x = x + 1000
		this.y = y
		this.speed = -1.5
	}

	draw(){
		image(this.img, this.x, this.y, 65, 62)
	}

	move(){
		this.x += this.speed
		if(this.x <= -this.w)
			this.x = this.w
	}
}