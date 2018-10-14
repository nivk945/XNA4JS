import Assert from '../Assert.js';
import Quaternion from '../../Src/Framework/Quaternion.js';
import Vector3 from '../../Src/Framework/Vector3.js';
import Matrix from '../../Src/Framework/Matrix.js';

let assert = new Assert('Framework/Quaternion');

function Constructors() {
    let expected = new Quaternion();
    expected.X = 1;
    expected.Y = 2;
    expected.Z = 3;
    expected.W = 4;
    assert.IsTrue(expected.Equals(new Quaternion(1, 2, 3, 4)));
    assert.IsTrue(expected.Equals(new Quaternion(new Vector3(1, 2, 3), 4)));
}

function Properties() {
    assert.AreEqual(new Quaternion(0, 0, 0, 1), Quaternion.Identity);
}

function Add() {
    let q1 = new Quaternion(1, 2, 3, 4);
    let q2 = new Quaternion(1, 2, 3, 4);
    let expected = new Quaternion(2, 4, 6, 8);
    assert.AreEqual(expected, Quaternion.Add(q1, q2));

    let result = Quaternion.Add(q1, q2);
    assert.AreEqual(expected, result);
}

function Concatenate() {
    let q1 = new Quaternion(1, 2.5, 3, 4);
    let q2 = new Quaternion(1, 2, -3.8, 2);
    let expected = new Quaternion(21.5, 6.2, -8.7, 13.4);

    let result = Quaternion.Concatenate(q1, q2);

    assert.AreEqual(expected, result);
}

function Conjugate() {
    let q = new Quaternion(1, 2, 3, 4);
    let expected = new Quaternion(-1, -2, -3, 4);

    let result = Quaternion.Conjugate(q);
    assert.AreEqual(expected, result);

    q.Conjugate();
    assert.AreEqual(expected, q);
}

function CreateFromAxisAngle() {
    let axis = new Vector3(0.5, 1.1, -3.8);
    let angle = 0.25;
    let expected = new Quaternion(0.06233737, 0.1371422, -0.473764, 0.9921977);

    let result = Quaternion.CreateFromAxisAngle(axis, angle);
    assert.AreEqual(expected, result);
}

function CreateFromRotationMatrix() {
    let matrix = Matrix.CreateFromYawPitchRoll(0.15, 1.18, -0.22);
    let expected = new Quaternion(0.5446088, 0.1227905, -0.1323988, 0.8190203);

    let result = Quaternion.CreateFromRotationMatrix(matrix);
    assert.AreEqual(expected, result);
}

function CreateFromYawPitchRoll() {
    let expected = new Quaternion(0.5446088, 0.1227905, -0.1323988, 0.8190203);

    let result = Quaternion.CreateFromYawPitchRoll(0.15, 1.18, -0.22);
    assert.AreEqual(expected, result);
}

function Divide() {
    let q1 = new Quaternion(1, 2, 3, 4);
    let q2 = new Quaternion(0.2, -0.6, 11.9, 0.01);
    let expected = new Quaternion(-0.1858319, 0.09661285, -0.3279344, 0.2446305);

    let result = Quaternion.Divide(q1, q2);
    assert.AreEqual(expected, result);
}

function Length() {
    let q1 = new Quaternion(1, 2, 3, 4);
    assert.AreEqual(5.477226, q1.Length());
}

function LengthSquared() {
    let q1 = new Quaternion(1, 2, 3, 4);
    assert.AreEqual(30.0, q1.LengthSquared());
}

function Normalize() {
    let q = new Quaternion(1, 2, 3, 4);
    let expected = new Quaternion(0.1825742, 0.3651484, 0.5477226, 0.7302967);

    let result = Quaternion.Normalize(q);
    assert.AreEqual(expected, result);

    q.Normalize();
    assert.AreEqual(expected, q);
}

export default function () {
    debugger;
    Constructors();
    Properties();
    Add();
    Concatenate();
    Conjugate();
    CreateFromAxisAngle();
    CreateFromRotationMatrix();
    CreateFromYawPitchRoll();
    Divide();
    Length();
    LengthSquared();
    Normalize();

    assert.Result();
};