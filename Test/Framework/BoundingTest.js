import MathHelper from '../../Src/Framework/MathHelper.js';
import Assert from '../Assert.js';
import Vector3 from '../../Src/Framework/Vector3.js';
import BoundingBox from '../../Src/Framework/BoundingBox.js';
import ContainmentType from '../../Src/Framework/ContainmentType.js';
import BoundingSphere from '../../Src/Framework/BoundingSphere.js';
import Matrix from '../../Src/Framework/Matrix.js';
import BoundingFrustum from '../../Src/Framework/BoundingFrustum.js';
import Ray from '../../Src/Framework/Ray.js';
import TypeList from '../../Src/Core/TypeList.js';

let assert = new Assert('Framework/Bounding*');

function BoxContainsVector3Test() {
    let box = new BoundingBox(Vector3.Zero, Vector3.One);
    assert.AreEqual(ContainmentType.Disjoint, box.Contains(Vector3.Negate(Vector3.One)));
    assert.AreEqual(ContainmentType.Disjoint, box.Contains(new Vector3(0.5, 0.5, -1)));
    assert.AreEqual(ContainmentType.Contains, box.Contains(Vector3.Zero));
    assert.AreEqual(ContainmentType.Contains, box.Contains(new Vector3(0, 0, 0.5)));
    assert.AreEqual(ContainmentType.Contains, box.Contains(new Vector3(0, 0.5, 0.5)));
    assert.AreEqual(ContainmentType.Contains, box.Contains(Vector3.One));
    assert.AreEqual(ContainmentType.Contains, box.Contains(new Vector3(1, 1, 0.5)));
    assert.AreEqual(ContainmentType.Contains, box.Contains(new Vector3(1, 0.5, 0.5)));
    assert.AreEqual(ContainmentType.Contains, box.Contains(new Vector3(0.5, 0.5, 0.5)));
}

function BoxContainsIdenticalBox() {
    let b1 = new BoundingBox(Vector3.Zero, Vector3.One);
    let b2 = new BoundingBox(Vector3.Zero, Vector3.One);

    assert.AreEqual(ContainmentType.Contains, b1.Contains(b2));
}

function BoundingSphereTests() {
    let zeroPoint = BoundingSphere.CreateFromPoints(new TypeList(Vector3, [Vector3.Zero]));
    assert.AreEqual(new BoundingSphere(), zeroPoint);

    let onePoint = BoundingSphere.CreateFromPoints(new TypeList(Vector3, [Vector3.One]));
    assert.AreEqual(new BoundingSphere(Vector3.One, 0), onePoint);

    let twoPoint = BoundingSphere.CreateFromPoints(new TypeList(Vector3, [Vector3.Zero, Vector3.One]));
    assert.AreEqual(new BoundingSphere(new Vector3(0.5, 0.5, 0.5), 0.8660254), twoPoint);

    let threePoint = BoundingSphere.CreateFromPoints(new TypeList(Vector3, [new Vector3(0, 0, 0), new Vector3(-1, 0, 0), new Vector3(1, 1, 1)]));
    assert.AreEqual(new BoundingSphere(new Vector3(0, 0.5, 0.5), 1.224745), threePoint);

    let eightPointTestInput = [
        new Vector3(54.58071, 124.9063, 56.0016),
        new Vector3(54.52138, 124.9063, 56.13985),
        new Vector3(54.52208, 124.8235, 56.14014),
        new Vector3(54.5814, 124.8235, 56.0019),
        new Vector3(1145.415, 505.913, -212.5173),
        new Vector3(611.4731, 505.9535, 1031.893),
        new Vector3(617.7462, -239.7422, 1034.584),
        new Vector3(1151.687, -239.7035, -209.8246)
    ];
    let eightPoint = BoundingSphere.CreateFromPoints(new TypeList(Vector3, eightPointTestInput));
    for (let i = 0; i < eightPointTestInput.Length; i++) {
        assert.IsTrue(eightPoint.Contains(eightPointTestInput[i]) != ContainmentType.Disjoint);
    }

    try {
        BoundingSphere.CreateFromPoints([]);
    } catch (e) {
        console.error('报错测试成功（这不是真的错误）\r\n' + e);
        assert.Pass();
    }
}

function BoundingBoxContainsBoundingSphere() {
    let testSphere = new BoundingSphere(Vector3.Zero, 1);
    let testBox = new BoundingBox(Vector3.Negate(Vector3.One), Vector3.One);

    assert.AreEqual(testBox.Contains(testSphere), ContainmentType.Contains);

    testSphere.Center = Vector3.Subtract(testSphere.Center, Vector3.One);

    assert.AreEqual(testBox.Contains(testSphere), ContainmentType.Intersects);

    testSphere.Center = Vector3.Subtract(testSphere.Center, Vector3.One);

    assert.AreEqual(testBox.Contains(testSphere), ContainmentType.Disjoint);
}

function BoundingFrustumToBoundingBoxTests() {
    let view = Matrix.CreateLookAt(new Vector3(0, 0, 5), Vector3.Zero, Vector3.Up);
    let projection = Matrix.CreatePerspectiveFieldOfView(MathHelper.PiOver4, 1, 1, 100);
    let testFrustum = new BoundingFrustum(Matrix.Multiply(view, projection));

    var bbox1 = new BoundingBox(new Vector3(0, 0, 0), new Vector3(1, 1, 1));
    assert.AreEqual(testFrustum.Contains(bbox1), ContainmentType.Contains);
    assert.AreEqual(testFrustum.Intersects(bbox1), true);

    var bbox2 = new BoundingBox(new Vector3(-1000, -1000, -1000), new Vector3(1000, 1000, 1000));
    assert.AreEqual(testFrustum.Contains(bbox2), ContainmentType.Intersects);
    assert.AreEqual(testFrustum.Intersects(bbox2), true);

    var bbox3 = new BoundingBox(new Vector3(-1000, -1000, -1000), new Vector3(0, 0, 0));
    assert.AreEqual(testFrustum.Contains(bbox3), ContainmentType.Intersects);
    assert.AreEqual(testFrustum.Intersects(bbox3), true);

    var bbox4 = new BoundingBox(new Vector3(-1000, -1000, -1000), new Vector3(-500, -500, -500));
    assert.AreEqual(testFrustum.Contains(bbox4), ContainmentType.Disjoint);
    assert.AreEqual(testFrustum.Intersects(bbox4), false);
}

function BoundingFrustumToBoundingFrustumTests() {
    let view = Matrix.CreateLookAt(new Vector3(0, 0, 5), Vector3.Zero, Vector3.Up);
    let projection = Matrix.CreatePerspectiveFieldOfView(MathHelper.PiOver4, 1, 1, 100);
    let testFrustum = new BoundingFrustum(Matrix.Multiply(view, projection));

    // Same frustum.
    assert.AreEqual(testFrustum.Contains(testFrustum), ContainmentType.Contains);
    assert.AreEqual(testFrustum.Intersects(testFrustum), true);

    let otherFrustum = new BoundingFrustum(Matrix.Identity);

    // Smaller frustum contained entirely inside.
    let view2 = Matrix.CreateLookAt(new Vector3(0, 0, 4), Vector3.Zero, Vector3.Up);
    let projection2 = Matrix.CreatePerspectiveFieldOfView(MathHelper.PiOver4, 1, 1, 50);
    otherFrustum.Matrix = Matrix.Multiply(view2, projection2);

    assert.AreEqual(testFrustum.Contains(otherFrustum), ContainmentType.Contains);
    assert.AreEqual(testFrustum.Intersects(otherFrustum), true);

    // Same size frustum, pointing in the same direction and offset by a small amount.
    otherFrustum.Matrix = Matrix.Multiply(view2, projection);

    assert.AreEqual(testFrustum.Contains(otherFrustum), ContainmentType.Intersects);
    assert.AreEqual(testFrustum.Intersects(otherFrustum), true);

    // Same size frustum, pointing in the opposite direction and not overlapping.
    let view3 = Matrix.CreateLookAt(new Vector3(0, 0, 6), new Vector3(0, 0, 7), Vector3.Up);
    otherFrustum.Matrix = Matrix.Multiply(view3, projection);

    assert.AreEqual(testFrustum.Contains(otherFrustum), ContainmentType.Disjoint);
    assert.AreEqual(testFrustum.Intersects(otherFrustum), false);

    // Larger frustum, entirely containing test frustum.
    let view4 = Matrix.CreateLookAt(new Vector3(0, 0, 10), Vector3.Zero, Vector3.Up);
    let projection4 = Matrix.CreatePerspectiveFieldOfView(MathHelper.PiOver4, 1, 1, 1000);
    otherFrustum.Matrix = Matrix.Multiply(view4, projection4);

    assert.AreEqual(testFrustum.Contains(otherFrustum), ContainmentType.Intersects);
    assert.AreEqual(testFrustum.Intersects(otherFrustum), true);

    let bf =
        new BoundingFrustum(Matrix.Multiply(
            Matrix.CreateLookAt(new Vector3(0, 1, 1), new Vector3(0, 0, 0), Vector3.Up),
            Matrix.CreatePerspectiveFieldOfView(MathHelper.PiOver4, 1.3, 0.1, 1000.0)));
    let ray = new Ray(new Vector3(0, 0.5, 0.5), new Vector3(0, 0, 0));
    let ray2 = new Ray(new Vector3(0, 1.0, 1.0), new Vector3(0, 0, 0));
    let value = bf.Intersects(ray);
    let value2 = bf.Intersects(ray2);
    assert.AreEqual(0.0, value);
    assert.AreEqual(null, value2);
}

export default function () {
    BoxContainsVector3Test()
    BoxContainsIdenticalBox();
    BoundingSphereTests();
    BoundingBoxContainsBoundingSphere();
    BoundingFrustumToBoundingBoxTests();
    BoundingFrustumToBoundingFrustumTests();

    assert.Result();
};