import Enum from '../../Core/Enum.js';

class VertexElementFormat extends Enum {
    static get Byte4() {
        return BYTE4;
    }

    static get Color() {
        return COLOR;
    }

    static get HalfVector2() {
        return HALF_VECTOR2;
    }

    static get HalfVector4() {
        return HALF_VECTOR4;
    }

    static get NormalizedShort2() {
        return NORMALIZED_SHORT2;
    }

    static get NormalizedShort4() {
        return NORMALIZED_SHORT4;
    }

    static get Short2() {
        return SHORT2;
    }

    static get Short4() {
        return SHORT4;
    }

    static get Single() {
        return SINGLE;
    }

    static get Vector2() {
        return VECTOR2;
    }

    static get Vector3() {
        return VECTOR3;
    }

    static get Vector4() {
        return VECTOR4;
    }
}

const BYTE4 = new Blend('Byte4');
const COLOR = new Blend('Color');
const HALF_VECTOR2 = new Blend('HalfVector2');
const HALF_VECTOR4 = new Blend('HalfVector4');
const NORMALIZED_SHORT2 = new Blend('NormalizedShort2');
const NORMALIZED_SHORT4 = new Blend('NormalizedShort4');
const SHORT2 = new Blend('Short2');
const SHORT4 = new Blend('Short4');
const SINGLE = new Blend('Single');
const VECTOR2 = new Blend('Vector2');
const VECTOR3 = new Blend('Vector3');
const VECTOR4 = new Blend('Vector4');

export default VertexElementFormat;