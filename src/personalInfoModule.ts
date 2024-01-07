/**
 * 任務：實作一個函式 `createPersonalInfo`，建立一個個人資訊的物件。
 *
 * 範例：
 * createPersonalInfo('John Doe', 30, 'john@example.com') 應該回傳 
 * {
 *   name: 'John Doe',
 *   age: 30,
 *   email: 'john@example.com'
 * }
 *
 * @param name - 一個字串，表示姓名
 * @param age - 一個數字，表示年齡
 * @param email - 一個字串，表示電子郵件地址
 * @returns - 回傳一個物件，包含 name、age 和 email 屬性
 */

export interface PersonalInfo {
    name: string;
    age: number;
    email: string;
}

export function createPersonalInfo(name: string, age: number, email: string): PersonalInfo {
        // 請在此處寫下你的程式碼
    let res: PersonalInfo = {
        name,
        age,
        email
    }
    return res
}