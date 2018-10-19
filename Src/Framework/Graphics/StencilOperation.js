import Enum from '../../Core/Enum.js';

class StencilOperation extends Enum {
    static get Decrement() {
        return DECREMENT;
    }

    static get DecrementSaturation() {
        return DECREMENT_SATURATION;
    }

    static get Increment() {
        return INCREMENT;
    }

    static get IncrementSaturation() {
        return INCREMENT_SATURATION;
    }

    static get Invert() {
        return INVERT;
    }

    static get Keep() {
        return KEEP;
    }

    static get Replace() {
        return REPLACE;
    }

    static get Zero() {
        return ZERO;
    }
}

const DECREMENT = new Blend('Decrement');
const DECREMENT_SATURATION = new Blend('DecrementSaturation');
const INCREMENT = new Blend('Increment');
const INCREMENT_SATURATION = new Blend('IncrementSaturation');
const INVERT = new Blend('Invert');
const KEEP = new Blend('Keep');
const REPLACE = new Blend('Replace');
const ZERO = new Blend('Zero');

export default StencilOperation;