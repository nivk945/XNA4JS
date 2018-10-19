import Enum from '../../Core/Enum.js';

class PresentInterval extends Enum {
    static get Default() {
        return DEFAULT;
    }

    static get Immediate() {
        return IMMEDIATE;
    }

    static get One() {
        return ONE;
    }

    static get Two() {
        return TWO;
    }
}

const DEFAULT = new Blend('Default');
const IMMEDIATE = new Blend('Immediate');
const ONE = new Blend('One');
const TWO = new Blend('Two');

export default PresentInterval;