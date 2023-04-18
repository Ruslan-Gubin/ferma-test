import { BundleSvgSelector } from "../BundleSvgSelector/BundleSvgSelector";
import styles from "./BundleIMobile.module.scss";

const BundleIMobile = () => {
  return (
    <section className={styles.root}>
      <BundleSvgSelector icon="birch" className={styles.birchSM} />
      <BundleSvgSelector icon="greenCircle" className={styles.greenCircleSM} />
      <BundleSvgSelector icon="pinCircle" className={styles.pinCircleSM} />

      <BundleSvgSelector icon="mobile" className={styles.mobile} />
      <div className={styles.centerMobile}>
        <BundleSvgSelector icon="pinCircle" className={styles.pinCircleB} />
        <BundleSvgSelector icon="birchB" className={styles.birchB} />
        <BundleSvgSelector icon="greenCircle" className={styles.greenCircleB} />
      </div>
    </section>
  );
};

export { BundleIMobile };
