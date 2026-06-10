
class Slider {
    constructor(container) {
        //this.container = document.querySelector(container);
        //this.slides = this.container.querySelector(row);
        this.container = document.getElementById(container);
        this.slides = this.container.querySelector(".slides");
        this.index = 0;
        this.width = this.slides.children[0].offsetWidth;
        this.total = this.slides.children.length;

        // Touch positions
        this.startX = 0;
        this.currentX = 0;
        this.isDragging = false;

        // Bind events
        this.slides.addEventListener("click", this.pause());
        this.slides.addEventListener("touchstart", this.touchStart.bind(this));
        this.slides.addEventListener("touchmove", this.touchMove.bind(this));
        this.slides.addEventListener("touchend", this.touchEnd.bind(this));
    }

    next() {
        this.autonext();
        this.pause(); // stop autoplay when manually navigating
    }

    back() {
        this.autoback();
        this.pause(); // stop autoplay when manually navigating
    }

    autoback() {
        this.index = (this.index - 1) % this.total;
        this.update();
    }

    autonext() {
        this.index = (this.index + 1) % this.total;
        this.update();
    }

    update() {
        this.slides.style.transition = "transform 0.4s ease";
        this.slides.style.transform = `translateX(-${this.index * this.width}px)`;
    }

    pause(interval = 0) {
        clearInterval(this.timer);
        this.timer = null;
        if (interval > 0) {
            this.AutoPlay(interval);
        }

    }

    AutoPlay(interval = 3000) {
        this.timer = setInterval(() => this.autonext(), interval);
    }


    // Touch handlers
    touchStart(e) {
        this.startX = e.touches[0].clientX;
        this.isDragging = true;
        this.slides.style.transition = "none"; // disable animation while dragging
    }

    touchMove(e) {
        if (!this.isDragging) return;
        this.currentX = e.touches[0].clientX;
        const diff = this.currentX - this.startX;

        // Move slides with finger
        this.slides.style.transform = `translateX(${diff - this.index * this.width}px)`;
    }

    touchEnd() {
        this.isDragging = false;

        const diff = this.currentX - this.startX;

        // Swipe threshold
        if (diff > 50) {
            this.back();
        } else if (diff < -50) {
            this.next();
        } else {
            this.update(); // snap back
        }

        //console.log("Control Index: ", this.index);
        if (this.index < 0) {
            this.index = 0;
            this.update();
        }
    }
}


class Parallax {
    constructor(selector) {
        this.elements = document.querySelectorAll(selector);
        window.addEventListener("scroll", this.update.bind(this));
    }

    update() {
        const scrollY = window.scrollY;

        this.elements.forEach(el => {
            const speed = parseFloat(el.dataset.speed);
            el.style.transform = `translateY(${scrollY * speed}px)`;
        });
    }
}


