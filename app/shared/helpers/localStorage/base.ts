import encoderDecoder from "@shared/helpers/encoderDecoder";
import {GetItemFunction, RemoveItemFunction, SetItemFunction} from "@shared/helpers/localStorage/model";

const isBrowser = typeof window !== "undefined";

class LocalStorageManager {
  setItem: SetItemFunction = (key, value) => {
    if (isBrowser) localStorage.setItem(key, encoderDecoder.encode(JSON.stringify(value)));
  }

  getItem: GetItemFunction = (key) => {
    if (!isBrowser) return null;
    const item = localStorage.getItem(key);
    return item ? JSON.parse(encoderDecoder.decode(item)) : null;
  }

  removeItem: RemoveItemFunction = (key) => {
    if (isBrowser) localStorage.removeItem(key);
  }
}

export default LocalStorageManager;