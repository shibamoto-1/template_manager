import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <div className="flex justify-center gap-5 border-t border-gray-200 p-5">
      <Link to="/Terms">利用規約</Link>
      <Link to="/Privacy">プライバシーポリシー</Link>
    </div>
  )
}
