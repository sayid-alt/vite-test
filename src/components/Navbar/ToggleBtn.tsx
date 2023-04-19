import { useState } from "react";

interface Props {
  leftButton: string;
  rightButton: string;
}

const ToggleBtn = ({ leftButton, rightButton }: Props) => {
  const [rightActive, setRightActive] = useState(false);
  return (
    <div
      onClick={() => setRightActive(!rightActive)}
      className="flex items-center bg-gray-200 p-1 rounded-full cursor-pointer"
    >
      <p
        className={
          rightActive
            ? "p-2 rounded-full text-sm"
            : "p-2 bg-black text-white rounded-full text-sm"
        }
      >
        {leftButton}
      </p>
      <p
        className={
          rightActive
            ? "p-2 bg-black text-white rounded-full text-sm"
            : "p-2 rounded-full text-sm"
        }
      >
        {rightButton}
      </p>
    </div>
  );
};

export default ToggleBtn;
