import {Container, Row} from "react-bootstrap";
import styles from "@/styles/pages/index.module.css"
import classNames from "classnames";
import { getTranslations } from 'next-intl/server';
import {BreakText} from "@/components/BreakText";
import ArrowIcon from "@/components/icons/ArrowIcon";
import AlfaPayIcon from "@/components/icons/AlfaPayIcon";
import "@/styles/pages/index.css"
import VerifiedIcon from "@/components/icons/VerifiedIcon";
import RocketLaunchIcon from "@/components/icons/RocketLaunchIcon";
import CardsIcon from "@/components/icons/CardsIcon";
import InfiniteScroll from "@/components/client/InfiniteScroll";
import HomeForm from "@/components/client/HomeForm";
import HomeAdvantages from "@/components/client/HomeAdvantages";
import BallIcon from "@/components/icons/BallIcon";
import GamePadIcon from "@/components/icons/GamePadIcon";
import CurrencyExchangeIcon from "@/components/icons/CurrencyExchangeIcon";
import DineroIcon from "@/components/icons/DineroIcon";
import LoveHeartIcon from "@/components/icons/LoveHeartIcon";
import React from "react";
import BitcoinIcon from "@/components/icons/payment-solutions/BitcoinIcon";
import TetherIcon from "@/components/icons/payment-solutions/TetherIcon";
import EthereumIcon from "@/components/icons/payment-solutions/EthereumIcon";
import EuroIcon from "@/components/icons/payment-solutions/EuroIcon";
import DollarIcon from "@/components/icons/payment-solutions/DollarIcon";
import MoneyCashIcon from "@/components/icons/payment-solutions/MoneyCashIcon";
import P2PIcon from "@/components/icons/payment-solutions/P2PIcon";
import PricingForm from "@/components/client/PricingForm";
import {fetchInfo} from "@/http/api/infoApi";
import countries from "i18n-iso-countries";
import "i18n-iso-countries/langs/en.json";
import SnowfallClient from "@/components/client/SnowfallClient";

export default async function Home() {
  const t = await getTranslations('HomePage');
  let info = null;
  try {
    info = await fetchInfo();
  } catch {}

  const section1infoBlocks = [
    {
      value: t("section1.infoPart1.value"),
      text: t("section1.infoPart1.text"),
    },
    {
      value: t("section1.infoPart2.value"),
      text: t("section1.infoPart2.text"),
    },
    {
      value: t("section1.infoPart3.value"),
      text: t("section1.infoPart3.text"),
    }
  ];

  const section4InfoBlocks = [
    {
      icon: <GamePadIcon />
    },
    {
      icon: <CurrencyExchangeIcon />
    },
    {
      icon: <a href={"https://dinero.casino"}><DineroIcon /></a>
    },
    {
      icon: <LoveHeartIcon />
    }
  ]

  const countryBlocks: any[] = info?.countries?.map((isoCode: string) => {
    const countryName = countries.getName(isoCode, "en", { select: "official" });

    return {
      name: countryName,
      code: isoCode,
    }
  });

  return (
    <>
      <SnowfallClient />
      <main className="min-h-screen flex flex-col">
        <section className={`${styles.section1} relative`}>
          <AlfaPayIcon className={`${styles.largeLogo} absolute`}/>
          <Container>
            <Row>
              <h2
                className={classNames(
                  styles.firstSectionLargeText,
                  "text-[color:--gold-color-1] golos-text font-semibold"
                )}
              >
                <BreakText text={t("section1.largeText")}/>
              </h2>
              <p
                className={classNames(
                  styles.firstSectionMediumText,
                  "text-[color:--purple-color-1] geologica mediumText"
                )}
              >
                <BreakText text={t("section1.smallText")}/>
              </p>
              <div
                className={classNames(
                  "flex",
                  styles.section1InfoBlock,
                )}
              >
                {section1infoBlocks.map((item, index) =>
                  <div
                    key={index}
                    className={classNames(
                      "flex flex-col",
                      styles.infoBlockItem,
                    )}
                  >
                    <p
                      className={classNames("golos-text text-[color:--gold-color-1] font-semibold", styles.section1InfoBlockItemValue)}>
                      {item.value}
                    </p>
                    <p
                      className={classNames("geologica text-[color:--purple-color-2] font-semibold", styles.section1InfoBlockItemText)}>
                      {item.text}
                    </p>
                  </div>
                )}
              </div>
              <div className="flex">
                <a
                  href="#form1"
                  className={classNames(
                    "geologica group flex items-center text-[color:--gold-color-1] border border-[color:--gold-color-1]",
                    "hover:text-black hover:bg-[color:--gold-color-1] duration-300",
                    styles.startButton,
                  )}
                >
                  {t("section1.startButton")}
                  <ArrowIcon
                    className={classNames(
                      "transition-colors fill-[color:--gold-color-1] group-hover:fill-black",
                      styles.startButtonIcon,
                    )}
                  />
                </a>
              </div>
            </Row>
          </Container>
        </section>
        <section
          className={classNames(
            "foreground-color w-full relative",
            styles.section2,
          )}
        >
          <CardsIcon
            className={`${styles.cardsImage} absolute`}
            style={{zIndex: -1}}
          />
          <Container>
            <Row>
              <h2
                id="aboutUs"
                className={"geologica text-[color:--purple-color-1] sectionName"}
              >
                {t("section2.name")}
              </h2>
              <div className={styles.section2LargeTextMargin}>
                <p className={"largeText lexend-giga text-[color:--gold-color-1] font-bold"}>
                  ALFA PAY
                </p>
                <h3 className={"largeText golos-text text-[color:--gold-color-1] font-semibold"}>
                  {t("section2.largeText")}
                </h3>
              </div>
              <div className={classNames(styles.section2InfoBlock, "flex items-start")}>
                <VerifiedIcon className={"fill-[color:--purple-color-1]"}/>
                <p className={"mediumText geologica text-[color:--purple-color-1]"}>
                  {t("section2.infoText1")}
                </p>
              </div>
              <div className={classNames(styles.section2InfoBlock, "flex items-start")}>
                <RocketLaunchIcon className={"fill-[color:--purple-color-1]"}/>
                <p className={"mediumText geologica text-[color:--purple-color-1]"}>
                  <BreakText text={t("section2.infoText2")}/>
                </p>
              </div>
              {countryBlocks && (
                <div className={`flex flex-col ${styles.geographyOfWorkBlock}`}>
                  <h3 className={`geologica text-[color:--purple-color-1]`}>
                    {t("section2.geographyOfWork")}
                  </h3>
                  <InfiniteScroll items={
                    countryBlocks.map((el, i) =>
                      <div key={i} className={`flex items-center ${styles.geographyItem}`}>
                        <img
                          className={styles.geographyItemIcon}
                          src={`https://flagcdn.com/${el.code.toLowerCase()}.svg`}
                          alt="icon"
                        />
                        <p className="geologica text-[color:--purple-color-1]">
                          {el.name}
                        </p>
                      </div>
                    )
                  }/>
                </div>
              )}
              <div
                className={`relative w-full`}
              >
                <HomeForm/>
              </div>
            </Row>
          </Container>
        </section>
        <section className={styles.section3}>
          <Container>
            <Row>
              <h2
                id="advantages"
                className={"geologica text-[color:--purple-color-1] sectionName"}
              >
                {t("section3.name")}
              </h2>
              <h3 className={`flex items-center text-[color:--gold-color-1] largeText`}>
              <span className={`geologica font-semibold`}>
                {t("section3.whyPay")}
              </span>
                <span className={`lexend-giga font-bold`}>
                ALFA PAY
              </span>
                <span className={`geologica largeText font-semibold`}>
                ?
              </span>
              </h3>
              <HomeAdvantages countries={info?.countries} />
            </Row>
          </Container>
        </section>
        <section className={styles.section45}>
          <Container>
            <Row>
              <h2
                id="ourClients"
                className="geologica text-[color:--purple-color-1] sectionName"
              >
                {t("section4.name")}
              </h2>
              <div className={`flex ${styles.ibGap} ${styles.blocksWrapper}`}>
                <div
                  className={`flex bg-[color:--foreground-color] ${styles.pdLargeIb} ${styles.section4InfoBlock}`}>
                  <BallIcon/>
                  <div>
                    <h3 className="golos-text text-[color:--gold-color-1] font-semibold">
                      {t("section4.block1.head")}
                    </h3>
                    <p className="geologica text-[color:--purple-color-1]">
                      {t("section4.block1.description")}
                    </p>
                  </div>
                </div>
                <div className={`grid ${styles.ibGap} ${styles.smallBlocksWrapper}`}>
                  {section4InfoBlocks.map((block, index) =>
                    <div
                      key={index}
                      className={`flex items-start bg-[color:--foreground-color] ${styles.ibGap}
                      ${styles.pdSmallIb} ${styles.section4InfoBlock}`
                      }
                    >
                      {React.cloneElement(block.icon, {style: {flexShrink: 0}})}
                      <div className={`flex flex-col ${styles.section4InfoBlock}`}>
                        <h3 className="golos-text text-[color:--gold-color-1] font-semibold">
                          {t(`section4.block${index + 2}.head`)}
                        </h3>
                        <p className="geologica text-[color:--purple-color-1]">
                          {t(`section4.block${index + 2}.description`)}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Row>
          </Container>
        </section>
        <section className={`flex flex-col items-center ${styles.section45}`}>
          <Container>
              <div className={`flex flex-col`}>
                <h2
                  id="pricing"
                  className={`golos-text text-[color:--gold-color-1] largeText font-semibold text-center`}
                >
                  {t("section5.paymentSolutions")}
                  <span className="lexend-giga whitespace-nowrap">
                    &nbsp;ALFA PAY
                  </span>
              </h2>
              <p className={`geologica text-[color:--purple-color-1] sectionName text-center`}>
                <BreakText text={t("section5.solutionsDescription")}/>
              </p>
              <div className={`flex justify-center ${styles.paymentSolutionsBlock}`}>
                <BitcoinIcon/>
                <TetherIcon/>
                <EthereumIcon/>
                <DollarIcon/>
                <EuroIcon/>
                <MoneyCashIcon/>
                <P2PIcon/>
              </div>
            </div>
            <PricingForm currencySolutions={info?.currencySolutions} />
          </Container>
        </section>
      </main>
    </>
  );
}
