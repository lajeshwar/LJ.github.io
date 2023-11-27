window.onload = () => {


    animateBlobs();




    /*
    
        const metaElement = document.querySelector('.meta');
        const metaElement1 = document.querySelector('.meta1');
        const metaElement2 = document.querySelector('.meta2');
        var randomWidth = 100;
        var randomHeight = randomWidth; // Maintain aspect ratio
        var radius = 50;
        var growTurn = false;
        var radiusGrow = false;
        function changeMetaSize() {
    
            if (radiusGrow == false) {
                radius -= 1;
            }
            if (radius <= 45) {
                radiusGrow = true;
            }
            if (radiusGrow == true) {
                radius += 1;
    
                if (radius == 50) {
                    radiusGrow = false;
                }
            }
    
    
            if (growTurn == false) {
                randomWidth -= 1;
                randomHeight = randomWidth;
            }
    
            if (randomWidth <= 0) {
                growTurn = true;
            }
    
            if (growTurn == true) {
                randomWidth += 1;
                randomHeight = randomWidth;
    
                if (randomWidth == 100) {
                    growTurn = false;
                }
            }
    
            metaElement.style.setProperty('--width', `${randomWidth}px`);
            metaElement.style.setProperty('--height', `${randomHeight}px`);
            metaElement.style.setProperty('--borderRadius', `${radius}%`);
            metaElement.style.setProperty('--red', `${randomHeight}`);
            metaElement.style.setProperty('--blue', `${radius}`);
            metaElement1.style.setProperty('--borderRadius', `${radius}%`);
            metaElement2.style.setProperty('--borderRadius', `${radius}%`);
        }
    
        // Call the function to change the size initially
        changeMetaSize();
    
        // Call the function periodically to change the size randomly
        setInterval(changeMetaSize, 100); // Change every 2 seconds
    
    
    
    
    
    */


    var one = document.getElementById('sc1');
    var two = document.getElementById('sc2');
    var three = document.getElementById('sc3');

    var currentSection = 1;
    one.style.opacity = 0.5;
    window.location.href = '#home';

    //animation for the first section
    fadeIn(document.getElementById('element1'), 800);
    /*
    document.getElementById('portfolio').animate(
        [
            { clipPath: "inset(0 100% 0 0)" },
            { clipPath: "inset(0 0 0 0)" },
        ],
        {
            duration: 1000
        }
    );
    */



    document.getElementById('titleId').animate([
        { transform: "translateX(-200px)" },
        { transform: "translateX(0)" }
    ], { duration: 800 });

    document.getElementById('jobTextId').animate([
        { transform: "translateX(-200px)" },
        { transform: "translateX(0)" }
    ], { duration: 800 });

    document.addEventListener('wheel', function (event) {

        //ensure that the currentSection is up to date
        if (window.location.hash) {
            if (window.location.hash == '#home') {
                currentSection = 1;
            } else if (window.location.hash == '#about') {
                currentSection = 2;
            } else if (window.location.hash == '#contact') {
                currentSection = 3;
            }
        }

        //check if the y position is positive or negative
        if (event.deltaY < 0) {
            console.log('scrolling up');

            if (currentSection > 1) {

                if (window.location.hash == "#about") {
                    one.click();
                    window.location.href = "#home";
                }
                else if (window.location.hash == "#contact") {
                    two.click();
                    window.location.href = "#about";
                }
                currentSection--;
            }

            console.log('currentSection', currentSection);

        } else {
            console.log('scrolling down');

            if (currentSection != 3) {

                if (window.location.hash == "#home") {
                    two.click();
                    window.location.href = "#about";
                }
                else if (window.location.hash == "#about") {
                    three.click();
                    window.location.href = "#contact";
                }
                currentSection++;
            }

            console.log('currentSection', currentSection);
        }
    });


    // Add smooth scroll behavior to anchor links

    //current bug: cannot click the same anchor link twice, otherwise will move slighty

    one.addEventListener('click', function (e) {
        one.style.opacity = 0.5;
        two.style.opacity = 1;
        three.style.opacity = 1;
        e.preventDefault();
        const target = this.getAttribute('href');

        if (target != window.location.hash) {
            var left = document.getElementById('leftId');

            smoothScroll(target, 85);
            var element = document.getElementById('element1');
            fadeIn(element, 800);

            document.getElementById('titleId').animate([
                { transform: "translateX(-200px)" },
                { transform: "translateX(0)" }
            ], { duration: 800 });

            document.getElementById('jobTextId').animate([
                { transform: "translateX(-200px)" },
                { transform: "translateX(0)" }
            ], { duration: 800 });
        }

    });




    two.addEventListener('click', function (e) {
        one.style.opacity = 1;
        two.style.opacity = 0.5;
        three.style.opacity = 1;

        e.preventDefault();
        const target = this.getAttribute('href');

        if (target != window.location.hash) {
            smoothScroll(target, 0);
            var element = document.getElementById('element2');
            fadeIn(element, 1500);
            var left = document.getElementById('leftId');
        }
    });

    three.addEventListener('click', function (e) {
        one.style.opacity = 1;
        two.style.opacity = 1;
        three.style.opacity = 0.5;

        e.preventDefault();
        const target = this.getAttribute('href');
        if (target != window.location.hash) {
            smoothScroll(target, 0);
            var element = document.getElementById('element3');
            fadeIn(element, 1500);
            var left = document.getElementById('leftId');
        }
    });

}

// Smooth scroll to the target anchor point
function smoothScroll(target, offset) {
    const startPosition = window.pageYOffset;
    const targetPosition = document.querySelector(target).offsetTop - offset;
    const distance = (targetPosition - startPosition);
    const duration = 800; // Adjust the scroll duration as needed
    let startTime = null;

    function scrollAnimation(currentTime) {
        if (startTime === null) {
            startTime = currentTime;
        }

        const elapsedTime = currentTime - startTime;
        const scrollProgress = Math.min(elapsedTime / duration, 1);
        const scrollDistance = distance * scrollProgress;
        const newPosition = startPosition + scrollDistance;

        window.scrollTo(0, newPosition);

        if (scrollProgress < 1) {
            requestAnimationFrame(scrollAnimation);
        }
    }

    requestAnimationFrame(scrollAnimation);
    window.location.href = target;

}

function fadeIn(element, duration) {
    let start = null;
    const targetOpacity = 1;

    function animation(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const opacity = progress / duration;

        element.style.opacity = Math.min(opacity, targetOpacity);

        if (progress < duration) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

function revealIn(element, duration) {
    let start = null;
    const targetOpacity = 1;

    function animation(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const opacity = progress / duration;

        element.style.clipPath = inset(0, opacity, 0, 0);

        if (progress < duration) {
            requestAnimationFrame(animation);
        }
    }
    requestAnimationFrame(animation);
}


function animateBlobs() {
    // Original code by Gerard Ferrandez
    // @see https://codepen.io/ge1doot/pen/RNdwQB?q=metaballs&limit=ge1doot

    var lava0, lava1, lava2;

    // ==== Point constructor ====
    var Point = function (x, y) {
        this.x = x;
        this.y = y;
        this.magnitude = x * x + y * y;
        this.computed = 0;
        this.force = 0;
    }

    Point.prototype.add = function (p) {
        return new Point(this.x + p.x, this.y + p.y);
    }
    // ==== Ball constructor ====
    var Ball = function (parent) {
        this.vel = new Point(
            (Math.random() > 0.5 ? 1 : -1) * (0.2 + Math.random() * 0.25), (Math.random() > 0.5 ? 1 : -1) * (0.2 + Math.random() * 1)
        );
        this.pos = new Point(
            parent.width * 0.2 + Math.random() * parent.width * 0.6,
            parent.height * 0.2 + Math.random() * parent.height * 0.6
        );
        this.size = (parent.wh / 15) + Math.random() * (parent.wh / 15);
        this.width = parent.width;
        this.height = parent.height;
    }
    // ==== move balls ====
    Ball.prototype.move = function () {


        // ---- bounce borders ----
        if (this.pos.x >= this.width - this.size - 60 && this.vel.x > 0) {
            this.vel.x = -this.vel.x;
            this.pos.x = this.width - this.size - 60;
        } else if (this.pos.x <= this.size + 60 && this.vel.x < 0) {
            this.vel.x = -this.vel.x;
            this.pos.x = this.size + 60;
        }

        if (this.pos.y >= this.height - this.size - 65 && this.vel.y > 0) {
            this.vel.y = -this.vel.y;
            this.pos.y = this.height - this.size - 65;
        } else if (this.pos.y <= this.size + 65 && this.vel.y < 0) {
            this.vel.y = -this.vel.y;
            this.pos.y = this.size + 65;
        }


        // ---- velocity ----
        this.pos = this.pos.add(this.vel);
    }
    // ==== lavalamp constructor ====
    var LavaLamp = function (width, height, numBalls, c0, c1) {
        this.step = 10;
        this.width = width;
        this.height = height;
        this.wh = Math.min(width, height);
        this.sx = Math.floor(this.width / this.step);
        this.sy = Math.floor(this.height / this.step);
        this.paint = false;
        this.metaFill = createRadialGradient(width, height, width, c0, c1);
        this.plx = [0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0];
        this.ply = [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1];
        this.mscases = [0, 3, 0, 3, 1, 3, 0, 3, 2, 2, 0, 2, 1, 1, 0];
        this.ix = [1, 0, -1, 0, 0, 1, 0, -1, -1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1];
        this.grid = [];
        this.balls = [];
        this.iter = 0;
        this.sign = 1;
        // ---- init grid ----
        for (var i = 0; i < (this.sx + 2) * (this.sy + 2); i++) {
            this.grid[i] = new Point(
                (i % (this.sx + 2)) * this.step, (Math.floor(i / (this.sx + 2))) * this.step
            )
        }
        // ---- create metaballs ----
        for (var i = 0; i < numBalls; i++) {
            this.balls[i] = new Ball(this);
        }
    }
    // ==== compute cell force ====
    LavaLamp.prototype.computeForce = function (x, y, idx) {
        var force;
        var id = idx || x + y * (this.sx + 2);
        if (x === 0 || y === 0 || x === this.sx || y === this.sy) {
            var force = 0.6 * this.sign;
        }
        else {
            var cell = this.grid[id];
            var force = 0;
            var i = 0,
                ball;
            while (ball = this.balls[i++]) {
                force += ball.size * ball.size / (-2 * cell.x * ball.pos.x - 2 * cell.y * ball.pos.y + ball.pos.magnitude + cell.magnitude);
            }
            force *= this.sign
        }
        this.grid[id].force = force;
        return force;
    }
    // ---- compute cell ----
    LavaLamp.prototype.marchingSquares = function (next) {
        var x = next[0];
        var y = next[1];
        var pdir = next[2];
        var id = x + y * (this.sx + 2);
        if (this.grid[id].computed === this.iter) return false;
        var dir, mscase = 0;
        // ---- neighbors force ----
        for (var i = 0; i < 4; i++) {
            var idn = (x + this.ix[i + 12]) + (y + this.ix[i + 16]) * (this.sx + 2);
            var force = this.grid[idn].force;
            if ((force > 0 && this.sign < 0) || (force < 0 && this.sign > 0) || !force) {
                // ---- compute force if not in buffer ----
                force = this.computeForce(
                    x + this.ix[i + 12],
                    y + this.ix[i + 16],
                    idn
                );
            }
            if (Math.abs(force) > 1) mscase += Math.pow(2, i);
        }
        if (mscase === 15) {
            // --- inside ---
            return [x, y - 1, false];
        }
        else {
            // ---- ambiguous cases ----
            if (mscase === 5) dir = (pdir === 2) ? 3 : 1;
            else if (mscase === 10) dir = (pdir === 3) ? 0 : 2;
            else {
                // ---- lookup ----
                dir = this.mscases[mscase];
                this.grid[id].computed = this.iter;
            }
            // ---- draw line ----
            var ix = this.step / (
                Math.abs(Math.abs(this.grid[(x + this.plx[4 * dir + 2]) + (y + this.ply[4 * dir + 2]) * (this.sx + 2)].force) - 1) /
                Math.abs(Math.abs(this.grid[(x + this.plx[4 * dir + 3]) + (y + this.ply[4 * dir + 3]) * (this.sx + 2)].force) - 1) + 1
            );
            ctx.lineTo(
                this.grid[(x + this.plx[4 * dir + 0]) + (y + this.ply[4 * dir + 0]) * (this.sx + 2)].x + this.ix[dir] * ix,
                this.grid[(x + this.plx[4 * dir + 1]) + (y + this.ply[4 * dir + 1]) * (this.sx + 2)].y + this.ix[dir + 4] * ix
            );
            this.paint = true;
            // ---- next ----
            return [
                x + this.ix[dir + 4],
                y + this.ix[dir + 8],
                dir
            ];
        }
    }
    LavaLamp.prototype.renderMetaballs = function () {
        var i = 0,
            ball;
        while (ball = this.balls[i++]) ball.move();
        // ---- reset grid ----
        this.iter++;
        this.sign = -this.sign;
        this.paint = false;
        ctx.fillStyle = this.metaFill;
        ctx.beginPath();
        // ---- compute metaballs ----
        i = 0;
        ctx.shadowBlur = 50;
        ctx.shadowColor = "black";
        while (ball = this.balls[i++]) {
            // ---- first cell ----
            var next = [
                Math.round(ball.pos.x / this.step),
                Math.round(ball.pos.y / this.step), false
            ];
            // ---- marching squares ----
            do {
                next = this.marchingSquares(next);
            } while (next);
            // ---- fill and close path ----
            if (this.paint) {
                ctx.fill();
                ctx.closePath();
                ctx.beginPath();
                this.paint = false;
            }
        }
    }
    // ---- gradients ----
    var createRadialGradient = function (w, h, r, c0, c1) {
        var gradient = ctx.createRadialGradient(
            w / 2, h / 2, 0,
            w / 2, h / 2, r
        );
        gradient.addColorStop(0.1, c0);
        gradient.addColorStop(1, c1);
        return gradient;
    }

    // ==== main loop ====
    var run = function () {
        requestAnimationFrame(run);
        ctx.clearRect(0, 0, screen.width, screen.height);

        lava0.renderMetaballs();
        lava1.renderMetaballs();
        lava2.renderMetaballs();
    }

    // ---- canvas ----
    var screen = document.getElementById("screen");
    if (screen.getContext) {
        var ctx = screen.getContext("2d");
    }

    screen.width = window.innerWidth;
    screen.height = window.innerHeight;
    // ---- create LavaLamps ----
    lava0 = new LavaLamp(screen.width, screen.height, 7, "#F8CEE1", "#8942a4");
    lava2 = new LavaLamp(screen.width, screen.height, 8, "#cec9c5", "#1c4995");
    lava1 = new LavaLamp(screen.width, screen.height, 9, "#ebebeb", "#9EB893");

    // ---- start engine ----
    run();
}