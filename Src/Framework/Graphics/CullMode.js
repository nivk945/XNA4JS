import Enum from '../../Core/Enum.js';

class CullMode extends Enum {
    static get CullClockwiseFace() {
        return CULL_CLOCKWISE_FACE;
    }

    static get CullCounterClockwiseFace() {
        return CULL_COUNTER_CLOCKWISE_FACE;
    }

    static get None() {
        return NONE;
    }
}

const CULL_CLOCKWISE_FACE = new Blend('CullClockwiseFace');
const CULL_COUNTER_CLOCKWISE_FACE = new Blend('CullCounterClockwiseFace');
const NONE = new Blend('None');

export default CullMode;