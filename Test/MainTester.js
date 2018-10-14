import IPrivateVarTest from './Interface/IPrivateVarTest.js';
import ObjectTest from './Core/ObjectTest.js';
import MathHelperTest from './Framework/MathHelperTest.js';
import Vector2Test from './Framework/Vector2Test.js';
import Vector3Test from './Framework/Vector3Test.js';
import Vector4Test from './Framework/Vector4Test.js';
import RectangleTest from './Framework/RectangleTest.js';
import QuaternionTest from './Framework/QuaternionTest.js';
import MatrixTest from './Framework/MatrixTest.js';
import PlaneTest from './Framework/PlaneTest.js';
import RayTest from './Framework/RayTest.js';
import Vector3 from '../Src/Framework/Vector3.js';
import Overload from '../Src/Core/Overload.js';
import Vector2 from '../Src/Framework/Vector2.js';
import BoundingTest from './Framework/BoundingTest.js';
import TypeList from '../Src/Core/TypeList.js';
import Curve from '../Src/Framework/Curve.js';
import CurveKeyTest from './Framework/CurveKeyTest.js';
import CurveTest from './Framework/CurveTest.js';
import CurveKeyCollectionTest from './Framework/CurveKeyCollectionTest.js';
import Matrix from '../Src/Framework/Matrix.js';
import ColorTest from './Framework/ColorTest.js';
import Color from '../Src/Framework/Color.js';
import BoundingBox from '../Src/Framework/BoundingBox.js';
import BoundingFrustum from '../Src/Framework/BoundingFrustum.js';
import BoundingSphere from '../Src/Framework/BoundingSphere.js';
import CurveKey from '../Src/Framework/CurveKey.js';
import Plane from '../Src/Framework/Plane.js';

console.warn('出现错误有可能是因为精度误差，需要人工筛选测试结果');

/*
 * 通过测试
IPrivateVarTest();
ObjectTest();
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
 */


/*
 * 类型数组测试
let vec2List = new TypeList(Vector2, [new Vector2(0, 0), new Vector2(1, 1)]);
console.log(vec2List);
vec2List.Add(new Vector2(1, 1));
let a = new Vector2(2, 2);
vec2List.Add(a);
vec2List.Insert(1, new Vector2(3, 3));
vec2List.Remove(a);
console.dir(vec2List);
 */


/*
 * 序列化、反序列化测试
let curve = new Curve();
curve.Keys.Add(new CurveKey(0, 1));
curve.Keys.Add(new CurveKey(1, 2));
curve.Keys.Add(new CurveKey(3, 4));

let str = JSON.stringify(curve);

console.dir(str);

let obj = Curve.fromJSON(str);

console.dir(obj);
*/