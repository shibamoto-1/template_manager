# Templi

## サービス概要
テンプレートを作成、管理するwebアプリケーションです。</br>
カテゴリを紐づけたり、マークダウン記法を使用することもできます。
### URL
https://www.temp-li.com/

|トップページ|テンプレート作成画面|
|---|---|
|![](https://github.com/user-attachments/assets/56185ce8-2d21-4167-a811-54790f41550c)|![](https://github.com/user-attachments/assets/a2a4a75e-2c74-4a4b-974c-690a257098f6)|


## 使用技術
#### フロントエンド、バックエンド
- React
- Ruby on Rails
#### CSS
- Tailwind CSS
- daisyUI
#### その他
- デプロイ: Vercel, render
- Docker

## 機能一覧
#### ユーザー周り
- ユーザー作成、ログインログアウト
- Cookie(HttpOnly)を使用したセッション維持
- Google認証
#### テンプレート
- テンプレートの作成
- カテゴリを使ったテンプレートのフィルター機能
- マークダウン記法の適用
- ボタンを押下してテンプレートをコピー

## 工夫ポイント
1. ボタン押下時のフィードバックや、編集中か更新したかのステータス表示といった、ユーザーの使用感を意識して開発を進めました。
2. タスクの確認や優先順位決めがしやすいようgithub projectを使用しました。
3. ゲストログイン機能、Google認証を採用しました。

