import { BundleContent, BundleFooter, BundleHeader } from "./components";
import styles from './styles/Bundle.module.scss';

const Bundle = () => {

  return (
    <div className={styles.root}>
      <BundleHeader />
      <BundleContent />
      <BundleFooter />
      </div>
  );
};

export { Bundle };