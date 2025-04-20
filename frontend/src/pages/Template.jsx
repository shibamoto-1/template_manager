import SelectItem from "../components/SelectItem"
import Body from "../components/Body"

export default function Template() {
  return (
    <div className="w-full h-full">
      <div className="text-center">
        <h1>ホームページです！</h1>
      </div>
      <div className="flex justify-around">
        <SelectItem />
        <Body />
      </div>
    </div>
  )
}
