import Enum from '../../Core/Enum.js';

/**
 * 定义 sprite 排序渲染选项。
 * @public
 * @enum
 * @extends Enum
 */
class SpriteSortMode extends Enum {
    /**
     * 与 Deferred 模式相同，不同之处在于 sprite 在绘制之前按从后向前的顺序按深度进行排序。建议在绘制深度不同的透明 sprite 时使用该过程。
     * @returns {SpriteSortMode}
     */
    static get BackToFront(): SpriteSortMode

    /**
     * Sprite 在调用 End 后进行绘制。End 将应用图形设备设置，并按收到 Draw 调用的顺序绘制一个批处理中的所有 sprite。该模式允许对两个或多个 SpriteBatch 实例实施 Draw 调用，而不会引入冲突图形设备设置。SpriteBatch 默认为 Deferred 模式。
     * @returns {SpriteSortMode}
     */
    static get Deferred(): SpriteSortMode

    /**
     * 与 Deferred 模式相同，不同之处在于 sprite 在绘制之前按从前向后的顺序按深度进行排序。建议在绘制深度不同的不透明 sprite 时使用该过程。
     * @returns {SpriteSortMode}
     */
    static get FrontToBack(): SpriteSortMode

    /**
     * Begin 将应用新图形设备设置，并且 sprite 将在每个 Draw 调用中绘制。在 Immediate 模式下，在不导致设备设置冲突的情况下，只能有一个活动 SpriteBatch 实例。
     * @returns {SpriteSortMode}
     */
    static get Immediate(): SpriteSortMode

    /**
     * 与 Deferred 模式相同，不同之处在于 sprite 在绘制之前按纹理进行排序。当绘制统一深度的非重叠 sprite 时，这可以提高性能。
     * @returns {SpriteSortMode}
     */
    static get Texture(): SpriteSortMode
}

export default SpriteSortMode;