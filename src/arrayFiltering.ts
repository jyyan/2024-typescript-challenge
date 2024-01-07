/**
 * 任務：實作一個函式 `filterEvens`，過濾出數字陣列中的偶數。
 *
 * 範例：
 * filterEvens([1, 2, 3, 4]) 應該回傳 [2, 4]
 * filterEvens([5, 6, 7, 8]) 應該回傳 [6, 8]
 *
 * @param numbers - 一個需要被過濾的數字陣列
 * @returns - 回傳只包含偶數的數字陣列
 */
export function filterEvens(numbers: number[]): number[] {
    // 請在此處寫下你的程式碼
  return numbers.filter((item: number) => {
    return item % 2 == 0
  })
}