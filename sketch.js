let bg
let pip
let bloc
let spritesData
let spriteImg
let indexMario = 0
const parallax = []
const pipe = []
const mario = []
const blok = []

function preload(){
	bg = loadImage('img/scene.jpg')
	pip = loadImage('img/pipe2.png')
	bloc = loadImage('img/bl.jpg')
	spritesData = loadJSON('data.json')
	spriteImg = loadImage('img/mario.png')
}

function setup() {
	const animation = []
	createCanvas(windowWidth, windowHeight);

	for(let i = 0; i < 2; i++)
		parallax.push(new Parallaxs(bg, i * width, 0, width, height))

	for(let i = 0; i < 6; i++)
		pipe.push(new Pipe(pip, i * width, 500, width, height))

	for(let i = 0; i < 6; i++){
		blok.push(new block(bloc, i * width, 300, width, height))
		blok.push(new block(bloc, i * width + 50, 300, width, height))
		blok.push(new block(bloc, i * width + 100, 300, width, height))
	}
	

	for(let i = 0, len = spritesData.sprite.length; i < len; i++){
		let d = spritesData.sprite[i]
		let img = spriteImg.get(d.x, d.y, d.sX, d.sY)
		animation.push(img)
	}

	const n = 4
	for(let i = 0; i < n; i++){
		let p = new Mario(animation, 0, 440)
		frameRate(20)
		mario.push(p)
	}
}

function draw() {
	for(let p of parallax){
		p.draw()
		p.move()
	}

	for(let pi of pipe){
		pi.draw()
		pi.move()
	}

	for(let blo of blok){
		blo.draw()
		blo.move()
	}

	for(let asd of mario){
		asd.draw()
		asd.move()
	}
}