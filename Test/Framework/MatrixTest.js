import MathHelper from '../../Src/Framework/MathHelper.js';
import Assert from '../Assert.js';
import Matrix from '../../Src/Framework/Matrix.js';

let assert = new Assert('Framework/Matrix');

function Add() {
    var test = new Matrix(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
    var expected = new Matrix(2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32);
    var result = Matrix.Add(test, test);
    assert.AreEqual(expected, result);
    assert.AreEqual(expected, Matrix.Add(test, test));
}

export default function () {
    Add();

    assert.Result();
};