import { beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { SignIn } from "../src/components/pages/SignIn";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { SignUp } from "../src/components/pages/SignUp";
import { AuthContext } from "../src/App";
import TemplateProvider from "../src/components/context/TemplateContext";
import Template from "../src/components/template/Template";
import Cookies from "js-cookie";

// js-cookieのモック
vi.mock("js-cookie", () => ({
  default: {
    set: vi.fn(),
    remove: vi.fn(),
  },
}));

const mockedNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const mod = await vi.importActual("react-router-dom");
  return {
    ...mod,
    useNavigate: () => mockedNavigate
  }
}); 

describe("SignInコンポーネント", () => {
  beforeEach(() => {
    // 各テスト前にCookieのモックをリセット
    vi.clearAllMocks();
    
    render(
      <AuthContext.Provider value={{ setIsSignedIn: vi.fn() }}>
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      </AuthContext.Provider>
    );
  });

  test("コンポーネントが正しくレンダリングされる", () => {
    expect(screen.getByRole("button", { name: "ログイン" })).toBeInTheDocument();
  });
});

describe("入力フォーム関連のテスト", () => {
  let user;

  beforeEach(() => {    
    user = userEvent.setup();
    render(
      <AuthContext.Provider value={{ setIsSignedIn: vi.fn() }}>
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      </AuthContext.Provider>
    );
  });

  test("Email: 未入力", async () => {
    const inputElement = screen.getByPlaceholderText("Email");
    await user.type(inputElement, "aa");
    await user.clear(inputElement);
    expect(await screen.findByText("メールアドレスは必須です。")).toBeInTheDocument();
  });

  test("Email: 形式違い", async () => {
    const inputElement = screen.getByPlaceholderText("Email");
    await user.type(inputElement, "aa@a.a");
    expect(await screen.findByText("メールアドレスの形式が違います。")).toBeInTheDocument();
  });

  test("Password: 未入力", async () => {
    const inputElement = screen.getByPlaceholderText("Password");
    await user.type(inputElement, "aa");
    await user.clear(inputElement);
    expect(await screen.findByText("パスワードは必須です。")).toBeInTheDocument();
  });

  test("Password: 6文字以上", async () => {
    const inputElement = screen.getByPlaceholderText("Password");
    await user.type(inputElement, "aaaa");
    expect(await screen.findByText("パスワードは6文字以上で入力してください。")).toBeInTheDocument();
  });
});

describe("ログイン処理", () => {
  let user;
  let setIsSignedIn;

  beforeEach(() => {
    user = userEvent.setup();
    setIsSignedIn = vi.fn();

    render(
      <AuthContext.Provider value={{ setIsSignedIn }}>
        <MemoryRouter initialEntries={["/signin"]}>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route
              path="/template"
              element={
                <TemplateProvider>
                  <Template />
                </TemplateProvider>
              }
            />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
  });

  test("正しい認証情報でログイン成功", async () => {
    const inputEmail = screen.getByPlaceholderText("Email");
    const inputPassword = screen.getByPlaceholderText("Password");
    const submitButton = screen.getByRole("button", { name: "ログイン" });

    await user.type(inputEmail, "test@example.com");
    await user.type(inputPassword, "password123");
    await user.click(submitButton);

    await waitFor(() => {
      expect(Cookies.set).toHaveBeenCalledWith("_access_token", 'test-access-token');
      expect(Cookies.set).toHaveBeenCalledWith("_client", 'test-client');
      expect(Cookies.set).toHaveBeenCalledWith("_uid", 'test@example.com');
      expect(Cookies.remove).toHaveBeenCalledWith("_is_guest");
      
      expect(setIsSignedIn).toHaveBeenCalledWith(true);
      expect(mockedNavigate).toHaveBeenCalled("/template");
    });
  });

  test("不正な認証情報でログイン失敗", async () => {
    const inputEmail = screen.getByPlaceholderText("Email");
    const inputPassword = screen.getByPlaceholderText("Password");
    const submitButton = screen.getByRole("button", { name: "ログイン" });

    await user.type(inputEmail, "wrong@example.com");
    await user.type(inputPassword, "wrongpass");
    await user.click(submitButton);

    expect(await screen.findByText("メールアドレスまたはパスワードが間違っています。")).toBeInTheDocument();
  });
});

test("ユーザー作成リンクを押下して新規登録画面に遷移", async () => {
  const user = userEvent.setup();
  render(
    <AuthContext.Provider value={{ setIsSignedIn: vi.fn() }}>
      <MemoryRouter initialEntries={["/signin"]}>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  const link = screen.getByRole("link", { name: "ユーザー作成へ" });
  await user.click(link);
  expect(await screen.findByText("ユーザー作成")).toBeInTheDocument();
});

