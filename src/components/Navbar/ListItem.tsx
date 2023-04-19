import { ReactNode } from "react";
import { Children } from "react";

interface Props {
  heading: string;
  children: ReactNode;
}

const ListItem = ({ heading, children }: Props) => {
  return (
    <li className="flex items-center space-x-3 py-3 group cursor-pointer">
      {children}
      <a href="#" className="group flex items-center space-x-3">
        <span className="relative duration-300 ease-in-out group-hover:translate-x-2">
          {heading}
        </span>
      </a>
    </li>
  );
};

export default ListItem;
