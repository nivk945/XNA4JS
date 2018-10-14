import Overload from '../Core/Overload.js';
import Object from '../Core/Object.js';
import CurveLoopType from './CurveLoopType.js';
import CurveKeyCollection from './CurveKeyCollection.js';
import CurveTangent from './CurveTangent.js';
import CurveContinuity from './CurveContinuity.js';

function GetNumberOfCycle(position) {
    let _keys = this._getPrivateVar('_keys');
    let cycle = (position - _keys[0].Position) / (_keys[_keys.Count - 1].Position - _keys[0].Position);
    if (cycle < 0)
        cycle--;
    return cycle | 0;
}

function GetCurvePosition(position) {
    let _keys = this._getPrivateVar('_keys');
    let prev = _keys[0];
    let next;
    for (let i = 1; i < _keys.Length; ++i) {
        next = _keys[i];
        if (next.Position >= position) {
            if (prev.Continuity == CurveContinuity.Step) {
                if (position >= 1) {
                    return next.Value;
                }
                return prev.Value;
            }
            let t = (position - prev.Position) / (next.Position - prev.Position);
            let ts = t * t;
            let tss = ts * t;
            return (2 * tss - 3 * ts + 1) * prev.Value + (tss - 2 * ts + t) * prev.TangentOut + (3 * ts - 2 * tss) * next.Value + (tss - ts) * next.TangentIn;
        }
        prev = next;
    }
    return 0;
}

class Curve extends Object {
    constructor(...args) {
        super();

        window.Object.defineProperties(this, {
            PostLoop: {
                get: () => {
                    return this._getPrivateVar('_postLoop');
                },
                set: Overload.Create().
                    Add([CurveLoopType], (value) => {
                        this._setPrivateVar('_postLoop', value);
                    })
            },
            PreLoop: {
                get: () => {
                    return this._getPrivateVar('_preLoop');
                },
                set: Overload.Create().
                    Add([CurveLoopType], (value) => {
                        this._setPrivateVar('_preLoop', value);
                    })
            }
        });

        (Curve.prototype.constructor._init || (Curve.prototype.constructor._init = Overload.Create().
            Add([], function () {
                this._setPrivateVar('_keys', new CurveKeyCollection());
                this.PostLoop = CurveLoopType.Constant;
                this.PreLoop = CurveLoopType.Constant;
            })
        )).call(this, ...args);
    }

    get IsConstant() {
        return this._getPrivateVar('_keys').Length <= 1;
    }

    get Keys() {
        return this._getPrivateVar('_keys');
    }

    Clone(...args) {
        return (
            Curve.prototype.Clone = Overload.Create().
                Add([], function () {
                    let curve = new Curve();
                    curve._setPrivateVar('_keys', this._getPrivateVar('_keys').Clone());
                    curve.PreLoop = this.PreLoop;
                    curve.PostLoop = this.PostLoop;
                    return curve;
                })
        ).call(this, ...args);
    }

    ComputeTangent(...args) {
        return (
            Curve.prototype.ComputeTangent = Overload.Create().
                Add([Number, CurveTangent, CurveTangent], function (keyIndex, tangentInType, tangentOutType) {
                    let _keys = this._getPrivateVar('_keys');
                    let key = _keys[keyIndex];

                    let p0, p, p1;
                    p0 = p = p1 = key.Position;

                    let v0, v, v1;
                    v0 = v = v1 = key.Value;

                    if (keyIndex > 0) {
                        p0 = _keys[keyIndex - 1].Position;
                        v0 = _keys[keyIndex - 1].Value;
                    }

                    if (keyIndex < _keys.Length - 1) {
                        p1 = _keys[keyIndex + 1].Position;
                        v1 = _keys[keyIndex + 1].Value;
                    }

                    switch (tangentInType) {
                        case CurveTangent.Flat:
                            key.TangentIn = 0;
                            break;
                        case CurveTangent.Linear:
                            key.TangentIn = v - v0;
                            break;
                        case CurveTangent.Smooth:
                            var pn = p1 - p0;
                            if (Math.abs(pn) < Number.EPSILON) {
                                key.TangentIn = 0;
                            } else {
                                key.TangentIn = (v1 - v0) * ((p - p0) / pn);
                            }
                            break;
                    }

                    switch (tangentOutType) {
                        case CurveTangent.Flat:
                            key.TangentOut = 0;
                            break;
                        case CurveTangent.Linear:
                            key.TangentOut = v1 - v;
                            break;
                        case CurveTangent.Smooth:
                            var pn = p1 - p0;
                            if (Math.abs(pn) < Number.EPSILON) {
                                key.TangentOut = 0;
                            } else {
                                key.TangentOut = (v1 - v0) * ((p1 - p) / pn);
                            }
                            break;
                    }
                }).
                Add([Number, CurveTangent], function (keyIndex, tangentType) {
                    this.ComputeTangent(keyIndex, tangentType, tangentType);
                })
        ).call(this, ...args);
    }

    ComputeTangents(...args) {
        return (
            Curve.prototype.ComputeTangents = Overload.Create().
                Add([CurveTangent, CurveTangent], function (tangentInType, tangentOutType) {
                    for (let i = 0; i < this.Keys.Length; ++i) {
                        this.ComputeTangent(i, tangentInType, tangentOutType);
                    }
                }).
                Add([CurveTangent], function (tangentType) {
                    this.ComputeTangents(tangentType, tangentType);
                })
        ).call(this, ...args);
    }

    Evaluate(...args) {
        return (
            Curve.prototype.Evaluate = Overload.Create().
                Add([Number], function (position) {
                    let _keys = this._getPrivateVar('_keys');

                    if (_keys.Length == 0) {
                        return 0;
                    }

                    if (_keys.Length == 1) {
                        return _keys[0].Value;
                    }

                    let first = _keys[0];
                    let last = _keys[_keys.Length - 1];

                    let cycle, virtualPos;

                    if (position < first.Position) {
                        switch (this.PreLoop) {
                            case CurveLoopType.Constant:
                                return first.Value;
                            case CurveLoopType.Linear:
                                return first.Value - first.TangentIn * (first.Position - position);
                            case CurveLoopType.Cycle:
                                cycle = GetNumberOfCycle.call(this, position);
                                virtualPos = position - (cycle * (last.Position - first.Position));
                                return GetCurvePosition.call(this, virtualPos);
                            case CurveLoopType.CycleOffset:
                                cycle = GetNumberOfCycle.call(this, position);
                                virtualPos = position - (cycle * (last.Position - first.Position));
                                return (GetCurvePosition.call(this, virtualPos) + cycle * (last.Value - first.Value));
                            case CurveLoopType.Oscillate:
                                cycle = GetNumberOfCycle.call(this, position);
                                if (0 == cycle % 2) {
                                    virtualPos = position - (cycle * (last.Position - first.Position));
                                } else {
                                    virtualPos = last.Position - position + first.Position + (cycle * (last.Position - first.Position));
                                }
                                return GetCurvePosition.call(this, virtualPos);
                        }
                    }
                    else if (position > last.Position) {
                        let cycle;
                        switch (this.PostLoop) {
                            case CurveLoopType.Constant:
                                return last.Value;
                            case CurveLoopType.Linear:
                                return last.Value + first.TangentOut * (position - last.Position);
                            case CurveLoopType.Cycle:
                                cycle = GetNumberOfCycle.call(this, position);
                                virtualPos = position - (cycle * (last.Position - first.Position));
                                return GetCurvePosition.call(this, virtualPos);
                            case CurveLoopType.CycleOffset:
                                cycle = GetNumberOfCycle.call(this, position);
                                virtualPos = position - (cycle * (last.Position - first.Position));
                                return (GetCurvePosition.call(this, virtualPos) + cycle * (last.Value - first.Value));
                            case CurveLoopType.Oscillate:
                                cycle = GetNumberOfCycle.call(this, position);
                                virtualPos = position - (cycle * (last.Position - first.Position));
                                if (0 == cycle % 2) {
                                    virtualPos = position - (cycle * (last.Position - first.Position));
                                } else {
                                    virtualPos = last.Position - position + first.Position + (cycle * (last.Position - first.Position));
                                }
                                return GetCurvePosition.call(this, virtualPos);
                        }
                    }

                    return GetCurvePosition.call(this, position);
                })
        ).call(this, ...args);
    }

    Serialize(...args) {
        let superSerialize = super.Serialize;
        return (
            Curve.prototype.Serialize = Overload.Create().
                Add([String], function () {
                    return superSerialize.call(this, {
                        PreLoop: this.PreLoop,
                        PostLoop: this.PostLoop,
                        _keys: this.Keys
                    });
                })
        ).call(this, ...args);
    }

    static Deserialize(...args) {
        return (
            Curve.Deserialize = Overload.Create().
                Add([String], function (str) {
                    return this.Deserialize(JSON.parse(str));
                }).
                Add([window.Object], function (obj) {
                    if (obj['Symbol'] !== Curve.name) {
                        throw new TypeError('Unrecognized type');
                    }
                    let preLoop = CurveLoopType.Deserialize(obj.PreLoop);
                    let postLoop = CurveLoopType.Deserialize(obj.PostLoop);
                    let _keys = CurveKeyCollection.Deserialize(obj._keys);
                    let curve = new Curve();
                    curve.PreLoop = preLoop;
                    curve.PostLoop = postLoop;
                    curve._setPrivateVar('_keys', _keys);
                    return curve;
                })
        ).call(this, ...args);
    }
}

export default Curve;