import Object from '../../Src/Core/Object.js';
import Assert from '../Assert.js';

let assert = new Assert('Core/Object');

export default function () {
    let obj1 = new Object();
    obj1.abc = 123;

    let obj2 = new Object();
    obj2.abc = 456;

    assert.AreEqual(obj1.ToString(), '[object Object]', '基础函数测试：ToString');

    assert.IsTrue(obj1.GetType() == Object, '基础函数测试：GetType');

    assert.IsFalse(obj1.Equals(obj2), '基础函数测试：Equals');

    assert.AreNotEqual(obj1.GetHashCode(), obj2.GetHashCode(), '基础函数测试：GeetHashCode数据混淆');

    let obj1Shadow = obj1.MemberwiseClone();
    assert.IsFalse(obj1.Equals(obj1Shadow), '影子克隆测试：影子混淆');

    assert.IsFalse(obj1.Equals(obj2), '内部隔离测试：内部混淆');

    assert.Result();
};