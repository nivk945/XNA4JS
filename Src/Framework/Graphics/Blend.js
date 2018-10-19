import Enum from '../../Core/Enum.js';

class Blend extends Enum {
    static get BlendFactor() {
        return BLEND_FACTOR;
    }

    static get DestinationAlpha() {
        return DESTINATION_ALPHA;
    }

    static get DestinationColor() {
        return DESTINATION_COLOR;
    }

    static get InverseBlendFactor() {
        return INVERSE_BLEND_FACTOR;
    }

    static get InverseDestinationAlpha() {
        return INVERSE_DESTINATION_ALPHA;
    }

    static get InverseDestinationColor() {
        return INVERSE_DESTINATION_COLOR;
    }

    static get InverseSourceAlpha() {
        return INVERSE_SOURCE_ALPHA;
    }

    static get InverseSourceColor() {
        return INVERSE_SOURCE_COLOR;
    }

    static get One() {
        return ONE;
    }

    static get SourceAlpha() {
        return SOURCE_ALPHA;
    }

    static get SourceAlphaSaturation() {
        return SOURCE_ALPHA_SATURATION;
    }

    static get SourceColor() {
        return SOURCE_COLOR;
    }

    static get Zero() {
        return ZERO;
    }
}

const BLEND_FACTOR = new Blend('BlendFactor');
const DESTINATION_ALPHA = new Blend('DestinationAlpha');
const DESTINATION_COLOR = new Blend('DestinationColor');
const INVERSE_BLEND_FACTOR = new Blend('InverseBlendFactor');
const INVERSE_DESTINATION_ALPHA = new Blend('InverseDestinationAlpha');
const INVERSE_DESTINATION_COLOR = new Blend('InverseDestinationColor');
const INVERSE_SOURCE_ALPHA = new Blend('InverseSourceAlpha');
const INVERSE_SOURCE_COLOR = new Blend('InverseSourceColor');
const ONE = new Blend('One');
const SOURCE_ALPHA = new Blend('SourceAlpha');
const SOURCE_ALPHA_SATURATION = new Blend('SourceAlphaSaturation');
const ZERO = new Blend('Zero');

export default Blend;