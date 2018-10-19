import Enum from '../Core/Enum.js';

class CurveContinuity extends Enum {
    static get Smooth() {
        return SMOOTH;
    }

    static get Step() {
        return STEP;
    }
}

const SMOOTH = new CurveContinuity('Smooth');
const STEP = new CurveContinuity('Step');

export default CurveContinuity;