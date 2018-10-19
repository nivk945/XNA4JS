import Enum from '../../Core/Enum.js';

/**
 * 定义可用于效果参数或着色器常量的类。
 * @public
 * @enum
 * @extends Enum
 */
class EffectParameterClass extends Enum {
    /**
     * 常量为一个矩阵。
     * @returns {EffectParameterClass}
     */
    static get Matrix(): EffectParameterClass

    /**
     * 常量为纹理、着色器或字符串。
     * @returns {EffectParameterClass}
     */
    static get Object(): EffectParameterClass

    /**
     * 常量为一个标量。
     * @returns {EffectParameterClass}
     */
    static get Scalar(): EffectParameterClass

    /**
     * 常量为一个结构。
     * @returns {EffectParameterClass}
     */
    static get Struct(): EffectParameterClass

    /**
     * 常量为一个矢量。
     * @returns {EffectParameterClass}
     */
    static get Vector(): EffectParameterClass
}

export default EffectParameterClass;