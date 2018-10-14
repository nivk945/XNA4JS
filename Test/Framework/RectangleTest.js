import MathHelper from '../../Src/Framework/MathHelper.js';
import Assert from '../Assert.js';
import Rectangle from '../../Src/Framework/Rectangle.js';
import Point from '../../Src/Framework/Point.js';

let assert = new Assert('Framework/Rectangle');

function ConstructorsAndProperties() {
    let rectangle = new Rectangle(10, 20, 64, 64);

    // Constructor

    assert.AreEqual(new Rectangle(10, 20, 64, 64), rectangle);

    // Left property

    assert.AreEqual(10, rectangle.Left);

    // Right property

    assert.AreEqual(64 + 10, rectangle.Right);

    // Top property

    assert.AreEqual(20, rectangle.Top);

    // Bottom property

    assert.AreEqual(64 + 20, rectangle.Bottom);

    // Location property

    assert.AreEqual(new Point(10, 20), rectangle.Location);

    // Center property

    assert.AreEqual(new Point(10 + 32, 20 + 32), rectangle.Center);

    // IsEmpty property

    assert.AreEqual(false, rectangle.IsEmpty);
    assert.AreEqual(true, new Rectangle().IsEmpty);

    // Empty - static property

    assert.AreEqual(new Rectangle(), Rectangle.Empty);
}

function ContainsPoint() {
    let rectangle = new Rectangle(0, 0, 64, 64);

    var p1 = new Point(-1, -1);
    var p2 = new Point(0, 0);
    var p3 = new Point(32, 32);
    var p4 = new Point(63, 63);
    var p5 = new Point(64, 64);

    let result;

    result = rectangle.Contains(p1);
    assert.AreEqual(false, result);
    result = rectangle.Contains(p2);
    assert.AreEqual(true, result);
    result = rectangle.Contains(p3);
    assert.AreEqual(true, result);
    result = rectangle.Contains(p4);
    assert.AreEqual(true, result);
    result = rectangle.Contains(p5);
    assert.AreEqual(false, result);

    assert.AreEqual(false, rectangle.Contains(p1));
    assert.AreEqual(true, rectangle.Contains(p2));
    assert.AreEqual(true, rectangle.Contains(p3));
    assert.AreEqual(true, rectangle.Contains(p4));
    assert.AreEqual(false, rectangle.Contains(p5));
}

function ContainsRectangle() {
    let rectangle = new Rectangle(0, 0, 64, 64);
    let rect1 = new Rectangle(-1, -1, 32, 32);
    let rect2 = new Rectangle(0, 0, 32, 32);
    let rect3 = new Rectangle(0, 0, 64, 64);
    let rect4 = new Rectangle(1, 1, 64, 64);

    let result;

    result = rectangle.Contains(rect1);

    assert.AreEqual(false, result);

    result = rectangle.Contains(rect2);

    assert.AreEqual(true, result);

    result = rectangle.Contains(rect3);

    assert.AreEqual(true, result);

    result = rectangle.Contains(rect4);

    assert.AreEqual(false, result);

    assert.AreEqual(false, rectangle.Contains(rect1));
    assert.AreEqual(true, rectangle.Contains(rect2));
    assert.AreEqual(true, rectangle.Contains(rect3));
    assert.AreEqual(false, rectangle.Contains(rect4));
}

function Inflate() {
    let rectangle = new Rectangle(0, 0, 64, 64);
    rectangle.Inflate(10, -10);
    assert.AreEqual(new Rectangle(-10, 10, 84, 44), rectangle);
}

function Intersect() {
    let first = new Rectangle(0, 0, 64, 64);
    let second = new Rectangle(-32, -32, 64, 64);
    let expected = new Rectangle(0, 0, 32, 32);

    // First overload testing(forward and backward)

    let result;
    result = Rectangle.Intersect(first, second);

    assert.AreEqual(expected, result);

    result = Rectangle.Intersect(second, first);

    assert.AreEqual(expected, result);

    // Second overload testing(forward and backward)

    assert.AreEqual(expected, Rectangle.Intersect(first, second));
    assert.AreEqual(expected, Rectangle.Intersect(second, first));
}

function Union() {
    let first = new Rectangle(-64, -64, 64, 64);
    let second = new Rectangle(0, 0, 64, 64);
    let expected = new Rectangle(-64, -64, 128, 128);

    // First overload testing(forward and backward)

    let result;
    result = Rectangle.Union(first, second);

    assert.AreEqual(expected, result);

    result = Rectangle.Union(second, first);

    assert.AreEqual(expected, result);

    // Second overload testing(forward and backward)

    assert.AreEqual(expected, Rectangle.Union(first, second));
    assert.AreEqual(expected, Rectangle.Union(second, first));
}

function ToStringTest() {
    assert.AreEqual("{X:-10 Y:10 Width:100 Height:1000}", new Rectangle(-10, 10, 100, 1000).ToString());
}

export default function () {
    ConstructorsAndProperties();
    ContainsPoint();
    ContainsRectangle();
    Inflate();
    Intersect();
    Union();
    ToStringTest();

    assert.Result();
};