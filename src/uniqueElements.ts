/**
 * 任務：實作一個函式 `uniqueElements`，該函式應該從給定的數字陣列中找出所有的唯一元素，並回傳一個新的陣列。
 * 範例：uniqueElements([1, 2, 2, 3, 4, 4, 4]) 應該回傳 [1, 2, 3, 4]
 * @param array - 一個數字陣列
 * @returns - 回傳包含所有唯一元素的新陣列
 */
export function uniqueElements(array: number[]): number[] {
    // 請在此處寫下你的程式碼
  let res : number[] = []
  array.map((item:number) => {
    if (res.indexOf(item) < 0) {
      res.push(item)
    }
  })
  return res
}