import { useState } from "react";

// return submenu with link, arrow icon and title
const SubMenu = ({ title, list }) => {
  const [isOpen, setIsOpen] = useState(false);
  const displaystyle = isOpen ? {} : { display: "none" };
  const liClass = isOpen ? "subMenu open" : "subMenu";
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <li className={liClass} onClick={handleClick}>
      <a>{title}</a>

      <ul style={displaystyle}>
        {list.map((item, index) => (
          <li key={index}>
            <a className="active" href={item.link}>
              <i className="icon-chevron-right"></i>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default SubMenu;
