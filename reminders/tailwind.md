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
        - `css.lint.unknownAtRules: ignore`
        - 若是 scss 則 scss.lint...
      - ctrl + P 直接到設定改

### 23

- [dark mode](https://tailwindcss.com/docs/dark-mode)
  - 預設會以 system 為主(**⚠️ 是電腦的系統顏色**(設定 > 色彩 > 選擇顏色)，**不是 chorme 的顏色**)

### 44

- [group modifier](https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state) 根據 parent el 的狀態想幫 chlid el 加入 class 時使用

### 45

- [RWD](https://tailwindcss.com/docs/responsive-design#targeting-a-breakpoint-range)
  - 使用與 Bootstrap 相同的概念(mobile-first breakpoint system)，預設不加任何 breakpoint 的 utility class 就會應用到所有螢幕大小，加 breakpoint 則會應用到包含該 breakpoint 以上的大小
    - 因為 mobile-first 所以一般都先以設定小螢幕開始
    - utility class (eg: .flex, .block)
  - 僅特定 breakpoint 的區間會套用 class: {breakpoint}:max-{next_breakpoint}:{utility}
  - 可自訂 breakpoint 或 直接寫在 inline
  - {utility}-base: 預設 utility (textbase: 1rem)
