import Enum from '../../Core/Enum.js';

class FillMode extends Enum {
    static get Solid() {
        return SOLID;
    }

    static get WireFrame() {
        return WIRE_FRAME;
    }
}

const SOLID = new Blend('Solid');
const WIRE_FRAME = new Blend('WireFrame');

export default FillMode;