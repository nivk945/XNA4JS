import Enum from '../../Core/Enum.js';

class TextureAddressMode extends Enum {
    static get Clamp() {
        return CLAMP;
    }

    static get Mirror() {
        return MIRROR;
    }

    static get Wrap() {
        return WRAP;
    }
}

const CLAMP = new Blend('Clamp');
const MIRROR = new Blend('Mirror');
const WRAP = new Blend('Wrap');

export default TextureAddressMode;