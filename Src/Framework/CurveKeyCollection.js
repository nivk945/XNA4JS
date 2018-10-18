import Overload from '../Core/Overload.js';
import TypeList from '../Core/TypeList.js';
import CurveKey from './CurveKey.js';

class CurveKeyCollection extends TypeList {
    constructor(...args) {
        super(CurveKey, ...args);
    }
    
    Add(...args) {
        const superAdd = super.Add;
        return (
            CurveKeyCollection.prototype.Add = Overload.Create().
                Add([CurveKey], function (item) {
                    const proxy = this._getPrivateVar('_proxy');
                    for (let i = 0; i < proxy.Length; i++) {
                        if (item.Position < proxy[i].Position) {
                            proxy.Insert(i, item);
                            return;
                        }
                    }
                    superAdd.call(this, item);
                })
        ).call(this, ...args);
    }

    Clone(...args) {
        return (
            CurveKeyCollection.prototype.Clone = Overload.Create().
                Add([], function () {
                    const proxy = this._getPrivateVar('_proxy');
                    let ckc = new CurveKeyCollection();
                    proxy.ForEach(function (key) {
                        ckc.Add(key);
                    });
                    return ckc;
                })
        ).call(this, ...args);
    }

    Contains(...args) {
        const superContains = super.Contains;
        return (
            CurveKeyCollection.prototype.Contains = Overload.Create().
                Add([CurveKey], function (item) {
                    return superContains.call(this, item);
                })
        ).call(this, ...args);
    }

    CopyTo(...args) {
        return (
            CurveKeyCollection.prototype.CopyTo = Overload.Create().
                Add([TypeList.T(CurveKey), Number], function (array, arrayIndex) {
                    const proxy = this._getPrivateVar('_proxy');
                    if (array.Length < arrayIndex + proxy.Length) {
                        throw new RangeError('Argument out of range');
                    }

                    for (let i = 0; i < proxy.Length; i++) {
                        array[i + arrayIndex] = proxy[i];
                    }
                })
        ).call(this, ...args);
    }

    GetEnumerator(...args) {
        return (
            CurveKeyCollection.prototype.GetEnumerator = Overload.Create().
                Add([], function () {
                    return this.ToArray();
                })
        ).call(this, ...args);
    }

    IndexOf(...args) {
        const superIndexOf = super.IndexOf;
        return (
            CurveKeyCollection.prototype.IndexOf = Overload.Create().
                Add([CurveKey], function (item) {
                    return superIndexOf.call(this, item);
                })
        ).call(this, ...args);
    }

    Remove(...args) {
        const superRemove = super.Remove;
        return (
            CurveKeyCollection.prototype.Remove = Overload.Create().
                Add([CurveKey], function (item) {
                    return superRemove.call(this, item);
                })
        ).call(this, ...args);
    }
    
    static Deserialize(...args) {
        return (
            CurveKeyCollection.Deserialize = Overload.Create().
                Add([String], function (str) {
                    return this.Deserialize(JSON.parse(str));
                }).
                Add([window.Object], function (obj) {
                    if (!Array.isArray(obj)) {
                        throw new TypeError('Unrecognized type');
                    }
                    for (let i = 0; i < obj.length; i++) {
                        obj[i] = CurveKey.Deserialize(obj[i]);
                    }
                    return new CurveKeyCollection(obj);
                })
        ).call(this, ...args);
    }
}

export default CurveKeyCollection;