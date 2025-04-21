### backend
`cd backend/`
```
bundle install
rails db:migrate
```

### frontend
`cd frontend/`
```
npm install
npm run dev
```

### 注意点
- emailは「xxx@xxx.xxx」の形式で作成してください
- アカウント作成後ページが遷移しない状態になっています。作成後サインインページに移動しそこでログインするとHome画面に移動できます。
