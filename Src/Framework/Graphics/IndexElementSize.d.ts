import Enum from '../../Core/Enum.js';

/**
 * 定义索引缓冲区的元素大小。
 * @public
 * @enum
 * @extends Enum
 */
class IndexElementSize extends Enum {
    /**
     * 十六位。
     * @returns {IndexElementSize}
     */
    static get SixteenBits(): IndexElementSize

    /**
     * 三十二位。
     * @returns {IndexElementSize}
     */
    static get ThirtyTwoBits(): IndexElementSize
}

export default IndexElementSize;