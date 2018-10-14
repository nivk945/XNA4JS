import IPrivateVar from '../../Src/Interface/IPrivateVar.js';
import Assert from '../Assert.js';

let assert = new Assert('Interface/IPrivateVar');

class Tester extends IPrivateVar {
    set(key, value) {
        this._setPrivateVar(key, value);
    }

    get(key) {
        return this._getPrivateVar(key);
    }
}

export default function () {
    let tester1 = new Tester();
    let testObj1 = {
        abc: 123
    };
    tester1.set('_test', testObj1);
    let resultObj1 = tester1.get('_test');
    assert.AreEqual(testObj1, resultObj1, '一致性测试1：读取结果与传入值不一致');

    let tester2 = new Tester();
    let testObj2 = {
        bcd: 456
    };
    tester2.set('_test', testObj2);
    let resultObj2 = tester2.get('_test');
    assert.AreEqual(testObj2, resultObj2, '一致性测试2：读取结果与传入值不一致');

    assert.AreNotEqual(resultObj1, resultObj2, '内部隔离测试：内部被混淆');

    assert.AreEqual(testObj1._test, void 0, '外部隔离测试1：外部被混淆');

    assert.AreEqual(testObj2._test, void 0, '外部隔离测试2：外部被混淆');

    assert.Result();
};