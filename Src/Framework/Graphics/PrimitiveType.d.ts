import Enum from '../../Core/Enum.js';

/**
 * 定义如何对顶点数据排序。
 * @public
 * @enum
 * @extends Enum
 */
class PrimitiveType extends Enum {
    /**
     * 数据将作为一个线段序列进行排序；每条线段由两个新顶点进行描述。计数可以是任意正整数。
     * @returns {PrimitiveType}
     */
    static get LineList(): PrimitiveType

    /**
     * 数据将作为一个线段序列进行排序；每条线段由一个新顶点和以前线段的最后一个顶点进行描述。计数可以是任意正整数。
     * @returns {PrimitiveType}
     */
    static get LineStrip(): PrimitiveType

    /**
     * 数据将作为一个三角形序列进行排序；每个三角形由三个新顶点进行描述。背面消隐受当前缠绕顺序渲染状态的影响。
     * @returns {PrimitiveType}
     */
    static get TriangleList(): PrimitiveType

    /**
     * 数据将作为一个三角形序列进行排序；每个三角形由两个新顶点和以前三角形的一个顶点进行描述。背面消隐标志会自动在偶数三角形上翻转。
     * @returns {PrimitiveType}
     */
    static get TriangleStrip(): PrimitiveType
}

export default PrimitiveType;