var path = require('path')

export default class BrowserUtil {
    convertImagePath(path) {
        if (this.checkIsLowResolution()) {
            const fileExt = this.getFileExtension(path);
            const pathWithoutExt = path.replace(/\.[^/.]+$/, "");

            return path = pathWithoutExt + "LowRes" + "." + fileExt;
        }

        return path;
    }    
    
    checkIsLowResolution() {
        const dimension1 = 1024;
        const dimension2 = 768;
        if (window.innerWidth <= dimension1 && window.innerHeight <= dimension2
            || window.innerWidth <= dimension2 && window.innerHeight <= dimension1
        ) {
            return true;
        } else {
            return false;
        }
    }

    getFileExtension(path) {
        return path.split('.').pop();
    }
}