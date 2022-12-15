import Memo from "./Memo";

export default class Math {

    @Memo
    add(x:number, y: number): number {
        return x + y;
    }
}