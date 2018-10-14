import Enum from "../Core/Enum.js";

class DisplayOrientation extends Enum {
    static get Default() {
        return DEFAULT;
    }

    static get LandscapeLeft() {
        return LANDSCAPE_LEFT;
    }

    static get LandscapeRight() {
        return LANDSCAPE_RIGHT;
    }

    static get Portrait() {
        return PORTRAIT;
    }

    static fromJSON(obj) {
        if (typeof obj === 'string') {
            obj = JSON.parse(obj);
        }
        if (!DisplayOrientation[obj['_enum']]) {
            throw new TypeError('Unrecognized type');
        }
        return DisplayOrientation[obj['_enum']];
    }
}

const DEFAULT = new DisplayOrientation('Default');
const LANDSCAPE_LEFT = new DisplayOrientation('LandscapeLeft');
const LANDSCAPE_RIGHT = new DisplayOrientation('LandscapeRight');
const PORTRAIT = new DisplayOrientation('Portrait');

export default DisplayOrientation;