import Object from '../Core/Object.js';

/**
 * 定义限定类型的数组。
 * @public
 * @class
 * @extends Object
 */
class TypeList extends Object {
    /**
     * 创建新的 TypeList 实例。
     * @constructs
     * @param {Function} type 数组内可接收的限定类型。
     * @returns {TypeList}
     */
    constructor(type: Function): TypeList

    /**
     * 创建新的 TypeList 实例。
     * @constructs
     * @param {Function} type 数组内可接收的限定类型。
     * @param {Array<type>} collection 默认数组。
     * @returns {TypeList}
     */
    constructor(type: Function, collection: Array<type>): TypeList

    /**
     * 创建新的 TypeList 实例。
     * @constructs
     * @param {Function} type 数组内可接收的限定类型。
     * @param {Number} capacity 数组初始长度。
     * @returns {TypeList}
     */
    constructor(type: Function, capacity: Number): TypeList

    /**
     * 创建用于类型检测的 TypeList 引用。
     * @param {TypeList} type 数组内可接收的限定类型。
     */
    static T(type: any): TypeList

    /**
     * 获取数组内的元素数量。
     * @returns {Number}
     */
    get Length(): Number

    /**
     * 获取数组内的元素数量。
     * @alias Length
     * @returns {Number}
     */
    get Count(): Number

    /**
     * 向数组末尾追加一个元素。
     * @param {any} item 要追加的元素。
     */
    Add(item: any): void

    /**
     * 向数组末尾追加一组元素。
     * @param {Array} arr 要追加的元素数组。
     */
    AddRange(arr: Array): void

    /**
     * 遍历数组内的每个元素并调用传入的函数。
     * @param {Function} fn 在循环体内要调用的函数。
     */
    ForEach(fn: Function): void

    /**
     * 清空数组。
     */
    Clear(): void

    /**
     * 检查元素是否包含于数组内。
     * @param {any} value 要检查的元素。
     * @returns {Boolean}
     */
    Contains(value: any): Boolean

    /**
     * 获取元素在数组内的索引。
     * @param {any} value 通过此元素搜索数组内相同元素的索引。
     * @returns {Number}
     */
    IndexOf(value: any): Number

    /**
     * 在指定的索引前插入元素。
     * @param {Number} index 要插入的元素。
     * @param {any} value
     */
    Insert(index: Number, value: any): void

    /**
     * 将传入的元素在数组内移除。
     * @param {any} value 要移除的元素。
     */
    Remove(value: any): void

    /**
     * 根据索引移除元素。
     * @param {Number} index 索引值。
     */
    RemoveAt(index: Number): void

    /**
     * 转换成 Array。
     * @returns {Array}
     */
    ToArray(): Array

    /**
     * 确定 TypeList 的两个实例是否相等。
     * @param {TypeList} other 用于与当前 TypeList 比较的 TypeList。
     * @returns {Boolean}
     */
    Equals(other: TypeList): Boolean

    /**
     * 获取当前实例的类型。
     * @returns {TypeList}
     */
    GetType(): TypeList
}

export default TypeList;