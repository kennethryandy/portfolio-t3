import type { ReactNode, FC } from "react";

interface LayouExpProps {
  children: ReactNode;
}

const LayouExp: FC<LayouExpProps> = ({ children }) => {
  return <main className="container pt-4">{children}</main>;
};

export default LayouExp;
