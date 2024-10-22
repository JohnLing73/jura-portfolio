### 17
- common class
  - container
  - mx-auto
  - p-2 (1 表 0.25 rem)
  - hover:bg-grey-200

### 18
- directive
  - [@apply](https://tailwindcss.com/docs/reusing-styles#extracting-classes-with-apply): 重複使用 class
    - !! 直接用 @apply 會報錯 (components/menu.vue)
      - [Sol](https://github.com/tailwindlabs/tailwindcss/discussions/5258) : 至 root folder 創建 .vscode > settings.json
        - ``css.lint.unknownAtRules: ignore``
        - 若是 scss 則 scss.lint...
      - ctrl + P 直接到設定改