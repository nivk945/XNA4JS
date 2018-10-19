import Enum from '../../Core/Enum.js';

class CubeMapFace extends Enum {
    static get NegativeX() {
        return NEGATIVE_X;
    }

    static get NegativeY() {
        return NEGATIVE_Y;
    }

    static get NegativeZ() {
        return NEGATIVE_Z;
    }

    static get PositiveX() {
        return POSITIVE_X;
    }

    static get PositiveY() {
        return POSITIVE_Y;
    }

    static get PositiveZ() {
        return POSITIVE_Z;
    }
}

const NEGATIVE_X = new Blend('NegativeX');
const NEGATIVE_Y = new Blend('NegativeY');
const NEGATIVE_Z = new Blend('NegativeZ');
const POSITIVE_X = new Blend('PositiveX');
const POSITIVE_Y = new Blend('PositiveY');
const POSITIVE_Z = new Blend('PositiveZ');

export default CubeMapFace;