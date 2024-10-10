/* eslint-disable react/no-unescaped-entities */
import { Container, Text } from "@mantine/core";
import classes from "./refundPolice.module.css";
import Link from "next/link";
import { Footer } from "../components/Footer/Footer";

export default function RefundPolicy() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Container
        size="1440px"
        id="features"
        className={classes.wrapper}
        mb={40}
      >
        <header className={classes.header}>
          <Link className={classes.link} href="/" onClick={handleClick}>
            <Text className={classes.logo}>
              {" "}
              Doc<span className={classes.L}>l</span>y
            </Text>
          </Link>
        </header>
        <h1>Refund policy and Cancellation policy</h1>
        <div>
          <p>
            Please read the following policies carefully before using any
            service provided by  <b>Lunacat Ivan Marzan</b>. Your use of Lunacat Ivan
            Marzan products will be governed by these policies, and by using
            <b>Lunacat Ivan Marzan</b> products, you agree to them.
          </p>
        </div>
        <div>
          <h3>Introduction</h3>
          <p>
             <b>Lunacat Ivan Marzan</b> ("Lunacat", "Ivan Marzan", "We", "Us", "Our",
            "Company") develops mobile applications ("Our Products"). Our Apple
            Applications may be downloaded from the App Store, which is operated
            and owned by Apple Inc. and other companies within its group
            ("Apple"). Our Android Applications may be downloaded from Google
            Play, which is owned and operated by Google Inc. and other companies
            within its group ("Google"). The  <b>Lunacat Ivan Marzan</b> website (the
            "Website"), all other products and services, including mobile apps
            (the "Application"), and all content offered as part thereof, are
            collectively referred to herein as the "Services" and are offered to
            you by  <b>Lunacat Ivan Marzan</b>. Our goal is to help people lead a
            healthy way of life through health and well-being activities. Our
            Products offer content, features, functionality, and other
            information and services including, without limitation, viral,
            embeddable or application/device-based features and related
            technology, also when accessed via the Internet, mobile or other
            devices (collectively, "Our Services"). We develop Our Products for
            informational purposes only. You must ALWAYS consult your physician
            or doctor before starting any program. Subscribers, account holders,
            customers, users, and others who download, access, use, purchase
            and/or subscribe to the Services ("you") agree to these Refund and
            Cancellation Policy (the "Refund policy and Cancellation policy").
            By agreeing to these Refund and Cancellation Policy, you confirm
            that you are solely responsible for your state of health. These
            Refund and Cancellation Policy govern your use of the Services and
            are a condition to your use of the Services.
          </p>
        </div>
        <div>
          <h3>Refund Policy</h3>
          <p>
            Google doesn't give refunds for most Google Play purchases. However,
            there are exceptions detailed below. You can also contact the us
            directly. We can help with purchase issues and can process refunds
            according to this Refund policy.
          </p>
          <p>
            <b>Within 48 hours:</b> You may be able to get a refund depending on
            the details of the purchase.
          </p>
          <p>
            <b>After 48 hours:</b> Developers have their own policies and legal
            requirements and may be able to give you a refund. To troubleshoot
            and find out if you can get a refund, contact us by email
            {" "}
            <a href="mailto: ivan.marzan.1986@gmail.com">
              ivan.marzan.1986@gmail.com
            </a>
          </p>
          <p>
            At PDF Scanner App, all payment subscriptions are manually paid by
            the members with auto renewal option.{" "}
          </p>
          <p>
            Google may give refunds for some Google Play purchases, depending on
            the refund policies described below. You can also contact us
            directly by email {" "}
            <a href="mailto: ivan.marzan.1986@gmail.com">
              ivan.marzan.1986@gmail.com
            </a>
          </p>
          <ul>
            <li>
              If a purchase was accidentally made by a friend or family member
              using your account, request a refund on the Google Play website.
            </li>
            <li>
              If you find a Google Play purchase on your card or other payment
              method that you didn't make and that wasn't made by anyone you
              know, report unauthorized charges within 120 days of the
              transaction.
            </li>
            <li>
              If your refund request has been approved, see how long your refund
              will take.
            </li>
            <li>
              Multiple requests for the same transaction don't expedite the
              refund process. Refund decisions may take 1–4 business days.
            </li>
            <li>
              If it's been less than 48 hours since you bought an app or made an
              in-app purchase: You can request a refund through Google Play.
            </li>
          </ul>
        </div>
        <div>
          <h3>Important</h3>
          <p>
            You can only return an app or game for a refund once. If you buy it
            again you can't get a refund. If a refund is issued, you'll lose
            access to the item.
          </p>
          <p>
            If you buy multiple items in one purchase, you can only refund the
            entire purchase. You can't refund individual items of that purchase.
          </p>
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
}
