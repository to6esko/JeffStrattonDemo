export default class Util {
    static range(u, l = 0) {
        let result = [];

        for (let i = 0; i < u; i += l + 1) {
            result.push(i);
        }

        return result;
    } 
}