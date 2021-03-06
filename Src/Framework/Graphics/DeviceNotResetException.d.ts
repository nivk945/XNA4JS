﻿/**
 * 设备消失时引发的异常，但无法在此时重置。因此无法执行渲染。
 * @public
 * @class
 * @extends Error
 */
class DeviceNotResetException extends Error {
    /**
     * 用指定的错误消息初始化该类的新实例。
     * @constructs
     * @returns {DeviceNotResetException }
     */
    constructor(desc: String): DeviceNotResetException
}

export default DeviceNotResetException;