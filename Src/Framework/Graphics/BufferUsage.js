import Enum from '../../Core/Enum.js';

class BufferUsage extends Enum {
    static get None() {
        return NONE;
    }

    static get WriteOnly() {
        return WRITE_ONLY;
    }
}

const NONE = new Blend('None');
const WRITE_ONLY = new Blend('WriteOnly');

export default BufferUsage;