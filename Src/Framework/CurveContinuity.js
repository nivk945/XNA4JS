import Enum from "../Core/Enum.js";

class CurveContinuity extends Enum {
    static get Smooth() {
        return SMOOTH;
    }

    static get Step() {
        return STEP;
    }

    static fromJSON(obj) {
        if (typeof obj === 'string') {
            obj = JSON.parse(obj);
        }
        if (!CurveContinuity[obj['_enum']]) {
            throw new TypeError('Unrecognized type');
        }
        return CurveContinuity[obj['_enum']];
    }
}

const SMOOTH = new CurveContinuity('Smooth');
const STEP = new CurveContinuity('Step');

export default CurveContinuity;