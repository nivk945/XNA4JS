import TypeList from '../Core/TypeList.js';
import CurveKey from './CurveKey.js';

/**
 * 包含组成 Curve 的 CurveKeys。
 * @public
 * @class
 * @extends Object
 */
class CurveKeyCollection extends TypeList {
    /**
     * 初始化新的 CurveKeyCollection 实例。
     * @constructs
     * @returns {CurveKeyCollection}
     */
    constructor(): CurveKeyCollection

    /**
     * 初始化新的 CurveKeyCollection 实例。
     * @constructs
     * @param {Array<type>} collection 默认数组。
     * @returns {TypeList}
     */
    constructor(collection: Array<type>): CurveKeyCollection

    /**
     * 初始化新的 CurveKeyCollection 实例。
     * @constructs
     * @param {Number} capacity 数组初始长度。
     * @returns {TypeList}
     */
    constructor(capacity: Number): CurveKeyCollection

    /**
     * 向数组末尾追加一个元素。
     * @param {CurveKey} item 要追加的元素。
     */
    Add(item: CurveKey): null

    /**
     * 从 CurveKeyCollection 中移除所有 CurveKeys。
     */
    Clear(): null

    /**
     * 创建 CurveKeyCollection 的副本。
     */
    Clone(): null

    /**
     * 确定 CurveKeyCollection 中是否包含指定的 CurveKey。
     * @param {CurveKey} item true 表示 CurveKey 已在 CurveKeyCollection 中找到；false 为未找到。
     * @returns {Boolean}
     */
    Contains(item: CurveKey): Boolean

    /**
     * 将 CurveKeyCollection 的 CurveKeys 复制到始于提供的数组索引的数组。
     * @param {TypeList<CurveKey>} array 复制自 CurveKeyCollection 的 CurveKeys 目标。数组必须具有基于零的索引。
     * @param {Number} arrayIndex 复制自 CurveKeyCollection 的 CurveKeys 目标。数组必须具有基于零的索引。
     */
    CopyTo(array: TypeList<CurveKey>, arrayIndex: Number): null

    /**
     * 返回可循环访问 CurveKeyCollection 的枚举器。
     * @returns {Array}
     */
    GetEnumerator(): Array

    /**
     * 确定 CurveKeyCollection 中 CurveKey 的索引。
     * @param {CurveKey} item 要在 CurveKeyCollection 中查找的 CurveKey。
     * @returns {Number}
     */
    IndexOf(item: CurveKey): Number

    /**
     * 从 CurveKeyCollection 中移除首次出现的特定 CurveKey。
     * @param {CurveKey} item 要从 CurveKeyCollection 中删除的 CurveKey。
     * @returns {Boolean}
     */
    Remove(item: CurveKey): Boolean

    /**
     * 移除位于指定索引的 CurveKey。
     * @param {Number} index 要删除的基于零的项索引。
     */
    RemoveAt(index: Number): null

    /**
     * 获取当前实例的类型。
     * @returns {CurveKeyCollection}
     */
    GetType(): CurveKeyCollection
}

export default CurveKeyCollection;