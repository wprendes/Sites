class Frame {

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

