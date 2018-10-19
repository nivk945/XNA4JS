import Enum from '../../Core/Enum.js';

/**
 * 定义顶点元素格式。
 * @public
 * @enum
 * @extends Enum
 */
class VertexElementFormat extends Enum {
    /**
     * 四组件，无符号字节。
     * @returns {VertexElementFormat}
     */
    static get Byte4(): VertexElementFormat

    /**
     * 四组件、封装的、无符号字节，映射至 0 到 1 区域。输入为扩展到 (R, G, B, A) 的 Int32 格式 (ARGB)。
     * @returns {VertexElementFormat}
     */
    static get Color(): VertexElementFormat

    /**
     * 双组件、16 位浮点，扩展到 (值,值,值,值)。此类型适用于版本为 2.0 或（更高版本）的顶点着色器。
     * @returns {VertexElementFormat}
     */
    static get HalfVector2(): VertexElementFormat

    /**
     * 四组件、16 位浮点，扩展到 (value, value, value, value)。此类型适用于版本为 2.0 或（更高版本）的顶点着色器。
     * @returns {VertexElementFormat}
     */
    static get HalfVector4(): VertexElementFormat

    /**
     * 法线化、双组件、带符号 short，扩展到 (第一个 short/32767.0,第二个 short/32767.0, 0, 1)。此类型适用于版本为 2.0 或（更高版本）的顶点着色器。
     * @returns {VertexElementFormat}
     */
    static get NormalizedShort2(): VertexElementFormat

    /**
     * 法线化、四组件、带符号 short，扩展到 (第一个 short/32767.0,第二个 short/32767.0,第三个 short/32767.0,第四个 short/32767.0)。此类型适用于版本为 2.0 或（更高版本）的顶点着色器。
     * @returns {VertexElementFormat}
     */
    static get NormalizedShort4(): VertexElementFormat

    /**
     * 双组件、带符号 short，扩展到 (value, value, 0, 1)。
     * @returns {VertexElementFormat}
     */
    static get Short2(): VertexElementFormat

    /**
     * 双组件、带符号 short，扩展到 (value, value, value, value)。
     * @returns {VertexElementFormat}
     */
    static get Short4(): VertexElementFormat

    /**
     * 单组件、32 位浮点，扩展到 (float, 0, 0, 1)。
     * @returns {VertexElementFormat}
     */
    static get Single(): VertexElementFormat

    /**
     * 双组件、32 位浮点，扩展到 (float, Float32 value, 0, 1)。
     * @returns {VertexElementFormat}
     */
    static get Vector2(): VertexElementFormat

    /**
     * 三组件、32 位浮点，扩展到 (float, float, float, 1)。
     * @returns {VertexElementFormat}
     */
    static get Vector3(): VertexElementFormat

    /**
     * 四组件、32 位浮点，扩展到 (float, float, float, float)。
     * @returns {VertexElementFormat}
     */
    static get Vector4(): VertexElementFormat
}

export default VertexElementFormat;