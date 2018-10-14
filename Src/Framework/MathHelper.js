import Overload from '../Core/Overload.js';

class MathHelper {
    static get E() {
        return 2.71828175;
    }

    static get Log10E() {
        return 0.4342945;
    }

    static get Log2E() {
        return 1.442695;
    }

    static get Pi() {
        return 3.14159274;
    }

    static get PiOver2() {
        return 1.57079637;
    }

    static get PiOver4() {
        return 0.7853982;
    }

    static get TwoPi() {
        return 6.28318548;
    }

    static Barycentric(...args) {
        return (
            MathHelper.Barycentric = Overload.Create().
                Add([Number, Number, Number, Number, Number], function (value1, value2, value3, amount1, amount2) {
                    return value1 + (value2 - value1) * amount1 + (value3 - value1) * amount2;
                })
        ).call(this, ...args);
    }

    static CatmullRom(...args) {
        return (
            MathHelper.CatmullRom = Overload.Create().
                Add([Number, Number, Number, Number, Number], function (value1, value2, value3, value4, amount) {
                    let amountSquared = amount * amount;
                    let amountCubed = amountSquared * amount;
                    return 0.5 * (2 * value2 +
                        (value3 - value1) * amount +
                        (2 * value1 - 5 * value2 + 4 * value3 - value4) * amountSquared +
                        (3 * value2 - value1 - 3 * value3 + value4) * amountCubed);
                })
        ).call(this, ...args);
    }

    static Clamp(...args) {
        return (
            MathHelper.Clamp = Overload.Create().
                Add([Number, Number, Number], function (value, min, max) {
                    return Math.max(min, Math.min(max, value));
                })
        ).call(this, ...args);
    }

    static Distance(...args) {
        return (
            MathHelper.Distance = Overload.Create().
                Add([Number, Number], function (value1, value2) {
                    return Math.abs(value1 - value2);
                })
        ).call(this, ...args);
    }

    static Hermite(...args) {
        return (
            MathHelper.Hermite = Overload.Create().
                Add([Number, Number, Number, Number, Number], function (value1, tangent1, value2, tangent2, amount) {
                    let v1 = value1, v2 = value2, t1 = tangent1, t2 = tangent2, s = amount, result;
                    let sCubed = s * s * s;
                    let sSquared = s * s;

                    switch (amount) {
                        case 0:
                            result = value1;
                            break;
                        case 1:
                            result = value2;
                            break;
                        default:
                            result = (2 * v1 - 2 * v2 + t2 + t1) * sCubed +
                                (3 * v2 - 3 * v1 - 2 * t1 - t2) * sSquared +
                                t1 * s +
                                v1;
                            break;
                    }

                    return result;
                })
        ).call(this, ...args);
    }

    static Lerp(...args) {
        return (
            MathHelper.Lerp = Overload.Create().
                Add([Number, Number, Number], function (value1, value2, amount) {
                    return value1 + (value2 - value1) * amount;
                })
        ).call(this, ...args);
    }

    static Max(...args) {
        return (
            MathHelper.Max = Overload.Create().
                Add([Number, Number], function (value1, value2) {
                    return Math.max(value1, value2);
                })
        ).call(this, ...args);
    }

    static Min(...args) {
        return (
            MathHelper.Min = Overload.Create().
                Add([Number, Number], function (value1, value2) {
                    return Math.min(value1, value2);
                })
        ).call(this, ...args);
    }

    static SmoothStep(...args) {
        return (
            MathHelper.SmoothStep = Overload.Create().
                Add([Number, Number, Number], function (value1, value2, amount) {
                    let result = MathHelper.Clamp(amount, 0, 1);
                    result = MathHelper.Hermite(value1, 0, value2, 0, result);

                    return result;
                })
        ).call(this, ...args);
    }

    static ToDegrees(...args) {
        return (
            MathHelper.ToDegrees = Overload.Create().
                Add([Number], function (radians) {
                    return radians * 57.295779513082320876798154814105;
                })
        ).call(this, ...args);
    }

    static ToRadians(...args) {
        return (
            MathHelper.ToRadians = Overload.Create().
                Add([Number], function (degrees) {
                    return degrees * 0.017453292519943295769236907684886;
                })
        ).call(this, ...args);
    }

    static WrapAngle(...args) {
        return (
            MathHelper.WrapAngle = Overload.Create().
                Add([Number], function (angle) {
                    if ((angle > -MathHelper.Pi) && (angle <= MathHelper.Pi)) {
                        return angle;
                    }

                    angle %= MathHelper.TwoPi;

                    if (angle <= -MathHelper.Pi) {
                        return angle + MathHelper.TwoPi;
                    }

                    if (angle > MathHelper.Pi) {
                        return angle - MathHelper.TwoPi;
                    }

                    return angle;
                })
        ).call(this, ...args);
    }
}

export default MathHelper;