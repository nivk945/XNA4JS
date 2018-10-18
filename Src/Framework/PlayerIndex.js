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
}

const ONE = new PlayerIndex('One');
const TWO = new PlayerIndex('Two');
const THREE = new PlayerIndex('Three');
const FOUR = new PlayerIndex('Four');

export default PlayerIndex;