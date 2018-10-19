class DeviceLostException extends Error {
    constructor(desc) {
        super(desc);
    }

    [Symbol.toStringTag]() {
        return 'DeviceLostException';
    }
}

export default DeviceLostException;