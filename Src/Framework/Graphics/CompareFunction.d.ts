import Enum from '../../Core/Enum.js';

/**
 * 确定可用于 alpha、蒙板或深度缓冲区测试的比较函数。
 * @public
 * @enum
 * @extends Enum
 */
class CompareFunction extends Enum {
    /**
     * 始终通过测试。
     * @returns {CompareFunction}
     */
    static get Always(): CompareFunction

    /**
     * 如果新像素值等于当前像素值，则接受新的像素。
     * @returns {CompareFunction}
     */
    static get Equal(): CompareFunction

    /**
     * 如果新像素值大于当前像素值，则接受新的像素。
     * @returns {CompareFunction}
     */
    static get Greater(): CompareFunction

    /**
     * 如果新像素值大于等于当前像素值，则接受新的像素。
     * @returns {CompareFunction}
     */
    static get GreaterEqual(): CompareFunction

    /**
     * 如果新像素值小于当前像素值，则接受新的像素。
     * @returns {CompareFunction}
     */
    static get Less(): CompareFunction

    /**
     * 如果新像素值小于等于当前像素值，则接受新的像素。
     * @returns {CompareFunction}
     */
    static get LessEqual(): CompareFunction

    /**
     * 始终未通过测试。
     * @returns {CompareFunction}
     */
    static get Never(): CompareFunction

    /**
     * 如果新像素值不等于当前像素值，则接受新的像素。
     * @returns {CompareFunction}
     */
    static get NotEqual(): CompareFunction
}

export default CompareFunction;