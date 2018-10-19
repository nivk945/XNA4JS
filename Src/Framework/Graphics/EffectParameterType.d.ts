import Enum from '../../Core/Enum.js';

/**
 * 定义可用于效果参数或着色器常量的类型。
 * @public
 * @enum
 * @extends Enum
 */
class EffectParameterType extends Enum {
    /**
     * 参数为一个布尔值。传入的任何非零值将会被映射为 1 (TRUE)，然后写入到常量表；否则，该值将会在常量表中设置为 0。
     * @returns {EffectParameterType}
     */
    static get Bool(): EffectParameterType

    /**
     * 参数为一个整数。传入的任何浮点值将会被四舍五入（到零小数位），然后写入到常量表。
     * @returns {EffectParameterType}
     */
    static get Int32(): EffectParameterType

    /**
     * 参数为一个浮点数。
     * @returns {EffectParameterType}
     */
    static get Single(): EffectParameterType

    /**
     * 参数为一个字符串。
     * @returns {EffectParameterType}
     */
    static get String(): EffectParameterType

    /**
     * 参数为一个纹理。
     * @returns {EffectParameterType}
     */
    static get Texture(): EffectParameterType

    /**
     * 参数为一个 1D 纹理。
     * @returns {EffectParameterType}
     */
    static get Texture1D(): EffectParameterType

    /**
     * 参数为一个 2D 纹理。
     * @returns {EffectParameterType}
     */
    static get Texture2D(): EffectParameterType

    /**
     * 参数为一个 3D 纹理。
     * @returns {EffectParameterType}
     */
    static get Texture3D(): EffectParameterType

    /**
     * 参数为一个立方体纹理。
     * @returns {EffectParameterType}
     */
    static get TextureCube(): EffectParameterType

    /**
     * 参数为一个空指针。
     * @returns {EffectParameterType}
     */
    static get Void(): EffectParameterType
}

export default EffectParameterType;