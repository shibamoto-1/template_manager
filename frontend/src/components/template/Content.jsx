import ContentHeader from "../ContentHeader";
import Body2 from "../Body2";
import Preview from "../Preview";


export default function Content() {
  return(
    <div>
      <ContentHeader />
      <div className="flex flex-1">
        <Body2 />
        <Preview />
      </div>
    </div>
  )

}