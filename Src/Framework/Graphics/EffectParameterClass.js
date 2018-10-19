import Enum from '../../Core/Enum.js';

class EffectParameterClass extends Enum {
    static get Matrix() {
        return MATRIX;
    }

    static get Object() {
        return OBJECT;
    }

    static get Scalar() {
        return SCALAR;
    }

    static get Struct() {
        return STRUCT;
    }

    static get Vector() {
        return VECTOR;
    }
}

const MATRIX = new Blend('Matrix');
const OBJECT = new Blend('Object');
const SCALAR = new Blend('Scalar');
const STRUCT = new Blend('Struct');
const VECTOR = new Blend('Vector');

export default EffectParameterClass;