# Portfolio Website

ReactとSplideスライダーを使って構築されたポートフォリオサイトです。  
「about」「works」などのセクションをフェードインで表示し、ユーザーが直感的に操作できるインターフェースを目指しています。

---

## Topページ（Homeコンポーネント）の主な機能

- 画面上部に全画面スライダー（Splide）を使用
- タイトルアニメーション（`"portfolio site"` を1文字ずつアニメーション表示）
- フェードインアニメーション（`FadeInSection`）によるセクション表示
- About・Works（最大6件まで）のダイジェスト表示
- 「more」ボタンで詳細ページへ遷移

---

## 使用データ

- `workList`: `src/data/workList.js`  
  → 各作品のタイトル、タグ、画像名、要約などを保持

- `aboutList`: `src/data/aboutList.js`  
  → Aboutセクションの各項目のタイトル、リンク、要約など

---

## 使用技術

- React（Hooksベース）
- React Router（`Link` を使用したルーティング）
- @splidejs/react-splide（スライダーライブラリ）
- カスタムフェードインアニメーション（`FadeInSection`コンポーネント）

---

## 起動方法

```bash
git clone https://github.com/mashita-aya/portfolio.git
cd my_portfolio
npm install
npm start
```

---

## GitHub Pagesの更新

```bash
npm run build 
npm run deploy
```

---

## ディレクトリ構成
```bash
src/
├── App.js                         # ルーティング定義と共通レイアウト
├── images/
├── components/
│   └── FadeInSection.js           # スクロールに応じて表示されるアニメーション
│   └── Footer.js                  # サイト全体のフッターコンポーネント
│   └── Header.js                  # サイト全体のヘッダーコンポーネント
│   └── ScrollToTop.js             # ページ遷移時にスクロール位置をトップへ戻す処理
├── pages/
│   └── Home.js                    # トップページ
│   └── About/            
│       └── index.js               # Aboutページの全体構成を担うコンポーネント
│       └── AboutDigestSection.js  # Aboutの要約用コンポーネント
│   └── Works              
│       └── index.js               # worksページの全体構成を担うコンポーネント
│       └── WorksDigestSection.js  # worksの要約用コンポーネント
│       └── WorkDetail.js          # worksの各詳細説明用コンポーネント
├── data/
│   ├── workList.js                # 作品情報
│   └── aboutList.js               # About情報
└── index.css                      # cssファイル
```