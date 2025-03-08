import thankIcon from "./../../assets/images/icon-thank-you.svg";
import styles from "./Step5.module.css";

const Step5 = () => {
  return (
    <div className={styles.container}>
      <img src={thankIcon} alt="" aria-hidden="true" />

      <h1 className={styles.title}>Thank you!</h1>
      <p className={styles.description}>
        Thanks for confirming your subscription! We hope you have fun using our platform.
        If you ever need support, please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  );
};

export default Step5;
