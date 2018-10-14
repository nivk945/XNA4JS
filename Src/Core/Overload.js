const _any = '*';

class Overload {
    static Create() {
        var _parameters = [];
        var _functions = [];

        /**
         * 调用重载函数
         */
        function _overload(...args) {
            if (_functions.length === 0) {
                // 检查是否有可调用函数

                throw new Error('Function not implemented');
            }

            var parameters;

            for (var i = 0; i < _functions.length; i++) {
                parameters = _parameters[i];

                if (!parameters && !!args.length ||
                    !!parameters && args.length !== parameters.length) {
                    // 跳过参数数量不一致的重载(不包括参数列表为空的情况)

                    continue;
                }

                var checkDone = true;

                if (parameters !== null) {
                    for (var x = 0; x < parameters.length; x++) {
                        // 遍历参数类型

                        var checkType;

                        // 检查并跳过参数类型不一致的重载

                        checkType = parameters[x];

                        if (checkType !== _any &&
                            (!(Object(args[x]) instanceof checkType))) {
                            checkDone = false;
                            break;
                        }

                        if (args[x][Symbol.name]==='TypeList'&&
                            args[x][Symbol.toPrimitive] !== checkType[Symbol.toPrimitive]) {
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
            _parameters.push(typeList);
            _functions.push(fun);

            return _overload;
        };

        return _overload;
    }
}

export default Overload;