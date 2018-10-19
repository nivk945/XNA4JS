import Enum from '../../Core/Enum.js';

/**
 * 定义可用于识别后端消隐面的缠绕顺序。
 * @public
 * @enum
 * @extends Enum
 */
class CullMode extends Enum {
    /**
     * 消隐带有顺时针顶点的后端面。
     * @returns {CullMode}
     */
    static get CullClockwiseFace(): CullMode

    /**
     * 消隐带有逆时针顶点的后端面。
     * @returns {CullMode}
     */
    static get CullCounterClockwiseFace(): CullMode

    /**
     * 不消隐后端面。
     * @returns {CullMode}
     */
    static get None(): CullMode
}

export default CullMode;