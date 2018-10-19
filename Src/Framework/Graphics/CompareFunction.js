import Enum from '../../Core/Enum.js';

class CompareFunction extends Enum {
    static get Always() {
        return ALWAYS;
    }

    static get Equal() {
        return EQUAL;
    }

    static get Greater() {
        return GREATER;
    }

    static get GreaterEqual() {
        return GREATER_EQUAL;
    }

    static get Less() {
        return LESS;
    }

    static get LessEqual() {
        return LESS_EQUAL;
    }

    static get Never() {
        return NEVER;
    }

    static get NotEqual() {
        return NOT_EQUAL;
    }
}

const ALWAYS = new Blend('Always');
const EQUAL = new Blend('Equal');
const GREATER = new Blend('Greater');
const GREATER_EQUAL = new Blend('GreaterEqual');
const LESS = new Blend('Less');
const LESS_EQUAL = new Blend('LessEqual');
const NEVER = new Blend('Never');
const NOT_EQUAL = new Blend('NotEqual');

export default CompareFunction;