import { BundleSvgSelector } from "../BundleSvgSelector/BundleSvgSelector";
import styles from "./BundleDescription.module.scss";

interface BundleDescriptionProps {
  title: string;
  textList: string[];
  span: string;
}

const BundleDescription = ({
  title,
  textList,
  span,
}: BundleDescriptionProps) => {
  
  return (
    <section className={styles.root}>
      <h1 className={styles.title}>{title}</h1>
      <ul className={styles.textList}>
        {textList.map((text, index) => (
          <li key={index}>
            <p className={styles.text}>{text}</p>
          </li>
        ))}
      </ul>
      <BundleSvgSelector icon="appSrore" />
      <span className={styles.span}>{span}</span>
    </section>
  );
};

export { BundleDescription };
