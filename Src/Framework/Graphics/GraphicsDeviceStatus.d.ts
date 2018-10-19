import Enum from '../../Core/Enum.js';

/**
 * 介绍设备的状态。
 * @public
 * @enum
 * @extends Enum
 */
class GraphicsDeviceStatus extends Enum {
    /**
     * 设备已经丢失。
     * @returns {GraphicsDeviceStatus}
     */
    static get Lost(): GraphicsDeviceStatus

    /**
     * 设备正常。
     * @returns {GraphicsDeviceStatus}
     */
    static get Normal(): GraphicsDeviceStatus

    /**
     * 设备尚未重置。
     * @returns {GraphicsDeviceStatus}
     */
    static get NotReset(): GraphicsDeviceStatus
}

export default GraphicsDeviceStatus;