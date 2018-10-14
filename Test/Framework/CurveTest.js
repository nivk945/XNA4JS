import MathHelper from '../../Src/Framework/MathHelper.js';
import Assert from '../Assert.js';
import Curve from '../../Src/Framework/Curve.js';
import CurveKey from '../../Src/Framework/CurveKey.js';
import CurveTangent from '../../Src/Framework/CurveTangent.js';

let assert = new Assert('Framework/Curve');

function Clone() {
    let curve = new Curve();
    curve.Keys.Add(new CurveKey(0, 1));
    curve.Keys.Add(new CurveKey(1, 2));
    curve.Keys.Add(new CurveKey(3, 4));
    
    let clone = curve.Clone();

    assert.AreEqual(curve.PostLoop, clone.PreLoop);
    assert.AreEqual(curve.PostLoop, clone.PostLoop);

    for (let i = 0; i < 3; ++i) {
        assert.AreEqual(curve.Keys[i], clone.Keys[i]);
    }
}

function Evaluate() {
    let curve = new Curve();
    curve.Keys.Add(new CurveKey(1, -1));
    curve.Keys.Add(new CurveKey(2, 2));
    curve.Keys.Add(new CurveKey(3, 4));

    let result = curve.Evaluate(1.25);

    assert.AreEqual(-0.53125, result);
}

function EvaluateNoKeys() {
    let curve = new Curve();

    let result = curve.Evaluate(1.25);

    assert.AreEqual(0, result);
}

function EvaluateOneKey() {
    let curve = new Curve();
    curve.Keys.Add(new CurveKey(1, -1));

    let result = curve.Evaluate(1.25);

    assert.AreEqual(-1, result);
}

function ComputeTangent() {
    let key1 = new CurveKey(-0.5, 1.5);
    let key2 = new CurveKey(1.1, 2.3);
    let key3 = new CurveKey(2.25, 4.4);

    let curve1 = new Curve();
    curve1.Keys.Add(key1);
    curve1.Keys.Add(key2);
    curve1.Keys.Add(key3);

    curve1.ComputeTangent(0, CurveTangent.Smooth);
    curve1.ComputeTangent(1, CurveTangent.Smooth);
    curve1.ComputeTangent(2, CurveTangent.Smooth);

    assert.AreEqual(0, curve1.Keys[0].TangentIn);
    assert.AreEqual(0.799999952, curve1.Keys[0].TangentOut);

    assert.AreEqual(1.68727279, curve1.Keys[1].TangentIn);
    assert.AreEqual(1.21272731, curve1.Keys[1].TangentOut);

    assert.AreEqual(2.10000014, curve1.Keys[2].TangentIn);
    assert.AreEqual(0, curve1.Keys[2].TangentOut);

    let curve2 = new Curve();
    curve2.Keys.Add(key1);
    curve2.Keys.Add(key2);
    curve2.Keys.Add(key3);

    curve2.ComputeTangent(0, CurveTangent.Flat);
    curve2.ComputeTangent(1, CurveTangent.Flat);
    curve2.ComputeTangent(2, CurveTangent.Flat);

    assert.AreEqual(0.0, curve2.Keys[0].TangentIn);
    assert.AreEqual(0.0, curve2.Keys[0].TangentOut);

    assert.AreEqual(0.0, curve2.Keys[1].TangentIn);
    assert.AreEqual(0.0, curve2.Keys[1].TangentOut);

    assert.AreEqual(0.0, curve2.Keys[2].TangentIn);
    assert.AreEqual(0.0, curve2.Keys[2].TangentOut);

    let curve3 = new Curve();
    curve3.Keys.Add(key1);
    curve3.Keys.Add(key2);
    curve3.Keys.Add(key3);
    
    curve3.ComputeTangent(0, CurveTangent.Linear);
    curve3.ComputeTangent(1, CurveTangent.Linear);
    curve3.ComputeTangent(2, CurveTangent.Linear);

    assert.AreEqual(0.0, curve3.Keys[0].TangentIn);
    assert.AreEqual(0.799999952, curve3.Keys[0].TangentOut);

    assert.AreEqual(0.799999952, curve3.Keys[1].TangentIn);
    assert.AreEqual(2.10000014, curve3.Keys[1].TangentOut);

    assert.AreEqual(2.10000014, curve3.Keys[2].TangentIn);
    assert.AreEqual(0.0, curve3.Keys[2].TangentOut);
}

function ComputeTangents()
{
    let key1 = new CurveKey(-0.5, 1.5);
    let key2 = new CurveKey(1.1, 2.3);
    let key3 = new CurveKey(2.25, 4.4);

    let curve1 = new Curve();
    curve1.Keys.Add(key1);
    curve1.Keys.Add(key2);
    curve1.Keys.Add(key3);

    curve1.ComputeTangents(CurveTangent.Smooth);

    assert.AreEqual(0.0, curve1.Keys[0].TangentIn);
    assert.AreEqual(0.799999952, curve1.Keys[0].TangentOut);

    assert.AreEqual(1.68727279, curve1.Keys[1].TangentIn);
    assert.AreEqual(1.21272731, curve1.Keys[1].TangentOut);

    assert.AreEqual(2.10000014, curve1.Keys[2].TangentIn);
    assert.AreEqual(0.0, curve1.Keys[2].TangentOut);

    let curve2 = new Curve();
    curve2.Keys.Add(key1);
    curve2.Keys.Add(key2);
    curve2.Keys.Add(key3);

    curve2.ComputeTangents(CurveTangent.Flat);

    assert.AreEqual(0.0, curve2.Keys[0].TangentIn);
    assert.AreEqual(0.0, curve2.Keys[0].TangentOut);

    assert.AreEqual(0.0, curve2.Keys[1].TangentIn);
    assert.AreEqual(0.0, curve2.Keys[1].TangentOut);

    assert.AreEqual(0.0, curve2.Keys[2].TangentIn);
    assert.AreEqual(0.0, curve2.Keys[2].TangentOut);

    let curve3 = new Curve();
    curve3.Keys.Add(key1);
    curve3.Keys.Add(key2);
    curve3.Keys.Add(key3);

    curve3.ComputeTangents(CurveTangent.Linear);

    assert.AreEqual(0.0, curve3.Keys[0].TangentIn);
    assert.AreEqual(0.799999952, curve3.Keys[0].TangentOut);

    assert.AreEqual(0.799999952, curve3.Keys[1].TangentIn);
    assert.AreEqual(2.10000014, curve3.Keys[1].TangentOut);

    assert.AreEqual(2.10000014, curve3.Keys[2].TangentIn);
    assert.AreEqual(0.0, curve3.Keys[2].TangentOut);
}

function IsConstant()
{
    let curve1 = new Curve();
    let curve2 = new Curve();
    curve2.Keys.Add(new CurveKey(0, 0));
    let curve3 = new Curve();
    curve3.Keys.Add(new CurveKey(0, 0));
    curve3.Keys.Add(new CurveKey(0, 0));

    assert.AreEqual(true, curve1.IsConstant);
    assert.AreEqual(true, curve2.IsConstant);
    assert.AreEqual(false, curve3.IsConstant);
}

export default function () {
    Clone();
    Evaluate();
    EvaluateNoKeys();
    EvaluateOneKey();
    ComputeTangent();
    ComputeTangents();
    IsConstant();

    assert.Result();
};