import Styles from "./connected-popup.module.css";

const ConnectedPopup = (props) => {
  return (
    <div className={Styles.popup}>
      <div className={Styles.popup__content}>
        <h3>Connected!!!!</h3>
      </div>
    </div>
  );
};

export default ConnectedPopup;
