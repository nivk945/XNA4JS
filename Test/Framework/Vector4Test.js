import MathHelper from '../../Src/Framework/MathHelper.js';
import Assert from '../Assert.js';
import Vector4 from '../../Src/Framework/Vector4.js';
import Vector2 from '../../Src/Framework/Vector2.js';
import Vector3 from '../../Src/Framework/Vector3.js';

let assert = new Assert('Framework/Vector4');

function Constructors() {
    let expectedResult = new Vector4(1, 2, 3, 4);

    var expectedResult2 = new Vector4(2.2, 2.2, 2.2, 2.2);

    assert.IsTrue(expectedResult.Equals(new Vector4(1, 2, 3, 4)));
    assert.IsTrue(expectedResult.Equals(new Vector4(new Vector2(1, 2), 3, 4)));
    assert.IsTrue(expectedResult.Equals(new Vector4(new Vector3(1, 2, 3), 4)));
    assert.IsTrue(expectedResult2.Equals(new Vector4(2.2)));
}

function Properties() {
    assert.IsTrue(new Vector4(0, 0, 0, 0).Equals(Vector4.Zero));
    assert.IsTrue(new Vector4(1, 1, 1, 1).Equals(Vector4.One));
    assert.IsTrue(new Vector4(1, 0, 0, 0).Equals(Vector4.UnitX));
    assert.IsTrue(new Vector4(0, 1, 0, 0).Equals(Vector4.UnitY));
    assert.IsTrue(new Vector4(0, 0, 1, 0).Equals(Vector4.UnitZ));
    assert.IsTrue(new Vector4(0, 0, 0, 1).Equals(Vector4.UnitW));
}

function Dot() {
    let vector1 = new Vector4(1, 2, 3, 4);
    let vector2 = new Vector4(0.5, 1.1, -3.8, 1.2);
    let expectedResult = -3.89999962;

    let result = Vector4.Dot(vector1, vector2);

    assert.AreEqual(expectedResult, result);
}

function Hermite() {
    let t1 = new Vector4(1.40625, 1.40625, 0.2, 0.92);
    let t2 = new Vector4(2.662375, 2.26537514, 10.0, 2);
    let v1 = new Vector4(1, 2, 3, 4);
    let v2 = new Vector4(-1.3, 0.1, 30.0, 365.20);
    let a = 2.234;

    let result1 = Vector4.Hermite(v1, t1, v2, t2, a);
    let expected = new Vector4(39.0311, 34.65557, -132.5473, -2626.85938);
    assert.IsTrue(expected.Equals(result1), `${expected.ToString()}\r\n${result1.ToString()}`);

    // same as result1 ? - it must be same

    let result2 = Vector4.Hermite(v1, t1, v2, t2, a);
    assert.IsTrue(result1.Equals(result2), `${result1.ToString()}\r\n${result2.ToString()}`);
}

function Length() {
    let vector1 = new Vector4(1, 2, 3, 4);
    assert.AreEqual(5.477226, vector1.Length());
}

function LengthSquared() {
    let vector1 = new Vector4(1, 2, 3, 4);
    assert.AreEqual(30, vector1.LengthSquared());
}

function Normalize() {
    let vector1 = new Vector4(1, 2, 3, 4);
    vector1.Normalize();
    let expected = new Vector4(0.1825742, 0.3651484, 0.5477225, 0.7302967);
    assert.IsTrue(expected.Equals(vector1));
    let vector2 = new Vector4(1, 2, 3, 4);
    let result = Vector4.Normalize(vector2);
    assert.IsTrue(expected.Equals(result));
}

function ToStringTest() {
    assert.AreEqual("{X:10 Y:20 Z:3.5 W:-100}", new Vector4(10, 20, 3.5, -100).ToString());
}

function HashCode() {
    // Checking for overflows in hash calculation.
    let max = new Vector4(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
    let min = new Vector4(Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
    assert.AreNotEqual(max.GetHashCode(), Vector4.Zero.GetHashCode());
    assert.AreNotEqual(min.GetHashCode(), Vector4.Zero.GetHashCode());

    // Common values
    let a = new Vector4(0, 0, 0, 0);
    assert.AreEqual(a.GetHashCode(), Vector4.Zero.GetHashCode(), "Shouldn't do object id compare.");
    assert.AreNotEqual(a.GetHashCode(), Vector4.One.GetHashCode());

    // Individual properties alter hash
    let xa = new Vector4(2, 1, 1, 1);
    let xb = new Vector4(3, 1, 1, 1);
    let ya = new Vector4(1, 2, 1, 1);
    let yb = new Vector4(1, 3, 1, 1);
    let za = new Vector4(1, 1, 2, 1);
    let zb = new Vector4(1, 1, 3, 1);
    let wa = new Vector4(1, 1, 1, 2);
    let wb = new Vector4(1, 1, 1, 3);
    assert.AreNotEqual(xa.GetHashCode(), xb.GetHashCode(), "Different properties should change hash.");
    assert.AreNotEqual(ya.GetHashCode(), yb.GetHashCode(), "Different properties should change hash.");
    assert.AreNotEqual(za.GetHashCode(), zb.GetHashCode(), "Different properties should change hash.");
    assert.AreNotEqual(wa.GetHashCode(), wb.GetHashCode(), "Different properties should change hash.");
    assert.AreNotEqual(xa.GetHashCode(), yb.GetHashCode());
    assert.AreNotEqual(ya.GetHashCode(), xb.GetHashCode());
    assert.AreNotEqual(xa.GetHashCode(), zb.GetHashCode());
    assert.AreNotEqual(xa.GetHashCode(), wb.GetHashCode());
}

export default function () {
    Constructors();
    Properties();
    Dot();
    Hermite();
    Length();
    LengthSquared();
    Normalize();
    ToStringTest();
    HashCode();

    assert.Result();
};