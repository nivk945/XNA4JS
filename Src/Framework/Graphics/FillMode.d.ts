import Enum from '../../Core/Enum.js';

/**
 * 介绍用于填充定义基本体的顶点和线条的选项。
 * @public
 * @enum
 * @extends Enum
 */
class FillMode extends Enum {
    /**
     * 为每个基本体绘制实体面。
     * @returns {FillMode}
     */
    static get Solid(): FillMode

    /**
     * 绘制连接定义基本体面的顶点的线条。
     * @returns {FillMode}
     */
    static get WireFrame(): FillMode
}

export default FillMode;