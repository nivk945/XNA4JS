import Enum from '../Core/Enum.js';

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
}

const DEFAULT = new DisplayOrientation('Default');
const LANDSCAPE_LEFT = new DisplayOrientation('LandscapeLeft');
const LANDSCAPE_RIGHT = new DisplayOrientation('LandscapeRight');
const PORTRAIT = new DisplayOrientation('Portrait');

export default DisplayOrientation;