import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchForm() {
  const [ searchQuery, setSearchQuery ] = useState("");
  return (
    <div className="p-4 border-b border-gray-200 ">
      <div className="relative">
        <input
          type="text"
          placeholder="テンプレートを検索"
          className="input input-sm w-full pl-8"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Search className="absolute left-2 top-2 h-4 w-4 text-gray-400 z-1" />
      </div>
    </div>
  )
}