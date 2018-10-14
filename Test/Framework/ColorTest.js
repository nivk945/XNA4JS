import Assert from '../Assert.js';
import TypeList from '../../Src/Core/TypeList.js';
import Color from '../../Src/Framework/Color.js';
import Vector3 from '../../Src/Framework/Vector3.js';
import Vector4 from '../../Src/Framework/Vector4.js';

let assert = new Assert('Framework/Color');
let _ctorTestCases = [
    [new Color(), 0, 0, 0, 0],
    [new Color(64, 128, 192), 64, 128, 192, 255],
    [new Color(256, 256, -1), 255, 255, 0, 255],
    [new Color(64, 128, 192, 32), 64, 128, 192, 32],
    [new Color(256, 256, -1, 256), 255, 255, 0, 255],
    [new Color(0.25, 0.5, 0.75), 64, 128, 192, 255],
    [new Color(1.1, 1.1, -0.1), 255, 255, 0, 255],
    [new Color(0.25, 0.5, 0.75, 0.125), 64, 128, 192, 32],
    [new Color(1.1, 1.1, -0.1, -0.1), 255, 255, 0, 0],
    [new Color(new Vector3(0.25, 0.5, 0.75)), 64, 128, 192, 255],
    [new Color(new Vector3(1.1, 1.1, -0.1)), 255, 255, 0, 255],
    [new Color(new Vector4(0.25, 0.5, 0.75, 0.125)), 64, 128, 192, 32],
    [new Color(new Vector4(1.1, 1.1, -0.1, -0.1)), 255, 255, 0, 0]
];

function Ctor_Explicit(color, expectedR, expectedG, expectedB, expectedA) {
    // Account for rounding differences with float constructors
    assert.IsTrue(color.R == expectedR);
    assert.IsTrue(color.G == expectedG);
    assert.IsTrue(color.B == expectedB);
    assert.IsTrue(color.A == expectedA);
}

function FromNonPremultiplied_Int() {
    let color = Color.FromNonPremultiplied(255, 128, 64, 128);
    assert.IsTrue(color.R == 128);
    assert.IsTrue(color.G == 64);
    assert.IsTrue(color.B == 32);
    assert.IsTrue(color.A == 128);

    let overflow = Color.FromNonPremultiplied(280, 128, -10, 128);
    assert.IsTrue(overflow.R == 140);
    assert.IsTrue(overflow.G == 64);
    assert.IsTrue(overflow.B == 0);
    assert.IsTrue(overflow.A == 128);

    let overflow2 = Color.FromNonPremultiplied(255, 128, 64, 280);
    assert.IsTrue(overflow2.R == 255);
    assert.IsTrue(overflow2.G == 140);
    assert.IsTrue(overflow2.B == 70);
    assert.IsTrue(overflow2.A == 255);
}

function FromNonPremultiplied_Float() {
    let color = Color.FromNonPremultiplied(new Vector4(1.0, 0.5, 0.25, 0.5));
    assert.IsTrue(color.R == 128);
    assert.IsTrue(color.G == 64);
    assert.IsTrue(color.B == 32);
    assert.IsTrue(color.A == 128);

    let overflow = Color.FromNonPremultiplied(new Vector4(1.1, 0.5, -0.1, 0.5));
    assert.IsTrue(overflow.R == 140);
    assert.IsTrue(overflow.G == 64);
    assert.IsTrue(overflow.B == 0);
    assert.IsTrue(overflow.A == 128);

    let overflow2 = Color.FromNonPremultiplied(new Vector4(1, 0.5, 0.25, 1.1));
    assert.IsTrue(overflow2.R == 255);
    assert.IsTrue(overflow2.G == 140);
    assert.IsTrue(overflow2.B == 70);
    assert.IsTrue(overflow2.A == 255);
}

function Multiply() {
    let color = new Color(1, 2, 3, 4);

    // Test 1.0 scale.
    assert.AreEqual(color, Color.Multiply(color, 1.0));

    // Test 0.999 scale.
    let almostOne = new Color(0, 1, 2, 3);
    assert.AreEqual(almostOne, Color.Multiply(almostOne, 0.999));

    // Test 1.001 scale.
    assert.AreEqual(color, Color.Multiply(color, 1.001));

    // Test 0.0 scale.
    assert.AreEqual(Color.Transparent, Color.Multiply(color, 0.0));

    // Test 0.001 scale.
    assert.AreEqual(Color.Transparent, Color.Multiply(color, 0.001));

    // Test -0.001 scale.
    assert.AreEqual(Color.Transparent, Color.Multiply(color, -0.001));

    // Test for overflow.
    assert.AreEqual(Color.White, Color.Multiply(color, 300.0));

    // Test for underflow.
    assert.AreEqual(Color.Transparent, Color.Multiply(color, -1.0));
}

function Lerp() {
    let color1 = new Color(20, 40, 0, 0);
    let color2 = new Color(41, 81, 255, 255);

    // Test zero and underflow.
    assert.AreEqual(color1, Color.Lerp(color1, color2, 0.0));
    assert.AreEqual(color1, Color.Lerp(color1, color2, 0.001));
    assert.AreEqual(color1, Color.Lerp(color1, color2, -0.001));
    assert.AreEqual(color1, Color.Lerp(color1, color2, -1.0));

    // Test one scale and overflows.
    assert.AreEqual(color2, Color.Lerp(color1, color2, 1.0));
    assert.AreEqual(color2, Color.Lerp(color1, color2, 1.001));
    assert.AreEqual(new Color(254, 254, 254, 254), Color.Lerp(Color.Transparent, Color.White, 0.999));
    assert.AreEqual(color2, Color.Lerp(color1, color2, 2.0));

    // Test half scale.
    let half = new Color(30, 60, 127, 127);
    assert.AreEqual(half, Color.Lerp(color1, color2, 0.5));
    assert.AreEqual(half, Color.Lerp(color1, color2, 0.501));
    assert.AreEqual(half, Color.Lerp(color1, color2, 0.499));

    // Test backwards lerp.
    assert.AreEqual(color2, Color.Lerp(color2, color1, 0.0));
    assert.AreEqual(color1, Color.Lerp(color2, color1, 1.0));
    assert.AreEqual(half, Color.Lerp(color2, color1, 0.5));
}

export default function () {
    FromNonPremultiplied_Int();
    FromNonPremultiplied_Float();
    Multiply();
    Lerp();

    assert.Result();
};