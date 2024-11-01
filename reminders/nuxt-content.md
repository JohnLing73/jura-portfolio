## [Doc](https://content.nuxt.com/get-started/installation) 
 - 直接使用文件 (.md, .yml, .json 來當 html 模板; 樣式直接由檔案格式決定)
 - Usage
    1. 建立 content folder ，需對應 pages folder
    2. pages cmp 想要渲染文件的部分使用 ContentDoc cmp

 - Markdown
   - [Prose Components](https://content.nuxt.com/usage/markdown#prose-components): Prose 指的是由 markdown 生成的 HTML tag (由 Vue cmp 生成)
     - Tailwind 
       - Tailwind會 reset 所有的 style
       - 下載 [tailwind/typography plugin](https://github.com/tailwindlabs/tailwindcss-typography) 來自動設定 prose cmp 的樣式
       - [明定哪個地方要設定 prose 樣式](https://github.com/tailwindlabs/tailwindcss-typography) (在 ContentDoc 加上 prose class)
       - dark:prose-invert dark mode 反轉顏色
       - 可針對單一 tag 設定樣式: [Element modifier](https://github.com/tailwindlabs/tailwindcss-typography)
   - [Front-matter](https://content.nuxt.com/usage/markdown#front-matter): Front-matter 是將 CMS 產生的 markdown 取得 meta-data，在 Nuxt Content 中 front-matter 使用 YAML 語法
     - 使用:
        1. 寫在 md 最上方，開始與結束使用 --- ，中間填寫 YAML
        2. 設置 meta data [useContentHead()](https://content.nuxt.com/composables/use-content-head)
     - [YAML](https://zh.wikipedia.org/zh-tw/YAML): 可讀性高，用來表達資料序列化的格式。
       - key: value
       - object 就多層
       - array 前面多 '-'
     - [CMS](https://www.oracle.com/tw/content-management/what-is-cms/): eg: Wordpress 為一種 CMS db
   - Props
     - path: 指定使用該檔案
   - [queryContent()](https://content.nuxt.com/composables/query-content): 搜尋 /content 內容
     - 預設 rootPath('/content')
       - eg: queryContent('/blog'): 抓取 /content/blog 下的
     - query 語法是使用 MongoDB query Syntax
     - **使用注意需要 wrapped by useAsyncData()**
     - find()
     - only(): 僅取回 specific fields **在find() 前使用**
     - where()
       - $ne