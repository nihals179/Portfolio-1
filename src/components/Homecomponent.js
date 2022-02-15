import React from "react";
import styled from "styled-components";

const padding = "0 3%";
const color = "#313131";

const Heading = styled.h2`
  font-family: Inter;
  font-size: 3vw;
  color: black;
  text-align: left;
  padding: ${padding};
  margin-bottom: 0%;
  margin-top: 1%;
`;

const Line = styled.div`
  border-bottom: #313131 1px solid;
  margin-top: ${(props) => (props.Margin ? "10%" : "0")};
`;

const DivRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100;
  padding: ${(props) => (props.padding ? padding : null)};
  margin: ${(props) => (props.Margin ? "5% 0%" : "0")};
  justify-content: ${(props) => (props.right ? "end" : null)};
  justify-content: ${(props) => (props.center ? "center" : null)};
  margin-top: 1.3%;
  margin: ${(props) => (props.whoMargin ? "7% 0" : null)};
  width: ${(props) => (props.wid_35 ? "35%" : null)};
  width: ${(props) => (props.wid_65 ? "65%" : null)};
  justify-content: ${(props) => (props.spaceBetween ? "space-between" : null)};
  align-items: ${(props) => (props.Mid ? "center" : null)};
`;

const DivCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.up ? "start" : "center")};
  align-items: ${(props) => (props.right ? "end" : null)};
  align-items: ${(props) => (props.center ? "center" : null)};
  width: ${(props) => (props.wid_35 ? "35%" : null)};
  width: ${(props) => (props.wid_25 ? "25%" : null)};
  width: ${(props) => (props.wid_65 ? "65%" : null)};
  width: ${(props) => (props.wid_50 ? "50%" : null)};
  padding: ${(props) => (props.padding ? padding : "0")};
`;

const Head = styled.div`
  font-family: "Inter";
  font-weight: 500;
  color: black;
  font-size: ${(props) => (props.li ? "1.8vw" : "2.7vw")}; ;
`;

const Description = styled.p`
  font-family: "Inter";
  font-weight: 300;
  font-size: 1.1vw;
`;

const Font = styled.p`
  font-size: 2.9vw;
  font-size: ${(props) => (props.xSmall ? ".85vw" : null)};
  font-size: ${(props) => (props.xMed ? "3vw" : null)};
  font-size: ${(props) => (props.xLarge ? "4vw" : null)};
  font-family: "Inter";
  margin: 0;
  color: ${(props) => (props.color ? color : null)};
  font-weight: ${(props) => (props.Thin ? "100" : null)};
  font-weight: ${(props) => (props.Exlight ? "200" : null)};
  font-weight: ${(props) => (props.Light ? "300" : null)};
  font-weight: ${(props) => (props.Regular ? "400" : null)};
  font-weight: ${(props) => (props.Medium ? "500" : null)};
  font-weight: ${(props) => (props.SemiBold ? "600" : null)};
  font-weight: ${(props) => (props.Bold ? "700" : null)};
  font-weight: ${(props) => (props.ExtraBold ? "800" : null)};
  font-weight: ${(props) => (props.Black ? "900" : null)};
`;

function Homecomponent() {
  return (
    <div className="Home">
      {/* Main Website */}
      <header className="header"></header>
      <Heading>1. What?</Heading>
      <DivRow className="section-1" padding>
        <DivCol>
          <DivRow className="info">
            <div className="logo">
              <h1>Inter</h1>
            </div>
            <div className="ref">
              <div>
                <pre>
                  Inter Comes with <br />
                  SIL OPEN FONT LICENSE
                </pre>
                <img src="./images/image12.png" alt="Inter" width="100%" />
              </div>
              <div>
                <div>Hi</div>
                <div>
                  <b>Contributed on</b>
                  <br />
                  <a href="https://github.com/rsms/inter">
                    https://github.com/rsms/inter
                  </a>
                </div>
              </div>
            </div>
          </DivRow>
        </DivCol>
        <DivCol className="slog">
          <p>OPEN SOURCE</p>
          <p>FONT</p>
          <p>FOR</p>
          <p>
            <b>OPEN</b>
          </p>
          <p>SOURCE</p>
          <p>
            <b> WORLD</b>
          </p>
        </DivCol>
      </DivRow>
      <DivRow className="section-2" padding>
        <div>
          <Head>Inter is a typeface carefully crafted & designed for</Head>
          <p className="computer">COMPUTER</p>
          <Head>The Inter project is led by -- Rasmus Andersson</Head>
        </div>
      </DivRow>
      <div className="Scroll">
        <p>Scroll Down</p>
      </div>
      <Line></Line>
      <Heading>2. Who?</Heading>
      <DivRow className="who" whoMargin>
        <DivCol className="photo">
          <img src="./images/portrait 2.png" alt="rasmus" />
        </DivCol>
        <DivCol className="description" up>
          <Heading className="Rasmus">Rasmus Andersson</Heading>

          <Description>
            Past Figma, Dropbox, Facebook, Founding member Spotify
          </Description>

          <li>
            <Description>
              Rasmus came up with the idea for Inter in his work on Figma. Figma
              used Roboto (designed by Christian Robertson for Google) as our
              main font for years, and they were running up against its
              limitations. It was originally built to work as both a display
              typeface (for things like titles) and text typeface (for longer
              blocks like paragraphs). But it was difficult to read Roboto when
              it was small (small text makes up much of the typography in
              Figma's UI)
            </Description>
          </li>
          <li>
            <Description>
              . Rasmus and the design team did a month-long research project to
              find a better-suiting option, but Roboto still came out on top and
              they stuck with it for several years.
            </Description>
          </li>
          <li>
            <Description>
              This experience got Rasmus thinking about text-heavy UIs and
              typefaces. He decided to try making his own font, designed solely
              for computer user interfaces, and offer it for free to the world.
              He released the first set of glyphs for Inter in August 2017, and
              he's been iterating on it continuously ever since.
            </Description>
          </li>
        </DivCol>
      </DivRow>
      <Line></Line>
      <Heading>3. Type Style/Features</Heading>
      <DivRow className="section-3">
        <DivCol wid_35 up padding>
          <li>
            <Head li>Large X-Height</Head>
          </li>
        </DivCol>
        <DivCol wid_65 up>
          <div className="l1"></div>
          <div className="l2"></div>
          <div className="l3"></div>
          <p>Agx</p>
          <div className="arrowup1"></div>
          <div className="arrowup2"></div>
          <div className="arrowdown1"></div>
          <div className="arrowdown2"></div>
          <div className="h1"></div>
          <div className="h2"></div>
        </DivCol>
      </DivRow>
      <DivRow className="section-4" padding>
        <DivCol wid_35 up>
          <li>
            <Head li>9 Font Weight</Head>
          </li>
        </DivCol>
        <DivRow wid_65 spaceBetween padding>
          <DivCol wid_35 className="Fonts">
            <Font Thin>Thin</Font>
            <Font Exlight>Extra Light</Font>
            <Font Light>Light</Font>
            <Font Regular>Regular</Font>
            <Font Medium>Medium</Font>
            <Font SemiBold>Semi Bold</Font>
            <Font ExtraBold>Extra Bold</Font>
            <Font Black>Black</Font>
          </DivCol>
          <DivCol right className="Examples">
            <p className="title">Examples</p>
            <div className="ExampleLine"></div>
            <Font Regular>Contact Data</Font>
            <Font Medium>Businesstoy</Font>
            <Font Exlight>Shop Preview</Font>
            <Font Thin>Automati ink</Font>
            <Font Light>Frame/Group</Font>
            <Font Regular>Month/Day</Font>
            <Font Black>Minute 360</Font>
            <Font SemiBold>Graphik Design</Font>
          </DivCol>
          <DivCol></DivCol>
        </DivRow>
      </DivRow>
      <DivRow padding className="section-5" Margin>
        <DivCol wid_35 up>
          <li>
            <Head li>High Legibility</Head>
          </li>
        </DivCol>
        <DivRow wid_65 color className="Body">
          <DivCol up>
            <Font Regular xLarge>
              ABCDEFGHIJKLM
            </Font>
            <Font Regular xLarge>
              NOPQRSTUVWXYZ
            </Font>
            <Font Regular xLarge>
              ÅÖØ
            </Font>
            <Font Regular xLarge>
              abcdefghijklm
            </Font>
            <Font Regular xLarge>
              nopqrstuvwxy åäæñöø
            </Font>
            <Font Regular xLarge>
              ø.,?@
            </Font>
            <Font Regular xLarge>
              {" "}
              1234567890
            </Font>
          </DivCol>
          <DivCol className="right" padding>
            <Font className="LegiPara" xSmall>
              The style emerged from a desire to represent information
              objectively, free from the influence of associated meaning. The
              International Typographic style evolved as a modernist graphic
              movement that sought to convey messages clearly and in a
              universally straightforward manner. Two major Swiss design schools
              are responsible for the early years of International Typographic
              Style. A graphic design technique based on grid-work that began in
              the 19th century became inspiration for modifying the foundational
              course at the Basel School of Design in 1908. Shortly thereafter,
              in 1918 Ernst Keller became a professor at the Kunstgewerbeschule
              Zürich and began developing a graphic design and typography
              course. He did not teach a specific style to his students, rather
              he taught a philosophy of style that dictated “the solution to the
              design problem should emerge from its content.” This idea of the
              solution to the design emerging from the problem itself was a
              reaction to previous artistic processes focused on "beauty for the
              sake of beauty" or "the creation of beauty as a purpose in and of
              itself". Keller’s work uses simple geometric forms, vibrant colors
              and evocative imagery to further elucidate the meaning behind each
              design. Other early pioneers include Théo Ballmer and Max Bill.
              <br />
              <br />
              Durant la période allant des années 1950 à 1980, un nombre
              important de typographes suisses, formés aux écoles de Bâle et de
              Zurich, vont pratiquer leur métier dans la capitale française. En
              apportant leur style à des revues ou à des édifices publics comme
              l'aéroport de Roissy-Charles de Gaulle, le Métro parisien ou le
              Centre Pompidou, ils contribuent à l'essor international de ce
              langage visuel et typographique.
            </Font>
          </DivCol>
        </DivRow>
      </DivRow>
      <Line></Line>
      <Heading>4. Where / Usage</Heading>
      <DivRow padding className="section-6">
        <DivRow padding>
          <DivCol wid_35 up>
            <Head li>
              <li>Github</li>
            </Head>
          </DivCol>
          <DivCol wid_65>
            <DivRow>
              <p>
                GitHub, Inc. is a provider of Internet hosting for software
                development and version control using Git. It offers the
                distributed version control and source code management
                functionality of Git, plus its own features. Github is using
                Inter as its UI font on site and Git.
              </p>
            </DivRow>
            <DivRow>
              <img src="./images/image 2.jpg" alt="abc" width="100%" />
            </DivRow>
          </DivCol>
        </DivRow>
      </DivRow>
      <DivRow padding className="section-7">
        <DivRow padding className="Title" Margin>
          <DivCol wid_35 up Margin>
            <Head li>
              <li>Mozilla Design & Firefox</li>
            </Head>
            <img
              className="MTitle"
              src="./images/image 4.png"
              alt="abc"
              width="100%"
            />
            <img
              className="Mlogo"
              src="./images/image 5.png"
              alt="abc"
              width="100%"
            />
          </DivCol>
          <DivCol wid_65 className="body">
            <img
              className="img1"
              src="./images/image 6.jpg"
              alt="abc"
              width="100%"
            />
            <img
              className="img2"
              src="./images/image 16.jpg"
              alt="abc"
              width="100%"
            />
          </DivCol>
        </DivRow>
      </DivRow>
      <DivRow padding className="section-8">
        <DivRow padding className="body">
          <DivCol up wid_50 className="left">
            <Head li>
              <li>Open Source & Font in Use</li>
            </Head>
            <Font xSmall>Font in Use</Font>
            <img src="./images/image 8.jpg" alt="abc" width="80%" />
          </DivCol>
          <DivCol wid_50 className="right">
            <DivRow className="github">
              <img src="./images/image 10.png" alt="abc" width="8%" />
              <Font className="">Github & Open Sourced Projects</Font>
            </DivRow>

            <DivRow className="row1">
              <img
                src="./images/image 9.jpg"
                alt="abc"
                width="60%"
                height="50%"
              />
              <img src="./images/image 15.jpg" alt="abc" width="80%" />
            </DivRow>
            <DivRow className="row2">
              <img
                src="./images/image 11.jpg"
                className="interlogo"
                alt="abc"
                width="40%"
              />
              <img
                src="./images/image 7.jpg"
                alt="abc"
                className="githublogo"
                width="40%"
                height="40%"
              />
            </DivRow>
          </DivCol>
        </DivRow>
      </DivRow>
      <Line Margin></Line>
      <Heading li>5. Use / Free Download / Contribute</Heading>
      <DivRow className="section-9">
        <DivCol wid_65 padding>
          <Font Regular Margin xMed>
            Inter comes with
            <br /> SIL OPEN FONT LICENSE
          </Font>
          <br />
          <img src="./images/image12.png" alt="Inter" width="60%" />
          <DivRow Mid>
            <img
              src="./images/image 10.png"
              alt="Inter"
              width="8%"
              height="65%"
            />
            <p>
              Free Download:
              <br />
              <a href="/">https://github.com/rsms/inter/releases/download</a>
            </p>
          </DivRow>
          <DivRow Mid>
            <img
              src="./images/image 20.png"
              alt="Inter"
              width="8%"
              height="65%"
            />
            <p xMed>
              Contribute On:
              <br />
              <a href="/">https://github.com/rsms/inter</a>
            </p>
          </DivRow>
        </DivCol>
        <DivCol className="slog">
          <p>
            OPEN SOURCE
            <br /> FONT <br />
            FOR
            <br />
            <b>OPEN</b>
            <br /> SOURCE
            <br />
            <b> WORLD</b>
          </p>
        </DivCol>
      </DivRow>
    </div>
  );
}

export default Homecomponent;
