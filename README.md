# Templi

## サービス概要
テンプレートを作成、管理するwebアプリケーションです。</br>
カテゴリを紐づけたり、マークダウン記法を使用することもできます。
### URL
https://template-manager-eta.vercel.app/ </br>
（独自ドメインを予定しています。）

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
#### デプロイ
- Vercel
- render

## 機能一覧
#### ユーザー周り
- ユーザー作成、ログインログアウト
- Cookieを使用したセッション維持
#### テンプレート
- テンプレートの作成
- カテゴリを使ったテンプレートのフィルター機能
- マークダウン記法の適用
- ボタンを押下してテンプレートをコピー

## 環境構築
- フロントにReactを使用するのでAPIモードでRails new
- Viteを使用してReact開発環境を作成
- CSSはTailwind CSSとDaisy UIを使用
- ページデザイン案はMotiffを使用して作成
