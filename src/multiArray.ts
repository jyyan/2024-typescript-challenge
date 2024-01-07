/**
 * 這個函式的目的是將二維陣列的每個元素都加倍。
 * 你需要使用 JavaScript 的 Array.prototype.map 方法來實現這個功能。
 * 注意：原本的參數定義有誤，應該將參數定義為二維數字陣列。另外，函式的返回值也應該是二維數字陣列。
 * 
 * 範例:
 * 輸入: [[1, 2], [3, 4], [5, 6]]
 * 輸出: [[2, 4], [6, 8], [10, 12]]
 */

export function processMultiArray(arr: number[][]) : number[][]{
    // 在此實現函式
  return arr.map((x:number[]) => x.map((y:number) => y * 2))
}