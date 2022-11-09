
window.addEventListener('load',function(){
   
    const canvas = document.getElementById('c1');
    const ctx = canvas.getContext('2d');
    var topOffset = canvas.width*0.75;
    
    canvas.style.top = topOffset +"px";
    canvas.width = this.innerWidth;
    canvas.height = this.innerHeight-topOffset;
    
    
 
   
    class Particle{
       
        constructor(ParticleEffectMaster,x,y,color){
           
            this.effect = ParticleEffectMaster;
            this.x = Math.random() * this.effect.width;
            this.y =  Math.random() * this.effect.height;
            this.originX = Math.floor(x);
            this.originY = Math.floor(y);
            this.color = color;
            this.size = this.effect.gap;
            this.vx = 0;
            this.vy = 0;
            this.ease = 0.15;
            this.dx = 0;
            this.dy = 0;
            this.distance =0;
            this.force = 0;
            this.angle = 0;
            this.friction = 0.60;
        }
        draw(context){
            context.fillStyle = this.color;
            context.fillRect(this.x,this.y,this.size,this.size);
        }
        update(){
            this.dx = this.effect.mouse.x - this.x;
            this.dy = this.effect.mouse.y - this.y;
            this.distance = this.dx * this.dx+this.dy*this.dy;
            this.force = -this.effect.mouse.radius / this.distance;

            if(this.distance < this.effect.mouse.radius) {
                this.angle = Math.atan2(this.dy, this.dx); 
                this.vx += this.force * Math.sin(-this.angle);
                this.vy += this.force * Math.cos(this.angle);
            }
            this.x += (this.vx *= this.friction)+(this.originX - this.x)*this.ease;
            this.y += (this.vy *= this.friction)+(this.originY - this.y)*this.ease;

        }
        warp(){
            this.x =  Math.random() * this.effect.width;
            this.y =  Math.random() * this.effect.height;
            this.ease = 0.05;
           
        }
    }

    class ParticleEffectMaster{
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.particles = [];
            this.image = document.getElementById('image');
            this.centerX = this.width *0.5;
            this.centerY = this.height*0.5;
            this.x = this.centerX - this.image.width *0.5;
            this.y = this.centerY - this.image.height *0.5;
            if(window.innerWidth < 900)  {
                this.gap = 10;
            }else{
                this.gap = 5;
            }
            this.mouse= {radius:5000,x:undefined,y:undefined}
            window.addEventListener('mousemove',event=>{
                this.mouse.x = event.x;
                this.mouse.y = event.y-topOffset;
            });
        }
        init(context){
            context.drawImage(this.image,this.x,0);
            const pixels = context.getImageData(0,0,this.width,this.height).data; 
            for(let y= 0; y<this.height; y+=this.gap){
                for(let x= 0; x<this.width; x+=this.gap){
                    const index = (y*this.width + x ) * 4;
                    const red = pixels[index];
                    const green = pixels[index+1];
                    const blue = pixels[index+2];
                    const alpha = pixels[index+3]
                    const color = 'rgb('+red+','+green+','+blue+')';
                    
                    if(alpha > 0){
                        this.particles.push(new Particle(this,x,y,color));
                    }
                
                }
            }
        }
        draw(context){
            this.particles.forEach(particle =>particle.draw(context));
           
        }
        update(){
             this.particles.forEach(particle =>particle.update());
           

        }
        warp(){
            
            this.particles.forEach(particle =>particle.warp());
        }
    }

    const effect = new ParticleEffectMaster(canvas.width, canvas.height);
    effect.init(ctx);
 
    function animate(){
        ctx.clearRect(0,0,canvas.width, canvas.height);
        effect.draw(ctx);
        effect.update();
        requestAnimationFrame(animate);
    }

    const warpButton = document.getElementById('warpButton').addEventListener('click',function(){
        effect.warp();
    });
     animate();

 
     
     
});

