class BackgroundFX {
    constructor(selector, looping = false) {
        this.el = document.querySelector(selector);

        if (!this.el) {
            console.error(`BackgroundFX Error: Element "${selector}" not found.`);
            return;
        }

        if (looping) {
            const bg = this.getBackgroundUrl(this.el);
            const color = this.getBackgroundColor(this.el);

            if (bg && bg !== "none") {
                this.ini = bg; // already in url("...") format
            } else if (color && color !== "rgba(0, 0, 0, 0)") {
                this.ini = color;
            } else {
                this.ini = null;
            }

            //console.log(`Initial background value stored: ${this.ini}`);
        }

    }

    setImage(url) {
        if (!url || typeof url !== "string") {
            console.error("BackgroundFX Error: Invalid image URL.");
            return;
        }

        if (this.ini) {
            if (this.ini !== this.getBackgroundUrl(this.el)) url = this.ini;
        }

        //console.log(`Setting background image to: ${url}`);
        //console.log(`While ini image is: ${this.ini}`);

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
        if (this.ini) {
            if (this.ini !== this.el.style.backgroundColor) color = this.ini;
        }

        //console.log(`Setting background color to: ${color}`);
        //console.log(`While ini color is: ${this.ini}`);

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

    getBackgroundUrl(el) {
        const style = window.getComputedStyle(el);
        const bg = style.backgroundImage;

        if (!bg || bg === "none") return null;

        // Extract the URL inside url("...")
        const match = bg.match(/url\(["']?(.*?)["']?\)/);
        if (!match) return null;

        const fullUrl = match[1];

        // Convert absolute → relative
        const urlObj = new URL(fullUrl, window.location.origin);

        return "." + urlObj.pathname + urlObj.search + urlObj.hash;
    }

    getBackgroundColor(el) {
        const style = window.getComputedStyle(el);
        const bg = style.backgroundColor;

        if (!bg || bg === "rgba(0, 0, 0, 0)") return null;

        return bg;
    }
}