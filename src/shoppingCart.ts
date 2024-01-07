interface Product {
    id: string;
    name: string;
    price: number;
}

/**
 * 任務：實作一個函式 `createShoppingCart`，該函式應該能夠創建一個購物車。
 * 範例：createShoppingCart() 應該回傳一個購物車物件，該物件應該有 addItem、getTotalPrice、getItemCount 和 clear 等方法
 * @returns - 回傳一個購物車物件
 */
export function createShoppingCart() {
    let items: Product[] = [];

    function addItem(item: Product) {
        items.push(item);
    }
    /**
     * getTotalPrice 方法：計算購物車中所有商品的總價
     * @returns - 回傳購物車中所有商品的總價
     * 範例：getTotalPrice() 應該回傳 300，假設購物車中有兩個商品，價格分別為 100 和 200
     */
    function getTotalPrice(): number {
        // 請在此處寫下你的程式碼
        let totalPrice:number = 0
        items.forEach((item:Product) => {
            totalPrice += item.price
        })
        return totalPrice
    }

    function getItemCount() {
        return items.length;
    }

    function clear() {
        items = [];
    }

    return {
        addItem,
        getTotalPrice,
        getItemCount,
        clear
    };
}