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
}

const FLAT = new CurveTangent('Flat');
const LINEAR = new CurveTangent('Linear');
const SMOOTH = new CurveTangent('Smooth');

export default CurveTangent;