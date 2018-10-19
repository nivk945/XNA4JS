import Object from '../Core/Object.js';

let _initialized = false;

function initialize() {

    _initialized = true;
}

function doUpdate() {

}

class FrameworkDispatcher extends Object {
    static Update() {
        if (_initialized) {
            initialize();
        }

        doUpdate();
    }
}

export default FrameworkDispatcher;