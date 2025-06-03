import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { AuthContext } from "../src/App";
import { BrowserRouter } from "react-router-dom";

import Home from "../src/components/pages/Home";

describe("ログイン時", () => {
  test("Homeコンポーネントが正しくレンダリングされる", () => {
    render(
      <AuthContext.Provider value={{ isSignedIn: true }}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </AuthContext.Provider>
    );
    expect(screen.getAllByRole("img")).toHaveLength(6);
    expect(screen.getByRole("button", { name: "サービスに戻る" })).toBeInTheDocument();
  });

//   test("テンプレート画面遷移後、自分のテンプレートを表示", async () => {
//     render(
//       <AuthContext.Provider value={{ isSignedIn: true }}>
//         <BrowserRouter>
//           <Home />
//           <Route
//               path="/template"
//               element={
//                 <Private>
//                   <TemplateProvider>
//                     <Template />
//                   </TemplateProvider>
//                 </Private>
//               }
//             />

//         </BrowserRouter>
//       </AuthContext.Provider>
//     );

//     const buttonElement = screen.getByRole("button", { name: "サービスに戻る" });
//     await userEvent.click(buttonElement);

//     expect(await screen.findByText("カテゴリー")).toBeInTheDocument();
//     // expect(await screen.findByText("テンプレート")).toBeInTheDocument();
//     // expect(await screen.findByText("テストの内容")).toBeInTheDocument();
//   });
});

describe("未ログイン時", () => {
  test("Homeコンポーネントが正しくレンダリングされる", () => {
    render(
      <AuthContext.Provider value={{ isSignedIn: false }}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </AuthContext.Provider>
    );
    expect(screen.getAllByRole("img")).toHaveLength(6);
    expect(screen.getByRole("button", { name: "サンプルを触ってみる" })).toBeInTheDocument();
  });
});
