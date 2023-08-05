'use client'
import React from "react";
import Logo from "../app/favicon.ico";
import Image from "next/image";

export default function Footer() {
  const MyImage = () => {
    return (
      <div>
        <Image
          src={Logo}
          alt="Picture of the author"
          width={100}
          height={120}
          sizes="7vw"
          style={{
            objectFit: "fill",
            height: "7vw !important",
            width: "6vw !important",
          }}
        />
      </div>
    );
  };
  return (
    <footer className="footer">
      <div className="main">
        <div>{MyImage()}</div>
        <div className="content">
          <div>
            <ul>
              <li>Properties</li>
              <li>Ready To Move</li>
              <li>Under Construction</li>
              <li>Pre Launch</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Banglore</li>
              <li>Hyderabad</li>
              <li>Mysore</li>
              <li>Chennai</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Blogs</li>
              <li>About Us</li>
              <li>contact Us</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>+91 7777777777</li>
              <li>info@brigadeprojects.in</li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="market">Marketing Patner LivExcellence</div>
      <br />
      <br />
      <div className="disclaimer">
        <p>
          This Website Is In The Process Of Being Updated. By Accessing This
          Website, The Viewer Confirms That The Information Including Brochures
          And Marketing Collaterals On This Website Are Solely For Informational
          Purposes Only And The Viewer Has Not Relied On This Information For
          Making Any Booking/Purchase In Any Project Of The Company. Nothing On
          This Website, Constitutes Advertising, Marketing, Booking, Selling Or
          An Offer For Sale, Or Invitation To Purchase A Unit In Any Project By
          The Company. The Company Is Not Liable For Any Consequence Of Any
          Action Taken By The Viewer Relying On Such Material Information On
          This Website. This Website Belongs To Official Partner Of Brigade.
        </p>
      </div>
      <br />
      <br />
      <br />
      <div className="final">
        <div>
          <span>© Brigade Properties -- All rights reserved</span>
        </div>
        <div className="finalone">
          <ul>
            <li>Blogs</li>
            <li>About Us</li>
            <li>contact Us</li>
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .finalone ul{
            display:flex;
            justify-content:space-around;
            list-style-type: none;
            gap: 2rem;
          }
          .finalone ul li:nth-child(-n + 2) {
           border-right:1px solid;
           padding-right:20px;
        }
          .final{
            display:flex;
            justify-content:space-around;
          }
          .footer {
            padding-top: 2rem;
            padding-bottom: 2rem;
            background-color: #42669b;
            color: #fff;
            font-weight: 300;
          }
          .main {
            display: grid;
            grid-template-columns: 4fr 8fr;
            padding: 0px 4.5rem;
          }
          .content {
            display: grid;
            grid-template-columns: 3fr 2.5fr 2.2fr 5fr;
            grid-gap: 30px;
          }
          .content li {
            list-style-type: none;
            line-height: 2;
            font-size: 1.05rem;
            font-weight: 300;
            letter-spacing: 0.5px;
          }
          .disclaimer{
            color: #e6e6e6;
            font-size: .95rem;
            text-align: justify;
            line-height: 1.5;
            padding:10px 7rem;
          }
          .market{
            font-size: 1.4rem;
            font-weight: 500;
            text-align: center;
            color: #e6e6e6;
            padding-top:15px;
            letter-spacing:0.4px;
        }
          }
        `}
      </style>
    </footer>
  );
}