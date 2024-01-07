/**
 * 反轉輸入的字串
 * @param str - 要反轉的字串
 * 
 * 這個函式需要將輸入的字串反轉。你可以使用 JavaScript 的 String 和 Array 方法來完成這個任務。
 * 首先，使用 split 方法將字串轉換為字元陣列。然後，使用 reverse 方法將陣列反轉。最後，使用 join 方法將反轉後的陣列轉換回字串。
 */
export function reverseString(str: string): string {
    // 在此實現函式
  return str.split('').reverse().join('')
}