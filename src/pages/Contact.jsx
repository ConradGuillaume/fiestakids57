import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import NavBar from "../components/NavBar";
import fille from "../style/img/backpic/presta.jpg";
import fiestakid from "../style/img/logo/fiestakid.png";
import prest3 from "../style/img/backpic/presta3.jpg";
import prest4 from "../style/img/backpic/presta4.jpg";

const Contact = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="contact_container">
      <NavBar />
      <div className="contact">
        <img className="fiesta" src={fiestakid} alt="" />
        <article>
          <p className="contact-us">Nous contacter :</p>
          <p className="phone">
            <a href="tel:+33 6.77.00.91.57">
              <i class="fa-solid fa-phone"></i> 06.77.00.91.57
            </a>
          </p>
          <p className="phone">
            <a href="mailto:fiestakids57@gmail.com">
              <i class="fa-solid fa-at"></i>fiestakids57@gmail.com
            </a>
          </p>
        </article>
        <article className="follow-us">
          <p className="contact-us">SUIVEZ NOUS </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/fiestakids57/"
          >
            <i class="fa-brands fa-square-facebook"></i>
          </a>
        </article>
      </div>
      <div className="contact_right">
        <div className="empty">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlnsSvgjs="http://svgjs.dev/svgjs"
            viewBox="0 0 800 800"
          >
            <defs>
              <linearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="ffflurry-grad"
                gradientTransform="rotate(270)"
              >
                <stop stop-color="#ffffea" stop-opacity="1" offset="0%"></stop>
                <stop stop-color="#b666d2" stop-opacity="1" offset="45%"></stop>
                <stop
                  stop-color="#e2d810"
                  stop-opacity="1"
                  offset="100%"
                ></stop>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="#ffffea"></rect>
            <g fill="url(#ffflurry-grad)">
              <rect
                width="261"
                height="2"
                x="163.5"
                y="40"
                rx="1"
                transform="rotate(90, 294, 41)"
                opacity="0.33"
              ></rect>
              <rect
                width="303"
                height="2"
                x="543.5"
                y="209"
                rx="1"
                transform="rotate(90, 695, 210)"
                opacity="0.78"
              ></rect>
              <rect
                width="475"
                height="2"
                x="160.5"
                y="587"
                rx="1"
                transform="rotate(90, 398, 588)"
                opacity="0.24"
              ></rect>
              <rect
                width="39"
                height="2"
                x="636.5"
                y="110"
                rx="1"
                transform="rotate(90, 656, 111)"
                opacity="0.21"
              ></rect>
              <rect
                width="198"
                height="2"
                x="593"
                y="665"
                rx="1"
                transform="rotate(90, 692, 666)"
                opacity="0.62"
              ></rect>
              <rect
                width="154"
                height="2"
                x="693"
                y="252"
                rx="1"
                transform="rotate(90, 770, 253)"
                opacity="0.53"
              ></rect>
              <rect
                width="333"
                height="2"
                x="399.5"
                y="571"
                rx="1"
                transform="rotate(90, 566, 572)"
                opacity="0.65"
              ></rect>
              <rect
                width="409"
                height="2"
                x="26.5"
                y="381"
                rx="1"
                transform="rotate(90, 231, 382)"
                opacity="0.56"
              ></rect>
              <rect
                width="184"
                height="2"
                x="48"
                y="87"
                rx="1"
                transform="rotate(90, 140, 88)"
                opacity="0.92"
              ></rect>
              <rect
                width="109"
                height="2"
                x="699.5"
                y="417"
                rx="1"
                transform="rotate(90, 754, 418)"
                opacity="0.21"
              ></rect>
              <rect
                width="183"
                height="2"
                x="397.5"
                y="267"
                rx="1"
                transform="rotate(90, 489, 268)"
                opacity="0.22"
              ></rect>
              <rect
                width="261"
                height="2"
                x="25.5"
                y="765"
                rx="1"
                transform="rotate(90, 156, 766)"
                opacity="0.39"
              ></rect>
              <rect
                width="115"
                height="2"
                x="-21.5"
                y="140"
                rx="1"
                transform="rotate(90, 36, 141)"
                opacity="0.25"
              ></rect>
              <rect
                width="314"
                height="2"
                x="352"
                y="573"
                rx="1"
                transform="rotate(90, 509, 574)"
                opacity="0.65"
              ></rect>
              <rect
                width="313"
                height="2"
                x="22.5"
                y="301"
                rx="1"
                transform="rotate(90, 179, 302)"
                opacity="0.17"
              ></rect>
              <rect
                width="428"
                height="2"
                x="-142"
                y="465"
                rx="1"
                transform="rotate(90, 72, 466)"
                opacity="0.36"
              ></rect>
              <rect
                width="295"
                height="2"
                x="286.5"
                y="296"
                rx="1"
                transform="rotate(90, 434, 297)"
                opacity="0.64"
              ></rect>
              <rect
                width="122"
                height="2"
                x="150"
                y="767"
                rx="1"
                transform="rotate(90, 211, 768)"
                opacity="0.75"
              ></rect>
              <rect
                width="60"
                height="2"
                x="298"
                y="520"
                rx="1"
                transform="rotate(90, 328, 521)"
                opacity="0.49"
              ></rect>
              <rect
                width="425"
                height="2"
                x="491.5"
                y="76"
                rx="1"
                transform="rotate(90, 704, 77)"
                opacity="0.79"
              ></rect>
              <rect
                width="244"
                height="2"
                x="81"
                y="630"
                rx="1"
                transform="rotate(90, 203, 631)"
                opacity="0.41"
              ></rect>
              <rect
                width="35"
                height="2"
                x="359.5"
                y="81"
                rx="1"
                transform="rotate(90, 377, 82)"
                opacity="0.43"
              ></rect>
              <rect
                width="446"
                height="2"
                x="472"
                y="456"
                rx="1"
                transform="rotate(90, 695, 457)"
                opacity="0.26"
              ></rect>
              <rect
                width="320"
                height="2"
                x="-138"
                y="228"
                rx="1"
                transform="rotate(90, 22, 229)"
                opacity="0.08"
              ></rect>
              <rect
                width="402"
                height="2"
                x="137"
                y="431"
                rx="1"
                transform="rotate(90, 338, 432)"
                opacity="0.64"
              ></rect>
              <rect
                width="94"
                height="2"
                x="240"
                y="264"
                rx="1"
                transform="rotate(90, 287, 265)"
                opacity="0.09"
              ></rect>
              <rect
                width="291"
                height="2"
                x="174.5"
                y="118"
                rx="1"
                transform="rotate(90, 320, 119)"
                opacity="0.07"
              ></rect>
              <rect
                width="309"
                height="2"
                x="-130.5"
                y="600"
                rx="1"
                transform="rotate(90, 24, 601)"
                opacity="0.76"
              ></rect>
              <rect
                width="64"
                height="2"
                x="407"
                y="42"
                rx="1"
                transform="rotate(90, 439, 43)"
                opacity="0.70"
              ></rect>
              <rect
                width="90"
                height="2"
                x="527"
                y="50"
                rx="1"
                transform="rotate(90, 572, 51)"
                opacity="0.18"
              ></rect>
              <rect
                width="399"
                height="2"
                x="-26.5"
                y="533"
                rx="1"
                transform="rotate(90, 173, 534)"
                opacity="0.68"
              ></rect>
              <rect
                width="325"
                height="2"
                x="452.5"
                y="298"
                rx="1"
                transform="rotate(90, 615, 299)"
                opacity="0.74"
              ></rect>
              <rect
                width="246"
                height="2"
                x="156"
                y="194"
                rx="1"
                transform="rotate(90, 279, 195)"
                opacity="0.81"
              ></rect>
              <rect
                width="400"
                height="2"
                x="201"
                y="348"
                rx="1"
                transform="rotate(90, 401, 349)"
                opacity="0.63"
              ></rect>
              <rect
                width="217"
                height="2"
                x="132.5"
                y="76"
                rx="1"
                transform="rotate(90, 241, 77)"
                opacity="0.29"
              ></rect>
              <rect
                width="213"
                height="2"
                x="567.5"
                y="159"
                rx="1"
                transform="rotate(90, 674, 160)"
                opacity="0.13"
              ></rect>
              <rect
                width="513"
                height="2"
                x="269.5"
                y="133"
                rx="1"
                transform="rotate(90, 526, 134)"
                opacity="0.86"
              ></rect>
              <rect
                width="407"
                height="2"
                x="-93.5"
                y="517"
                rx="1"
                transform="rotate(90, 110, 518)"
                opacity="0.22"
              ></rect>
              <rect
                width="230"
                height="2"
                x="7"
                y="308"
                rx="1"
                transform="rotate(90, 122, 309)"
                opacity="0.91"
              ></rect>
              <rect
                width="50"
                height="2"
                x="268"
                y="481"
                rx="1"
                transform="rotate(90, 293, 482)"
                opacity="0.69"
              ></rect>
              <rect
                width="316"
                height="2"
                x="-30"
                y="447"
                rx="1"
                transform="rotate(90, 128, 448)"
                opacity="0.79"
              ></rect>
              <rect
                width="317"
                height="2"
                x="98.5"
                y="133"
                rx="1"
                transform="rotate(90, 257, 134)"
                opacity="0.85"
              ></rect>
              <rect
                width="33"
                height="2"
                x="609.5"
                y="673"
                rx="1"
                transform="rotate(90, 626, 674)"
                opacity="0.56"
              ></rect>
              <rect
                width="507"
                height="2"
                x="292.5"
                y="628"
                rx="1"
                transform="rotate(90, 546, 629)"
                opacity="0.59"
              ></rect>
              <rect
                width="330"
                height="2"
                x="243"
                y="731"
                rx="1"
                transform="rotate(90, 408, 732)"
                opacity="0.89"
              ></rect>
              <rect
                width="366"
                height="2"
                x="271"
                y="772"
                rx="1"
                transform="rotate(90, 454, 773)"
                opacity="0.86"
              ></rect>
              <rect
                width="167"
                height="2"
                x="105.5"
                y="114"
                rx="1"
                transform="rotate(90, 189, 115)"
                opacity="0.75"
              ></rect>
              <rect
                width="163"
                height="2"
                x="583.5"
                y="334"
                rx="1"
                transform="rotate(90, 665, 335)"
                opacity="0.34"
              ></rect>
              <rect
                width="605"
                height="2"
                x="-271.5"
                y="406"
                rx="1"
                transform="rotate(90, 31, 407)"
                opacity="0.63"
              ></rect>
              <rect
                width="215"
                height="2"
                x="429.5"
                y="400"
                rx="1"
                transform="rotate(90, 537, 401)"
                opacity="0.16"
              ></rect>
              <rect
                width="159"
                height="2"
                x="-68.5"
                y="34"
                rx="1"
                transform="rotate(90, 11, 35)"
                opacity="0.72"
              ></rect>
              <rect
                width="398"
                height="2"
                x="361"
                y="454"
                rx="1"
                transform="rotate(90, 560, 455)"
                opacity="0.54"
              ></rect>
              <rect
                width="261"
                height="2"
                x="228.5"
                y="158"
                rx="1"
                transform="rotate(90, 359, 159)"
                opacity="0.43"
              ></rect>
              <rect
                width="152"
                height="2"
                x="705"
                y="554"
                rx="1"
                transform="rotate(90, 781, 555)"
                opacity="0.94"
              ></rect>
              <rect
                width="229"
                height="2"
                x="644.5"
                y="774"
                rx="1"
                transform="rotate(90, 759, 775)"
                opacity="0.80"
              ></rect>
              <rect
                width="148"
                height="2"
                x="306"
                y="652"
                rx="1"
                transform="rotate(90, 380, 653)"
                opacity="0.53"
              ></rect>
              <rect
                width="264"
                height="2"
                x="-42"
                y="765"
                rx="1"
                transform="rotate(90, 90, 766)"
                opacity="0.65"
              ></rect>
              <rect
                width="183"
                height="2"
                x="352.5"
                y="124"
                rx="1"
                transform="rotate(90, 444, 125)"
                opacity="0.54"
              ></rect>
              <rect
                width="36"
                height="2"
                x="405"
                y="514"
                rx="1"
                transform="rotate(90, 423, 515)"
                opacity="0.15"
              ></rect>
              <rect
                width="59"
                height="2"
                x="10.5"
                y="308"
                rx="1"
                transform="rotate(90, 40, 309)"
                opacity="0.27"
              ></rect>
              <rect
                width="437"
                height="2"
                x="364.5"
                y="359"
                rx="1"
                transform="rotate(90, 583, 360)"
                opacity="0.55"
              ></rect>
              <rect
                width="167"
                height="2"
                x="605.5"
                y="752"
                rx="1"
                transform="rotate(90, 689, 753)"
                opacity="0.76"
              ></rect>
              <rect
                width="187"
                height="2"
                x="670.5"
                y="340"
                rx="1"
                transform="rotate(90, 764, 341)"
                opacity="0.86"
              ></rect>
              <rect
                width="307"
                height="2"
                x="119.5"
                y="326"
                rx="1"
                transform="rotate(90, 273, 327)"
                opacity="0.62"
              ></rect>
              <rect
                width="238"
                height="2"
                x="243"
                y="554"
                rx="1"
                transform="rotate(90, 362, 555)"
                opacity="0.18"
              ></rect>
              <rect
                width="312"
                height="2"
                x="-77"
                y="585"
                rx="1"
                transform="rotate(90, 79, 586)"
                opacity="0.21"
              ></rect>
              <rect
                width="67"
                height="2"
                x="-11.5"
                y="554"
                rx="1"
                transform="rotate(90, 22, 555)"
                opacity="0.95"
              ></rect>
              <rect
                width="301"
                height="2"
                x="63.5"
                y="325"
                rx="1"
                transform="rotate(90, 214, 326)"
                opacity="0.75"
              ></rect>
              <rect
                width="338"
                height="2"
                x="-74"
                y="370"
                rx="1"
                transform="rotate(90, 95, 371)"
                opacity="0.78"
              ></rect>
              <rect
                width="204"
                height="2"
                x="362"
                y="406"
                rx="1"
                transform="rotate(90, 464, 407)"
                opacity="0.70"
              ></rect>
              <rect
                width="122"
                height="2"
                x="327"
                y="521"
                rx="1"
                transform="rotate(90, 388, 522)"
                opacity="0.19"
              ></rect>
              <rect
                width="580"
                height="2"
                x="203"
                y="345"
                rx="1"
                transform="rotate(90, 493, 346)"
                opacity="0.95"
              ></rect>
              <rect
                width="230"
                height="2"
                x="55"
                y="176"
                rx="1"
                transform="rotate(90, 170, 177)"
                opacity="0.27"
              ></rect>
              <rect
                width="258"
                height="2"
                x="196"
                y="368"
                rx="1"
                transform="rotate(90, 325, 369)"
                opacity="0.49"
              ></rect>
              <rect
                width="97"
                height="2"
                x="193.5"
                y="537"
                rx="1"
                transform="rotate(90, 242, 538)"
                opacity="0.73"
              ></rect>
              <rect
                width="63"
                height="2"
                x="724.5"
                y="490"
                rx="1"
                transform="rotate(90, 756, 491)"
                opacity="0.70"
              ></rect>
              <rect
                width="404"
                height="2"
                x="-138"
                y="183"
                rx="1"
                transform="rotate(90, 64, 184)"
                opacity="0.77"
              ></rect>
              <rect
                width="166"
                height="2"
                x="61"
                y="240"
                rx="1"
                transform="rotate(90, 144, 241)"
                opacity="0.11"
              ></rect>
              <rect
                width="230"
                height="2"
                x="338"
                y="476"
                rx="1"
                transform="rotate(90, 453, 477)"
                opacity="0.75"
              ></rect>
              <rect
                width="153"
                height="2"
                x="-41.5"
                y="24"
                rx="1"
                transform="rotate(90, 35, 25)"
                opacity="0.12"
              ></rect>
              <rect
                width="186"
                height="2"
                x="268"
                y="22"
                rx="1"
                transform="rotate(90, 361, 23)"
                opacity="0.32"
              ></rect>
              <rect
                width="201"
                height="2"
                x="137.5"
                y="708"
                rx="1"
                transform="rotate(90, 238, 709)"
                opacity="0.22"
              ></rect>
              <rect
                width="325"
                height="2"
                x="483.5"
                y="490"
                rx="1"
                transform="rotate(90, 646, 491)"
                opacity="0.46"
              ></rect>
              <rect
                width="133"
                height="2"
                x="-38.5"
                y="767"
                rx="1"
                transform="rotate(90, 28, 768)"
                opacity="0.77"
              ></rect>
              <rect
                width="161"
                height="2"
                x="135.5"
                y="232"
                rx="1"
                transform="rotate(90, 216, 233)"
                opacity="0.56"
              ></rect>
              <rect
                width="156"
                height="2"
                x="512"
                y="495"
                rx="1"
                transform="rotate(90, 590, 496)"
                opacity="0.29"
              ></rect>
              <rect
                width="181"
                height="2"
                x="463.5"
                y="294"
                rx="1"
                transform="rotate(90, 554, 295)"
                opacity="0.20"
              ></rect>
              <rect
                width="223"
                height="2"
                x="668.5"
                y="47"
                rx="1"
                transform="rotate(90, 780, 48)"
                opacity="0.68"
              ></rect>
              <rect
                width="480"
                height="2"
                x="259"
                y="197"
                rx="1"
                transform="rotate(90, 499, 198)"
                opacity="0.99"
              ></rect>
              <rect
                width="253"
                height="2"
                x="255.5"
                y="203"
                rx="1"
                transform="rotate(90, 382, 204)"
                opacity="0.23"
              ></rect>
              <rect
                width="207"
                height="2"
                x="204.5"
                y="582"
                rx="1"
                transform="rotate(90, 308, 583)"
                opacity="0.60"
              ></rect>
              <rect
                width="181"
                height="2"
                x="435.5"
                y="515"
                rx="1"
                transform="rotate(90, 526, 516)"
                opacity="0.07"
              ></rect>
              <rect
                width="438"
                height="2"
                x="-35"
                y="699"
                rx="1"
                transform="rotate(90, 184, 700)"
                opacity="0.14"
              ></rect>
              <rect
                width="396"
                height="2"
                x="289"
                y="692"
                rx="1"
                transform="rotate(90, 487, 693)"
                opacity="0.93"
              ></rect>
              <rect
                width="158"
                height="2"
                x="708"
                y="439"
                rx="1"
                transform="rotate(90, 787, 440)"
                opacity="0.27"
              ></rect>
              <rect
                width="140"
                height="2"
                x="471"
                y="763"
                rx="1"
                transform="rotate(90, 541, 764)"
                opacity="0.08"
              ></rect>
              <rect
                width="266"
                height="2"
                x="175"
                y="746"
                rx="1"
                transform="rotate(90, 308, 747)"
                opacity="0.10"
              ></rect>
              <rect
                width="341"
                height="2"
                x="462.5"
                y="601"
                rx="1"
                transform="rotate(90, 633, 602)"
                opacity="0.16"
              ></rect>
              <rect
                width="135"
                height="2"
                x="270.5"
                y="780"
                rx="1"
                transform="rotate(90, 338, 781)"
                opacity="0.37"
              ></rect>
              <rect
                width="41"
                height="2"
                x="439.5"
                y="546"
                rx="1"
                transform="rotate(90, 460, 547)"
                opacity="0.69"
              ></rect>
              <rect
                width="241"
                height="2"
                x="33.5"
                y="30"
                rx="1"
                transform="rotate(90, 154, 31)"
                opacity="0.43"
              ></rect>
              <rect
                width="288"
                height="2"
                x="207"
                y="310"
                rx="1"
                transform="rotate(90, 351, 311)"
                opacity="0.95"
              ></rect>
              <rect
                width="410"
                height="2"
                x="9"
                y="29"
                rx="1"
                transform="rotate(90, 214, 30)"
                opacity="0.48"
              ></rect>
              <rect
                width="360"
                height="2"
                x="519"
                y="386"
                rx="1"
                transform="rotate(90, 699, 387)"
                opacity="0.11"
              ></rect>
              <rect
                width="83"
                height="2"
                x="589.5"
                y="235"
                rx="1"
                transform="rotate(90, 631, 236)"
                opacity="0.11"
              ></rect>
              <rect
                width="125"
                height="2"
                x="-42.5"
                y="650"
                rx="1"
                transform="rotate(90, 20, 651)"
                opacity="0.17"
              ></rect>
              <rect
                width="159"
                height="2"
                x="320.5"
                y="409"
                rx="1"
                transform="rotate(90, 400, 410)"
                opacity="0.48"
              ></rect>
              <rect
                width="448"
                height="2"
                x="278"
                y="460"
                rx="1"
                transform="rotate(90, 502, 461)"
                opacity="0.70"
              ></rect>
              <rect
                width="254"
                height="2"
                x="-105"
                y="706"
                rx="1"
                transform="rotate(90, 22, 707)"
                opacity="0.71"
              ></rect>
              <rect
                width="131"
                height="2"
                x="-0.5"
                y="30"
                rx="1"
                transform="rotate(90, 65, 31)"
                opacity="0.23"
              ></rect>
              <rect
                width="310"
                height="2"
                x="586"
                y="32"
                rx="1"
                transform="rotate(90, 741, 33)"
                opacity="0.67"
              ></rect>
              <rect
                width="215"
                height="2"
                x="499.5"
                y="541"
                rx="1"
                transform="rotate(90, 607, 542)"
                opacity="0.32"
              ></rect>
              <rect
                width="257"
                height="2"
                x="635.5"
                y="178"
                rx="1"
                transform="rotate(90, 764, 179)"
                opacity="0.22"
              ></rect>
              <rect
                width="208"
                height="2"
                x="181"
                y="688"
                rx="1"
                transform="rotate(90, 285, 689)"
                opacity="0.78"
              ></rect>
              <rect
                width="126"
                height="2"
                x="669"
                y="558"
                rx="1"
                transform="rotate(90, 732, 559)"
                opacity="0.19"
              ></rect>
              <rect
                width="283"
                height="2"
                x="316.5"
                y="623"
                rx="1"
                transform="rotate(90, 458, 624)"
                opacity="0.73"
              ></rect>
              <rect
                width="326"
                height="2"
                x="-138"
                y="88"
                rx="1"
                transform="rotate(90, 25, 89)"
                opacity="0.89"
              ></rect>
              <rect
                width="470"
                height="2"
                x="387"
                y="761"
                rx="1"
                transform="rotate(90, 622, 762)"
                opacity="0.54"
              ></rect>
              <rect
                width="110"
                height="2"
                x="698"
                y="117"
                rx="1"
                transform="rotate(90, 753, 118)"
                opacity="0.08"
              ></rect>
              <rect
                width="52"
                height="2"
                x="334"
                y="252"
                rx="1"
                transform="rotate(90, 360, 253)"
                opacity="0.87"
              ></rect>
              <rect
                width="342"
                height="2"
                x="-59"
                y="142"
                rx="1"
                transform="rotate(90, 112, 143)"
                opacity="0.91"
              ></rect>
              <rect
                width="378"
                height="2"
                x="-119"
                y="700"
                rx="1"
                transform="rotate(90, 70, 701)"
                opacity="0.31"
              ></rect>
              <rect
                width="39"
                height="2"
                x="126.5"
                y="593"
                rx="1"
                transform="rotate(90, 146, 594)"
                opacity="0.94"
              ></rect>
              <rect
                width="440"
                height="2"
                x="-112"
                y="640"
                rx="1"
                transform="rotate(90, 108, 641)"
                opacity="0.80"
              ></rect>
              <rect
                width="287"
                height="2"
                x="452.5"
                y="152"
                rx="1"
                transform="rotate(90, 596, 153)"
                opacity="0.16"
              ></rect>
              <rect
                width="258"
                height="2"
                x="132"
                y="770"
                rx="1"
                transform="rotate(90, 261, 771)"
                opacity="0.90"
              ></rect>
              <rect
                width="98"
                height="2"
                x="575"
                y="421"
                rx="1"
                transform="rotate(90, 624, 422)"
                opacity="0.55"
              ></rect>
              <rect
                width="348"
                height="2"
                x="211"
                y="470"
                rx="1"
                transform="rotate(90, 385, 471)"
                opacity="0.75"
              ></rect>
              <rect
                width="74"
                height="2"
                x="49"
                y="234"
                rx="1"
                transform="rotate(90, 86, 235)"
                opacity="0.65"
              ></rect>
              <rect
                width="433"
                height="2"
                x="123.5"
                y="706"
                rx="1"
                transform="rotate(90, 340, 707)"
                opacity="0.31"
              ></rect>
              <rect
                width="499"
                height="2"
                x="189.5"
                y="206"
                rx="1"
                transform="rotate(90, 439, 207)"
                opacity="0.86"
              ></rect>
              <rect
                width="296"
                height="2"
                x="131"
                y="631"
                rx="1"
                transform="rotate(90, 279, 632)"
                opacity="0.96"
              ></rect>
              <rect
                width="403"
                height="2"
                x="-33.5"
                y="393"
                rx="1"
                transform="rotate(90, 168, 394)"
                opacity="0.76"
              ></rect>
              <rect
                width="124"
                height="2"
                x="211"
                y="420"
                rx="1"
                transform="rotate(90, 273, 421)"
                opacity="0.80"
              ></rect>
              <rect
                width="418"
                height="2"
                x="356"
                y="697"
                rx="1"
                transform="rotate(90, 565, 698)"
                opacity="0.50"
              ></rect>
              <rect
                width="122"
                height="2"
                x="628"
                y="19"
                rx="1"
                transform="rotate(90, 689, 20)"
                opacity="0.99"
              ></rect>
              <rect
                width="105"
                height="2"
                x="503.5"
                y="229"
                rx="1"
                transform="rotate(90, 556, 230)"
                opacity="0.72"
              ></rect>
              <rect
                width="184"
                height="2"
                x="114"
                y="461"
                rx="1"
                transform="rotate(90, 206, 462)"
                opacity="0.27"
              ></rect>
              <rect
                width="276"
                height="2"
                x="-33"
                y="29"
                rx="1"
                transform="rotate(90, 105, 30)"
                opacity="0.82"
              ></rect>
              <rect
                width="534"
                height="2"
                x="490"
                y="634"
                rx="1"
                transform="rotate(90, 757, 635)"
                opacity="0.50"
              ></rect>
              <rect
                width="44"
                height="2"
                x="483"
                y="40"
                rx="1"
                transform="rotate(90, 505, 41)"
                opacity="0.60"
              ></rect>
              <rect
                width="433"
                height="2"
                x="419.5"
                y="46"
                rx="1"
                transform="rotate(90, 636, 47)"
                opacity="0.75"
              ></rect>
              <rect
                width="234"
                height="2"
                x="-48"
                y="541"
                rx="1"
                transform="rotate(90, 69, 542)"
                opacity="0.41"
              ></rect>
              <rect
                width="452"
                height="2"
                x="455"
                y="548"
                rx="1"
                transform="rotate(90, 681, 549)"
                opacity="0.98"
              ></rect>
              <rect
                width="304"
                height="2"
                x="613"
                y="713"
                rx="1"
                transform="rotate(90, 765, 714)"
                opacity="0.40"
              ></rect>
              <rect
                width="119"
                height="2"
                x="-0.5"
                y="637"
                rx="1"
                transform="rotate(90, 59, 638)"
                opacity="0.84"
              ></rect>
              <rect
                width="185"
                height="2"
                x="-68.5"
                y="494"
                rx="1"
                transform="rotate(90, 24, 495)"
                opacity="0.40"
              ></rect>
              <rect
                width="192"
                height="2"
                x="615"
                y="278"
                rx="1"
                transform="rotate(90, 711, 279)"
                opacity="0.78"
              ></rect>
              <rect
                width="316"
                height="2"
                x="-76"
                y="86"
                rx="1"
                transform="rotate(90, 82, 87)"
                opacity="0.90"
              ></rect>
              <rect
                width="338"
                height="2"
                x="-40"
                y="698"
                rx="1"
                transform="rotate(90, 129, 699)"
                opacity="0.88"
              ></rect>
            </g>
          </svg>
        </div>
        <div className="right_block"></div>
        <img src={fille} alt="" />
      </div>
      {screenWidth < 1000 && (
        <div className="pic-container">
          <div className="cut"></div>
          <div className="topCut"></div>
          <img className="prest3" src={prest3} alt="" />
          <img className="prest4" src={prest4} alt="" />
        </div>
      )}
    </div>
  );
};

export default Contact;
