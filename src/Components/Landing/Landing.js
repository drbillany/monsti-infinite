import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import L from "./Landing.module.css";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TelegramIcon from "@material-ui/icons/Telegram";
import TextsmsIcon from "@material-ui/icons/Textsms";
import playtoGreen from "../../images/DozaMonsta-Banner-Green.png";
import playtoRed from "../../images/DozaMonsta-Banner-Red.png";
import playtoBanner from "../../images/DozaMonsta-Banner.png";

export default function Landing() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className={L.page}>
        <Nav />
        <section className={L.preview}>
          <div className={L.imgHolder}></div>
          <img
            className={L.previewImage}
            src='https://monstainfinite.com/wp-content/uploads/2021/08/monsta-logo.png'
            srcset='https://monstainfinite.com/wp-content/uploads/2021/08/monsta-logo.png 857w, https://monstainfinite.com/wp-content/uploads/2021/08/monsta-logo-300x140.png 300w, https://monstainfinite.com/wp-content/uploads/2021/08/monsta-logo-768x358.png 768w'
            alt='MonstaInfinite'
          />
          <div className={`${L.previewImage} ${L.previewImagePlayto}`}>
            <img src={playtoGreen} alt='playtogreen' />
            <img src={playtoRed} alt='playtogreen' />
            <img src={playtoBanner} alt='playtogreen' />
          </div>
        </section>
        <section className={L.parallax}>
          <img
            style={{
              transform: `translate(-50%, -${offsetY / 80}%  )`,
              width: `calc(10% + ${offsetY}px)`,
            }}
            src='https://monstainfinite.com/wp-content/uploads/2021/08/monsta-explosion-1024x1005.png'
            alt=''
          />
          <img
            style={{
              transform: `translate(-50%, -${offsetY / 50}%  )`,
              width: `calc(100% )`,
            }}
            src='https://monstainfinite.com/wp-content/uploads/2021/08/monsta-flare-flip-724x1024.png'
            alt=''
          />
          <img
            style={{
              transform: `translate(-50%, -${offsetY / 50}%  )`,
              width: `calc(10% + ${offsetY * 0.5}px)`,
            }}
            src='https://monstainfinite.com/wp-content/uploads/2021/08/castle-blur-mega-crop-min.png'
            alt=''
          />
        </section>

        <section className={L.potions}>
          <div className={L.textContainer}>
            <p className={L.text1}>
              <span style={{ fontWeight: 400 }}>
                <strong>MONSTA</strong> is an enigmatic and peculiar species
                living in SHANI, and they are from the age before dinosaurs. But
                now they have a catastrophic threat, <strong>JILAKA. </strong>
              </span>
              <span>
                They may be eradicated if the situation remains the same. So
                they wake their earliest ancestors, the Inception Monsta, from
                dormancy.
              </span>
            </p>
            <p className={L.text2}>
              INCEPTION MONSTA used their unique biological network to contact
              humans through blockchain technology. They seek our leadership and
              guidance to bring victory to their homeland. As a reward, they
              will grant us their most valuable resource in the planet, Stamen
              Tellus, and reckon you as their master for helping them to defeat{" "}
              <strong>JILAKA</strong>
            </p>
          </div>
        </section>
        <section className={L.wooden}>
          <img
            className={L.emerald}
            src='https://monstainfinite.com/wp-content/uploads/2021/08/monsta-td-gem-1024x1024.png'
            alt=''
          />
          <div className={L.about}>
            <div className={L.mobileImgHolder}>
              <img
                className={L.mobileImg}
                src='https://monstainfinite.com/wp-content/uploads/2021/08/monsta-td-gameplay@2X-593x1024.png'
                alt=''
              />
            </div>
            <div className={L.aboutGame}>
              <h1>
                <strong>RUNESTONE ALIGN</strong>
              </h1>
              <p>
                <span>
                  Monsta Infinite combines a turn-based card battle system with
                  a match-three puzzle system to play. Monsta Infinite is not
                  just an ordinary card game.{" "}
                </span>
              </p>
              <p>
                <span>
                  We design the gameplay by using this logic to create a more
                  competitive in-game battle experience and increase the
                  excitement and challenges in the game.{" "}
                </span>
              </p>
              <p>
                <span>
                  Assemble your team NOW with a minimum of three Monsta, save
                  them from JILAKA and earn their planet resources.{" "}
                </span>
              </p>
            </div>
          </div>
          <div className={L.linkHolders}>
            <div className={L.socials}>
              <YouTubeIcon />
              <a href='youtube'>YouTube</a>
            </div>
            <div className={L.socials}>
              <FacebookIcon />
              <a href='facebook'>Facebook</a>
            </div>
            <div className={L.socials}>
              <TwitterIcon />
              <a href='Twitter'>Twitter</a>
            </div>
            <div className={L.socials}>
              <TextsmsIcon />
              <a href='discord'>Discord</a>
            </div>
            <div className={L.socials}>
              <TelegramIcon />
              <a href='telegram'>Telegram</a>
            </div>
          </div>
        </section>
        <section className={L.nostalgia}></section>
        <section className={L.flexer}>
          <div className={L.flexChild}>
            <img
              className={L.flexImg}
              src='https://monstainfinite.com/wp-content/uploads/2021/08/monsta-arena-features-survival-1024x1024.png'
              alt=''
            />
            <p className={L.title}>Survival</p>
            <p className={L.desc}>
              Defeat JILAKA to gain EXP points and Stamen Tellus for your
              team，save Monsta and help them reclaim their homeland.
            </p>
          </div>
          <div className={L.flexChild}>
            <img
              className={L.flexImg}
              src='https://monstainfinite.com/wp-content/uploads/2021/08/monsta-arena-features-war-1024x1024.png'
              alt=''
            />
            <p className={L.title}>Monsta War</p>
            <p className={L.desc}>
              Defeat JILAKA to gain EXP points and Stamen Tellus for your
              team，save Monsta and help them reclaim their homeland.
            </p>
          </div>
          <div className={L.flexChild}>
            <img
              className={L.flexImg}
              src='https://monstainfinite.com/wp-content/uploads/2021/08/monsta-arena-features-breeding-1024x1024.png'
              alt=''
            />
            <p className={L.title}>Synthesis Cloning</p>
            <p className={L.desc}>
              Defeat JILAKA to gain EXP points and Stamen Tellus for your
              team，save Monsta and help them reclaim their homeland.
            </p>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
