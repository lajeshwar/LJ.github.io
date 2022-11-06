
window.addEventListener('load',function(){
    const canvas = document.getElementById('c1');
    const ctx = canvas.getContext('2d');
    console.log(ctx);
    canvas.width = this.innerWidth;
    canvas.height = this.innerHeight-80;

   
    class Particle{
        constructor(ParticleEffectMaster){
            this.effect = ParticleEffectMaster;
            this.x = Math.random() *  this.effect.width;
            this.y = Math.random() *  this.effect.height;
            this.size = 30;
        }
        draw(context){
            context.fillRect(this.x,this.y,this.size,this.size);
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
        }
        init(){
            for(let i =0; i<10; i++){
            this.particles.push(new Particle(this));          
            }  
        }
        draw(context){
            this.particles.forEach(particle =>particle.draw(context));
            context.drawImage(this.image,this.x,0);
        }
    }

    const effect = new ParticleEffectMaster(canvas.width, canvas.height);
    effect.init();
    effect.draw(ctx);
    function animate(){

    }
  
});

