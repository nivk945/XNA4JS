import Enum from '../../Core/Enum.js';

/**
 * 定义各种类型的表面格式。
 * @public
 * @enum
 * @extends Enum
 */
class SurfaceFormat extends Enum {
    /**
     * （无符号格式）仅 8 位 alpha。
     * @returns {SurfaceFormat}
     */
    static get Alpha8(): SurfaceFormat

    /**
     * （无符号格式）16 位 BGR 像素格式，其中 5 位用于蓝色、6 位用于绿色以及 5 位用于红色。
     * @returns {SurfaceFormat}
     */
    static get Bgr565(): SurfaceFormat

    /**
     * （无符号格式）16 位 BGRA 像素格式，每个通道使用 4 位。
     * @returns {SurfaceFormat}
     */
    static get Bgra4444(): SurfaceFormat

    /**
     * （无符号格式）16 位 BGRA 像素格式，其中为每种颜色预留 5 位，1 位预留给 alpha。
     * @returns {SurfaceFormat}
     */
    static get Bgra5551(): SurfaceFormat

    /**
     * （无符号格式）带 alpha 的 32 位 ARGB 像素格式，每个通道使用 8 位。
     * @returns {SurfaceFormat}
     */
    static get Color(): SurfaceFormat

    /**
     * DXT1 压缩纹理格式。运行时不允许应用程序使用 DXTn 格式创建表面，除非表面的大小为 4 的倍数。这适用于离屏表面、渲染目标、2D 纹理、立方体纹理和体积纹理。
     * @returns {SurfaceFormat}
     */
    static get Dxt1(): SurfaceFormat

    /**
     * DXT3 压缩纹理格式。运行时不允许应用程序使用 DXTn 格式创建表面，除非表面的大小为 4 的倍数。这适用于离屏表面、渲染目标、2D 纹理、立方体纹理和体积纹理。
     * @returns {SurfaceFormat}
     */
    static get Dxt3(): SurfaceFormat

    /**
     * DXT5 压缩纹理格式。运行时不允许应用程序使用 DXTn 格式创建表面，除非表面的大小为 4 的倍数。这适用于离屏表面、渲染目标、2D 纹理、立方体纹理和体积纹理。
     * @returns {SurfaceFormat}
     */
    static get Dxt5(): SurfaceFormat

    /**
     * （浮点格式）16 位浮点格式，红色通道使用 16 位。
     * @returns {SurfaceFormat}
     */
    static get HalfSingle(): SurfaceFormat

    /**
     * （浮点格式）32 位浮点格式，红色通道和绿色通道各使用 16 位。
     * @returns {SurfaceFormat}
     */
    static get HalfVector2(): SurfaceFormat

    /**
     * （浮点格式）64 位浮点格式，每个通道（alpha、蓝色、绿色、红色）使用 16 位。
     * @returns {SurfaceFormat}
     */
    static get HalfVector4(): SurfaceFormat

    /**
     * （浮点格式）用于高动态范围数据。
     * @returns {SurfaceFormat}
     */
    static get HdrBlendable(): SurfaceFormat

    /**
     * （带符号格式）16 位凹凸贴图格式，u 和 v 数据各使用 8 位。
     * @returns {SurfaceFormat}
     */
    static get NormalizedByte2(): SurfaceFormat

    /**
     * （带符号格式）32 位凹凸贴图格式，每个通道使用 8 位。
     * @returns {SurfaceFormat}
     */
    static get NormalizedByte4(): SurfaceFormat

    /**
     * （无符号格式）32 位像素格式，红色和绿色各用 16 位。
     * @returns {SurfaceFormat}
     */
    static get Rg32(): SurfaceFormat

    /**
     * （无符号格式）32 位 RGBA 像素格式，每种颜色使用 10 位，2 位用于 alpha。
     * @returns {SurfaceFormat}
     */
    static get Rgba1010102(): SurfaceFormat

    /**
     * （无符号格式）64 位 RGBA 像素格式，每个色差使用 16 位。
     * @returns {SurfaceFormat}
     */
    static get Rgba64(): SurfaceFormat

    /**
     * （IEEE 格式）32 位浮点格式，红色通道使用 32 位。
     * @returns {SurfaceFormat}
     */
    static get Single(): SurfaceFormat

    /**
     * （IEEE 格式）64 位浮点格式，红色通道和绿色通道各使用 32 位。
     * @returns {SurfaceFormat}
     */
    static get Vector2(): SurfaceFormat

    /**
     * （IEEE 格式）128 位浮点格式，每个通道（alpha、蓝色、绿色、红色）使用 32 位。
     * @returns {SurfaceFormat}
     */
    static get Vector4(): SurfaceFormat
}

export default SurfaceFormat;