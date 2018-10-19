class DeviceNotResetException extends Error {
    constructor(desc) {
        super(desc);
    }

    [Symbol.toStringTag]() {
        return 'DeviceNotResetException';
    }
}

export default DeviceNotResetException;