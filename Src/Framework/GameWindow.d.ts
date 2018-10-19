import Object from '../Core/Object.js';
import Overload from '../Core/Overload.js';
import DisplayOrientation from './DisplayOrientation.js';
import Event from '../Core/Event.js';
import Rectangle from './Rectangle.js';

/**
 * 与一个 Game 关联的系统窗口。
 * @public
 * @abstract
 * @class
 * @extends Object
 */
class GameWindow extends Object {
    /**
     * 创建 GameWindow 的实例。
     * @abstract
     * @constructs
     * @returns {GameWindow}
     */
    constructor(): GameWindow

    /**
     * 获取指定是否允许用户调整游戏窗口的大小。
     * @abstract
     * @returns {Boolean}
     */
    get AllowUserResizing(): Boolean

    /**
     * 设置指定是否允许用户调整游戏窗口的大小。
     * @abstract
     * @param {Boolean} value
     */
    set AllowUserResizing(value): void

    /**
     * 游戏窗口客户端矩形的屏幕尺寸。
     * @abstract
     * @returns {Rectangle}
     */
    get ClientBounds(): Rectangle

    /**
     * 获取当前显示方向（反映用户手中电话的实际方向）。
     * @abstract
     * @returns {DisplayOrientation}
     */
    get CurrentOrientation(): DisplayOrientation

    /**
     * 获取系统窗口的句柄。
     * @abstract
     * @returns {Number}
     */
    get Handle(): Number

    /**
     * 获取窗口当前所在屏幕的设备名称。
     * @abstract
     * @returns {String}
     */
    get ScreenDeviceName(): String

    /**
     * 获取系统窗口的标题。
     * @returns {String}
     */
    get Title(): String

    /**
     * 设置系统窗口的标题。
     * @param {String} value
     */
    set Title(value): void

    /**
     * 在 GameWindow 的大小发生变化时引发。
     * @returns {Event}
     */
    get ClientSizeChanged(): Event

    /**
     * 介绍在 GameWindow 的显示方向发生更改时引发的事件。当发生该事件时，XNA Framework 会根据开发人员使用 SupportedOrientations 指定的值自动调整游戏方向。
     * @returns {Event}
     */
    get OrientationChanged(): Event

    /**
     * 在 GameWindow 移至其他显示屏幕时引发。
     * @returns {Event}
     */
    get ScreenDeviceNameChanged(): Event

    /**
     * 开始设备过渡（从窗口到全屏，或是从全屏到窗口）。
     * @abstract
     * @param {Boolean} willBeFullScreen 指定设备是否在完成更改时处于全屏模式。
     */
    BeginScreenDeviceChange(willBeFullScreen: Boolean): void

    /**
     * 完成设备过渡。
     * @abstract
     * @param {String} screenDeviceName 窗口移动进入的桌面屏幕。该屏幕名称应为已过渡至全屏模式的图形设备的屏幕设备名称。
     */
    EndScreenDeviceChange(screenDeviceName: String): void

    /**
     * 完成设备过渡。
     * @abstract
     * @param {String} screenDeviceName 窗口移动进入的桌面屏幕。该屏幕名称应为已过渡至全屏模式的图形设备的屏幕设备名称。
     * @param {Number} clientWidth 游戏客户端窗口的新宽度。
     * @param {Number} clientHeight 游戏客户端窗口的新高度。
     */
    EndScreenDeviceChange(screenDeviceName: String, clientWidth: Number, clientHeight: Number): void

    /**
     * 在 GameWindow 获得焦点时调用。
     */
    OnActivated(): void

    /**
     * 在客户端窗口的大小发生变化时调用。引发 ClientSizeChanged 事件。
     */
    OnClientSizeChanged(): void

    /**
     * 在 GameWindow 失去焦点时调用。
     */
    OnDeactivated(): void

    /**
     * 在 GameWindow 显示方向发生更改时调用。
     */
    OnOrientationChanged(): void

    /**
     * 需要绘制 GameWindow 时进行调用。
     */
    OnPaint(): void

    /**
     * 在将 GameWindow 移到其他屏幕时调用。引发 ScreenDeviceNameChanged 事件。
     */
    OnScreenDeviceNameChanged(): void

    /**
     * 设置支持的显示方向。
     * @abstract
     * @param {DisplayOrientation} orientations 支持的显示方向集。
     */
    SetSupportedOrientations(orientations: DisplayOrientation): void

    /**
     * 设置 GameWindow 的名称。
     * @abstract
     * @param {String} title GameWindow 的新名称。
     */
    SetTitle(title: String): void
}

export default GameWindow;