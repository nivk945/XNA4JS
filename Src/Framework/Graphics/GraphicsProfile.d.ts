import Enum from '../../Core/Enum.js';

/**
 * 识别出基于设备功能的游戏的受支持设备集。
 * @public
 * @enum
 * @extends Enum
 */
class GraphicsProfile extends Enum {
    /**
     * 使用最大的图形特性和功能集定位具有更多增强图形功能的设备，如 Xbox 360 主机和基于 Windows 的计算机。
     * @returns {GraphicsProfile}
     */
    static get HiDef(): GraphicsProfile

    /**
     * 使用有限的图形特性和功能集，允许游戏支持最广泛的设备，包括所有基于 Windows 的计算机和 Windows Phone。
     * @returns {GraphicsProfile}
     */
    static get Reach(): GraphicsProfile
}

export default GraphicsProfile;