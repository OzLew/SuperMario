class block{
	constructor(img,x,y, w, h){
		this.img = img
		this.x = x + 400
		this.y = y
		this.speed = -1.5
	}

	draw(){
		image(this.img, this.x, this.y, 50, 50)
	}

	move(){
		this.x += this.speed
		if(this.x <= -this.w)
			this.x = this.w
	}
}