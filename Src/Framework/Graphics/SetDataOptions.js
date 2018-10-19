import Enum from '../../Core/Enum.js';

class SetDataOptions extends Enum {
    static get Discard() {
        return DISCARD;
    }

    static get None() {
        return NONE;
    }

    static get NoOverwrite() {
        return NO_OVERWRITE;
    }
}

const DISCARD = new Blend('Discard');
const NONE = new Blend('None');
const NO_OVERWRITE = new Blend('NoOverwrite');

export default SetDataOptions;