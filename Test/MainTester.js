import Curve from '../Src/Framework/Curve.js';
import CurveKey from '../Src/Framework/CurveKey.js';

import IPrivateVarTest from './Interface/IPrivateVarTest.js';
import ObjectTest from './Core/ObjectTest.js';
import TypeListTest from './Core/TypeListTest.js';
import MathHelperTest from './Framework/MathHelperTest.js';
import Vector2Test from './Framework/Vector2Test.js';
import Vector3Test from './Framework/Vector3Test.js';
import Vector4Test from './Framework/Vector4Test.js';
import RectangleTest from './Framework/RectangleTest.js';
import QuaternionTest from './Framework/QuaternionTest.js';
import MatrixTest from './Framework/MatrixTest.js';
import PlaneTest from './Framework/PlaneTest.js';
import RayTest from './Framework/RayTest.js';
import BoundingTest from './Framework/BoundingTest.js';
import CurveKeyTest from './Framework/CurveKeyTest.js';
import CurveTest from './Framework/CurveTest.js';
import CurveKeyCollectionTest from './Framework/CurveKeyCollectionTest.js';
import ColorTest from './Framework/ColorTest.js';

console.warn('出现错误有可能是因为精度误差，需要人工筛选测试结果(Some errors are due to floating point errors, please ignore.)');

// 独立测试部分
// 序列化、反序列化测试
let curve = new Curve();
curve.Keys.Add(new CurveKey(0, 1));
curve.Keys.Add(new CurveKey(1, 2));
curve.Keys.Add(new CurveKey(3, 4));
let str = JSON.stringify(curve);
let obj = Curve.Deserialize(str);
console.log(`独立测试部分:序列化、反序列化测试(Independent test part: serialization and deserialization test.)：\r\n
%s\r\n
%o`, str, obj);

// 独立测试部分
// 迭代器测试
console.log(`独立测试部分:迭代器测试(Independent test part: iterator test.)：\r\n`);
for (const curveKey of curve.Keys) {
    console.dir(curveKey);
}

// 独立测试部分
// 禁止隐式转换测试
try {
    console.log(`独立测试部分:禁止隐式转换测试(Independent test part: Prohibit implicit conversion test.)：\r\n`);
    +curve;
} catch (e) {
    console.error('报错测试成功，这不是真的错误(The error test was successful.This is not a real mistake.)\r\n' + e);
}

IPrivateVarTest();
ObjectTest();
TypeListTest();
MathHelperTest();
Vector2Test();
Vector3Test();
Vector4Test();
RectangleTest();
QuaternionTest();
MatrixTest();
PlaneTest();
RayTest();
BoundingTest();
CurveKeyTest();
CurveTest();
CurveKeyCollectionTest();
ColorTest();
