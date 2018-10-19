import Object from '../Core/Object.js';
import Overload from '../Core/Overload.js';
import DisplayOrientation from './DisplayOrientation.js';
import Event from '../Core/Event.js';

class GameWindow extends Object {
    constructor(...args) {
        super();

        window.Object.defineProperties(this, {
            Title: {
                get: () => {
                    return this._getPrivateVar('_title');
                },
                set: Overload.Create().
                    Add([String], (value) => {
                        this.SetTitle(value);

                        this._setPrivateVar('_title', value);
                    })
            }
        });

        (GameWindow.prototype.constructor._init || (GameWindow.prototype.constructor._init = Overload.Create().
            Add([], function () {
            })
        )).call(this, ...args);
    }

    get AllowUserResizing() {
        throw new SyntaxError('Property must be rewritten.');
    }

    set AllowUserResizing(value) {
        throw new SyntaxError('Property must be rewritten.');
    }

    get ClientBounds() {
        throw new SyntaxError('Property must be rewritten.');
    }

    get CurrentOrientation() {
        throw new SyntaxError('Property must be rewritten.');
    }

    get Handle() {
        throw new SyntaxError('Property must be rewritten.');
    }

    get ScreenDeviceName() {
        throw new SyntaxError('Property must be rewritten.');
    }

    get ClientSizeChanged() {
        let event = this._getPrivateVar('_clientSizeChanged');
        if (!event) {
            this._setPrivateVar('_clientSizeChanged', (event = new Event(this)));
        }
        return event;
    }

    get OrientationChanged() {
        let event = this._getPrivateVar('_orientationChanged');
        if (!event) {
            this._setPrivateVar('_orientationChanged', (event = new Event(this)));
        }
        return event;
    }

    get ScreenDeviceNameChanged() {
        let event = this._getPrivateVar('_screenDeviceNameChanged');
        if (!event) {
            this._setPrivateVar('_screenDeviceNameChanged', (event = new Event(this)));
        }
        return event;
    }

    BeginScreenDeviceChange(...args) {
        (GameWindow.prototype.BeginScreenDeviceChange = Overload.Create().
            Add([Boolean], function (willBeFullScreen) {
                throw new SyntaxError('Function must be rewritten.');
            })
        ).call(this, ...args);
    }

    EndScreenDeviceChange(...args) {
        (GameWindow.prototype.EndScreenDeviceChange = Overload.Create().
            Add([String], function (screenDeviceName) {
                this.EndScreenDeviceChange(screenDeviceName, this.ClientBounds.Width, this.ClientBounds.Height);
                throw new SyntaxError('Function must be rewritten.');
            }).
            Add([String, Number, Number], function (screenDeviceName, clientWidth, clientHeight) {
                clientWidth = clientWidth | 0;
                clientHeight = clientHeight | 0;
                throw new SyntaxError('Function must be rewritten.');
            })
        ).call(this, ...args);
    }

    OnActivated(...args) {
        (GameWindow.prototype.OnActivated = Overload.Create().
            Add([], function () {

            })
        ).call(this, ...args);
    }

    OnClientSizeChanged(...args) {
        (GameWindow.prototype.OnClientSizeChanged = Overload.Create().
            Add([], function () {
                this.ClientSizeChanged.Dispatch();
            })
        ).call(this, ...args);
    }

    OnDeactivated(...args) {
        (GameWindow.prototype.OnDeactivated = Overload.Create().
            Add([], function () {

            })
        ).call(this, ...args);
    }

    OnOrientationChanged(...args) {
        (GameWindow.prototype.OnOrientationChanged = Overload.Create().
            Add([], function () {
                this.OrientationChanged.Dispatch();
            })
        ).call(this, ...args);
    }

    OnPaint(...args) {
        (GameWindow.prototype.OnPaint = Overload.Create().
            Add([], function () {

            })
        ).call(this, ...args);
    }

    OnScreenDeviceNameChanged(...args) {
        (GameWindow.prototype.OnScreenDeviceNameChanged = Overload.Create().
            Add([], function () {
                this.ScreenDeviceNameChanged.Dispatch();
            })
        ).call(this, ...args);
    }

    SetSupportedOrientations(...args) {
        (GameWindow.prototype.SetSupportedOrientations = Overload.Create().
            Add([DisplayOrientation], function (orientations) {
                throw new SyntaxError('Function must be rewritten.');
            })
        ).call(this, ...args);
    }

    SetTitle(...args) {
        (GameWindow.prototype.SetTitle = Overload.Create().
            Add([String], function (title) {
                throw new SyntaxError('Function must be rewritten.');
            })
        ).call(this, ...args);
    }
}

export default GameWindow;