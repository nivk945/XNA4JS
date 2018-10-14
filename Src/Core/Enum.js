import Object from "../Core/Object.js";

class Enum extends Object {
    constructor(key) {
        super();
        this._setPrivateVar('_enum', key);
    }

    toJSON() {
        return super.toJSON({
            _enum: this._getPrivateVar('_enum')
        });
    }
}

export default Enum;