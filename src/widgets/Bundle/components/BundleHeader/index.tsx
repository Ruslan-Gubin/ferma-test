import { BundleSvgSelector } from "../BundleSvgSelector/BundleSvgSelector";
import styles from "./BundleHeader.module.scss";

const BundleHeader = () => {
  return (
    <div className={styles.root}>
      <BundleSvgSelector icon="headerPlanet" />
    </div>
  );
};

export { BundleHeader };
