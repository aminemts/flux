import { EventEmitter } from "events";

const CHANGE_EVENT = "change";

class Store extends EventEmitter {
  emitChange() {
    console.log("emit change");
    this.emit(CHANGE_EVENT);
  }

  getListeners() {
    return this.listeners(CHANGE_EVENT);
  }
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

Store.dispatchToken = null;

export default Store;
