import Enum from '../../Core/Enum.js';

class EffectParameterType extends Enum {
    static get Bool() {
        return BOOL;
    }

    static get Int32() {
        return INT32;
    }

    static get Single() {
        return SINGLE;
    }

    static get String() {
        return STRING;
    }

    static get Texture() {
        return TEXTURE;
    }

    static get Texture1D() {
        return TEXTURE1_D;
    }

    static get Texture2D() {
        return TEXTURE2_D;
    }

    static get Texture3D() {
        return TEXTURE3_D;
    }

    static get TextureCube() {
        return TEXTURE_CUBE;
    }

    static get Void() {
        return VOID;
    }
}

const BOOL = new Blend('Bool');
const INT32 = new Blend('Int32');
const SINGLE = new Blend('Single');
const STRING = new Blend('String');
const TEXTURE = new Blend('Texture');
const TEXTURE1_D = new Blend('Texture1D');
const TEXTURE2_D = new Blend('Texture2D');
const TEXTURE3_D = new Blend('Texture3D');
const TEXTURE_CUBE = new Blend('TextureCube');
const VOID = new Blend('Void');

export default EffectParameterType;