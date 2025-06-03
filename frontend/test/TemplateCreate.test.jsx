import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Create from "../src/components/template/Create";
import { TemplateAPIContext, TemplateContext } from "../src/components/context/TemplateContext";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../src/App";

const mockAuth = {
  isSignedIn: true,
  setIsSignedIn: vi.fn()
};
const mockCategories = ["カテゴリ１","カテゴリ２"];
const mockHandleCreateTemplate = vi.fn();

describe(Create, () => {
  test("初期レンダリングが正しく行われる", () => {
    render(
      <AuthContext.Provider value={mockAuth}>
      <MemoryRouter>
      <TemplateContext value={{ categories: mockCategories}}>
        <TemplateAPIContext value={{ handleCreateTemplate: mockHandleCreateTemplate}}>
          <Create />
        </TemplateAPIContext>
      </TemplateContext>
      </MemoryRouter>
      </AuthContext.Provider>
    );      
    expect(screen.getByText("新規テンプレート作成")).toBeInTheDocument();
  });

  test("タイトル・内容・カテゴリのinputとラベルが表示される", () => {
    render(
      <AuthContext.Provider value={mockAuth}>
      <MemoryRouter>
      <TemplateContext value={{ categories: mockCategories }}>
        <TemplateAPIContext value={{ handleCreateTemplate: mockHandleCreateTemplate }}>
          <Create />
        </TemplateAPIContext>
      </TemplateContext>
      </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByLabelText("テンプレート名")).toBeInTheDocument();
    expect(screen.getByLabelText("テンプレート内容")).toBeInTheDocument();
    expect(screen.getByLabelText("カテゴリー")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("テンプレート名を入力")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("カテゴリ名を入力")).toBeInTheDocument();
  });
});
