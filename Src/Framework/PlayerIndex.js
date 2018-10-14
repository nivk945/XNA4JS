import Enum from "../Core/Enum.js";

class PlayerIndex extends Enum {
    static get One() {
        return ONE;
    }

    static get Two() {
        return TWO;
    }

    static get Three() {
        return THREE;
    }

    static get Four() {
        return FOUR;
    }

    static fromJSON(obj) {
        if (typeof obj === 'string') {
            obj = JSON.parse(obj);
        }
        if (!PlayerIndex[obj['_enum']]) {
            throw new TypeError('Unrecognized type');
        }
        return PlayerIndex[obj['_enum']];
    }
}

const ONE = new PlayerIndex('One');
const TWO = new PlayerIndex('Two');
const THREE = new PlayerIndex('Three');
const FOUR = new PlayerIndex('Four');

export default PlayerIndex;