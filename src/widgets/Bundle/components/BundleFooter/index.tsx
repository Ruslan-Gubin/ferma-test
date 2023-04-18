import { BundleSvgSelector } from '../BundleSvgSelector/BundleSvgSelector';
import styles from './BundleFooter.module.scss';

const BundleFooter = () => {
  return (
    <section className={styles.root}>
      <p className={styles.text}>Etiam ultricies nisi vel augue</p>
      <ul className={styles.linksList}>
        <li><BundleSvgSelector className={styles.link} icon='instagram'/></li>
        <li><BundleSvgSelector className={styles.link}  icon='vk'/></li>
        <li><BundleSvgSelector className={styles.link} icon='ok'/></li>
        <li><BundleSvgSelector className={styles.link} icon='facebook'/></li>
      </ul>
    </section>
  );
};

export { BundleFooter };