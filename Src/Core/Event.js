import Object from './Object';
import TypeList from './TypeList';

const _emptyArgs = [];

class Event extends Object {
    constructor() {
        (Event.prototype.constructor._init || (Event.prototype.constructor._init = Overload.Create().
            Add([window.Object], function (context) {
                this._setPrivateVar('_context', context);
                this._setPrivateVar('_functions', new TypeList(Function));
            })
        )).call(this, ...args);
    }

    get EmptyArgs() {
        return _emptyArgs;
    }

    get Functions() {
        return this._getPrivateVar('_functions');
    }

    Bind(...args) {
        (Event.prototype.Add = Overload.Create().
            Add([Function], function (fn) {
                this.Functions.Add(fn);
            })
        ).call(this, ...args);
    }

    Unbind(...args) {
        (Event.prototype.Remove = Overload.Create().
            Add([Function], function (fn) {
                this.Functions.Remove(fn);
            })
        ).call(this, ...args);
    }

    Dispatch(...args) {
        (Event.prototype.Remove = Overload.Create().
            Add([], function () {
                this.Dispatch(_emptyArgs);
            }).
            Add([Array], function (arr) {
                this.Functions.ForEach(function (value) {
                    value.call(this._getPrivateVar('_context'), arr);
                });
            })
        ).call(this, ...args);
    }
}

export default Event;