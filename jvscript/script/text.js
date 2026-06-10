const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

class PopOnScroll {
    constructor(selector) {
        this.elements = document.querySelectorAll(selector);
        this.observer = new IntersectionObserver(this.onIntersect.bind(this));
        this.elements.forEach(el => this.observer.observe(el));
    }

    onIntersect(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }
}

class FadeLeft {
    constructor(selector) {
        this.elements = document.querySelectorAll(selector);
        this.observer = new IntersectionObserver(this.onIntersect.bind(this));
        this.elements.forEach(el => this.observer.observe(el));
    }

    onIntersect(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }
}

class FadeRight {
    constructor(selector) {
        this.elements = document.querySelectorAll(selector);
        this.observer = new IntersectionObserver(this.onIntersect.bind(this));
        this.elements.forEach(el => this.observer.observe(el));
    }

    onIntersect(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }
}

class FadeIn {
    constructor(selector) {
        this.elements = document.querySelectorAll(selector);
        this.observer = new IntersectionObserver(this.onIntersect.bind(this), { threshold: 0.2 });
        this.elements.forEach(el => this.observer.observe(el));
    }

    onIntersect(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                this.observer.unobserve(entry.target); // fade only once
            }
        });
    }
}
