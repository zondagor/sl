interface cValueI {
    cvalue: undefined | string | number | objI;
}
interface objI {
    [key: string]: undefined | cValueI;
}
declare const obj: objI;
declare function isCValueI(someInterface: objI | cValueI): someInterface is cValueI;
declare function summ(a: objI | cValueI): number;
//# sourceMappingURL=index.d.ts.map