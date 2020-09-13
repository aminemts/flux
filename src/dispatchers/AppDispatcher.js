import { Dispatcher } from "flux";

const dispatcher = new Dispatcher();

export function register(callback) {
  return dispatcher.register(callback);
}

export function dispatch(actionType, action) {
  dispatcher.dispatch(actionType, action);
}

export default dispatcher;
