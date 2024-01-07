/**
 * 任務：實作一個函式 `sortArray`，將數字陣列由小到大排序。
 *
 * 範例：
 * sortArray([3, 1, 4]) 應該回傳 [1, 3, 4]
 *
 * @param numbers - 一個數字陣列
 * @returns - 回傳一個數字陣列，表示排序後的結果
 */
export function sortArray(numbers: number[]): number[] {
    // 請在此處寫下你的程式碼
  return numbers.sort((a:number, b:number) => {
    return a < b ? -1 : 1
  })
}

/**
 * 任務：實作一個函式 `filterArray`，過濾數字陣列中符合條件的元素。
 *
 * 範例：
 * filterArray([1, 2, 3, 4], num => num % 2 === 0) 應該回傳 [2, 4]
 *
 * @param numbers - 一個數字陣列
 * @param predicate - 一個函式，用來判斷元素是否符合條件
 * @returns - 回傳一個數字陣列，表示過濾後的結果
 */
export function filterArray(numbers: number[], predicate: (num: number) => boolean): number[] {
    // 請在此處寫下你的程式碼
  return numbers.filter(predicate)
}

/**
 * 任務：實作一個函式 `transformArray`，將數字陣列中的每個元素進行轉換。
 *
 * 範例：
 * transformArray([1, 2, 3], num => num * 2) 應該回傳 [2, 4, 6]
 *
 * @param numbers - 一個數字陣列
 * @param transform - 一個函式，用來轉換元素
 * @returns - 回傳一個數字陣列，表示轉換後的結果
 */
export function transformArray(numbers: number[], transform: (num: number) => number): number[] {
    // 請在此處寫下你的程式碼
  return numbers.map(transform)
}
