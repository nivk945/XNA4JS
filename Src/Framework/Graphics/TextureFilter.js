import Enum from '../../Core/Enum.js';

class TextureFilter extends Enum {
    static get Anisotropic() {
        return ANISOTROPIC;
    }

    static get Linear() {
        return LINEAR;
    }

    static get LinearMipPoint() {
        return LINEAR_MIP_POINT;
    }

    static get MinLinearMagPointMipLinear() {
        return MIN_LINEAR_MAG_POINT_MIP_LINEAR;
    }

    static get MinLinearMagPointMipPoint() {
        return MIN_LINEAR_MAG_POINT_MIP_POINT;
    }

    static get MinPointMagLinearMipLinear() {
        return MIN_POINT_MAG_LINEAR_MIP_LINEAR;
    }

    static get MinPointMagLinearMipPoint() {
        return MIN_POINT_MAG_LINEAR_MIP_POINT;
    }

    static get Point() {
        return POINT;
    }

    static get PointMipLinear() {
        return POINT_MIP_LINEAR;
    }
}

const ANISOTROPIC = new Blend('Anisotropic');
const LINEAR = new Blend('Linear');
const LINEAR_MIP_POINT = new Blend('LinearMipPoint');
const MIN_LINEAR_MAG_POINT_MIP_LINEAR = new Blend('MinLinearMagPointMipLinear');
const MIN_LINEAR_MAG_POINT_MIP_POINT = new Blend('MinLinearMagPointMipPoint');
const MIN_POINT_MAG_LINEAR_MIP_LINEAR = new Blend('MinPointMagLinearMipLinear');
const MIN_POINT_MAG_LINEAR_MIP_POINT = new Blend('MinPointMagLinearMipPoint');
const POINT = new Blend('Point');
const POINT_MIP_LINEAR = new Blend('PointMipLinear');

export default TextureFilter;