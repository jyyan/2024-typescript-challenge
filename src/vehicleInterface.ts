/**
 * 車輛介面已被移除，你需要自己定義一個新的車輛介面。
 * 車輛介面應該包含 brand、model 和 year 三個屬性，分別為字串型別和數字型別。
 */

/**
 * 獲取車輛的詳細資訊
 * @param vehicle - 車輛物件，應該包含 brand、model 和 year 三個屬性
 * 
 * 範例:
 * 輸入: { brand: 'Toyota', model: 'Corolla', year: 2020 }
 * 輸出: 'Toyota Corolla (2020)'
 */
interface VehicleInterface {
  brand: string,
  model: string,
  year: number
}

export function vehicleInfo(vehicle: VehicleInterface): string {
    // 在此實現函式
  return `${vehicle.brand} ${vehicle.model} (${vehicle.year})`
}