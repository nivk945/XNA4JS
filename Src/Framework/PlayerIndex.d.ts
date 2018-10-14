import Object from "../Core/Object.js";

/**
 * 指定与玩家相关联的游戏控制器。
 * @public
 * @enum
 * @extends Object
 */
class PlayerIndex extends Object {
    /**
     * 第一个控制器。
     * @returns {PlayerIndex}
     */
    static get One(): PlayerIndex

    /**
     * 第二个控制器。
     * @returns {PlayerIndex}
     */
    static get Two(): PlayerIndex

    /**
     * 第三个控制器。
     * @returns {PlayerIndex}
     */
    static get Three(): PlayerIndex

    /**
     * 第四个控制器。
     * @returns {PlayerIndex}
     */
    static get Four(): PlayerIndex
}

export default PlayerIndex;