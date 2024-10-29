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

### 23
- [dark mode](https://tailwindcss.com/docs/dark-mode)
  - 預設會以 system 為主(**⚠️是電腦的系統顏色**(設定 > 色彩 > 選擇顏色)，**不是 chorme 的顏色**)