import Object from "../Core/Object.js";

/**
 * 定义显示方向。
 * @public
 * @enum
 * @extends Object
 */
class DisplayOrientation extends Object {
    /**
     * 默认显示方向。
     * @returns {DisplayOrientation}
     */
    static get Default(): DisplayOrientation

    /**
     * 显示图像沿逆时针方向旋转 90 度以横向显示，即宽度大于高度。
     * @returns {DisplayOrientation}
     */
    static get LandscapeLeft(): DisplayOrientation

    /**
     * 显示图像沿顺时针方向旋转 90 度以横向显示，即宽度大于高度。
     * @returns {DisplayOrientation}
     */
    static get LandscapeRight(): DisplayOrientation

    /**
     * 纵向显示，即高度大于宽度。
     * @returns {DisplayOrientation}
     */
    static get Portrait(): DisplayOrientation
}

export default DisplayOrientation;