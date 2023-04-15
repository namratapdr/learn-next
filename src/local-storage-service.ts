import {PasteboxService} from "@component/pastebox";

export class LocalStorageService {

    private static readonly _KEY_AUTH_SUCCESS_ROUTE: string = 'ahNSJAhgb67VU';

    constructor() { }

    public static store(key: string, value: string): void {
        localStorage.setItem(key, value);
    }

    public static retrieve(key: string): string {
        const value: string | null = localStorage.getItem(key);
        return (value === null) ? '' : value;
    }

    public static hasKey(key: string): boolean {
        const value: string | null = this.retrieve(key);
        return value !== null && !PasteboxService.isEmptyString(value);
    }

    public static clear(): void {
        localStorage.clear();
    }

    public static removeItems(keys: string[]) {
        keys.forEach((key: string, index: number) => localStorage.removeItem(key));
    }

    public static storeOnAuthSuccessRoute(route: string): void {
        this.store(this._KEY_AUTH_SUCCESS_ROUTE, route);
    }
}
