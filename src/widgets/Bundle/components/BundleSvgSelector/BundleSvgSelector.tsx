import {  bundleConst } from "../../constants/bundleConst";
import { SvgSelectorProps } from "../../types/SvgSelectorProps";

const BundleSvgSelector = ({ icon, className }: SvgSelectorProps) => {

  return (
    <img src={bundleConst.icons[icon]} alt="Icon" className={className} />
  )
};

export { BundleSvgSelector };
