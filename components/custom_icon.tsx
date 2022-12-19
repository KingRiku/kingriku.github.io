import classNames from "classnames";
import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";

type icon = {
  name: string,
  id?: string,
  className?: string,
  style?: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
}


const Icon: FC<icon> = ({ name, id, className, style, ...props }) => {
  const iconClass = classNames({
    [`${className}`]: className,
    icon: true,
    ni: true,
    [`ni-${name}`]: true,
  });
  return <em className={iconClass} id={id} style={style} {...props}></em>;
};
export default Icon;
