import MathHelper from '../../Src/Framework/MathHelper.js';
import Assert from '../Assert.js';

let assert = new Assert('Framework/MathHelper');

function ClampNumberTest() {
    assert.IsTrue(MathHelper.Clamp(1, 0, 2) == 1, "Failed boundary test, clamp [0,2] on 1 should be 1");
    assert.IsTrue(MathHelper.Clamp(1, 0, 1) == 1, "Failed boundary test, clamp [0,1] on 1 should be 1");
    assert.IsTrue(MathHelper.Clamp(1, 2, 5) == 2, "Failed boundary test, clamp [2,5] on 1 should be 2");
    assert.IsTrue(MathHelper.Clamp(1, -50, -10) == -10, "Failed boundary test, clamp [-50f, -10f] on 1 should be -10");
    assert.IsTrue(MathHelper.Clamp(1, -50, 25) == 1, "Failed boundary test, clamp [-50, 25] on 1 should be 1");
    assert.IsTrue(MathHelper.Clamp(0, 1, 1) == 1, "Failed boundary test, clamp [1,1] on 0 should be 1");
    assert.IsTrue(MathHelper.Clamp(0, -1, -1) == -1, "Failed boundary test, clamp [-1,-1] on 0 should be -1");
}

function DistanceTest() {
    assert.AreEqual(MathHelper.Distance(0, 5), 5, "Distance test failed on [0,5]");
    assert.AreEqual(MathHelper.Distance(-5, 5), 10, "Distance test failed on [-5,5]");
    assert.AreEqual(MathHelper.Distance(0, 0), 0, "Distance test failed on [0,0]");
    assert.AreEqual(MathHelper.Distance(-5, -1), 4, "Distance test failed on [-5,-1]");
}

function LerpTest() {
    assert.AreEqual(MathHelper.Lerp(0, 5, 0.5), 2.5, "Lerp test failed on [0,5,.5]");
    assert.AreEqual(MathHelper.Lerp(-5, 5, 0.5), 0, "Lerp test failed on [-5,5,0.5]");
    assert.AreEqual(MathHelper.Lerp(0, 0, 0.5), 0, "Lerp test failed on [0,0,0.5]");
    assert.AreEqual(MathHelper.Lerp(-5, -1, 0.5), -3, "Lerp test failed on [-5,-1, 0.5]");
    // The following test checks for XNA compatibility. 
    // Even though the calculation itself should return "1", the XNA implementaion returns 0 (presumably due to a efficiency/precision tradeoff).
    assert.AreEqual(MathHelper.Lerp(10000000000000000, 1, 1), 0, "Lerp test failed on [10000000000000000,1,1]");
}

function Min() {
    assert.AreEqual(-0.5, MathHelper.Min(-0.5, -0.5));
    assert.AreEqual(-0.5, MathHelper.Min(-0.5, 0.0));
    assert.AreEqual(-0.5, MathHelper.Min(0.0, -0.5));
    assert.AreEqual(0, MathHelper.Min(0, 0));
    assert.AreEqual(-5, MathHelper.Min(-5, 5));
    assert.AreEqual(-5, MathHelper.Min(5, -5));
}

function Max() {
    assert.AreEqual(-0.5, MathHelper.Min(-0.5, -0.5));
    assert.AreEqual(0.0, MathHelper.Max(-0.5, 0.0));
    assert.AreEqual(0.0, MathHelper.Max(0.0, -0.5));
    assert.AreEqual(0, MathHelper.Max(0, 0));
    assert.AreEqual(5, MathHelper.Max(-5, 5));
    assert.AreEqual(5, MathHelper.Max(5, -5));
}

function PiConstantsAreExpectedValues() {
    assert.AreEqual(MathHelper.PiOver4, 0.7853982, '常量验证失败：π的四分之一');
    assert.AreEqual(MathHelper.PiOver2, 1.57079637, '常量验证失败：π的二分之一');
    assert.AreEqual(MathHelper.Pi, 3.14159274, '常量验证失败：π');
    assert.AreEqual(MathHelper.TwoPi, 6.28318548, '常量验证失败：两倍的π');
}

export default function () {
    ClampNumberTest();
    DistanceTest();
    LerpTest();
    Min();
    Max();
    PiConstantsAreExpectedValues();

    assert.Result();
};