import Vector2 from '../../Src/Framework/Vector2.js';
import Matrix from '../../Src/Framework/Matrix.js';
import Quaternion from '../../Src/Framework/Quaternion.js';
import Assert from '../Assert.js';
import TypeList from '../../Src/Core/TypeList.js';

let assert = new Assert('Framework/Vector2');

function CatmullRom() {
    let expectedResult = new Vector2(5.1944, 6.1944);
    let v1 = new Vector2(1, 2);
    let v2 = new Vector2(3, 4);
    let v3 = new Vector2(5, 6);
    let v4 = new Vector2(7, 8);
    let value = 1.0972;

    let result = Vector2.CatmullRom(v1, v2, v3, v4, value);

    assert.IsTrue(expectedResult.Equals(result), '计算错误：CatmullRom');
}

function Multiply() {
    let vector = new Vector2(1, 2);

    // Test 0.0 scale.
    assert.AreEqual(Vector2.Zero, Vector2.Multiply(vector, 0));
    assert.AreEqual(Vector2.Zero, Vector2.Multiply(vector, 0));
    assert.AreEqual(Vector2.Zero, Vector2.Multiply(vector, 0));
    assert.AreEqual(Vector2.Multiply(vector, 0), Vector2.Multiply(vector, 0.0));

    // Test 1.0 scale.
    assert.AreEqual(vector, Vector2.Multiply(vector, 1));
    assert.AreEqual(vector, Vector2.Multiply(vector, 1));
    assert.AreEqual(vector, Vector2.Multiply(vector, 1));
    assert.AreEqual(Vector2.Multiply(vector, 1), Vector2.Multiply(vector, 1.0));

    let scaledVec = Vector2.Multiply(vector, 2);

    // Test 2.0 scale.
    assert.AreEqual(scaledVec, Vector2.Multiply(vector, 2));
    assert.AreEqual(scaledVec, Vector2.Multiply(vector, 2));
    assert.AreEqual(scaledVec, Vector2.Multiply(vector, 2));
    assert.AreEqual(Vector2.Multiply(vector, 2.0), scaledVec);
    assert.AreEqual(Vector2.Multiply(vector, 2), Vector2.Multiply(vector, 2));

    scaledVec = Vector2.Multiply(vector, 0.999);

    // Test 0.999 scale.
    assert.AreEqual(scaledVec, Vector2.Multiply(vector, 0.999));
    assert.AreEqual(scaledVec, Vector2.Multiply(vector, 0.999));
    assert.AreEqual(scaledVec, Vector2.Multiply(vector, 0.999));
    assert.AreEqual(Vector2.Multiply(vector, 0.999), scaledVec);
    assert.AreEqual(Vector2.Multiply(vector, 0.999), Vector2.Multiply(vector, 0.999));

    let vector2 = new Vector2(2, 2);

    // Test two vectors multiplication.
    assert.AreEqual(new Vector2(vector.X * vector2.X, vector.Y * vector2.Y), Vector2.Multiply(vector, vector2));
    assert.AreEqual(Vector2.Multiply(vector2, vector), new Vector2(vector.X * vector2.X, vector.Y * vector2.Y));
    assert.AreEqual(Vector2.Multiply(vector, vector2), Vector2.Multiply(vector, vector2));
    assert.AreEqual(Vector2.Multiply(vector, vector2), Vector2.Multiply(vector, vector2));

    let refVec;

    // Overloads comparsion
    let vector3 = Vector2.Multiply(vector, vector2);
    refVec = Vector2.Multiply(vector, vector2);
    assert.AreEqual(vector3, refVec);

    vector3 = Vector2.Multiply(vector, 2);
    refVec = Vector2.Multiply(vector, vector2);
    assert.AreEqual(vector3, refVec);
}

function Hermite() {
    let t1 = new Vector2(1.40625, 1.40625);
    let t2 = new Vector2(2.662375, 2.26537514);

    let v1 = new Vector2(1, 1);
    let v2 = new Vector2(2, 2);
    let v3 = new Vector2(3, 3);
    let v4 = new Vector2(4, 4);
    let v5 = new Vector2(4, 3);
    let v6 = new Vector2(2, 1);
    let v7 = new Vector2(1, 2);
    let v8 = new Vector2(3, 4);

    let result1 = Vector2.Hermite(v1, v2, v3, v4, 0.25);
    let result2 = Vector2.Hermite(v5, v6, v7, v8, 0.45);

    assert.IsTrue(t1.Equals(result1), '计算错误：Hermite');
    assert.IsTrue(t2.Equals(result2), '计算错误：Hermite');
}

function Transform() {
    // STANDART OVERLOADS TEST

    let expectedResult1 = new Vector2(24, 28);
    let expectedResult2 = new Vector2(-0.0168301091, 2.30964);

    let v1 = new Vector2(1, 2);
    let m1 = new Matrix(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);

    let v2 = new Vector2(1.1, 2.45);
    let q2 = new Quaternion(0.11, 0.22, 0.33, 0.55);

    let q3 = new Quaternion(1, 2, 3, 4);

    let result1 = Vector2.Transform(v1, m1);
    let result2 = Vector2.Transform(v2, q2);

    assert.IsTrue(expectedResult1.Equals(result1), '计算错误：Transform');
    assert.IsTrue(expectedResult2.Equals(result2), '计算错误：Transform');

    // TRANSFORM ON LIST (MATRIX)
    {
        var sourceList1 = new TypeList(Vector2, 10);
        var desinationList1 = new TypeList(Vector2, 10);

        for (let i = 0; i < 10; i++) {
            sourceList1[i] = (new Vector2(1 + i, 1 + i));
        }

        Vector2.Transform(sourceList1, 0, m1, desinationList1, 0, 10);

        for (let i = 0; i < 10; i++) {
            assert.IsTrue(desinationList1[i].Equals(new Vector2(19 + (6 * i), 22 + (8 * i))), '计算错误：Transform');
        }
    }
    // TRANSFORM ON LIST (MATRIX)(DESTINATION & SOURCE)
    {
        let sourceList2 = new TypeList(Vector2, 10);
        let desinationList2 = new TypeList(Vector2, 10);

        for (let i = 0; i < 10; i++) {
            sourceList2[i] = (new Vector2(1 + i, 1 + i));
        }

        Vector2.Transform(sourceList2, 2, m1, desinationList2, 1, 3);

        assert.IsTrue(Vector2.Zero.Equals(desinationList2[0]), '计算错误：Transform');

        assert.IsTrue(new Vector2(31, 38).Equals(desinationList2[1]), '计算错误：Transform');
        assert.IsTrue(new Vector2(37, 46).Equals(desinationList2[2]), '计算错误：Transform');
        assert.IsTrue(new Vector2(43, 54).Equals(desinationList2[3]), '计算错误：Transform');

        for (let i = 4; i < 10; i++) {
            assert.IsTrue(Vector2.Zero.Equals(desinationList2[i]), '计算错误：Transform');
        }
    }
    // TRANSFORM ON LIST (MATRIX)(SIMPLE)
    {
        let sourceList3 = new TypeList(Vector2, 10);
        let desinationList3 = new TypeList(Vector2, 10);

        for (let i = 0; i < 10; i++) {
            sourceList3[i] = (new Vector2(1 + i, 1 + i));
        }

        Vector2.Transform(sourceList3, m1, desinationList3);

        for (let i = 0; i < 10; i++) {
            assert.IsTrue(desinationList3[i].Equals(new Vector2(19 + (6 * i), 22 + (8 * i))), '计算错误：Transform');
        }
    }
    // TRANSFORM ON LIST (QUATERNION)
    {
        let sourceList4 = new TypeList(Vector2, 10);
        let desinationList4 = new TypeList(Vector2, 10);

        for (let i = 0; i < 10; i++) {
            sourceList4[i] = (new Vector2(1 + i, 1 + i));
        }

        Vector2.Transform(sourceList4, 0, q3, desinationList4, 0, 10);

        for (let i = 0; i < 10; i++) {
            assert.IsTrue(new Vector2(-45 + (-45 * i), 9 + (9 * i)).Equals(desinationList4[i]), '计算错误：Transform');
        }
    }
    // TRANSFORM ON LIST (QUATERNION)(DESTINATION & SOURCE)
    {
        var sourceList5 = new TypeList(Vector2, 10);
        var desinationList5 = new TypeList(Vector2, 10);

        for (let i = 0; i < 10; i++) {
            sourceList5[i] = (new Vector2(1 + i, 1 + i));
        }

        Vector2.Transform(sourceList5, 2, q3, desinationList5, 1, 3);

        assert.IsTrue(Vector2.Zero.Equals(desinationList5[0]), '计算错误：Transform');

        assert.IsTrue(new Vector2(-135, 27).Equals(desinationList5[1]), '计算错误：Transform');
        assert.IsTrue(new Vector2(-180, 36).Equals(desinationList5[2]), '计算错误：Transform');
        assert.IsTrue(new Vector2(-225, 45).Equals(desinationList5[3]), '计算错误：Transform');

        for (let i = 4; i < 10; i++) {
            assert.IsTrue(Vector2.Zero.Equals(desinationList5[i]), '计算错误：Transform');
        }
    }
    // TRANSFORM ON LIST (QUATERNION)(SIMPLE)
    {
        let sourceList6 = new TypeList(Vector2, 10);
        let desinationList6 = new TypeList(Vector2, 10);

        for (let i = 0; i < 10; i++) {
            sourceList6[i] = (new Vector2(1 + i, 1 + i));
        }

        Vector2.Transform(sourceList6, q3, desinationList6);

        for (let i = 0; i < 10; i++) {
            assert.IsTrue(new Vector2(-45 + (-45 * i), 9 + (9 * i)).Equals(desinationList6[i]), '计算错误：Transform');
        }
    }
}

function TransformNormal() {
    let normal = new Vector2(1.5, 2.5);
    let matrix = new Matrix(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);

    let expectedResult1 = new Vector2(14, 18);
    let expectedResult2 = expectedResult1;

    let result = Vector2.TransformNormal(normal, matrix);

    assert.IsTrue(expectedResult2.Equals(result), '计算错误：TransformNormal');

    // TRANSFORM ON LIST
    {
        let sourceArray1 = new TypeList(Vector2, 10);
        let destinationArray1 = new TypeList(Vector2, 10);

        for (let i = 0; i < 10; i++) {
            sourceArray1[i] = new Vector2(i, i);
        }

        Vector2.TransformNormal(sourceArray1, 0, matrix, destinationArray1, 0, 10);

        for (let i = 0; i < 10; i++) {
            assert.IsTrue(new Vector2(0 + (6 * i), 0 + (8 * i)).Equals(destinationArray1[i]), '计算错误：TransformNormal');
        }
    }
    // TRANSFORM ON LIST(SOURCE OFFSET)
    {
        let sourceArray2 = new TypeList(Vector2, 10);
        let destinationArray2 = new TypeList(Vector2, 10);

        for (let i = 0; i < 10; i++) {
            sourceArray2[i] = new Vector2(i, i);
        }

        Vector2.TransformNormal(sourceArray2, 5, matrix, destinationArray2, 0, 5);

        for (let i = 0; i < 5; i++) {
            assert.IsTrue(new Vector2(30 + (6 * i), 40 + (8 * i)).Equals(destinationArray2[i]), '计算错误：TransformNormal');
        }

        for (let i = 5; i < 10; i++) {
            assert.IsTrue(Vector2.Zero.Equals(destinationArray2[i]), '计算错误：TransformNormal');
        }
    }
    // TRANSFORM ON LIST(DESTINATION OFFSET)
    {
        let sourceArray3 = new TypeList(Vector2, 10);
        let destinationArray3 = new TypeList(Vector2, 10);

        for (let i = 0; i < 10; ++i) {
            sourceArray3[i] = new Vector2(i, i);
        }

        Vector2.TransformNormal(sourceArray3, 0, matrix, destinationArray3, 5, 5);

        for (let i = 0; i < 6; ++i) {
            assert.IsTrue(Vector2.Zero.Equals(destinationArray3[i]), '计算错误：TransformNormal');
        }

        assert.IsTrue(new Vector2(6, 8).Equals(destinationArray3[6]), '计算错误：TransformNormal');
        assert.IsTrue(new Vector2(12, 16).Equals(destinationArray3[7]), '计算错误：TransformNormal');
        assert.IsTrue(new Vector2(18, 24).Equals(destinationArray3[8]), '计算错误：TransformNormal');
        assert.IsTrue(new Vector2(24, 32).Equals(destinationArray3[9]), '计算错误：TransformNormal');
    }
    // TRANSFORM ON LIST(DESTINATION & SOURCE)
    {
        let sourceArray4 = new TypeList(Vector2, 10);
        let destinationArray4 = new TypeList(Vector2, 10);

        for (let i = 0; i < 10; ++i) {
            sourceArray4[i] = new Vector2(i, i);
        }

        Vector2.TransformNormal(sourceArray4, 2, matrix, destinationArray4, 3, 6);

        for (let i = 0; i < 3; ++i) {
            assert.IsTrue(Vector2.Zero.Equals(destinationArray4[i]), '计算错误：TransformNormal');
        }

        assert.IsTrue(new Vector2(12, 16).Equals(destinationArray4[3]), '计算错误：TransformNormal');
        assert.IsTrue(new Vector2(18, 24).Equals(destinationArray4[4]), '计算错误：TransformNormal');
        assert.IsTrue(new Vector2(24, 32).Equals(destinationArray4[5]), '计算错误：TransformNormal');
        assert.IsTrue(new Vector2(30, 40).Equals(destinationArray4[6]), '计算错误：TransformNormal');
        assert.IsTrue(new Vector2(36, 48).Equals(destinationArray4[7]), '计算错误：TransformNormal');
        assert.IsTrue(new Vector2(42, 56).Equals(destinationArray4[8]), '计算错误：TransformNormal');

        assert.IsTrue(Vector2.Zero.Equals(destinationArray4[9]), '计算错误：TransformNormal');
    }
    // TRANSFORM ON LIST(SIMPLE)
    {
        let sourceArray5 = new TypeList(Vector2, 10);
        let destinationArray5 = new TypeList(Vector2, 10);

        for (let i = 0; i < 10; ++i) {
            sourceArray5[i] = new Vector2(i, i);
        }

        Vector2.TransformNormal(sourceArray5, matrix, destinationArray5);

        for (let i = 0; i < 10; ++i) {
            assert.IsTrue(new Vector2(0 + (6 * i), 0 + (8 * i)).Equals(destinationArray5[i]), '计算错误：TransformNormal');
        }
    }
}

function HashCode() {
    // Checking for overflows in hash calculation.
    let max = new Vector2(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
    let min = new Vector2(Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
    assert.AreNotEqual(max.GetHashCode(), Vector2.Zero.GetHashCode());
    assert.AreNotEqual(min.GetHashCode(), Vector2.Zero.GetHashCode());

    // Common values
    let a = new Vector2(0, 0);
    assert.AreEqual(a.GetHashCode(), Vector2.Zero.GetHashCode());
    assert.AreNotEqual(a.GetHashCode(), Vector2.One.GetHashCode());

    // Individual properties alter hash
    let xa = new Vector2(2, 1);
    let xb = new Vector2(3, 1);
    let ya = new Vector2(1, 2);
    let yb = new Vector2(1, 3);
    assert.AreNotEqual(xa.GetHashCode(), xb.GetHashCode(), "Different properties should change hash.");
    assert.AreNotEqual(ya.GetHashCode(), yb.GetHashCode(), "Different properties should change hash.");
    assert.AreNotEqual(xa.GetHashCode(), yb.GetHashCode());
    assert.AreNotEqual(ya.GetHashCode(), xb.GetHashCode());
}

export default function () {
    CatmullRom();
    Multiply();
    Hermite();
    Transform();
    TransformNormal();
    HashCode();

    assert.Result();
};