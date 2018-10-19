import Enum from '../../Core/Enum.js';

class RenderTargetUsage extends Enum {
    static get DiscardContents() {
        return DISCARD_CONTENTS;
    }

    static get PlatformContents() {
        return PLATFORM_CONTENTS;
    }

    static get PreserveContents() {
        return PRESERVE_CONTENTS;
    }
}

const DISCARD_CONTENTS = new Blend('DiscardContents');
const PLATFORM_CONTENTS = new Blend('PlatformContents');
const PRESERVE_CONTENTS = new Blend('PreserveContents');

export default RenderTargetUsage;