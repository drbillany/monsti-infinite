import Styles from "./change-network-popup.module.css";

const ChangeNetworkPopup = (props) => {
  return (
    <div className={Styles.popup}>
      <div className={Styles.popup__content}>
        <h3>Wrong Network</h3>
        <p>Please Switch the Network to Binance Smart Chain</p>
      </div>
    </div>
  );
};

export default ChangeNetworkPopup;
