import MathHelper from '../../Src/Framework/MathHelper.js';
import Vector3 from '../../Src/Framework/Vector3.js';
import Matrix from '../../Src/Framework/Matrix.js';
import Quaternion from '../../Src/Framework/Quaternion.js';
import Assert from '../Assert.js';

let assert = new Assert('Framework/Vector3');

function DistanceSquared() {
    let v1 = new Vector3(0.1, 100.0, -5.5);
    let v2 = new Vector3(1.1, -2.0, 5.5);
    let d = Vector3.DistanceSquared(v1, v2);
    let expectedResult = 10526;
    assert.AreEqual(expectedResult, d);
}

function Normalize() {
    let v1 = new Vector3(-10.5, 0.2, 1000.0);
    let v2 = new Vector3(-10.5, 0.2, 1000.0);
    v1.Normalize();
    var expectedResult = new Vector3(-0.0104994215, 0.000199988979, 0.999944866);
    assert.IsTrue(expectedResult.Equals(v1), '计算错误：Normalize');
    v2 = Vector3.Normalize(v2);
    assert.IsTrue(expectedResult.Equals(v2), '计算错误：Normalize');
}

function Transform() {
    // STANDART OVERLOADS TEST

    let expectedResult1 = new Vector3(51, 58, 65);
    let expectedResult2 = new Vector3(33, -14, -1);

    let v1 = new Vector3(1, 2, 3);
    let m1 = new Matrix(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);

    let v2 = new Vector3(1, 2, 3);
    let q1 = new Quaternion(2, 3, 4, 5);

    // OUTPUT OVERLOADS TEST

    let result1 = Vector3.Transform(v1, m1);
    let result2 = Vector3.Transform(v2, q1);

    assert.IsTrue(expectedResult1.Equals(result1), '计算错误：Transform');
    assert.IsTrue(expectedResult2.Equals(result2), '计算错误：Transform');
}

function HashCode() {
    // Checking for overflows in hash calculation.
    let max = new Vector3(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
    let min = new Vector3(Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
    assert.AreNotEqual(max.GetHashCode(), Vector3.Zero.GetHashCode());
    assert.AreNotEqual(min.GetHashCode(), Vector3.Zero.GetHashCode());

    // Common values
    let a = new Vector3(0, 0, 0);
    assert.AreEqual(a.GetHashCode(), Vector3.Zero.GetHashCode());
    assert.AreNotEqual(a.GetHashCode(), Vector3.One.GetHashCode());

    // Individual properties alter hash
    let xa = new Vector3(2, 1, 1);
    let xb = new Vector3(3, 1, 1);
    let ya = new Vector3(1, 2, 1);
    let yb = new Vector3(1, 3, 1);
    let za = new Vector3(1, 1, 2);
    let zb = new Vector3(1, 1, 3);
    assert.AreNotEqual(xa.GetHashCode(), xb.GetHashCode(), "Different properties should change hash.");
    assert.AreNotEqual(ya.GetHashCode(), yb.GetHashCode(), "Different properties should change hash.");
    assert.AreNotEqual(za.GetHashCode(), zb.GetHashCode(), "Different properties should change hash.");
    assert.AreNotEqual(xa.GetHashCode(), yb.GetHashCode());
    assert.AreNotEqual(ya.GetHashCode(), xb.GetHashCode());
    assert.AreNotEqual(xa.GetHashCode(), zb.GetHashCode());
}

export default function () {
    DistanceSquared();
    Normalize();
    Transform();
    HashCode();

    assert.Result();
};