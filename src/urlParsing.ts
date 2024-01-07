/**
 * 任務：實作一個函式 `parseUrl`，嘗試用 URL 方法，解析網址並 return 其組成部分。
 *
 * 範例：
 * parseUrl('https://www.example.com/path') 應該回傳 
 * {
 *   protocol: 'https:',
 *   hostname: 'www.example.com',
 *   path: '/path'
 * }
 *
 * @param url - 一個需要被解析的 URL
 * @returns - 回傳一個物件，包含 protocol、hostname 和 path
 */
interface UrlParts {
  protocol: string;
  hostname: string;
  path: string;
}

export function parseUrl(url: string): UrlParts {
   // 請在此處寫下你的程式碼
  let urlParser = /^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/.exec(url)
  // console.log(urlParser)
  let res: UrlParts = {
    protocol: urlParser == null ? '' : urlParser[1],
    hostname: urlParser == null ? '' : urlParser[3],
    path: urlParser == null ? '' : urlParser[5]
  }
  return res
}