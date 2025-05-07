# Templi

## サービス概要
テンプレートを作成、管理するwebアプリケーションです。</br>
カテゴリを紐づけたり、マークダウン記法を使用することもできます。
### URL
https://template-manager-eta.vercel.app/ </br>
（独自ドメインを予定しています。）

|トップページ|テンプレート作成画面|
|---|---|
|![](https://github.com/user-attachments/assets/bb2e69b5-3651-4a63-8da0-ee60e2a48802)|![](https://github.com/user-attachments/assets/7cb9f646-336f-4126-b9ad-f78a51bca1e3)|


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
