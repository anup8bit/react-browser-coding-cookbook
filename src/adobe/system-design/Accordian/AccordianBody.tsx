import { AccordianBodyProps } from "./type";

const AccordianBody = ({ content }: AccordianBodyProps) => {
  return (
    <div className="accordian-content">
      {content}
    </div>
  )
}

export default AccordianBody;
