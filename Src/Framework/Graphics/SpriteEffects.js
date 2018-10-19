import Enum from '../../Core/Enum.js';

class SpriteEffects extends Enum {
    static get FlipHorizontally() {
        return FLIP_HORIZONTALLY;
    }

    static get FlipVertically() {
        return FLIP_VERTICALLY;
    }

    static get None() {
        return NONE;
    }
}

const FLIP_HORIZONTALLY = new Blend('FlipHorizontally');
const FLIP_VERTICALLY = new Blend('FlipVertically');
const NONE = new Blend('None');

export default SpriteEffects;