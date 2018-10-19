import Enum from '../../Core/Enum.js';

class VertexElementUsage extends Enum {
    static get Binormal() {
        return BINORMAL;
    }

    static get BlendIndices() {
        return BLEND_INDICES;
    }

    static get BlendWeight() {
        return BLEND_WEIGHT;
    }

    static get Color() {
        return COLOR;
    }

    static get Depth() {
        return DEPTH;
    }

    static get Fog() {
        return FOG;
    }

    static get Normal() {
        return NORMAL;
    }

    static get PointSize() {
        return POINT_SIZE;
    }

    static get Position() {
        return POSITION;
    }

    static get Sample() {
        return SAMPLE;
    }

    static get Tangent() {
        return TANGENT;
    }

    static get TessellateFactor() {
        return TESSELLATE_FACTOR;
    }

    static get TextureCoordinate() {
        return TEXTURE_COORDINATE;
    }
}

const BINORMAL = new Blend('Binormal');
const BLEND_INDICES = new Blend('BlendIndices');
const BLEND_WEIGHT = new Blend('BlendWeight');
const COLOR = new Blend('Color');
const DEPTH = new Blend('Depth');
const FOG = new Blend('Fog');
const NORMAL = new Blend('Normal');
const POINT_SIZE = new Blend('PointSize');
const POSITION = new Blend('Position');
const SAMPLE = new Blend('Sample');
const TANGENT = new Blend('Tangent');
const TESSELLATE_FACTOR = new Blend('TessellateFactor');
const TEXTURE_COORDINATE = new Blend('TextureCoordinate');

export default VertexElementUsage;