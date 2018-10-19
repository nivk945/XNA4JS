import Enum from '../../Core/Enum.js';

class ClearOptions extends Enum {
    static get DepthBuffer() {
        return DEPTH_BUFFER;
    }

    static get Stencil() {
        return STENCIL;
    }

    static get Target() {
        return TARGET;
    }
}

const DEPTH_BUFFER = new Blend('DepthBuffer');
const STENCIL = new Blend('Stencil');
const TARGET = new Blend('Target');

export default ClearOptions;