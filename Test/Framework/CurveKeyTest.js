import MathHelper from '../../Src/Framework/MathHelper.js';
import Assert from '../Assert.js';
import CurveContinuity from '../../Src/Framework/CurveContinuity.js';
import CurveKey from '../../Src/Framework/CurveKey.js';

let assert = new Assert('Framework/CurveKey');

function Properties() {
    let key = new CurveKey(1, 2, 3, 4, CurveContinuity.Step);

    assert.AreEqual(1, key.Position);
    assert.AreEqual(2, key.Value);
    assert.AreEqual(3, key.TangentIn);
    assert.AreEqual(4, key.TangentOut);
    assert.AreEqual(CurveContinuity.Step, key.Continuity);
}

function Clone() {
    var key = new CurveKey(1, 2, 3, 4, CurveContinuity.Step);

    assert.AreEqual(key, key.Clone());
}

export default function () {
    Properties();
    Clone();

    assert.Result();
};