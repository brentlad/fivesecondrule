function start(){var d,a=document.getElementById("screen"),b=new createjs.Stage(a),c=new window.keypress.Listener,e=20,f=20,g=8,h=0,i=0,k=60,l=new Image;l.src="../images/bgBackground.png";var m=new createjs.Bitmap(l),n=new createjs.SpriteSheet({images:["../images/sPlayer.png"],frames:{width:47,height:64,numFrames:9,regX:23,regY:32},animations:{idle:[0,4],run:[6,8]}}),o=new createjs.Sprite(n,"idle");o.x=a.width/2,o.y=a.height/2,o.framerate=g;var p=new Image;p.src="../images/sCake.png";var q=new createjs.Bitmap(p);q.x=Math.round(300*Math.random()+400),q.y=Math.round(300*Math.random()+400),q.regX=50,q.regY=50,createjs.Ticker.on("tick",function(){(o.x>=q.x-47&&o.x<=q.x&&o.y>=q.y-64&&o.y<=q.y+64||o.x<=q.x+47&&o.x>=q.x&&o.y>=q.y-64&&o.y<=q.y+64)&&(q.x=Math.round(300*Math.random()+300),q.y=Math.round(300*Math.random()+300),q.scaleX=Math.round(2*Math.random()+-1),0==q.scaleX&&(q.scaleX=1),h+=Math.round(90*Math.random()+10),i+=Math.round(225*Math.random()+5)),o.x>=a.width-50&&(o.x=a.width-52),o.x<=a.width-a.width+50&&(o.x=a.width-a.width+50),o.y>=a.height-50&&(o.y=a.height-52),o.y<=290&&(o.y=o.y+20),"right"==d&&(o.x+=e),"left"==d&&(o.x-=e),"up"==d&&(o.y-=f),"down"==d&&(o.y+=f),document.getElementsByTagName("ul")[0].childNodes[1].innerHTML="Views: "+h,document.getElementsByTagName("ul")[0].childNodes[3].innerHTML="Earnings: $"+i});c.register_many([{prevent_repeat:!0,keys:"d",is_exclusive:!0,on_keydown:function(){o.gotoAndPlay("run"),o.scaleX=-1},on_keyup:function(a){return o.gotoAndPlay("idle"),!0}},{prevent_repeat:!0,keys:"a",is_exclusive:!0,on_keydown:function(){o.gotoAndPlay("run"),o.scaleX=1},on_keyup:function(a){return o.gotoAndPlay("idle"),!0}},{prevent_repeat:!0,keys:"w",is_exclusive:!0,on_keydown:function(){o.gotoAndPlay("run")},on_keyup:function(a){return o.gotoAndPlay("idle"),!0}},{prevent_repeat:!0,keys:"s",is_exclusive:!0,on_keydown:function(){o.gotoAndPlay("run")},on_keyup:function(a){return o.gotoAndPlay("idle"),!0}},{prevent_repeat:!1,keys:"d",is_exclusive:!0,on_keydown:function(){d="right"},on_keyup:function(a){return d="",o.gotoAndPlay("idle"),!0}},{prevent_repeat:!1,keys:"a",is_exclusive:!0,on_keydown:function(){d="left"},on_keyup:function(a){return d="",o.gotoAndPlay("idle"),!0}},{prevent_repeat:!1,keys:"w",is_exclusive:!0,on_keydown:function(){d="up"},on_keyup:function(a){return d="",o.gotoAndPlay("idle"),!0}},{prevent_repeat:!1,keys:"s",is_exclusive:!0,on_keydown:function(){d="down"},on_keyup:function(a){return d="",o.gotoAndPlay("idle"),!0}}]);b.addChild(m),b.addChild(q),b.addChild(o),createjs.Ticker.setInterval(25),createjs.Ticker.setFPS=k,createjs.Ticker.on("tick",b)}start();