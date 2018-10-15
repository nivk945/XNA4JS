class Assert {
    constructor(moduleName) {
        this._moduleName = moduleName;
        this._passCount = 0;
        this._errorCount = 0;
        this._hasError = false;
        this._errorList = [];
    }

    IsNull(obj, msg) {
        if (obj != null) {
            this.Fail(msg || '理应为 Null');
            return;
        }
        this.Pass();
    }

    IsNotNull(obj, msg) {
        if (obj == null) {
            this.Fail(msg || '理应为不为 Null');
            return;
        }
        this.Pass();
    }

    IsTrue(bool, msg) {
        if (!bool) {
            this.Fail(msg || '理应为 True 但得到了 False');
            return;
        }
        this.Pass();
    }

    IsFalse(bool, msg) {
        if (bool) {
            this.Fail(msg || '理应为 False 但得到了 True');
            return;
        }
        this.Pass();
    }

    AreEqual(value, should, msg) {
        if (value && typeof value.Equals == 'function') {
            if (!value.Equals(should)) {
                this.Fail(msg || `理应相等\r\n${value.toString()}\r\n${should.toString()}`);
                return;
            }
        } else if (should && typeof should.Equals == 'function') {
            if (!should.Equals(value)) {
                this.Fail(msg || `理应相等\r\n${value.toString()}\r\n${should.toString()}`);
                return;
            }
        } else {
            if (typeof value === 'number' && typeof should === 'number') {
                if (Math.abs(value - should) > 1e-5) {
                    this.Fail(msg || `理应相等\r\n${value.toString()}\r\n${should.toString()}`);
                    return;
                }
            } else if (value !== should) {
                this.Fail(msg || `理应相等\r\n${value.toString()}\r\n${should.toString()}`);
                return;
            }
        }
        this.Pass();
    }

    AreNotEqual(value, notShould, msg) {
        if (value && typeof value.Equals == 'function') {
            if (value.Equals(notShould)) {
                this.Fail(msg || `理应不相等\r\n${value.toString()}\r\n${notShould.toString()}`);
                return;
            }
        } else if (notShould && typeof notShould.Equals == 'function') {
            if (notShould.Equals(value)) {
                this.Fail(msg || `理应不相等\r\n${value.toString()}\r\n${notShould.toString()}`);
                return;
            }
        } else {
            if (typeof value === 'number' && typeof should === 'number') {
                if (Math.abs(value - should) < 1e-5) {
                    this.Fail(msg || `理应不相等\r\n${value.toString()}\r\n${notShould.toString()}`);
                    return;
                }
            } else if (value == notShould) {
                this.Fail(msg || `理应不相等\r\n${value.toString()}\r\n${notShould.toString()}`);
                return;
            }
        }
        this.Pass();
    }

    Pass() {
        this._passCount++;
    }

    Result() {
        console.log(`\r\n模块"${this._moduleName}"
测试总数：${this._passCount + this._errorCount}
通过测试数：${this._passCount}
错误测试数：${this._errorCount}
${this._errorCount ? "错误列表：\r\n%c" + this._errorList.join("\r\n\r\n") : "%c"}\r\n`, 'color:red');
    }

    Fail(msg) {
        this._hasError = true;
        this._errorCount++;
        //throw (`模块"${this._moduleName}"验证失败\r\n${msg}`);
        this._errorList.push(msg);
    }
}

export default Assert;