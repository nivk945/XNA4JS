import Enum from "../Core/Enum.js";

class CurveTangent extends Enum {
    static get Flat() {
        return FLAT;
    }

    static get Linear() {
        return LINEAR;
    }

    static get Smooth() {
        return SMOOTH;
    }

    static fromJSON(obj) {
        if (typeof obj === 'string') {
            obj = JSON.parse(obj);
        }
        if (!CurveTangent[obj['_enum']]) {
            throw new TypeError('Unrecognized type');
        }
        return CurveTangent[obj['_enum']];
    }
}

const FLAT = new CurveTangent('Flat');
const LINEAR = new CurveTangent('Linear');
const SMOOTH = new CurveTangent('Smooth');

export default CurveTangent;