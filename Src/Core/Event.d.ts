import Object from './Object';
import TypeList from './TypeList';

/**
 * 定义事件类。
 * @public
 * @class
 * @extends Object
 */
class Event extends Object {
    /**
     * 创建 Event 的实例。
     * @constructs
     * @param {object} context 函数运行上下文。
     * @returns {Event}
     */
    constructor(context: object): Event

    /**
     * 获取空参数列表。
     * @returns {Array}
     */
    get EmptyArgs(): Array

    /**
     * 获取已绑定的函数列表。
     * @returns {TypeList<Event>}
     */
    get Functions(): TypeList<Event>

    /**
     * 为事件绑定一个函数。
     * @param {Function} fn 用于绑定事件的函数。
     */
    Bind(fn: Function): void

    /**
     * 为事件解绑一个函数。
     * @param {Function} fn 用于解绑事件的函数。
     */
    Unbind(fn: Function): void

    /**
     * 触发事件。
     */
    Dispatch(): void

    /**
     * 触发事件。
     * @param {Array} arr 触发事件时要传入函数的参数列表。
     */
    Dispatch(arr: Array): void
}

export default Event;