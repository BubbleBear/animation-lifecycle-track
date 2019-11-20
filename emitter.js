class Emitter {
    constructor(element) {
        this._element = element;
    }

    on(eventName, callback, ...options) {
        this._element.addEventListener(eventName, callback, ...options);

        return this;
    }

    once(eventName, callback) {
        return this.on(eventName, callback, {
            once: true,
        });
    }
}

// try {
//     module.exports = Emitter;
// } catch (e) {
//     console.log(e);
// }
