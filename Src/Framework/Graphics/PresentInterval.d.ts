import Enum from '../../Core/Enum.js';

/**
 * 定义标志来描述适配器刷新速率和 Present 操作完成速率之间的关系。
 * @public
 * @enum
 * @extends Enum
 */
class PresentInterval extends Enum {
    /**
     * 等同于设置 One。
     * @returns {PresentInterval}
     */
    static get Default(): PresentInterval

    /**
     * 运行时会立即更新窗口客户端区域，并且在适配器刷新期间，可能会执行该操作多次。Present 操作可能会立即受到影响。窗口化和全屏交换链始终都可使用此选项。
     * @returns {PresentInterval}
     */
    static get Immediate(): PresentInterval

    /**
     * 驱动程序会在垂直回扫期间（运行时会发送踪迹以避免断裂）等待。Present 操作受影响的频率不会大于屏幕刷新速率；运行时会在每个适配器刷新周期最多完成一次 Present 操作。窗口化和全屏交换链始终都可使用此选项。
     * @returns {PresentInterval}
     */
    static get One(): PresentInterval

    /**
     * 驱动程序会在垂直回扫期间等待。Present 操作受影响的频率不会大于每秒屏幕刷新。
     * @returns {PresentInterval}
     */
    static get Two(): PresentInterval
}

export default PresentInterval;