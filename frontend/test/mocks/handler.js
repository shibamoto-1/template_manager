import { http, HttpResponse } from 'msw';

const getTemplates = {
  templates: [
    {id: 1,
    title: 'テンプレート',
    body: 'テストの内容',
    category_id: 1}
  ],
  categories: [
    {id: 1,
    name: "カテゴリ",
    user_id: 1
}]
}

export const handlers = [
  http.get("http://localhost:3000/templates", () => {
    if(getTemplates){
      return HttpResponse.json(getTemplates, { status: 200 })
    } else {
      return HttpResponse.json({ message: "Not Found" }, { status: 404 })
    }}),
  
  // ログイン用のエンドポイント
  http.post("*/api/v1/auth/sign_in", async ({ request }) => {
    const body = await request.json();
    
    // テスト用の認証情報
    if (body.email === "test@example.com" && body.password === "password123") {
      return HttpResponse.json(
        { 
          data: { 
            id: 1, 
            email: "test@example.com" 
          } 
        }, 
        { 
          status: 200,
          headers: {
            'access-token': 'test-access-token',
            'client': 'test-client',
            'uid': 'test@example.com'
          }
        }
      );
    } else {
      return HttpResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    };
  }),
];
