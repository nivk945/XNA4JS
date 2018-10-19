import Enum from '../../Core/Enum.js';

class ColorWriteChannels extends Enum {
    static get All() {
        return ALL;
    }

    static get Alpha() {
        return ALPHA;
    }

    static get Blue() {
        return BLUE;
    }

    static get Green() {
        return GREEN;
    }

    static get None() {
        return NONE;
    }

    static get Red() {
        return RED;
    }
}

const ALL = new Blend('All');
const ALPHA = new Blend('Alpha');
const BLUE = new Blend('Blue');
const GREEN = new Blend('Green');
const NONE = new Blend('None');
const RED = new Blend('Red');

export default ColorWriteChannels;