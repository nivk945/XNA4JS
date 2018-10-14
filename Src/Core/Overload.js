const _any = '*';

const _nullFn = function () { };

class Overload {
    static get [Symbol.toStringTag]() {
        return 'Overload';
    }

    static Create() {
        let _parameters = [];
        let _functions = [];

        /**
         * 调用重载函数
         */
        function _overload(...args) {
            if (_functions.length === 0) {
                // 检查是否有可调用函数

                throw new Error('Function not implemented');
            }

            let parameters;

            for (let i = 0; i < _functions.length; i++) {
                parameters = _parameters[i];

                if (!parameters && !!args.length ||
                    !!parameters && args.length !== parameters.length) {
                    // 跳过参数数量不一致的重载(不包括参数列表为空的情况)

                    continue;
                }

                let checkDone = true;

                if (parameters !== null) {
                    for (let x = 0; x < parameters.length; x++) {
                        // 遍历参数类型

                        let checkType;

                        // 检查并跳过参数类型不一致的重载

                        checkType = parameters[x];

                        if (checkType === _any) {
                            continue;
                        }

                        if ((!(Object(args[x]) instanceof checkType))) {
                            checkDone = false;
                            break;
                        }

                        if (args[x].__type__ === 'TypeList' &&
                            args[x].__internalType__ !== checkType.__internalType__) {
                            checkDone = false;
                            break;
                        }
                    }
                }

                if (checkDone) {
                    return _functions[i].apply(this, args);
                }
            }

            throw new TypeError(new Error('Invalid parameter'));
        };

        /**
         * 添加重载函数
         * @param {Array} typeList 类型列表
         * @param {Function} fun 匹配的函数
         */
        _overload.Add = function (typeList, fun) {
            for (let i = 0; i < typeList.length; i++) {
                if (typeof typeList[i] !== 'function' && typeList[i] !== _any) {
                    typeList[i] = _nullFn;
                }
            }

            _parameters.push(typeList);
            _functions.push(fun);

            return _overload;
        };

        return _overload;
    }
}

export default Overload;