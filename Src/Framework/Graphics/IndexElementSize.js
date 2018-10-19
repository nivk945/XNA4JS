import Enum from '../../Core/Enum.js';

class IndexElementSize extends Enum {
    static get SixteenBits() {
        return SIXTEEN_BITS;
    }

    static get ThirtyTwoBits() {
        return THIRTY_TWO_BITS;
    }
}

const SIXTEEN_BITS = new Blend('SixteenBits');
const THIRTY_TWO_BITS = new Blend('ThirtyTwoBits');

export default IndexElementSize;