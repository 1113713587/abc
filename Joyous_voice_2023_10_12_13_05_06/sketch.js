var capture;
var radius = 20;
var imgCache 
let overAllTexture
function setup() {
	createCanvas(640,640);
	capture = createCapture(VIDEO);
	capture.size(640,640);
	imgCache = createGraphics(640,640)
	imgCache.translate(640,0)
	imgCache.scale(-1.2,1)

	rectMode(CENTER)
	capture.hide()
	
	
	overAllTexture=createGraphics(width,height)
	overAllTexture.loadPixels()
	// noStroke()
	for(var i=0;i<width+50;i++){
		for(var o=0;o<height+50;o++){
			overAllTexture.set(i,o,color(100,noise(i/3,o/3,i*o/50)*random([0,50,100])))
		}
	}
	overAllTexture.updatePixels()
	
}
let mode = 1
function draw() {
	
	background(0);
	imgCache.image(capture,0,0,640,640)

		noStroke()
		scale(1)
		radius = max(mouseX,0)/10+20
		for(var y=0;y<imgCache.height;y+=radius){
			for(var x=0;x<imgCache.width;x+=radius){
				var pixel = imgCache.get(x,y)
				var r = pixel[0]
				var g = pixel[1]
				var b = pixel[2]

				let bk = (r+g+b)/3
				let bkI = 10-int(bk/25.5)

					let txt = "▂▄▆█今天真开心哈哈"
					fill(r+50,g+50,b+50)
					textSize(radius)
					textStyle(BOLD)
					text(txt[bkI],x,y)
          }	      	
		}
	pop()
	

	
	// ellipse(mouseX, mouseY, 20, 20);


}	
