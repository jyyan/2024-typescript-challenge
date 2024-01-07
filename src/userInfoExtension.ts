interface BasicUserInfo {
    name: string;
    age: number;
}

interface AddressInfo {
    street: string;
    city: string;
}

/**
 * 任務：請實作一個 interface 或 type，藉此來建立 `FullUserInfo`，將 `BasicUserInfo` 和 `AddressInfo` 兩個介面的資訊合併。
 *
 * 範例：
 * FullUserInfo 應該包含以下屬性：
 * name: string;
 * age: number;
 * street: string;
 * city: string;
 */

// 請在此處寫下你的程式碼
interface FullUserInfo {
    name: string;
    age: number;
    street: string;
    city: string;
}

/**
 * 任務：實作一個函式 `createFullUserInfo`，將使用者的基本資訊和地址資訊合併成一個物件。
 *
 * 範例：
 * createFullUserInfo({ name: 'John', age: 30, street: 'Main St', city: 'Metropolis' }) 
 * 應該回傳 { name: 'John', age: 30, street: 'Main St', city: 'Metropolis' }
 *
 * @param user - 一個物件，包含使用者的基本資訊和地址資訊
 * @returns - 回傳一個物件，表示合併後的使用者資訊
 */
export function createFullUserInfo(user: FullUserInfo): FullUserInfo {
    // 請在此處寫下你的程式碼
    return user
}