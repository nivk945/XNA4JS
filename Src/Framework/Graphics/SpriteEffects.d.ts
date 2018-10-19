import Enum from '../../Core/Enum.js';

/**
 * 定义 sprite 镜像选项。
 * @public
 * @enum
 * @extends Enum
 */
class SpriteEffects extends Enum {
    /**
     * 在渲染之前，先绕 Y 轴旋转 180 度。
     * @returns {SpriteEffects}
     */
    static get FlipHorizontally(): SpriteEffects

    /**
     * 在渲染之前，先绕 X 轴旋转 180 度。
     * @returns {SpriteEffects}
     */
    static get FlipVertically(): SpriteEffects

    /**
     * 未指定旋转。
     * @returns {SpriteEffects}
     */
    static get None(): SpriteEffects
}

export default SpriteEffects;