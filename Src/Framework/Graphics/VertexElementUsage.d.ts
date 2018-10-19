import Enum from '../../Core/Enum.js';

/**
 * 定义顶点元素的用途。
 * @public
 * @enum
 * @extends Enum
 */
class VertexElementUsage extends Enum {
    /**
     * 顶点 binormal 数据。
     * @returns {VertexElementUsage}
     */
    static get Binormal(): VertexElementUsage

    /**
     * 混合索引数据。（BlendIndices 的 UsageIndex 为 0）使用经过索引的调色板蒙皮来为固定功能顶点处理指定矩阵索引。
     * @returns {VertexElementUsage}
     */
    static get BlendIndices(): VertexElementUsage

    /**
     * 混合权重数据。（BlendWeight 的 UsageIndex 为 0）指定固定功能顶点处理中的混合权重。
     * @returns {VertexElementUsage}
     */
    static get BlendWeight(): VertexElementUsage

    /**
     * 包含漫反射或镜面反射颜色的顶点数据。（Color 的 UsageIndex 为 0）指定固定功能顶点着色器和像素着色器（ps_3_0 之前的版本）中的漫反射颜色。（Color 的 UsageIndex 为 1）指定固定功能顶点着色器和像素着色器（ps_3_0 之前）中的镜面反射颜色。
     * @returns {VertexElementUsage}
     */
    static get Color(): VertexElementUsage

    /**
     * 顶点数据包含深度数据。
     * @returns {VertexElementUsage}
     */
    static get Depth(): VertexElementUsage

    /**
     * 顶点数据包含雾化数据。（Fog 的 UsageIndex 为 0）指定像素着色完成后要使用的雾化混合值。此标志适用于 ps_3_0 之前版本的像素着色器。
     * @returns {VertexElementUsage}
     */
    static get Fog(): VertexElementUsage

    /**
     * 顶点法线数据。（Normal 的 UsageIndex 为 0）指定固定功能顶点处理和 N-patch 嵌入器的顶点法线。（法线的 UsageIndex 这 1）指定蒙皮的固定功能顶点处理的顶点法线。
     * @returns {VertexElementUsage}
     */
    static get Normal(): VertexElementUsage

    /**
     * 磅值数据。（PointSize 的 UsageIndex 为 0）指定磅值属性，光栅器安装引擎所使用该属性将一个点扩展为一个四元组以实现点式 sprite 功能。
     * @returns {VertexElementUsage}
     */
    static get PointSize(): VertexElementUsage

    /**
     * 位置数据。（Position 的 UsageIndex 为 0）指定固定功能顶点处理和 N-patch 嵌入器中未变换的位置。（Position 的 UsageIndex 为 1）指定蒙皮的固定功能顶点着色器中未变换的位置。
     * @returns {VertexElementUsage}
     */
    static get Position(): VertexElementUsage

    /**
     * 顶点数据包含采样器数据。（Sample 的 UsageIndex 为 0）指定要查找的替换值。
     * @returns {VertexElementUsage}
     */
    static get Sample(): VertexElementUsage

    /**
     * 顶点切线数据。
     * @returns {VertexElementUsage}
     */
    static get Tangent(): VertexElementUsage

    /**
     * 单精度正浮点值。（TessellateFactor 的 UsageIndex 为 0）指定嵌入单元中用来控制嵌入比率的嵌入因素。
     * @returns {VertexElementUsage}
     */
    static get TessellateFactor(): VertexElementUsage

    /**
     * 纹理坐标数据。(TextureCoordinate, n) 指定固定功能顶点处理和像素着色器（ps_3_0 之前的版本）中的纹理坐标。这些坐标可以用来传送用户定义的数据。
     * @returns {VertexElementUsage}
     */
    static get TextureCoordinate(): VertexElementUsage
}

export default VertexElementUsage;