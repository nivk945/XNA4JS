import MathHelper from '../../Src/Framework/MathHelper.js';
import Assert from '../Assert.js';
import BoundingBox from '../../Src/Framework/BoundingBox.js';
import Vector3 from '../../Src/Framework/Vector3.js';
import Ray from '../../Src/Framework/Ray.js';

let assert = new Assert('Framework/Ray');

function BoundingBoxIntersects() {
    // Our test box.
    let box = new BoundingBox();
    box.Min = new Vector3(-10, -20, -30);
    box.Max = new Vector3(10, 20, 30);
    let center = Vector3.Multiply(Vector3.Add(box.Max, box.Min), 0.5);

    // Test misses.
    assert.IsNull(new Ray(Vector3.Subtract(center, Vector3.Multiply(Vector3.UnitX, 40)), Vector3.Negate(Vector3.UnitX)).Intersects(box));
    assert.IsNull(new Ray(Vector3.Add(center, Vector3.Multiply(Vector3.UnitX, 40)), Vector3.UnitX).Intersects(box));
    assert.IsNull(new Ray(Vector3.Subtract(center, Vector3.Multiply(Vector3.UnitY, 40)), Vector3.Negate(Vector3.UnitY)).Intersects(box));
    assert.IsNull(new Ray(Vector3.Add(center, Vector3.Multiply(Vector3.UnitY, 40)), Vector3.UnitY).Intersects(box));
    assert.IsNull(new Ray(Vector3.Subtract(center, Vector3.Multiply(Vector3.UnitZ, 40)), Vector3.Negate(Vector3.UnitZ)).Intersects(box));
    assert.IsNull(new Ray(Vector3.Add(center, Vector3.Multiply(Vector3.UnitZ, 40)), Vector3.UnitZ).Intersects(box));

    // Test middle of each face.
    assert.AreEqual(30.0, new Ray(Vector3.Subtract(center, Vector3.Multiply(Vector3.UnitX, 40)), Vector3.UnitX).Intersects(box));
    assert.AreEqual(30.0, new Ray(Vector3.Add(center, Vector3.Multiply(Vector3.UnitX, 40)), Vector3.Negate(Vector3.UnitX)).Intersects(box));
    assert.AreEqual(20.0, new Ray(Vector3.Subtract(center, Vector3.Multiply(Vector3.UnitY, 40)), Vector3.UnitY).Intersects(box));
    assert.AreEqual(20.0, new Ray(Vector3.Add(center, Vector3.Multiply(Vector3.UnitY, 40)), Vector3.Negate(Vector3.UnitY)).Intersects(box));
    assert.AreEqual(10.0, new Ray(Vector3.Subtract(center, Vector3.Multiply(Vector3.UnitZ, 40)), Vector3.UnitZ).Intersects(box));
    assert.AreEqual(10.0, new Ray(Vector3.Add(center, Vector3.Multiply(Vector3.UnitZ, 40)), Vector3.Negate(Vector3.UnitZ)).Intersects(box));

    //// Test the corners along each axis.
    assert.AreEqual(10.0, new Ray(Vector3.Subtract(box.Min, Vector3.Multiply(Vector3.UnitX, 10)), Vector3.UnitX).Intersects(box));
    assert.AreEqual(10.0, new Ray(Vector3.Subtract(box.Min, Vector3.Multiply(Vector3.UnitY, 10)), Vector3.UnitY).Intersects(box));
    assert.AreEqual(10.0, new Ray(Vector3.Subtract(box.Min, Vector3.Multiply(Vector3.UnitZ, 10)), Vector3.UnitZ).Intersects(box));
    assert.AreEqual(10.0, new Ray(Vector3.Add(box.Max, Vector3.Multiply(Vector3.UnitX, 10)), Vector3.Negate(Vector3.UnitX)).Intersects(box));
    assert.AreEqual(10.0, new Ray(Vector3.Add(box.Max, Vector3.Multiply(Vector3.UnitY, 10)), Vector3.Negate(Vector3.UnitY)).Intersects(box));
    assert.AreEqual(10.0, new Ray(Vector3.Add(box.Max, Vector3.Multiply(Vector3.UnitZ, 10)), Vector3.Negate(Vector3.UnitZ)).Intersects(box));

    // Test inside out.
    assert.AreEqual(0.0, new Ray(center, Vector3.UnitX).Intersects(box));
    assert.AreEqual(0.0, new Ray(center, Vector3.Negate(Vector3.UnitX)).Intersects(box));
    assert.AreEqual(0.0, new Ray(center, Vector3.UnitY).Intersects(box));
    assert.AreEqual(0.0, new Ray(center, Vector3.Negate(Vector3.UnitY)).Intersects(box));
    assert.AreEqual(0.0, new Ray(center, Vector3.UnitZ).Intersects(box));
    assert.AreEqual(0.0, new Ray(center, Vector3.Negate(Vector3.UnitZ)).Intersects(box));
}

export default function () {
    BoundingBoxIntersects();

    assert.Result();
};