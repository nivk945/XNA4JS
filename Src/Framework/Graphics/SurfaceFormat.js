import Enum from '../../Core/Enum.js';

class SurfaceFormat extends Enum {
    static get Alpha8() {
        return ALPHA8;
    }

    static get Bgr565() {
        return BGR565;
    }

    static get Bgra4444() {
        return BGRA4444;
    }

    static get Bgra5551() {
        return BGRA5551;
    }

    static get Color() {
        return COLOR;
    }

    static get Dxt1() {
        return DXT1;
    }

    static get Dxt3() {
        return DXT3;
    }

    static get Dxt5() {
        return DXT5;
    }

    static get HalfSingle() {
        return HALF_SINGLE;
    }

    static get HalfVector2() {
        return HALF_VECTOR2;
    }

    static get HalfVector4() {
        return HALF_VECTOR4;
    }

    static get HdrBlendable() {
        return HDR_BLENDABLE;
    }

    static get NormalizedByte2() {
        return NORMALIZED_BYTE2;
    }

    static get NormalizedByte4() {
        return NORMALIZED_BYTE4;
    }

    static get Rg32() {
        return RG32;
    }

    static get Rgba1010102() {
        return RGBA1010102;
    }

    static get Rgba64() {
        return RGBA64;
    }

    static get Single() {
        return SINGLE;
    }

    static get Vector2() {
        return VECTOR2;
    }

    static get Vector4() {
        return VECTOR4;
    }
}

const ALPHA8 = new SurfaceFormat('Alpha8');
const BGR565 = new SurfaceFormat('Bgr565');
const BGRA4444 = new SurfaceFormat('Bgra4444');
const BGRA5551 = new SurfaceFormat('Bgra5551');
const COLOR = new SurfaceFormat('Color');
const DXT1 = new SurfaceFormat('Dxt1');
const DXT3 = new SurfaceFormat('Dxt3');
const DXT5 = new SurfaceFormat('Dxt5');
const HALF_SINGLE = new SurfaceFormat('HalfSingle');
const HALF_VECTOR2 = new SurfaceFormat('HalfVector2');
const HALF_VECTOR4 = new SurfaceFormat('HalfVector4');
const HDR_BLENDABLE = new SurfaceFormat('HdrBlendable');
const NORMALIZED_BYTE2 = new SurfaceFormat('NormalizedByte2');
const NORMALIZED_BYTE4 = new SurfaceFormat('NormalizedByte4');
const RG32 = new SurfaceFormat('Rg32');
const RGBA1010102 = new SurfaceFormat('Rgba1010102');
const RGBA64 = new SurfaceFormat('Rgba64');
const SINGLE = new SurfaceFormat('Single');
const VECTOR2 = new SurfaceFormat('Vector2');
const VECTOR4 = new SurfaceFormat('Vector4');

export default SurfaceFormat;