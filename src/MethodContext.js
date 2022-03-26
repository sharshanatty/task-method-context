import { EventEmitter } from './EventEmitter';

export const obj = {
    count: 0,
    incrementer() {
        this.count++;
    },
    createClickHandler() {
        if (this.clickHandler == null)
            this.clickHandler = this.incrementer.bind(this);
    },
    subscribe() {
        this.createClickHandler();
        EventEmitter.on('click', this.clickHandler);
    },
    unsubscribe() {
        this.createClickHandler();
        EventEmitter.off('click', this.clickHandler);
    },
};

export const obj1 = {
    first(...args) {
        this.second(...args.reverse());
    },
    second() {
        // здесь ничего писать не нужно
    },
};
