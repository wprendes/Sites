class BackgroundFX {
    constructor(selector) {
        this.el = document.querySelector(selector);

        if (!this.el) {
            console.error(`BackgroundFX Error: Element "${selector}" not found.`);
            return;
        }
    }



    setImage(url) {
        if (!url || typeof url !== "string") {
            console.error("BackgroundFX Error: Invalid image URL.");
            return;
        }
        this.el.style.backgroundImage = `url("${url}")`;
        this.el.style.backgroundSize = "contain";
        this.el.style.backgroundRepeat = "no-repeat";
        this.el.style.backgroundPosition = "center";
    }

    setColor(color) {
        if (!color || typeof color !== "string") {
            console.error("BackgroundFX Error: Invalid color value.");
            return;
        }
        this.el.style.backgroundColor = color;
    }

    setGradient(gradient) {
        if (!gradient || typeof gradient !== "string") {
            console.error("BackgroundFX Error: Invalid gradient value.");
            return;
        }
        this.el.style.backgroundImage = gradient;
    }

    setSize(size) {
        const allowed = ["cover", "contain", "auto"];

        if (!size || typeof size !== "string") {
            console.error("BackgroundFX Error: Invalid size value.");
            return;
        }

        // Allow custom values like "100% 100%" or "50px 200px"
        if (!allowed.includes(size) && !size.includes("%") && !size.includes("px")) {
            console.warn(`BackgroundFX Warning: "${size}" is not a common size value, but applying anyway.`);
        }

        this.el.style.backgroundSize = size;
        this.el.style.backgroundRepeat = "no-repeat"; // prevent tiling
        this.el.style.backgroundPosition = "left"; // center the background
    }
}