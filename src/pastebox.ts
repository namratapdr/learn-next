export class PasteboxService {

    public static valueExists(value: any): boolean {
        return !(typeof value === 'undefined' || value === null);
    }

    public static isEmptyString(str: string): boolean {
        return this.valueExists(str) && (str.trim() === '' || str.trim().length === 0);
    }

    public static areStringsEqual(str1: string, str2: string, ignoreCase: boolean = false): boolean {
        if (!this.valueExists(str1) || !this.valueExists(str2)) return false;
        else if (ignoreCase) return (str1.toLowerCase() === str2.toLowerCase());
        else return (str1 === str2);
    }

    public static arrayNotEmpty(array: any[]): boolean {
        return this.valueExists(array) && array.length > 0;
    }

    public static arrayEmpty(array: any[]): boolean {
        return !this.arrayNotEmpty(array);
    }

    public static arrayLength(array: any[], length: number): boolean {
        return this.arrayNotEmpty(array) && array.length === length;
    }
}
