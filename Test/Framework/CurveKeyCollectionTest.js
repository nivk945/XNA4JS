import MathHelper from '../../Src/Framework/MathHelper.js';
import Assert from '../Assert.js';
import CurveKey from '../../Src/Framework/CurveKey.js';
import CurveKeyCollection from '../../Src/Framework/CurveKeyCollection.js';

let assert = new Assert('Framework/CurveKeyCollection');

function Properties() {
    let curveKeyCollection = new CurveKeyCollection([
        new CurveKey(0, 0),
        new CurveKey(-1, 1),
        new CurveKey(-1, 1)
    ]);

    // Count property

    assert.AreEqual(3, curveKeyCollection.Count);

    // Item indexer

    let key1 = new CurveKey(-1, 1);
    let key2 = curveKeyCollection[1];
    let key3 = curveKeyCollection[2];
    
    assert.AreEqual(key1, key2);
    assert.AreNotEqual(key2, key3);
    assert.AreNotEqual(key1, key3);
}

export default function () {
    Properties();

    assert.Result();
};