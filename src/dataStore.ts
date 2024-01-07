/**
 * 任務：實作一個函式 `createDataStore`，該函式會建立一個資料儲存庫，該儲存庫有兩個方法：add 和 getAll。
 * add 方法用於添加新的項目到儲存庫，getAll 方法用於獲取儲存庫中的所有資料。
 *
 * 範例：
 * const store = createDataStore<number>();
 * store.add(1);
 * store.add(2);
 * store.getAll() 應該回傳 [1, 2]
 *
 * @returns - 回傳一個物件，該物件有 add 和 getAll 兩個方法
 */
export function createDataStore<T>() {
   // 宣告一個名為 data 的變數，其為 T 型別的陣列，並初始化為空陣列
    // T 是一個泛型參數，代表任何型別
    // let data
    let data :T[] = []

    // 定義一個名為 add 的函式，該函式接收一個 T 型別的參數 item，並將 item 添加到 data 陣列中
    // 這裡的 T 也是泛型，所以 item 可以是任何型別
    // function add(){}
    const add = (item :T):void => {
        data.push(item)
    }

    // 定義一個名為 getAll 的函式，該函式回傳 data 陣列的所有元素
    // 回傳的陣列中的元素型別也是 T，所以可以是任何型別
    //function getAll()
    const getAll = () :T[] => {
        return data
    }

    return { add, getAll };
}