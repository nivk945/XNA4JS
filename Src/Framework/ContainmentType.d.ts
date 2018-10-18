import Enum from "../Core/Enum.js";

/**
 * 指示边界体相互插入或包含的程度。
 * @public
 * @enum
 * @extends Enum
 */
class ContainmentType extends Enum {
    /**
     * 表明存在两个边界卷之间没有重叠。
     * @returns {ContainmentType}
     */
    static get Disjoint(): ContainmentType

    /**
     * 表示一个边界体积完全包含另一个体积。
     * @returns {ContainmentType}
     */
    static get Contains(): ContainmentType

    /**
     * 表示包围盒部分地彼此重叠。
     * @returns {ContainmentType}
     */
    static get Intersects(): ContainmentType

    /**
     * 获取当前实例的类型。
     * @returns {ContainmentType}
     */
    GetType(): ContainmentType
}

export default ContainmentType;