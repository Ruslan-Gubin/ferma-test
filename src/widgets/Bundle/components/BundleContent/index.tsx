import { bundleConst } from "../../constants/bundleConst";
import { BundleDescription } from "../BundleDescription";
import { BundleIMobile } from "../BundleIMobile/BundleIMobile";
import "./BundleContent.module.scss";
import styles from "./BundleContent.module.scss";

const BundleContent = () => {

  
  return (
    <section className={styles.root}>
      <BundleDescription
        title={bundleConst.title}
        textList={bundleConst.textList}
        span={bundleConst.span}
      />

      <BundleIMobile />
    </section>
  );
};

export { BundleContent };
