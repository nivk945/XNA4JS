import Enum from '../../Core/Enum.js';

class GraphicsProfile extends Enum {
    static get HiDef() {
        return HI_DEF;
    }

    static get Reach() {
        return REACH;
    }
}

const HI_DEF = new Blend('HiDef');
const REACH = new Blend('Reach');

export default GraphicsProfile;