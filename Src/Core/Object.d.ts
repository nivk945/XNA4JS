import IPrivateVar from '../Interface/IPrivateVar.js';

/**
 * 支持类层次结构中的所有类，并为派生类提供低级别服务。 这是所有类的最终基类；它是类型层次结构的根。 
 * @public
 * @class
 * @extends IPrivateVar
 */
class Object extends IPrivateVar {
    /**
     * 返回表示当前对象类型的字符串。
     * @returns {String} 表示当前对象类型的字符串。
     */
    static get [Symbol.name](): String

    /**
     * 反序列化。
     * @param {String} str 要反序列化的 JSON 字符串。
     * @returns {Object} 实例对象。
     */
    static fromJSON(str): Object

    /**
     * 反序列化。
     * @param {Object} obj 要反序列化的 JSON 对象。
     * @returns {Object} 实例对象。
     */
    static fromJSON(obj): Object

    /**
     * 返回表示当前对象的字符串。
     * @returns {String} 表示当前对象的字符串。
     */
    ToString(): String

    /**
     * 确定指定的对象是否等于当前对象。
     * @param {Object} obj 要与当前对象进行比较的对象。
     * @returns {Boolean} 如果指定的对象等于当前对象，则为 true，否则为 false。
     */
    Equals(obj: Object): Boolean

    /**
     * 确定指定的对象是否等于当前对象。
     * @param {any} obj 要与当前对象进行比较的对象。
     * @returns {Boolean} 永远返回false
     */
    Equals(obj: any): false

    /**
     * 确定指定的对象实例是否被视为相等。
     * @static
     * @param {Object} objA 要比较的第一个对象。
     * @param {Object} objB 要比较的第二个对象。
     * @returns {Boolean} 如果对象被视为相等，则为 true，否则为 false。 如果 objA 和 objB 均为 null，此方法将返回 true。
     */
    static Equals(objA: Object, objB: Object): Boolean

    /**
     * 确定指定的值是否被视为相等。
     * @static
     * @param {any} value1 要比较的第一个值。
     * @param {any} value2 要比较的第二个值。
     * @returns {Boolean} 如果值被视为相等，则为 true，否则为 false。
     */
    static Equals(value1: any, value2: any): Boolean

    /**
     * 确定指定的 Object 实例是否是相同的实例。
     * @static
     * @param {Object} objA 要比较的第一个对象。
     * @param {Object} objB 要比较的第二个对象。
     * @returns {Boolean} true如果objA是相同的实例作为objB或如果两者均null; 否则为false。
     */
    static ReferenceEquals(objA: Object, objB: Object): Boolean

    /**
     * 获取该实例的哈希代码。
     * @returns {Number} 当前对象的哈希代码。
     */
    GetHashCode(): Number

    /**
     * 获取当前实例的构造器。
     * @returns {Object}
     */
    GetType(): Object

    /**
     * 创建当前 Object 的浅表副本。
     * @returns {Object} 当前 Object 的浅表副本。
     */
    MemberwiseClone(): Object
}

export default Object;