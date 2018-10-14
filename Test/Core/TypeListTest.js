import TypeList from '../../Src/Core/TypeList.js';
import Assert from '../Assert.js';
import Vector2 from '../../Src/Framework/Vector2.js';
import Vector3 from '../../Src/Framework/Vector3.js';

let assert = new Assert('Core/TypeList');

export default function () {
    let testVec2 = new Vector2(0, 0);
    let vec2List = new TypeList(Vector2, [testVec2, new Vector2(1, 1)]);

    assert.AreEqual(vec2List.Count, 2, '实例化测试：初始化列表失败');
    vec2List.Add(new Vector2(1, 1));
    assert.AreEqual(vec2List.Count, 3, '添加元素测试：无法添加元素');
    let a = new Vector2(2, 2);
    vec2List.Add(a);
    assert.AreEqual(vec2List.Count, 4, '添加元素测试：无法添加元素');
    vec2List.Insert(1, new Vector2(3, 3));
    assert.AreEqual(vec2List.Count, 5, '插入元素测试：无法插入元素');
    assert.AreEqual(vec2List.Contains(a), true, '元素是否存在测试：已存在元素未检出');
    assert.AreNotEqual(vec2List.IndexOf(a), -1, '存在元素索引检查：检查异常');
    vec2List.Remove(a);
    assert.AreEqual(vec2List.Contains(a), false, '元素是否存在测试：未存在元素被检出？');
    assert.AreEqual(vec2List.Count, 4, '元素数量更新测试：未更新元素数量');
    assert.AreEqual(vec2List.IndexOf(a), -1, '不存在元素索引检查：检查异常');
    vec2List.AddRange([new Vector2(5, 6), new Vector2(7, 8)]);
    assert.AreEqual(vec2List.Count, 6, '添加一组元素测试：添加失败');
    vec2List.RemoveAt(0);
    assert.AreEqual(vec2List.Count, 5, '删除元素测试：删除失败');
    assert.IsFalse(vec2List[0].Equals(testVec2), '检查删除是否正确测试：删除元素不正确');

    try {
        vec2List.Add(new Vector3(1, 2, 3));
        assert.IsTrue(false, "类型数组检测添加失败");
    } catch (e) {
        assert.IsTrue(true);
    }

    assert.Result();
};