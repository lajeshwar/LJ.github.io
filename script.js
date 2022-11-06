
window.addEventListener('load',function(){
    const canvas = document.getElementById('c1');
    const ctx = canvas.getContext('2d');
    console.log(ctx);
    canvas.width = this.innerWidth;
    canvas.height = this.innerHeight-80;

   
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
        }
        draw(context){
            context.fillStyle = this.color;
            context.fillRect(this.x,this.y,this.size,this.size);
        }
        update(){
            this.x += (this.originX - this.x) *this.ease;
            this.y += (this.originY - this.y)*this.ease;

        }
        warp(){
            this.x = Math.random() * this.effect.width;
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
            this.gap = 5;
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
    console.log(effect)
 
    function animate(){
        ctx.clearRect(0,0,canvas.width, canvas.height);
        effect.draw(ctx);
        effect.update();
        requestAnimationFrame(animate);
    }
     animate();

     const warpButton = this.document.getElementById('warpButton'
     );
     warpButton.addEventListener('click',function(){
        effect.warp();
     });
});

