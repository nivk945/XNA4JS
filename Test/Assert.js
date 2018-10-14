class Assert {
    constructor(moduleName) {
        this._moduleName = moduleName;
        this._passCount = 0;
        this._hasError = false;
    }

    IsNull(obj, msg) {
        if (obj != null) {
            this.Fail(msg);
            return;
        }
        this.Pass();
    }

    IsNotNull(obj, msg) {
        if (obj == null) {
            this.Fail(msg);
            return;
        }
        this.Pass();
    }

    IsTrue(bool, msg) {
        if (!bool) {
            this.Fail(msg);
            return;
        }
        this.Pass();
    }

    IsFalse(bool, msg) {
        if (bool) {
            this.Fail(msg);
            return;
        }
        this.Pass();
    }

    AreEqual(value, should, msg) {
        if (value && typeof value.Equals == 'function') {
            if (!value.Equals(should)) {
                this.Fail(msg);
                return;
            }
        } else if (should && typeof should.Equals == 'function') {
            if (!should.Equals(value)) {
                this.Fail(msg);
                return;
            }
        } else {
            if (typeof value === 'number' && typeof should === 'number') {
                if (Math.abs(value - should) > 1e-5) {
                    this.Fail(msg);
                    return;
                }
            } else if (value !== should) {
                this.Fail(msg);
                return;
            }
        }
        this.Pass();
    }

    AreNotEqual(value, notShould, msg) {
        if (value && typeof value.Equals == 'function') {
            if (value.Equals(notShould)) {
                this.Fail(msg);
                return;
            }
        } else if (notShould && typeof notShould.Equals == 'function') {
            if (notShould.Equals(value)) {
                this.Fail(msg);
                return;
            }
        } else {
            if (typeof value === 'number' && typeof should === 'number') {
                if (Math.abs(value - should) < 1e-5) {
                    this.Fail(msg);
                    return;
                }
            } else if (value == notShould) {
                this.Fail(msg);
                return;
            }
        }
        this.Pass();
    }

    Pass() {
        this._passCount++;
    }

    Result() {
        console.log(`模块"${this._moduleName}"\r\n错误：${this._hasError ? '存在' : '无'}\r\n通过测试数：${this._passCount}`);
    }

    Fail(msg) {
        this._hasError = true;
        throw (`模块"${this._moduleName}"验证失败\r\n${msg}`);
    }
}

export default Assert;