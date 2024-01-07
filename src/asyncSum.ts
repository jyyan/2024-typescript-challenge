/**
 * 任務：實作一個函式 `asyncSum`，該函式應該能夠計算陣列中所有數字的總和。
 * 範例：asyncSum([1, 2, 3, 4, 5]) 應該回傳 15
 * @param numbers - 一個數字陣列
 * @returns - 回傳一個 Promise，該 Promise resolve 的值應該是陣列中所有數字的總和
 */


export function asyncSum(numbers: number[]): Promise<number> {
    return new Promise((resolve, reject) => {
        try {
            // 請在此處寫下你的程式碼
            let res = 0
            numbers.forEach((item) => {
                res += item
            })
            resolve(res)
        } catch (error) {
            reject(error);
        }
    });
}


// 備註：題目中即使累加操作本身是同步的，也可以使用 Promise 來模擬非同步的情況。這可以讓學生練習如何使用 Promise 來處理非同步操作