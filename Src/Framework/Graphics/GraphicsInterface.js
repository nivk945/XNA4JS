import Enum from '../../Core/Enum.js';

class GraphicsInterface extends Enum {
    static get None() {
        return NONE;
    }

    static get WebGL() {
        return WEBGL;
    }

    static get WebGL2() {
        return WEBGL2;
    }

    static get WebGPU() {
        return WEBGPU;
    }

    static get Obsidian() {
        return OBSIDIAN;
    }
}

const NONE = new GraphicsInterface('None');
const WEBGL = new GraphicsInterface('WebGL');
const WEBGL2 = new GraphicsInterface('WebGL2');
const WEBGPU = new GraphicsInterface('WebGPU');
const OBSIDIAN = new GraphicsInterface('Obsidian');

export default GraphicsInterface;