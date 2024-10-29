## [Doc](https://content.nuxt.com/get-started/installation) 
 - 直接使用文件 (.md, .yml, .json 來當 html 模板; 樣式直接由檔案格式決定)
 - Usage
    1. 建立 content folder ，需對應 pages folder
    2. pages cmp 想要渲染文件的部分使用 ContentDoc cmp

 - Markdown
   - [Prose Components](https://content.nuxt.com/usage/markdown#prose-components): Prose 指的是由 markdown 生成的 HTML tag (由 Vue cmp 生成)
     - Tailwind 會 reset 所有的 style
     - 下載 [tailwind/typography plugin](https://github.com/tailwindlabs/tailwindcss-typography) 來自動設定 prose cmp 的樣式
     - [明定哪個地方要設定 prose 樣式](https://github.com/tailwindlabs/tailwindcss-typography) (在 ContentDoc 加上 prose class)
     - dark:prose-invert dark mode 反轉顏色