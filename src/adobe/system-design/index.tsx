import { title } from "process"
import Accordian from "./Accordian/Accordian"

const data = [
  {
    title: "Accordian 1",
    content: "By default, all sections are collapsed and are hidden from view."
  },
  {
    title: "Accordian 2",
    content: "Clicking on a section title toggles the contents."
  },
  {
    title: "Accordian 3",
    content: "If the section is collapsed, the section will be expanded and the contents will be displayed."
  },
  {
    title: "Accordian 4",
    content: "If the section is expanded, the section will be collapsed and the contents will be hidden."
  }
]

const SystemDesign = () => {
  return (
    <div>
      <h3>System Design</h3>
      <div>
        {
          data.map((item, index) => (
            <Accordian key={index.toString()} title={item.title} content={item.content} />
          ))
        }
      </div>
    </div>
  )
}

export default SystemDesign;
