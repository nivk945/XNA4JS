import Enum from '../../Core/Enum.js';

class PrimitiveType extends Enum {
    static get LineList() {
        return LINE_LIST;
    }

    static get LineStrip() {
        return LINE_STRIP;
    }

    static get TriangleList() {
        return TRIANGLE_LIST;
    }

    static get TriangleStrip() {
        return TRIANGLE_STRIP;
    }
}

const LINE_LIST = new Blend('LineList');
const LINE_STRIP = new Blend('LineStrip');
const TRIANGLE_LIST = new Blend('TriangleList');
const TRIANGLE_STRIP = new Blend('TriangleStrip');

export default PrimitiveType;