import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="container">
        <Head>
          <title>MannerMediaLLC</title>
          <meta property="og:title" content="MannerMediaLLC" />
        </Head>
        <div data-role="Header" className="navbar-container">
          <div className="navbar">
            <div className="logo">
              <img
                alt="image"
                src="/playground_assets/add%20a%20heading%5B4%5D-200h.png"
                className="image"
              />
            </div>
            <div className="links-container">
              <a href="#features" className="link anchor">
                features
              </a>
              <a href="#services" className="link01 anchor">
                services
              </a>
              <a href="#about-us" className="link02 anchor">
                About Us
              </a>
              <a href="#contact" className="link03 anchor">
                contact
              </a>
            </div>
            <div className="cta-container">
              <button className="cta-btn button anchor">
                Time To redesign
              </button>
              <div data-type="BurgerMenu" className="burger-menu">
                <svg viewBox="0 0 1024 1024" className="icon">
                  <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                </svg>
              </div>
            </div>
            <div data-type="MobileMenu" className="mobile-menu">
              <div className="top">
                <img
                  alt="image"
                  src="/playground_assets/default-img.svg"
                  className="image01"
                />
                <div data-type="CloseMobileMenu" className="container1">
                  <svg viewBox="0 0 1024 1024" className="icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="mid">
                <div className="links-container1">
                  <span className="link04 anchor">features</span>
                  <a href="#services" className="link05 anchor">
                    services
                  </a>
                  <a href="#about-us" className="link06 anchor">
                    About Us
                  </a>
                  <a href="#contact" className="link07 anchor">
                    contact
                  </a>
                </div>
                <button className="cta-btn1 anchor button">
                  sTART BUILDING
                </button>
              </div>
              <div className="bot">
                <div className="social-links-container">
                  <svg viewBox="0 0 950.8571428571428 1024" className="icon04">
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg viewBox="0 0 877.7142857142857 1024" className="icon06">
                    <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                  </svg>
                  <svg viewBox="0 0 877.7142857142857 1024" className="icon08">
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="about-us" className="hero">
          <div className="hero-text-container">
            <h1 className="heading section-Heading">
              <span>Websites are our backbone to the digital economy</span>
            </h1>
            <span className="text01 section-Text">
              And by now everyone has one, or at least everyone that could
              benefit from one. There are websites in existence that are 20+
              years old. These are the same websites that have been going
              through stages of evolution from where they started, staying
              relevant, never becoming outdated.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <button className="cta-btn2 anchor button">TIME TO REDESIGN</button>
          </div>
          <img
            alt="image"
            src="/playground_assets/273037219_665244161365583_8670653754515369042_n-1500w.jpg"
            className="image02"
          />
        </div>
        <div className="section-separator"></div>
        <div id="features" className="features">
          <h1 className="text02">
            <span>Features</span>
          </h1>
          <span className="text04">
            <span>
              As technology progresses the websites coming ahead of the natural
              progression of the internet are the ones being able to load the
              fastest and most efficiently. Flashy websites come at a
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="text06">literal</span>
            <span> operating cost.</span>
          </span>
          <div className="container2">
            <div className="feature-card">
              <img
                alt="image"
                src="0792b985-ddd6-4387-ad08-ffc1163d3e70"
                className="image03"
              />
              <h2 className="text08">Web Management</h2>
              <span className="text09">
                I have personally managed and upkept every site I have worked on
                in the past, and I will continue to provide great care to each
                site I take on.
              </span>
            </div>
            <div className="feature-card1">
              <img
                alt="image"
                src="464c0420-d8de-4c66-8d43-dce2656a2591"
                className="image04"
              />
              <h2 className="text10">Cloud Hosting</h2>
              <span className="text11">
                All of the websites I make are hosted on powerful cloud
                computing networks and utilizes Amazon&apos;s Content Delivery
                Network so no matter where you are in the world sites made by me
                will load incredibly quick.
              </span>
            </div>
            <div className="feature-card2">
              <img
                alt="image"
                src="d783c7e7-8fec-4f3b-aa59-d42ce5ce22f9"
                className="image05"
              />
              <h2 className="text12">
                <span className="text13">SEO</span>
                <span className="text14"></span>
              </h2>
              <span className="text15">
                Since 2019 Google has made website speed one of the most
                important factors to rank on Google. Combining a framework that
                easily slips into Google&apos;s algorithm with content that
                loads fast will rank you fastest.
              </span>
            </div>
          </div>
          <div className="container3">
            <div className="feature-card3">
              <img
                src="/playground_assets/pictures-optimization-200h.png"
                className="image06"
              />
              <h2 className="text16">Web Design</h2>
              <span className="text17">
                <span>
                  We build custom HTML-based static sites for small businesses.
                  Static sites are the next generation of website building with
                  its incredibly fast loading speeds, it&apos;s unbeatable.
                </span>
              </span>
            </div>
            <div className="feature-card4">
              <img
                alt="image"
                src="/playground_assets/seo-training-200h.png"
                className="image07"
              />
              <h2 className="text19">Consultation</h2>
              <span className="text20">
                Got a problem you&apos;d like to overcome? Let&apos;s sit down
                and talk and see what we can do for you.
              </span>
            </div>
            <div className="feature-card5">
              <img
                alt="image"
                src="c14775a5-c626-4d8f-a899-0f7d173e319c"
                className="image08"
              />
              <h2 className="text21">Creative Drive</h2>
              <span className="text22">
                Do you have a hard time coming up with ideas for your brand? We
                work with our clients to bring ideas to conceptualization.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
        </div>
        <div id="services" className="services">
          <div className="service-card">
            <div className="card-content">
              <h3 className="text23 bigCard-Heading">Start from scratch</h3>
              <span className="text24 card-Text">
                Wondering how to get started from scratch? Looking to jump right
                into building one of your digital assets? Let&apos;s do it
                together!
              </span>
              <a
                href="https://g8cwdl3p3qp.typeform.com/to/Nnyj7uPu"
                target="_blank"
                rel="noreferrer noopener"
                className="link08 button anchor"
              >
                Start Now
              </a>
            </div>
          </div>
          <div className="service-card1">
            <div className="card-content1">
              <h3 className="text25 bigCard-Heading">Redesign</h3>
              <span className="text26 card-Text">
                Redesigning your site? Let&apos;s redesign it together.
              </span>
              <a
                href="https://g8cwdl3p3qp.typeform.com/to/Nnyj7uPu"
                target="_blank"
                rel="noreferrer noopener"
                className="link09 button anchor"
              >
                Start now
              </a>
            </div>
          </div>
        </div>
        <div id="story" className="about-us">
          <div className="heading-container">
            <h2 className="text27 section-Heading">
              What&apos;s the story behind our product?
            </h2>
            <span className="secondary-text section-Text">
              From passion project to pursuing my passion.
            </span>
            <a
              href="https://g8cwdl3p3qp.typeform.com/to/Nnyj7uPu"
              target="_blank"
              rel="noreferrer noopener"
              className="cta-btn3 button anchor"
            >
              START BUILDING
            </a>
          </div>
          <div className="text-container">
            <span className="text28 section-Text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
          </div>
          <button className="cta-btn4 button anchor">START BUILDING</button>
        </div>
        <div className="section-separator1"></div>
        <div id="testimonials" className="testimonials">
          <h2 className="text29 section-Heading">
            What are they saying about us?
          </h2>
          <div className="cards-container">
            <div className="testimonial-card">
              <div className="card-heading">
                <div className="name-and-position">
                  <span className="card-Heading">Michael H.</span>
                  <span className="position card-Text">
                    Local teacher + Entrepreneur
                  </span>
                </div>
                <div className="stars-container">
                  <svg viewBox="0 0 950.8571428571428 1024" className="icon10">
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg viewBox="0 0 950.8571428571428 1024" className="icon12">
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg viewBox="0 0 950.8571428571428 1024" className="icon14">
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg viewBox="0 0 950.8571428571428 1024" className="icon16">
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg viewBox="0 0 950.8571428571428 1024" className="icon18">
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                </div>
              </div>
              <span className="text30 card-Text">
                Kai has supported my business by providing creative marketing
                solutions and effective digital advertising. He’s quick to
                execute on strategies identified to get results. Thanks for
                expanding our reach and helping us to acquire new customers!
              </span>
            </div>
            <div className="testimonial-card1">
              <div className="card-heading1">
                <div className="name-and-position1">
                  <span className="card-Heading">Ryan Neal</span>
                  <span className="position1 card-Text">
                    Owner @ Escape Hilo
                  </span>
                </div>
                <div className="stars-container1">
                  <svg viewBox="0 0 950.8571428571428 1024" className="icon20">
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg viewBox="0 0 950.8571428571428 1024" className="icon22">
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg viewBox="0 0 950.8571428571428 1024" className="icon24">
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg viewBox="0 0 950.8571428571428 1024" className="icon26">
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg viewBox="0 0 950.8571428571428 1024" className="icon28">
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                </div>
              </div>
              <span className="text31 card-Text">
                As a local business owner, working with Manner Media has been
                incredible! Great advertising and services. 10/10 Highly
                recommend
              </span>
            </div>
            <div className="testimonial-card2">
              <div className="card-heading2">
                <div className="name-and-position2">
                  <span className="card-Heading">Taylor Sam</span>
                  <span className="position2 card-Text">Position</span>
                </div>
                <div className="stars-container2">
                  <svg viewBox="0 0 950.8571428571428 1024" className="icon30">
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg viewBox="0 0 950.8571428571428 1024" className="icon32">
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg viewBox="0 0 950.8571428571428 1024" className="icon34">
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg viewBox="0 0 950.8571428571428 1024" className="icon36">
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg viewBox="0 0 950.8571428571428 1024" className="icon38">
                    <path d="M649.714 573.714l174.857-169.714-241.143-35.429-108-218.286-108 218.286-241.143 35.429 174.857 169.714-41.714 240.571 216-113.714 215.429 113.714zM950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 15.429-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                </div>
              </div>
              <span className="text32 card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </span>
            </div>
          </div>
        </div>
        <div id="contact" className="contact">
          <div className="content-container">
            <h2 className="text33 section-Heading">
              This is how to contact me
            </h2>
            <a
              href="https://g8cwdl3p3qp.typeform.com/to/Nnyj7uPu"
              target="_blank"
              rel="noreferrer noopener"
              className="cta-btn5 anchor button"
            >
              CONTACT NOW
            </a>
          </div>
        </div>
        <footer className="footer">
          <div className="container4">
            <div className="logo1">
              <img
                alt="logo"
                src="/playground_assets/add%20a%20heading%5B4%5D-200h.png"
                className="image09"
              />
            </div>
            <div className="links-container">
              <div className="container5">
                <div className="company-container">
                  <span className="text34">Company</span>
                  <a href="#about-us" className="link10">
                    About Us
                  </a>
                  <a href="#features" className="link11">
                    Features
                  </a>
                  <a href="#services" className="link12">
                    Start now
                  </a>
                  <a href="#story" className="link13">
                    My story
                  </a>
                </div>
              </div>
              <div className="container6">
                <div className="contact1">
                  <span className="text35">
                    <span>Manner.Media.Biz</span>
                    <br></br>
                    <span>@gmail.com</span>
                  </span>
                </div>
                <div className="socials">
                  <span className="text39">Follow Us</span>
                  <div className="icon-group">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="icon40"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="icon42"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="icon44"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="separator"></div>
          <span className="text40">
            <span>© 2021 Manner Media LLC, All Rights Reserved.</span>
            <span className="text42"></span>
            <span></span>
          </span>
        </footer>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .navbar-container {
            top: 0;
            width: 100%;
            display: flex;
            z-index: 100;
            position: sticky;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .navbar {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
          }
          .logo {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .image {
            width: 110px;
            object-fit: cover;
          }
          .links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .link {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .link01 {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .link02 {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .link03 {
            text-decoration: none;
          }
          .cta-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .cta-btn {
            color: var(--dl-color-gray-white);
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-fiveunits);
            border-radius: 34px;
            padding-right: var(--dl-space-space-fiveunits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-primary-100);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .burger-menu {
            display: none;
            align-items: flex-start;
            flex-direction: column;
          }
          .icon {
            width: 36px;
            height: 36px;
          }
          .mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-doubleunit);
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .image01 {
            width: 50px;
            object-fit: cover;
          }
          .container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .icon02 {
            width: 24px;
            height: 24px;
          }
          .mid {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .links-container1 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
          }
          .link04 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .link05 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .link06 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .link07 {
            text-decoration: none;
          }
          .cta-btn1 {
            color: var(--dl-color-gray-white);
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-fiveunits);
            border-radius: 34px;
            padding-right: var(--dl-space-space-fiveunits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-primary-100);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .bot {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            margin-top: auto;
            align-items: flex-start;
            flex-direction: column;
          }
          .social-links-container {
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: row;
          }
          .icon04 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .icon06 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .icon08 {
            width: 24px;
            height: 24px;
          }
          .hero {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
          }
          .hero-text-container {
            width: 35%;
            display: flex;
            align-items: flex-start;
            margin-left: 50px;
            flex-direction: column;
          }
          .heading {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .text01 {
            color: #000000;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .cta-btn2 {
            color: var(--dl-color-gray-white);
            align-self: stretch;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-primary-100);
          }
          .image02 {
            width: 50%;
            object-fit: contain;
          }
          .section-separator {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-700);
          }
          .features {
            width: 100%;
            display: flex;
            padding: 48px;
            position: relative;
            max-width: 1400px;
            align-items: center;
            flex-direction: column;
          }
          .text02 {
            font-size: 3rem;
            margin-bottom: 32px;
          }
          .text04 {
            color: #000000;
            width: 70%;
            font-size: 1.15rem;
            text-align: center;
          }
          .text06 {
            font-weight: 700;
          }
          .container2 {
            width: 100%;
            display: grid;
            grid-gap: 32px;
            margin-top: var(--dl-space-space-fourunits);
            grid-template-columns: 1fr 1fr 1fr;
          }
          .feature-card {
            width: 100%;
            display: flex;
            padding: 32px;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            flex-direction: column;
          }
          .image03 {
            width: 100px;
            object-fit: cover;
          }
          .text08 {
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .text09 {
            color: #606060;
            text-align: center;
          }
          .feature-card1 {
            width: 100%;
            display: flex;
            padding: 32px;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            flex-direction: column;
          }
          .image04 {
            width: 100px;
            object-fit: cover;
          }
          .text10 {
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .text11 {
            color: #606060;
            text-align: center;
          }
          .feature-card2 {
            width: 100%;
            display: flex;
            padding: 32px;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            flex-direction: column;
          }
          .image05 {
            width: 100px;
            object-fit: cover;
          }
          .text12 {
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .text13 {
            font-style: normal;
            font-weight: 700;
          }
          .text14 {
            font-style: normal;
          }
          .text15 {
            color: #606060;
            text-align: center;
          }
          .container3 {
            width: 100%;
            display: grid;
            grid-gap: 32px;
            align-self: center;
            margin-top: var(--dl-space-space-fourunits);
            grid-template-columns: 1fr 1fr 1fr;
          }
          .feature-card3 {
            width: 100%;
            display: flex;
            padding: 32px;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            flex-direction: column;
          }
          .image06 {
            width: 100px;
            object-fit: cover;
          }
          .text16 {
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .text17 {
            color: #606060;
            text-align: center;
          }
          .feature-card4 {
            width: 100%;
            display: flex;
            padding: 32px;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            padding-top: 32px;
            flex-direction: column;
          }
          .image07 {
            width: 100px;
            object-fit: cover;
          }
          .text19 {
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .text20 {
            color: #606060;
            text-align: center;
          }
          .feature-card5 {
            width: 100%;
            display: flex;
            padding: 32px;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            flex-direction: column;
          }
          .image08 {
            width: 100px;
            object-fit: cover;
          }
          .text21 {
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .text22 {
            color: #606060;
            text-align: center;
          }
          .services {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .service-card {
            width: 49%;
            display: flex;
            min-height: 500px;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-900);
          }
          .card-content {
            margin: var(--dl-space-space-fiveunits);
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            max-width: 500px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .text23 {
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .text24 {
            color: #000000;
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .link08 {
            color: var(--dl-color-gray-white);
            width: 80%;
            align-self: center;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            text-decoration: none;
            background-color: var(--dl-color-primary-100);
          }
          .service-card1 {
            width: 49%;
            display: flex;
            min-height: 500px;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-900);
          }
          .card-content1 {
            margin: var(--dl-space-space-fiveunits);
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            max-width: 500px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .text25 {
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .text26 {
            color: #000000;
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .link09 {
            color: var(--dl-color-gray-white);
            width: 80%;
            align-self: center;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            text-decoration: none;
            background-color: var(--dl-color-primary-100);
          }
          .about-us {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: flex-start;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .heading-container {
            width: 35%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .text27 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .secondary-text {
            color: var(--dl-color-gray-500);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .cta-btn3 {
            color: var(--dl-color-gray-white);
            width: 80%;
            align-self: flex-start;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            text-decoration: none;
            background-color: var(--dl-color-primary-100);
          }
          .text-container {
            width: 45%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .text28 {
            color: var(--dl-color-gray-500);
          }
          .cta-btn4 {
            color: var(--dl-color-gray-white);
            width: 80%;
            display: none;
            align-self: flex-start;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-primary-100);
          }
          .section-separator1 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-700);
          }
          .testimonials {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .text29 {
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .cards-container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .testimonial-card {
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .card-heading {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .name-and-position {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .position {
            color: var(--dl-color-gray-700);
          }
          .stars-container {
            width: 50%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: row;
          }
          .icon10 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .icon12 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .icon14 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .icon16 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .icon18 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .text30 {
            color: var(--dl-color-gray-500);
            text-align: left;
          }
          .testimonial-card1 {
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .card-heading1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .name-and-position1 {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .position1 {
            color: var(--dl-color-gray-700);
          }
          .stars-container1 {
            width: 50%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: row;
          }
          .icon20 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .icon22 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .icon24 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .icon26 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .icon28 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
          }
          .text31 {
            color: var(--dl-color-gray-500);
            text-align: left;
          }
          .testimonial-card2 {
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .card-heading2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .name-and-position2 {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .position2 {
            color: var(--dl-color-gray-700);
          }
          .stars-container2 {
            width: 50%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: row;
          }
          .icon30 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .icon32 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .icon34 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .icon36 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .icon38 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
          }
          .text32 {
            color: var(--dl-color-gray-500);
            text-align: left;
          }
          .contact {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .content-container {
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            align-self: center;
            align-items: center;
            border-color: var(--dl-color-gray-700);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .text33 {
            margin-top: var(--dl-space-space-fiveunits);
            text-align: center;
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .cta-btn5 {
            color: var(--dl-color-gray-white);
            width: 80%;
            align-self: center;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            text-decoration: none;
            background-color: var(--dl-color-primary-100);
          }
          .footer {
            width: 100%;
            display: flex;
            max-width: 1400px;
            align-items: center;
            padding-top: 32px;
            padding-left: 48px;
            padding-right: 48px;
            flex-direction: column;
            padding-bottom: 32px;
            justify-content: space-between;
          }
          .container4 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .logo1 {
            display: flex;
            max-width: 1400px;
            align-items: flex-start;
            flex-direction: column;
          }
          .links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .container5 {
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: row;
            justify-content: space-between;
          }
          .company-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .text34 {
            font-weight: 700;
            margin-bottom: 24px;
          }
          .link10 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .link11 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .link12 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .link13 {
            text-decoration: none;
          }
          .container6 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .contact1 {
            display: flex;
            align-items: flex-start;
            margin-bottom: 24px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .text35 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .socials {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .text39 {
            font-weight: 700;
            margin-bottom: 24px;
          }
          .icon-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .icon40 {
            width: 16px;
            height: 16px;
            margin-right: var(--dl-space-space-unit);
          }
          .icon42 {
            width: 16px;
            height: 16px;
            margin-right: var(--dl-space-space-unit);
          }
          .icon44 {
            width: 16px;
            height: 16px;
          }
          .separator {
            width: 100%;
            height: 1px;
            margin-top: 32px;
            margin-bottom: 32px;
            background-color: var(--dl-color-gray-900);
          }
          .text40 {
            align-self: center;
          }
          .text42 {
            text-align: left;
          }
          @media (max-width: 991px) {
            .hero {
              flex-direction: column-reverse;
            }
            .hero-text-container {
              width: 80%;
            }
            .cta-btn2 {
              width: 40%;
            }
            .image02 {
              width: 80%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .text02 {
              text-align: center;
            }
            .text04 {
              text-align: center;
            }
            .container2 {
              grid-template-columns: 1fr 1fr;
            }
            .container3 {
              grid-template-columns: 1fr 1fr;
            }
            .about-us {
              flex-direction: column;
            }
            .heading-container {
              width: 100%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .cta-btn3 {
              width: 40%;
              display: none;
            }
            .text-container {
              width: 100%;
            }
            .cta-btn4 {
              width: 280px;
              display: block;
              margin-top: var(--dl-space-space-doubleunit);
            }
            .cta-btn5 {
              width: 40%;
              display: none;
            }
            .footer {
              flex-direction: column;
            }
            .container5 {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .links-container {
              width: 100%;
              align-items: flex-start;
              flex-direction: row;
              justify-content: center;
            }
            .cta-btn {
              display: none;
            }
            .burger-menu {
              display: flex;
              padding: var(--dl-space-space-halfunit);
              margin-left: var(--dl-space-space-tripleunit);
              border-radius: var(--dl-radius-radius-radius4);
              background-color: var(--dl-color-gray-black);
            }
            .icon {
              fill: var(--dl-color-gray-white);
            }
            .heading {
              text-align: center;
            }
            .text01 {
              text-align: center;
            }
            .features {
              padding-left: 32px;
              padding-right: 32px;
            }
            .text02 {
              text-align: center;
            }
            .card-content {
              margin: 0px;
            }
            .card-content1 {
              margin: 0px;
            }
            .about-us {
              align-items: center;
            }
            .heading-container {
              align-items: center;
            }
            .text27 {
              text-align: center;
            }
            .secondary-text {
              text-align: center;
            }
            .text29 {
              text-align: center;
            }
            .cards-container {
              align-items: center;
              flex-direction: column;
            }
            .testimonial-card {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .stars-container {
              justify-content: flex-end;
            }
            .testimonial-card1 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .stars-container1 {
              justify-content: flex-end;
            }
            .testimonial-card2 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .stars-container2 {
              justify-content: flex-end;
            }
            .contact {
              padding-right: var(--dl-space-space-tripleunit);
              flex-direction: column;
            }
            .content-container {
              width: 100%;
            }
            .footer {
              padding-left: 32px;
              padding-right: 32px;
            }
            .container4 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .logo1 {
              align-items: center;
            }
            .image09 {
              margin-bottom: 24px;
            }
            .container5 {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 479px) {
            .cta-btn {
              font-size: 16px;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .burger-menu {
              margin-left: var(--dl-space-space-doubleunit);
            }
            .cta-btn1 {
              font-size: 16px;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .hero-text-container {
              width: 374px;
              align-self: center;
              align-items: center;
              margin-left: 0px;
              justify-content: center;
            }
            .cta-btn2 {
              align-self: center;
              text-align: center;
            }
            .image02 {
              width: 100%;
            }
            .features {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .container2 {
              grid-template-columns: 1fr;
            }
            .container3 {
              grid-template-columns: 1fr;
            }
            .service-card {
              width: 100%;
            }
            .service-card1 {
              width: 100%;
            }
            .secondary-text {
              text-align: center;
            }
            .cta-btn4 {
              align-self: center;
            }
            .text29 {
              text-align: center;
            }
            .testimonial-card {
              width: 100%;
            }
            .testimonial-card1 {
              width: 100%;
            }
            .testimonial-card2 {
              width: 100%;
            }
            .content-container {
              align-items: center;
              padding-left: 0px;
              padding-right: 0px;
            }
            .text33 {
              text-align: center;
            }
            .footer {
              padding: var(--dl-space-space-unit);
            }
            .container4 {
              align-items: center;
              flex-direction: column;
            }
            .image09 {
              margin-bottom: 0px;
            }
            .links-container {
              align-items: center;
              flex-direction: column;
            }
            .container5 {
              margin-right: 0px;
            }
            .container6 {
              margin-top: 24px;
              align-items: flex-start;
              margin-bottom: 0px;
            }
            .contact1 {
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-unit);
            }
            .text40 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
