export default class LocalStorage {
  static getSet(storeKey: string): Set<string> | null {
    const existing = localStorage.getItem(storeKey);
    return existing ? new Set(JSON.parse(existing)) : null;
  }
  static writeSet(storeKey: string, set: Set<string>): void {
    const array = Array.from(set.values());
    localStorage.setItem(storeKey, JSON.stringify(array));
  }
}
