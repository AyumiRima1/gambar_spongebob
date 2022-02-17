function setup() {
  // put setup code here
  createCanvas(400,200);
  j = 0;
}

function draw() {
  // put drawing code here
  background(251,140,1)

  strokeWeight(2)
  line(200,0,200,200);

  strokeWeight(2)
  fill(255,255,0)
  line(150,65,170,115)
  ellipse(50,70,20,20)
  ellipse(175,125,20,20)
  line(52,80,57,95)
  rect(60,20,100,100)
  rect(130,160,5,15)
  rect(88,160,5,15)
  arc(110,80,60,30,radians(360),radians(180))

  fill(255,255,255)
  rect(60,120,100,15)
  rect(112,95,10,10)
  rect(97,95,10,10)
  ellipse(127,60,30,30)
  ellipse(95,60,30,30)
  triangle(110,120,120,130,150,120)
  triangle(75,120,100,130,110,120)
  rect(50,90,10,10)
  rect(160,90,10,10)

  fill(139,69,19)
  rect(60,135,100,20)
  rect(83,155,15,7)
  rect(125,155,15,7)
  
  fill(0)
  rect(67,140,12,5)
  rect(90,140,12,5)
  rect(115,140,12,5)
  rect(137,140,12,5)
  line(95,45,95,38)
  line(90,46,88,39)
  line(100,46,102,39)
  line(129,45,129,38)
  line(123,46,121,39)
  line(135,46,138,39)
  ellipse(79,183,14,10)
  ellipse(90,180,14,10)
  ellipse(133,180,14,10)
  ellipse(145,183,14,10)

  fill(255,0,0)
  ellipse(117,118,10,15)
  ellipse(103,118,10,15)
  rect(105,116,10,5)


  strokeWeight(1)
  fill(255,255,0)
  arc(80,78,15,15,radians(150),radians(360))
  arc(143,78,15,15,radians(215),radians(360))
  arc(110,78,15,25,radians(125),radians(360))
  fill(0,255,254)
  ellipse(127,60,15,15)
  ellipse(95,60,15,15)

  fill(0)
  ellipse(95,60,7,7)
  ellipse(127,60,7,7)

  fill(240,230,140)
  ellipse(70,29,7,11)
  ellipse(70,45,4,8)
  ellipse(70,107,7,11)
  ellipse(70,90,4,8)
  ellipse(147,32,5,10)
  ellipse(147,95,7,11)
  ellipse(147,107,4,6)

  strokeWeight(2)
  fill(255,255,0)
  line(250,75,257,95)
  
  
  strokeWeight(2)
  fill(255,255,0)
  ellipse(375,125,20,20)
  line(372,115,365,95)
  rect(260,20,100,100)
  rect(330,160,5,15)
  rect(288,160,5,15)
  arc(310,80,60,30,radians(360),radians(180))

  fill(255,255,255)
  rect(260,120,100,15)
  rect(312,95,10,10)
  rect(297,95,10,10)
  ellipse(327,60,30,30)
  ellipse(295,60,30,30)
  rect(250,90,10,10)
  rect(360,90,10,10)
  triangle(275,120,300,130,310,120)
  triangle(345,120,320,130,310,120)

  fill(139,69,19)
  rect(260,135,100,20)
  rect(283,155,15,7)
  rect(325,155,15,7)
  
  fill(0)
  rect(267,140,12,5)
  rect(290,140,12,5)
  rect(315,140,12,5)
  rect(337,140,12,5)
  line(295,45,295,38)
  line(290,46,288,39)
  line(300,46,302,39)
  line(329,45,329,38)
  line(323,46,321,39)
  line(335,46,338,39)
  ellipse(279,183,14,10)
  ellipse(290,180,14,10)
  ellipse(333,180,14,10)
  ellipse(345,183,14,10)

  fill(255,0,0)
  ellipse(317,118,10,15)
  ellipse(303,118,10,15)
  rect(305,116,10,5)


  strokeWeight(1)
  fill(255,255,0)
  arc(280,78,15,15,radians(150),radians(360))
  arc(343,78,15,15,radians(215),radians(360))
  arc(310,78,15,25,radians(125),radians(360))
  fill(0,255,254)
  ellipse(327,60,15,15)
  ellipse(295,60,15,15)

  fill(0)
  ellipse(295,60,7,7)
  ellipse(327,60,7,7)

  fill(240,230,140)
  ellipse(270,29,7,11)
  ellipse(270,45,4,8)
  ellipse(270,107,7,11)
  ellipse(270,90,4,8)
  ellipse(347,32,5,10)
  ellipse(347,95,7,11)
  ellipse(347,107,4,6)
  
  strokeWeight(2)
  fill(255,255,0)
  ellipse(250,70,20,20)

  var y = 20 + 4*Math.sin(j/15);
  j += 4;
  strokeWeight(2)
  fill(255,255,0)
  ellipse(250,70,y,20)
  
  var y = 8 + 3*Math.sin(j/20);
  j += 3;
  fill(0)
  ellipse(295,60,y,y)
  ellipse(327,60,y,y)

}



