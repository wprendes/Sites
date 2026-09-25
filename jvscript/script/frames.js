
// BoxReSize class handles growing and shrinking of boxes with smooth transitions.
class BoxReSize {

    isBig = false;
    originalWidth = 0;
    originalHeight = 0;

    constructor(box) {
        this.object = document.getElementById(box);
        this.originalWidth = this.object.offsetWidth;
        this.originalHeight = this.object.offsetHeight;
        this.object.style.transition = "width 1.50s ease, height 1.50s ease";

    }

    GrowBox(growx = 0, growy = 0) {
        if (this.isBig) {
            this.ShrinkBox(growx, growy);
            return;
        }

        // Movement from top-right corner:

        if (growx > 0 || growy > 0) {
            //this.object.style.width = this.object.offsetWidth + growx + "px";
            //this.object.style.height = this.object.offsetHeight + growy + "px";
            this.object.style.width = growx + "px";
            this.object.style.height = growy + "px";
        } else {
            this.object.style.width = 100 + "%";
            this.object.style.height = 100 + "%";
        }

        this.isBig = true;
    }

    ShrinkBox(growx = 0, growy = 0) {

        this.object.style.width = this.originalWidth + "px";
        this.object.style.height = this.originalHeight + "px";

        this.isBig = false;
    }

}

// BoxFlip class handle Horizontal and Vertical flipping of box.
class BoxFlip {


    HorizontalBoxFlip(outerBox, innerFront, innerBack) {

        this.outer = document.getElementById(outerBox);
        this.front = document.getElementById(innerFront);
        this.back = document.getElementById(innerBack);

        if (!this.outer) throw new Error("FlipBox: outerBox is required");
        if (!this.front) throw new Error("FlipBox: innerFront is required");
        if (!this.back) throw new Error("FlipBox: innerBack is required");

        // Config
        this.axis = "x"; // 'x' or 'y'

        this.activeClass = this.axis === "x" ? "rotateX(180deg)" : "rotateY(180deg)";
        this.backFaceClass = this.axis === "x" ? "rotateX(180deg)" : "rotateY(180deg)";

        // Apply face rotation
        //this.back.classList.add(this.backFaceClass);
        console.log("Back face transform:", this.backFaceClass);
        this.back.style.transform = this.backFaceClass;

        //Add some required styles for the flipping effect
        this.outer.style.transformStyle = "preserve-3d";
        this.outer.style.transition = "transform 0.6s ease";
        this.front.style.backfaceVisibility = "hidden";
        this.back.style.backfaceVisibility = "hidden";

        // Bind click trigger
        this.outer.addEventListener("click", () => this.toggle());
    }

    VerticalBoxFlip(outerBox, innerFront, innerBack) {
        this.outer = document.getElementById(outerBox);
        this.front = document.getElementById(innerFront);
        this.back = document.getElementById(innerBack);

        if (!this.outer) throw new Error("FlipBox: outerBox is required");
        if (!this.front) throw new Error("FlipBox: innerFront is required");
        if (!this.back) throw new Error("FlipBox: innerBack is required");

        // Config
        this.axis = "y"; // 'x' or 'y'

        this.activeClass = this.axis === "x" ? "rotateX(180deg)" : "rotateY(180deg)";
        this.backFaceClass = this.axis === "x" ? "rotateX(180deg)" : "rotateY(180deg)";

        // Apply face rotation
        //this.back.classList.add(this.backFaceClass);
        console.log("Back face transform:", this.backFaceClass);
        this.back.style.transform = this.backFaceClass;

        //Add some required styles for the flipping effect
        this.outer.style.transformStyle = "preserve-3d";
        this.outer.style.transition = "transform 0.6s ease";
        this.front.style.backfaceVisibility = "hidden";
        this.back.style.backfaceVisibility = "hidden";

        // Bind click trigger
        this.outer.addEventListener("click", () => this.toggle());
    }

    toggle() {
        //this.outer.classList.toggle(this.activeClass);
        if (this.outer.style.transform === this.activeClass) {
            this.outer.style.transform = "";
        }
        else {
            this.outer.style.transform = this.activeClass;
        }
    }
}

