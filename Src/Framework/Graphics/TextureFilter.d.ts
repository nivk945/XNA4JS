import Enum from '../../Core/Enum.js';

/**
 * 在纹理采样期间定义过滤类型。
 * @public
 * @enum
 * @extends Enum
 */
class TextureFilter extends Enum {
    /**
     * 使用各向异性过滤。
     * @returns {TextureFilter}
     */
    static get Anisotropic(): TextureFilter

    /**
     * 使用线性过滤。
     * @returns {TextureFilter}
     */
    static get Linear(): TextureFilter

    /**
     * 使用线性过滤收缩或扩展，并在 mipmap 级别 (mip) 之间使用点过滤。
     * @returns {TextureFilter}
     */
    static get LinearMipPoint(): TextureFilter

    /**
     * 使用线性过滤收缩、使用点过滤扩展，并在 mipmap 级别之间使用线性过滤。
     * @returns {TextureFilter}
     */
    static get MinLinearMagPointMipLinear(): TextureFilter

    /**
     * 使用线性过滤收缩、使用点过滤扩展，并在 mipmap 级别之间使用点过滤。
     * @returns {TextureFilter}
     */
    static get MinLinearMagPointMipPoint(): TextureFilter

    /**
     * 使用点过滤收缩、使用线性过滤扩展，并在 mipmap 级别之间使用线性过滤。
     * @returns {TextureFilter}
     */
    static get MinPointMagLinearMipLinear(): TextureFilter

    /**
     * 使用点过滤收缩、使用线性过滤扩展，并在 mipmap 级别之间使用点过滤。
     * @returns {TextureFilter}
     */
    static get MinPointMagLinearMipPoint(): TextureFilter

    /**
     * 使用点过滤。
     * @returns {TextureFilter}
     */
    static get Point(): TextureFilter

    /**
     * 使用点过滤收缩（缩小）或扩展（放大），并在 mipmap 级别之间使用线性过滤。
     * @returns {TextureFilter}
     */
    static get PointMipLinear(): TextureFilter
}

export default TextureFilter;