import Enum from '../../Core/Enum.js';

class DepthFormat extends Enum {
    static get Depth16() {
        return DEPTH16;
    }

    static get Depth24() {
        return DEPTH24;
    }

    static get Depth24Stencil8() {
        return DEPTH24_STENCIL8;
    }

    static get None() {
        return NONE;
    }
}

const DEPTH16 = new Blend('Depth16');
const DEPTH24 = new Blend('Depth24');
const DEPTH24_STENCIL8 = new Blend('Depth24Stencil8');
const NONE = new Blend('None');

export default DepthFormat;