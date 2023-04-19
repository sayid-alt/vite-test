import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const List = ({ children }: Props) => {
  return <ul className="divide-y divide-slate-200">{children}</ul>;
};

export default List;
