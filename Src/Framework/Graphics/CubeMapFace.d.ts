import Enum from '../../Core/Enum.js';

/**
 * 定义 TextureCube 类型立方体贴图的面。
 * @public
 * @enum
 * @extends Enum
 */
class CubeMapFace extends Enum {
    /**
     * 立方体贴图的负方向 x 面。
     * @returns {CubeMapFace}
     */
    static get NegativeX(): CubeMapFace

    /**
     * 立方体贴图的负方向 y 面。
     * @returns {CubeMapFace}
     */
    static get NegativeY(): CubeMapFace

    /**
     * 立方体贴图的负方向 z 面。
     * @returns {CubeMapFace}
     */
    static get NegativeZ(): CubeMapFace

    /**
     * 立方体贴图的正方向 x 面。
     * @returns {CubeMapFace}
     */
    static get PositiveX(): CubeMapFace

    /**
     * 立方体贴图的正方向 y 面。
     * @returns {CubeMapFace}
     */
    static get PositiveY(): CubeMapFace

    /**
     * 立方体贴图的正方向 z 面。
     * @returns {CubeMapFace}
     */
    static get PositiveZ(): CubeMapFace
}

export default CubeMapFace;