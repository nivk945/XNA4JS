import Enum from '../../Core/Enum.js';

class BlendFunction extends Enum {
    static get Add() {
        return ADD;
    }

    static get Max() {
        return MAX;
    }

    static get Min() {
        return MIN;
    }

    static get ReverseSubtract() {
        return REVERSE_SUBTRACT;
    }

    static get Subtract() {
        return SUBTRACT;
    }
}

const ADD = new Blend('Add');
const MAX = new Blend('Max');
const MIN = new Blend('Min');
const REVERSE_SUBTRACT = new Blend('ReverseSubtract');
const SUBTRACT = new Blend('Subtract');

export default BlendFunction;