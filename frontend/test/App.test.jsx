import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { AuthContext } from "../src/App";
import { MemoryRouter } from "react-router-dom";
import Home from "../src/components/pages/Home";

describe("ログイン時", () => {
  test("Homeコンポーネントが正しくレンダリングされる", () => {
    render(
      <AuthContext.Provider value={{ isSignedIn: true }}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getAllByRole("img")).toHaveLength(6);
    expect(screen.getByRole("button", { name: "サービスに戻る" })).toBeInTheDocument();
  })
});

describe("未ログイン時", () => {
  test("Homeコンポーネントが正しくレンダリングされる", () => {
    render(
      <AuthContext.Provider value={{ isSignedIn: false }}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getAllByRole("img")).toHaveLength(6);
    expect(screen.getByRole("button", { name: "サンプルを触ってみる" })).toBeInTheDocument();
  });
});
