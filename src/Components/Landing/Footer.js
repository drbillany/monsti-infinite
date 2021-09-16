import React from "react";
import L from "./Landing.module.css";

import discordIcon from "../../images/discord.svg";
import telegramIcon from "../../images/telegram.svg";
import twitterIcon from "../../images/twitter.svg";
import facebookIcon from "../../images/facebook.svg";
import youtubeIcon from "../../images/youtube.svg";
export default function Footer(props) {
  return (
    <div>
      <footer className={L.cloudy} style={{backgroundColor: props.presale==="true"? "#1e629b" : "#410c0d"}}>
        <div className={L.sub}>
          <div className={L.logoSocials}>
            <img
              className={L.footerLogo}
              src="https://monstainfinite.com/wp-content/uploads/2021/08/monsta-logo.png"
              alt=""
            />
            <div className={L.footerSocialsHolder}>
              <a
                href='https://t.me/monstainfinite"'
                className={`${L.footerSocialsHolder__icon} `}
              >
                {" "}
                <img src={telegramIcon} alt="telegram" />{" "}
              </a>{" "}
              <a
                href="https://discord.gg/monsta"
                className={L.footerSocialsHolder__icon}
              >
                {" "}
                <img src={discordIcon} alt="discord" />{" "}
              </a>
              <a
                href="https://twitter.com/monsta_infinite"
                className={L.footerSocialsHolder__icon}
              >
                {" "}
                <img src={twitterIcon} alt="twitter" />{" "}
              </a>{" "}
              <a
                href="https://www.facebook.com/monstainfinite"
                className={L.footerSocialsHolder__icon}
              >
                {" "}
                <img src={facebookIcon} alt="facebook" />{" "}
              </a>
              <a
                href="https://bit.ly/monstainfiniteyoutube"
                className={L.footerSocialsHolder__icon}
              >
                {" "}
                <img src={youtubeIcon} alt="youtube" />{" "}
              </a>
            </div>
          </div>
          <div className={L.rightFooter}>
            <div className={L.footerLinks}>
              <a className={L.footerLink}>Home</a>
              <a
                className={L.footerLink}
                href="https://monstainfinite.com/roadmap/"
              >
                Roadmap
              </a>
              <a
                className={L.footerLink}
                href="https://monstainfinite.com/moni/"
              >
                MONI
              </a>
            </div>
            <div className={L.subscribe}>
              <h1 className={L.newsLetter}>SUBSCRIBE TO OUR NEWSLETTER</h1>
              <div className={L.sub2us}>
                <input
                  className={L.textInput}
                  type="text"
                  name=""
                  id=""
                  placeholder="Your Email Address"
                />
                <input className={L.button} type="button" value="subscribe" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
