/**
 * 内部变量存储对应表
 * @private
 * @type {WeakMap}
 */
let privateVars

/**
 * 可以实现内部变量的接口
 * @protected
 * @interface
 */
class IPrivateVar {
    /**
     * IPrivateVar 构造函数
     * @constructs
     * @returns {IPrivateVar} 内部变量接口
     */
    constructor(): IPrivateVar

    /**
     * 创建代理对象
     * @protected
     * @param {object} settings 设置对象
     */
    _createProxy(settings: object): void

    /**
     * 设置内部变量
     * @protected
     * @param {String} key 键
     * @param {any} value 值
     */
    _setPrivateVar(key: String, value: any): void

    /**
     * 获取内部变量
     * @protected
     * @param {String} key 键
     * @returns {any?} 
     */
    _getPrivateVar(key: String): any?
}

export default IPrivateVar;