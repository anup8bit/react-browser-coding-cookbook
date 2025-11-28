import AccordianBody from "./AccordianBody";
import Header from "./Header";
import { AccordianProps } from "./type";
import "./index.css";
import { useState } from "react";

const Accordian = ({
  title,
  content,
  key,
  id,
}: AccordianProps) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <div key={key} className="accordian">
      <Header ariaControl={id} title={title} open={open} toggle={toggle} />
      {open && <AccordianBody content={content} />}
    </div>
  )
}

export default Accordian;
