import { HeaderProps } from "./type";

const Header = ({ ariaControl, title, open, toggle }: HeaderProps) => {
  return (
    <button role="heading" aria-control={ariaControl} aria-expanded={open} className="accordian-header" onClick={toggle}>
      <h3>{title}</h3>
      <div className={open ? "arrow-up" : "arrow-down"}></div>
    </button>
  )
}

export default Header;
