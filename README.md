# dotf-install

**dotf** 用のインストールサイト - `https://dotf-install.sh`

## 概要

このプロジェクトは [dotf](https://github.com/k1-c/dotf) のワンライナーインストールを提供するCloudflare Pagesサイトです。

## 機能

- 🚀 **ワンライナーインストール**: `curl -sSL https://dotf-install.sh | bash`
- 🔄 **常に最新**: mainブランチのinstall.shを直接参照
- 🛡️ **フェイルセーフ**: Edge関数が失敗した場合のフォールバック機能
- 📱 **レスポンシブデザイン**: デスクトップ・モバイル対応
- 🌙 **ダークモード対応**: システム設定に自動追従

## アーキテクチャ

```
dotf-install/
├── functions/
│   └── install.sh.js       # Edge関数: mainブランチのinstall.shにリダイレクト
├── public/
│   ├── index.html          # ランディングページ
│   └── _redirects          # フォールバック用リダイレクト設定
├── package.json
└── README.md
```

### 動作の流れ

1. ユーザーが `https://dotf-install.sh/install.sh` にアクセス
2. Edge関数がmainブランチの `install.sh` にリダイレクト
3. 失敗時は `_redirects` のフォールバック設定が動作

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

### 3. デプロイ

```bash
npm run deploy
```

## Cloudflare Pages 設定

### ビルド設定
- **Framework preset**: None
- **Build command**: （空白）
- **Build output directory**: `public`

### 環境変数
特に設定は不要です。直接mainブランチのスクリプトにリダイレクトします。

### カスタムドメイン
1. Cloudflare Pages の設定から "Custom domains" を選択
2. `dotf-install.sh` を追加
3. DNS設定を指示に従って変更

## 使用例

### 基本的なインストール
```bash
curl -sSL https://dotf-install.sh | bash
```

### 安全な方法（推奨）
```bash
# スクリプトをダウンロード
curl -O https://dotf-install.sh/install.sh

# 内容を確認
cat install.sh

# 実行
bash install.sh
```

## 依存プロジェクト

- [k1-c/dotf](https://github.com/k1-c/dotf) - メインの dotfiles 管理ツール

## セキュリティ

- Edge関数はmainブランチのinstall.shに直接リダイレクト
- フォールバックとして同じURLにリダイレクト
- HTTPSを強制し、安全な通信を保証

## ライセンス

MIT License - 詳細は [LICENSE](LICENSE) ファイルを参照

## 作者

[k1-c](https://github.com/k1-c)
