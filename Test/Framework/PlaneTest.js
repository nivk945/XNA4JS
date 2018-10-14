import MathHelper from '../../Src/Framework/MathHelper.js';
import Assert from '../Assert.js';
import Plane from '../../Src/Framework/Plane.js';
import Vector3 from '../../Src/Framework/Vector3.js';
import Matrix from '../../Src/Framework/Matrix.js';
import Quaternion from '../../Src/Framework/Quaternion.js';

let assert = new Assert('Framework/Plane');

function TransformByMatrix() {
    // Our test plane.
    let plane = Plane.Normalize(new Plane(new Vector3(0, 1, 1), 2.5));

    // Our matrix.
    let matrix = Matrix.CreateRotationX(MathHelper.PiOver2);

    // Test transform.
    let expectedResult = new Plane(new Vector3(0, -0.7071068, 0.7071067), 1.767767);

    let p = Plane.Transform(plane, matrix);

    assert.IsTrue(p.Equals(expectedResult));
}

function TransformByRefMatrix() {
    // Our test plane.
    let plane = Plane.Normalize(new Plane(new Vector3(1, 0.8, 0.5), 2.5));
    let originalPlane = plane;

    // Our matrix.
    let matrix = Matrix.CreateRotationX(MathHelper.PiOver2);
    let originalMatrix = matrix;

    // Test transform.
    let result = Plane.Transform(plane, matrix);

    let expectedResult = new Plane(new Vector3(0.7273929, -0.3636965, 0.5819144), 1.818482);

    assert.AreEqual(result, expectedResult);
    assert.AreEqual(plane, originalPlane);
    assert.AreEqual(matrix, originalMatrix);
}

function TransformByQuaternion() {
    // Our test plane.
    let plane = Plane.Normalize(new Plane(new Vector3(0, 1, 1), 2.5));

    // Our quaternion.
    let quaternion = Quaternion.CreateFromAxisAngle(Vector3.UnitX, MathHelper.PiOver2);

    // Test transform.
    let expectedResult = new Plane(new Vector3(0, -0.7071068, 0.7071067), 1.767767);
    assert.AreEqual(Plane.Transform(plane, quaternion), expectedResult);
}

function TransformByRefQuaternion() {
    // Our test plane.
    let plane = Plane.Normalize(new Plane(new Vector3(1, 0.8, 0.5), 2.5));
    let originalPlane = plane;

    // Our quaternion.
    let quaternion = Quaternion.CreateFromAxisAngle(Vector3.UnitX, MathHelper.PiOver2);
    let originalQuaternion = quaternion;

    // Test transform.
    let result = Plane.Transform(plane, quaternion);

    let expectedResult = new Plane(new Vector3(0.7273929, -0.3636965, 0.5819144), 1.818482);
    assert.AreEqual(result, expectedResult);

    assert.AreEqual(plane, originalPlane);
    assert.AreEqual(quaternion, originalQuaternion);
}

export default function () {
    TransformByMatrix();
    TransformByRefMatrix();
    TransformByQuaternion();
    TransformByRefQuaternion();

    assert.Result();
};