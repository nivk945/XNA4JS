import Enum from '../../Core/Enum.js';

class SpriteSortMode extends Enum {
    static get BackToFront() {
        return BACK_TO_FRONT;
    }

    static get Deferred() {
        return DEFERRED;
    }

    static get FrontToBack() {
        return FRONT_TO_BACK;
    }

    static get Immediate() {
        return IMMEDIATE;
    }

    static get Texture() {
        return TEXTURE;
    }
}

const BACK_TO_FRONT = new Blend('BackToFront');
const DEFERRED = new Blend('Deferred');
const FRONT_TO_BACK = new Blend('FrontToBack');
const IMMEDIATE = new Blend('Immediate');
const TEXTURE = new Blend('Texture');

export default SpriteSortMode;