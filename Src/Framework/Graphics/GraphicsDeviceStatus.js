import Enum from '../../Core/Enum.js';

class GraphicsDeviceStatus extends Enum {
    static get Lost() {
        return LOST;
    }

    static get Normal() {
        return NORMAL;
    }

    static get NotReset() {
        return NOT_RESET;
    }
}

const LOST = new Blend('Lost');
const NORMAL = new Blend('Normal');
const NOT_RESET = new Blend('NotReset');

export default GraphicsDeviceStatus;