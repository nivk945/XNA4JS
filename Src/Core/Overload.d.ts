/**
 * 代表任意类型的值
 * @const
 * @private
 * @type {string}
 */
const _any = '*'

interface IOverload {
    /**
     * 添加重载函数
     * @param {Array} typeList 类型列表
     * @param {Function} fun 匹配的函数
     */
    Add(typeList: [], fun: Function): IOverload
}

/**
 * 重载支持类
 * @protected
 * @interface
 */
class Overload {
    /**
     * 创建重载函数
     */
    static Create(): IOverload
}

export default Overload;