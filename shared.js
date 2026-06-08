const LABELS = {
  medusa: {
    id:     'medusa',
    name:   'Medusa Pictures',
    short:  'Medusa',
    color:  '#922B2B',
    bg:     '#F0E6E6',
    desc:   "The original British home-video label, active from the 1980s to the 2000s. Its catalogue spans action, horror, thriller, and international genre releases distributed on VHS across the United Kingdom, as well as theatrical releases ranging from the cult classic <i>Teenage Mutant Ninja Turtles</i> to Rob Reiner's legendary film adaptation of Stephen King's <i>Misery</i>.<br>They have been mainly known as <b>Medusa Communications Limited</b>, and later as <b>Medusa Communications and Marketing Limited</b>, but often branded as <b>Medusa Pictures</b>. For clarity, we will mainly refer to them as the latter.<br><br>Although reasonable care has been taken in preparing this content, this page might contain inaccuracies or omissions. Please <b><a href=\"#contact\">Contact Us</a></b> for corrections.<br><strong>Note:</strong> Many online databases begin certain Medusa catalogue numbers with \'MO\', but it has been officially confirmed that these numbers were an \'M\' followed by four numbers beginning with the <i>number</i> \'0\', and not the <i>letter</i> \'O\'.",
    period: '1980s – 2000s',
    region: 'United Kingdom',
  },
  hkl: {
    id:     'hkl',
    name:   'Hong Kong Legends',
    short:  'HKL',
    color:  '#8C6E18',
    bg:     '#F3EDD8',
    desc:   'A specialist label dedicated to Hong Kong cinema. They released more than a hundred films, selecting and restoring the films with the highest quality prints available directly from Hong Kong film studios and creating exclusive audio commentaries, interviews, subtitles and more.<br><br>This list is non-exhaustive. If you find any missing titles, please contact us: <b><a href="contact.html">Contact Us</a></b>.<br>Contrary to the other catalogues, years of release here refer to the original release, and not necessarily the Hong Kong Legends DVD release.',
    period: '1999 — 2007',
    region: 'UK / Australia',
  },
  pegasus: {
    id:     'pegasus',
    name:   'Pegasus Home Video',
    short:  'Pegasus',
    color:  '#275F6E',
    bg:     '#D8EDF2',
    desc:   'A short-lived Medusa Pictures label active in the mid- to late 1980s, releasing a small catalogue of action titles on VHS with distribution handled by PolyGram Video.',
    period: 'mid-1980s',
    region: 'United Kingdom',
  },
  premier: {
    id:     'premier',
    name:   'Premier Asia',
    short:  'Premier',
    color:  '#275F6E',
    bg:     '#D8EDF2',
    desc:   'A distribution label focused on undervalued cinema from Thailand, Japan and South Korea, releasing films to DVD throughout the 2000s with occasional exclusive remastered versions, audio commentaries and extras.',
    period: '2003 — 2008',
    region: 'United Kingdom',
  },
  newdim: {
    id:     'newdim',
    name:   'New Dimension Home Video',
    short:  'ND',
    color:  '#4A3D7A',
    bg:     '#EAE7F5',
    desc:   'A joint venture between Medusa Pictures and Guild Home Video started in 1986, releasing international genre and action titles on VHS across the United Kingdom. They usually focused on action, fantasy and horror titles intended for mature audiences, and most of their releases were rated \'18\' by the British Board of Film Classification.',
    period: '1986 — 1988',
    region: 'United Kingdom',
  }
};

/* ----------------------------------------------------------------
   PLACEHOLDER ENTRIES
   Replace each with a real object. All fields are required unless noted.
   Example of a filled entry:
   {
     id:            'med-001',
     cat:           'MED 001',
     title:         'Actual Film Title',
     year:          1984,
     director:      'Director Name',
     country:       'UK',
     genre:         'Action',
     format:        'VHS',
     synopsis:      'Actual synopsis text.',
     notes:         'Released in a cut version. Uncut print sourced from Italian distributor.',
     originalTitle: 'Titolo Originale',   // optional — for non-English titles
   }
---------------------------------------------------------------- */


/* ============================================================
   ROUTER
============================================================ */

function go(page) {
  const map = {
    'home':               'index.html',
    'about':              'about.html',
    'contact':            'contact.html',
    'catalogue/medusa':   'catalogue-medusa.html',
    'catalogue/hkl':      'catalogue-hkl.html',
    'catalogue/newdim':   'catalogue-newdim.html',
    'catalogue/pegasus':  'catalogue-pegasus.html',
    'catalogue/premier':  'catalogue-premier.html',
  };
  window.location.href = map[page] || 'index.html';
}

/* ============================================================
   HOME
============================================================ */

function renderHome(app) {
  app.innerHTML = `
    <div class="home-hero">
      <div class="home-hero-inner">
        <div>
          <h1 class="home-hero-title">
            Medusa<br><em>Pictures</em>
          </h1>
        </div>
        <div>
          <p class="home-hero-lead">
            An archival project documenting the release history of London-based <b>Medusa Pictures</b>
            and its associated labels — a catalogue of British home-video distribution
            started in the 1980s and active until the late 2000s.
          </p>
          <div class="home-hero-dividers">
            <div class="hero-div-item" onclick="go('catalogue/medusa')">
              <span class="hero-div-name" style="color:var(--medusa)">Medusa Pictures</span>
              <span class="hero-div-period">1980s – 2000s</span>
            </div>
            <div class="hero-div-item" onclick="go('catalogue/pegasus')">
              <span class="hero-div-name" style="color:var(--pegasus)">Pegasus Home Video</span>
              <span class="hero-div-period">mid-1980s</span>
            </div>
            <div class="hero-div-item" onclick="go('catalogue/newdim')">
              <span class="hero-div-name" style="color:var(--newdim)">New Dimension Home Video</span>
              <span class="hero-div-period">1986 — 1988</span>
            </div>
            <div class="hero-div-item" onclick="go('catalogue/hkl')">
              <span class="hero-div-name" style="color:var(--hkl)">Hong Kong Legends</span>
              <span class="hero-div-period">1999 — 2007</span>
            </div>
            <div class="hero-div-item" onclick="go('catalogue/premier')">
              <span class="hero-div-name" style="color:var(--premier)">Premier Asia</span>
              <span class="hero-div-period">2003 — 2008</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="home-divisions">
      <div class="div-block" style="--ac:var(--medusa); --ac-bg:var(--medusa-bg);" onclick="go('catalogue/medusa')">
        <p class="div-num">Main Label</p>
        <h2 class="div-name">Medusa<br>Pictures</h2>
        <span class="div-period-tag">1980s – early 1990s</span>
        <p class="div-desc">
          The founding label. A wide-ranging catalogue of international movies and series distributed across the United Kingdom throughout three decades of activity.<br>These include diverse classics such as <i>Misery</i>, Sergio Leone's <i>My Name is Nobody</i>, <i>Teenage Mutant Ninja Turtles</i>, <i>Sabrina the Teenage Witch</i>, <i>C.H.U.D.</i>, and the famous TV adaptation of <i>A Christmas Carol</i> by CBS.
        </p>
        <span class="div-cta">Browse catalogue →</span>
      </div>
      <div class="div-block" style="--ac:var(--pegasus); --ac-bg:var(--pegasus-bg);" onclick="go('catalogue/pegasus')">
        <p class="div-num">Label II</p>
        <h2 class="div-name">Pegasus<br>Home Video</h2>
        <span class="div-period-tag">mid-1980s</span>
        <p class="div-desc">
          A short-lived label under Medusa Pictures, releasing a small number of
          action titles on VHS with distribution handled by PolyGram Video.
        </p>
        <span class="div-cta">Browse catalogue →</span>
      </div>
      <div class="div-block" style="--ac:var(--newdim); --ac-bg:var(--newdim-bg);" onclick="go('catalogue/newdim')">
        <p class="div-num">Label III</p>
        <h2 class="div-name">New<br>Dimension</h2>
        <span class="div-period-tag">1986 — 1988</span>
        <p class="div-desc">
          A joint venture with Guild Home Video, releasing international genre
          and action titles on VHS across the United Kingdom under a shared
          distribution arrangement.
        </p>
        <span class="div-cta">Browse catalogue →</span>
      </div>
      <div class="div-block" style="--ac:var(--hkl); --ac-bg:var(--hkl-bg);" onclick="go('catalogue/hkl')">
        <p class="div-num">Label IV</p>
        <h2 class="div-name">Hong Kong<br>Legends</h2>
        <span class="div-period-tag">1999 — 2007</span>
        <p class="div-desc">
          A dedicated label for Hong Kong martial arts and action cinema, presenting
          remastered editions with exclusive new content across more than a hundred DVD's and box sets for collectors and fans.
        </p>
        <span class="div-cta">Browse catalogue →</span>
      </div>
      <div class="div-block" style="--ac:var(--premier); --ac-bg:var(--premier-bg);" onclick="go('catalogue/premier')">
        <p class="div-num">Label V</p>
        <h2 class="div-name">Premier<br>Asia</h2>
        <span class="div-period-tag">2003 – 2008</span>
        <p class="div-desc">
          The group's later distribution arm, releasing contemporary Asian action
          and genre titles throughout the 2000s.
        </p>
        <span class="div-cta">Browse catalogue →</span>
      </div>
    </div>

    <div class="home-mission">
      <p class="home-mission-label">Purpose</p>
      <p class="home-mission-body">
        This project exists to <b>document and preserve</b> the complete history of Medusa Pictures and its many labels, and to provide a <b>complete catalogue</b> of their releases.<br>If any mistakes are found, please contact us through this page: <strong><a href="contact.html">Contact Us</a></strong>.
      </p>
    </div>`;
}

/* ============================================================
   ABOUT
============================================================ */

function renderAbout(app) {
  app.innerHTML = `
    <div class="page-header">
      <h1 class="page-title">About Medusa Pictures</h1>
    </div>

    <div class="about-body">
      <div class="about-sec">
        <p class="about-sec-label">I — Origin</p>
        <div>
          <h2 class="about-sec-title">A Complete History of the Labels</h2>
          <div class="about-sec-body">
            <p>
              <strong>Medusa Pictures</strong>, also known as <strong>Medusa Home Video</strong> and initially as <strong>Medusa Communications</strong>, was a film distributor based in London.
            </p>
            <p>
              The evolution of the company over several decades perfectly reflects the changing landscape of the home entertainment industry, from the VHS boom to the DVD era, and to the eventual decline of home video.
            </p>
            <p>
              This is the chronological history of Medusa, the parallel corporate ventures of its founders, and the legacy they left behind.
            </p>
            <br><h3>The Beginnings</h3>
            <p>
              It all started with a carpet business.
            </p>
            <p>
              In the late 1970s, <b>Gordon Carpets</b> was a business based in Stevenage, Hertfordshire. It was owned by <strong>Stephen Peter Rivers</strong> and his lifelong partner, <strong>David John Hodgins</strong>. The company had just taken over a warehouse in Hitchin, and both of them were hoping to expand their business, but Rivers and Hodgins realised they faced heavier competition than anticipated.
              <br>
              Both of them being film lovers, they took a risky bet by choosing another path, which would end up changing their lives: the home video trade.
            </p>
            <p>
              In 1979, they borrowed about £6,000 and opened two stores in Hitchin – a 15-minute drive from Stevenage – under the name <b>Video Exchange</b>:
            </p>
            <ul style="padding-left: 50px;">
              <li>One store for <b>VHS</b> – Video Home System, a completely new standard for analog video recording on tape cassettes, introduced by JVC three years before,</li>
              <li>and one for <b>Betamax</b>, a similar system introduced by Sony even earlier, which would soon be dominated by its rival.</li>
            </ul>
            <blockquote class="pull-quote">
              <p>Nobody had ever heard of [home video]. We were one of the first shops to open up. I remember it was a Saturday. My business partner went down there to open up. He phoned me and said: ‘Steve, there’s a queue a mile long.’</p>
              Stephen Rivers
            </blockquote>
            <p>
              Indeed, in the early 1980s, it wouldn't be long before the streets of the United Kingdom became the staging ground for a cultural and economic phenomenon slowly spreading around the world: the home video boom. And before Hollywood conglomerates standardized the retail distribution of videotapes, the British market was a wild, highly fragmented frontier dominated by independent distributors.
            </p>
            <p>
              Rivers and Hodgins knew to react quickly to that gold rush, and during the start of this new decade, they decided to set up their own home video distribution company: <strong>Medusa Communications Ltd.</strong>
            </p>
            <p>
              The company's name and identity came from the very same place that led to it: Video Exchange.
              <br>
              Behind one of the two shops worked an elderly woodcarver. As David Hodgins happened to meet him one day, the man was eager to show the two partners his collection of wooden figures. And one piece in particular stood out to them: simply titled <i>Hair</i>, they both thought it looked very similar to the head of Medusa, the famous Gorgon from Greek mythology. As their new company was in the process of being formed, this event gave them the name they were missing.
            </p>
            <p>
              The original Medusa logo — inspired by that same sculpture — was brought to life by the agency Impressions, run by designer Alex Smith. Smith would later become head of Medusa's internal graphics studio, which produced all of their promotional material, allowing them to cut down on external marketing costs while stopping competitors from hiring the same design agency.
            </p>
            <p>
              About the fate of the original sculpture itself, Stephen Rivers also adds:
              <blockquote class="pull-quote">
                <p>Eventually, we were able to purchase the piece from [the woodcarver], on the condition that he could borrow it back whenever he needed it for exhibitions. Over the years, it took pride of place in the company director’s office and was always a great conversation piece.</p>
                Stephen Rivers
              </blockquote>
            </p>
            <div style="display:flex; gap:1rem;">
              <img src="images/medusa_face.png" alt="The illustrated face of Medusa, used as the first logo of Medusa Communications" style="height:150px; object-fit:cover;">
              <img src="images/medusa_communications.jpg" alt="Medusa Communications animated logo, as seen on early VHS releases" style="height:150px; object-fit:cover;">
            </div><br>
            <p>
              In 1981, Medusa Home Video made its first major market entry during the lawless era of "pre-certification" tapes—videotapes released before the UK government mandated official ratings for home viewing. Their debut title was Joe D'Amato's notorious Italian exploitation horror film <i>Absurd</i> (1981).
              <br>
              By 1983, the UK’s moral panic over <b>"Video Nasties"</b> reached a boiling point. People throughout the country were worried about the effects of fictionalised violence on young, impressionable audiences. Like many similar films, <i>Absurd</i> was placed on the Director of Public Prosecutions' blacklist. In 1984, the film would even become one of only 39 titles in British history to be successfully prosecuted and banned under the Obscene Publications Act.
            </p>
            <p>
              Despite the context, David Hodgins defended the company's position in <i>Video Retailer</i> – a trade magazine supplied to video shops:
            </p>
            <blockquote class="pull-quote">
              <p>I have faith in this long-standing establishment.</p>
              David Hodgins
            </blockquote>
            <p>
              Medusa faced another blow when they released the slasher film <i>Madhouse</i> (1981) uncut in January 1983, only to have it pulled from circulation by November during the height of the police sweeps.
            </p>
            <p>
              After several years of nationwide controversy, in 1984, the Parliament of the United Kingdom passed an act that would change everything – the <b>Video Recordings Act</b> – requiring all distributors to submit their entire libraries to the British Board of Film Classification (BBFC) before release.
            </p>
            <br><h3>Expansions</h3>
            <p>
              Rivers and Hodgins knew they had to navigate intense challenges to secure shelf space against major Hollywood studio releases from companies like Columbia TriStar, Warner Bros., and 20th Century Fox, which naturally generated the highest customer demand.
              <br>
              Lacking the massive marketing budgets of these conglomerates, independent survival relied on a different strategy.
            </p>
            <blockquote class="pull-quote">
              <p>Many video shop owners were surprisingly willing to take chances on independent releases if they believed the title could generate rentals.
              <br>
              In the rental era, a shop only needed a film to be rented repeatedly to justify buying several copies. Strong cover artwork, an intriguing title, a recognisable actor, or good word-of-mouth could make a significant difference. Store owners often relied on personal relationships with sales representatives and distributors when deciding what to stock.</p>
              Stephen Rivers
            </blockquote>
            <p>
              During the 1980s, Medusa also operated a number of subsidiary labels aimed at different market segments.
            </p>
            <ul style="padding-left: 50px;">
              <li><strong>Pegasus Home Video</strong>: Established as a sister label in the mid-1980s to distribute budget action and genre titles, with PolyGram Video handling physical distribution.</li>
              <li><strong>Cobra Films</strong>: Another off-shoot label, Cobra was used to distribute two low-budget films and was quickly abandoned.</li>
              <li><strong>New Dimension</strong>: In November 1986, Medusa signed a partnership with Guild Home Video, launching the "New Dimension" brand (marketed as "Guild's added Dimension"). Managed by Peter Johnson, Guild's sales director, New Dimension combined Medusa's eye for low-budget acquisitions with Guild's established national distribution network.</li>
            </ul>
              <div style="display:flex; gap:1rem;">
                <img src="images/pegasus_logo.png" alt="Pegasus Home Video animated logo, as seen on their VHS releases" style="height:150px; object-fit:cover;">
                <img src="images/cobra_logo.png" alt="Cobra Films Limited logo, as seen on their VHS releases" style="height:150px; object-fit:cover;">
                <img src="images/newdim_logo.png" alt="New Dimension Home Video logo, as seen on the cover and intro of their VHS releases" style="height:150px; object-fit:cover;">
              </div><br>
            <p>
              The Guild partnership was quite significant: in late 1986, Guild signed an agreement to supply Medusa with <b>two titles per month</b>, allowing the independent label to maintain a steady flow of fresh product on rental shelves.
            </p>
            <br><h3>The Golden Age</h3>
            <p>
              By the late 1980s, home video had already become a <b>mainstream household technology</b> in the United Kingdom, with well over half of British homes owning a VCR. Independent video shops now appeared in suburbs, market towns, and even villages, making it one of the most important parts of the entertainment business, and leading to intense competition.
            </p>
            <p>
              Around 1988, the company rebranded under the <strong>Medusa Pictures</strong> moniker. To match this new identity, they introduced a 13-second, 3D computer-animated 'filmstrip' logo, replacing the simpler Scanimate-animated logo of their early years.
            </p>
              <img src="images/medusa_pictures.png" alt="Animated filmstrip logo of Medusa Pictures, as seen on most VHS releases by the company" style="height:150px; object-fit:cover;">
            <p>
              Branding quickly became a vital part of the company's survival strategy. Rather than relying on costly advertising campaigns, Medusa survived by keeping overheads low, moving flexibly to acquire niche genres like horror and martial arts, and marketing effectively on limited budgets. Co-founder Stephen Rivers notes how crucial that physical presentation was for an independent label:
            </p>
            <blockquote class="pull-quote">
              <p>In the video rental era, a striking sleeve could be just as important as the film itself in attracting attention from customers browsing the shelves. Trailers on existing releases also helped build anticipation and create demand for forthcoming titles before they even reached video shops.
              <br>
              This approach enabled Medusa to compete successfully against much larger distributors despite having far fewer marketing resources.</p>
              Stephen Rivers
            </blockquote>
            <p>
              During this era, international master-sharing was highly common, leading to a visual anomaly on the Brazilian VHS release of Roland Emmerich's sci-fi debut <i>Moon 44</i> (1990):
              <br>
              Medusa owned the UK home video rights to the film, which they distributed in November 1990 via CBS/Fox Video. But when the Brazilian duplicator imported the master tape, they accidentally left the UK video master intact, leaving Medusa's 3D computer logo physically plastered over the original Overseas Filmgroup logo.
            </p>
            <p>
              Eventually, in 1990, Medusa took another risky gamble: a direct <strong>co-production</strong>. They co-financed and co-produced William Lustig's American slasher sequel <i>Maniac Cop 2</i> (1990) alongside US companies Fadd Enterprises and Movie House Sales Company, all in exchange of an official credit as well as exclusive distribution rights in the UK. Medusa Pictures was credited as a main production company, and David Hodgins was credited on-screen as an executive producer.
            </p>
            <p>
              The 1990s quickly became a difficult period for the entertainment industry, particularly during the British recession, caused by high interest rates, the UK's entry into the European Exchange Rate Mechanism, and the end of the rapid expansion of the late 1980s. At that time, Medusa Communications was forced to let their sales team go, with sales and distribution now handled by external companies such as RCA/Columbia Pictures and Columbia TriStar, but also CBS/Fox Video, PolyGram Video and 20/20 Vision, the latter being a British division of RCA/Columbia Pictures.
            <p>
              In December 1992, Medusa made another controversial theatrical acquisition: Geoffrey Wright's raw and violent skinhead drama <i>Romper Stomper</i>, starring Russell Crowe, during a period of heightened public concern over screen violence. The film was even banned by the Glasgow Council for a 1993 screening.
              <br>
              Despite this hyper-sensitive climate, Medusa successfully argued the artistic merits of the film before the BBFC. The board passed the film completely uncut with an 18 rating.
            </p>
            <p>
              Following the release of <i>Romper Stomper</i> in February 1993, Medusa largely withdrew from theatrical distribution for several years to focus solely on the safety of home video.
            </p>
            <p>
              The company would almost break this hiatus in late 2001. At the MIFED film market in Milan, Stephen Rivers bought the UK, Australian, New Zealand, and Benelux rights to the Thai historical action epic <i>Bang Rajan</i>, which had grossed $9 million in Thailand. Rivers publicly announced that Medusa was considering a full theatrical release. Ultimately, the theatrical run was scrapped, and the movie went straight to home video, eventually becoming one of the most successful releases on their <b>Premier Asia</b> sub-label.
            </p>
            <p>
            On April 28, 1994, the founders officially incorporated their business under the new corporate name <strong>Medusa Communications and Marketing Limited</strong>, establishing long-term headquarters at 45 Warren Street, London, in the <b>Fitzroy House</b> building. Located in the media and creative district of Fitzrovia, and in close proximity to Soho, London's film and television heartland, it was a six-storey commercial office building from the 1970s owned by businessman and televison personality Lord Alan Sugar.
            <br>
            Once again, Rivers and Hodgins were appointed as directors of the company, joined by a larger team to expand their operations.
            </p>
            <br><h3>Transition to DVD & Acquisition</h3>
            <p>
              By the late 1990s, the video rental market was dying. Medusa responded with a successful pivot to collector-oriented, premium DVDs. In 1999, they partnered with Soulblade to acquire the UK rights to Eastern Heroes' catalog, establishing the <strong>Hong Kong Legends</strong> (HKL) sub-label.
              <br>
              Under brand manager Brian White and commentator Bey Logan, HKL became a British standard of boutique physical media. They accessed original vaults and rare extra footage, digitally restored prints, created new translations, and recorded authoritative commentaries, for releases such as <i>Police Story</i>, <i>Drunken Master</i>, <i>Once Upon a Time in China</i>, <i>Iron Monkey</i>, and more than a hundred others, including numerous classics starring Bruce Lee, Jackie Chan, Jet Li or Michelle Yeoh. They followed this in 2003 by launching <strong>Premier Asia</strong>, a sister label dedicated to premium releases from Japan, South Korea, and Thailand, distributing classics like <i>Ong-Bak</i> and Kang Je-gyu's <i>Brotherhood</i>.
            </p>
              <div style="display:flex; gap:1rem;">
                <img src="images/HKL_logo.png" alt="Official logo of Hong Kong Legends" style="height:150px; object-fit:cover;">
                <img src="images/premier_logo.png" alt="Officai logo of Premier Asia, as seen in their DVD releases" style="height:150px; object-fit:cover;">
              </div><br>
            <p>
              In 2002, their release of Takashi Miike's <i>Ichi the Killer</i> finally marked <b>the return of Medusa Communications to theatrical distribution</b>, in a partnership with Hong Kong-based Emperor Multimedia Group (EMG).
            </p>
            <blockquote class="pull-quote">
              <p>We have not done a theatrical release since 1994, but are sticking our nose back in.</p>
              David Hodgins, 2002
            </blockquote>
            <blockquote class="pull-quote">
              <p>Medusa has been doing a great job for Hong Kong movies in Europe and has rejuvenated the fortunes of many.</p>
              May Yip (manager of distribution and Acquisitions at EMG), 2002
            </blockquote>
            <p>
              This would be followed by several more theatrical releases throughout the 2000s, with Medusa's focus remaining on their Hong Kong Legends and Premier Asia DVD releases.
            </p>
            <p>
              After this new success, in February 2004, the <strong>Contender Entertainment Group</strong> (CEG), led by 38-year-old entrepreneur Richard Bridgwood, bought Medusa Communications and Marketing Limited, including all assets and licenses in the deal. The acquisition was mainly seen as a growth move: Contender was hoping to get more scale in the UK video market, boost turnover and profits, and strengthen its position as an independent distributor rather than stay a small player. Bridgwood explained wanting a “step-change” in growth and to “square up” to bigger rivals.
            </p>
            <p>
              The transaction even caused a disagreement in the financial press: The Guardian reported the acquisition as a cash deal worth £8 million to buy out the founders' equity, yet other reports commonly repeat a purchase price of <strong>£20 million</strong>.
              <br>
              This purchase price highlights the importance of Medusa's physical distribution network and lucrative television licensing contracts, including the life-of-series UK video rights to the NBC sitcom <i>Will & Grace</i>, as well as a large catalogue of Jackie Chan films.
            </p>
            <p>
              Following the buyout, David Hodgins and Stephen Rivers temporarily stayed on as non-executive directors at Contender. Richard Bridgwood used Medusa's strong cash flows to fund Contender's original television development division, including the animated preschool series <i>Peppa Pig</i> which had first aired only 3 months after the Medusa acquisition.
            </p>
            <br><h3>The Decline</h3>
            <p>
              The acquisition was a major corporate win for Contender, but Hong Kong Legends and Premier Asia were gradually wound down. Shortly after the buyout, brand manager Brian White resigned, followed by Bey Logan. Both were immediately hired by Harvey Weinstein to launch the competing Dragon Dynasty label in the United States.
            </p>
            <p>
              Without its core creative team, Contender had to cancel several planned HKL releases. They partnered with partwork publisher De Agostini in 2005 to distribute HKL titles with fortnightly magazines, but eventually discontinued the Hong Kong Legends brand on November 5, 2007, with Premier Asia following in 2008.
            </p>
            <p>
              Finally, Hodgins and Rivers resigned from Contender in October 2004. But they had already laid the groundwork for their comeback, incorporating <strong>Showbox Media Group</strong> on December 16, 2003, with the following Mission Statement:
            </p>
            <blockquote class="pull-quote">
              <p>To deliver a steady stream of exciting products to market on demand that will create long-term value for our external stakeholders, and help us to develop a sustained, happy, creative and profitable work environment.</p>
              Showbox Media Group
            </blockquote>
            <p>
              Showbox Media Group was managed by Stephen Rivers and David Hodgins, joined by Steve Hodgins, Neil Williams and Paul Slader. Under the Showbox group, the team managed two major divisions:
            </p>
            <ul style="padding-left: 50px;">
              <li><strong>Showbox Home Entertainment</strong>, responsible for the creative execution and marketing of the group's wide-ranging premium DVD brands, with titles ranging “from contemporary Asian horror right through to classic 1950's British Comedies”,</li>
              <li>and <strong>Slam Dunk Media</strong>, incorporated in June 2006, acting as a specialized publishing imprint under the Showbox umbrella and specialising in “the release of both home-owned and third party campaign (offer-price) DVD brands”.</li>
            </ul>
            <p>
              Through Showbox and Slam Dunk Media, Hodgins and Rivers got back to distributing a wide and diverse catalogue of films to theaters, television and home video throughout the United Kingdom. And through that company, they eventually launched the Cine-Asia label to bring back high-quality East Asian film distribution to the UK.
            </p>
            <p>
              By March 2011, Cine-Asia negotiated a licensing deal with Entertainment One UK (which had acquired Contender in 2007) to revive classic HKL titles under the brand "Cine-Asia Presents Hong Kong Legends," releasing Bruce Lee and Jackie Chan classics with refreshed, modern artwork.
            </p>
            <p>
              As the physical media market drastically declined in the late 2000s, Hodgins and Rivers doubled their efforts to keep Showbox afloat. Rather than letting the company fold during the height of the 2009 global recession, the founders personally stepped in to financially back the Showbox Media Group, securing large cash injections against their own assets to keep the wheels turning through the absolute hardest years of the industry downturn.
              <br>
              And by 2012, as market conditions continued to shift, they successfully navigated the company through these financial hurdles, clearing the old structures and establishing a lean new corporate vehicle: <b>Showbox Entertainment Limited</b>. This move allowed them to consolidate their operations and ensure that their independent distribution legacy survived until 2016, marking the final curtain call on a remarkable three-decade journey through the UK home video landscape.
            </p>
              <div style="display:flex; gap:1rem;">
                <img src="images/printed_logo_1.png" alt="Early logo of Medusa Communications" style="height:150px; object-fit:cover;">
                <img src="images/printed_logo_2.png" alt="VHS and DVD logo of Medusa Pictures" style="height:150px; object-fit:cover;">
                <img src="images/printed_logo_3.png" alt="Later DVD logo of Medusa Pictures" style="height:150px; object-fit:cover;">
              </div>
            <br><h3>The Legacy</h3>
            <p>
              The original corporate shell, Medusa Communications and Marketing Limited, remained dormant long after the Contender sale, undergoing numerous management changes. Following a voluntary application for strike-off filed on December 8, 2020, the company was officially dissolved on March 16, 2021, bringing a quiet end to a 27-year corporate history.
            </p>
            <p>
              Today, the Medusa brand and its many labels remain well remembered by many collectors of physical media.
              <br>
              Few independent distributors evolved as dramatically as Medusa, adapting from the chaotic VHS boom of the early 1980s to the collector-driven DVD renaissance of the 2000s, while helping introduce generations of British audiences to cult, horror and Asian cinema, and occasionally reshaping the industry itself.
            </p>
            <div class="label-cards" style="grid-template-columns: repeat(5, 1fr);">
              <div class="label-card">
                <div class="label-card-dot" style="background:var(--medusa)"></div>
                <p class="label-card-name">Medusa Pictures</p>
                <p class="label-card-period">1980s – 2000s</p>
              </div>
              <div class="label-card">
                <div class="label-card-dot" style="background:var(--pegasus)"></div>
                <p class="label-card-name">Pegasus Home Video</p>
                <p class="label-card-period">mid-1980s</p>
              </div>
              <div class="label-card">
                <div class="label-card-dot" style="background:var(--newdim)"></div>
                <p class="label-card-name">New Dimension Home Video</p>
                <p class="label-card-period">1980s – early 1990s</p>
              </div>
              <div class="label-card">
                <div class="label-card-dot" style="background:var(--hkl)"></div>
                <p class="label-card-name">Hong Kong Legends</p>
                <p class="label-card-period">1999 — 2007</p>
              </div>
              <div class="label-card">
                <div class="label-card-dot" style="background:var(--premier)"></div>
                <p class="label-card-name">Premier Asia</p>
                <p class="label-card-period">2003 — 2008</p>
              </div>
            </div>
            <p><br></p>
            <br><blockquote class="pull-quote">
              <p>In many cases, longevity in the video business wasn’t about having the biggest hit films. It was about staying lean, maintaining strong retailer relationships, controlling costs, adapting to market changes, and finding creative ways to make each release stand out.
              <br>
              For independent distributors such as Medusa, survival often depended as much on ingenuity and persistence as it did on the films themselves.</p>
              Stephen Rivers, co-founder of Medusa Pictures
            </blockquote>
          </div>
        </div>
      </div>

      <div class="about-sec">
        <p class="about-sec-label">II — Purpose</p>
        <div>
          <h2 class="about-sec-title">Preservation and Documentation</h2>
          <div class="about-sec-body">
            <p>
              The aim of this project is to maintain a <b>complete and accurate public record</b>
              of these labels' release histories, as physical media distribution catalogues from this era
              are poorly documented. This archive consolidates that record into a single,
              consistently structured reference.
            </p>
            <p>
              Releases are documented as they existed: original catalogue numbers, formats, year of release by Medusa Pictures, and additional historical details.
            </p>
          </div>
        </div>
      </div>

      <div class="about-sec">
        <p class="about-sec-label">III — Approach</p>
        <div>
          <h2 class="about-sec-title">How the Catalogue is Organised</h2>
          <div class="about-sec-body">
            <p>
              The catalogue is organised by label, following the original distribution structure of the
              group. Each entry records the title, year, country of origin, director, genre, original
              release format, and a short synopsis.
            </p>
            <p>
            For more information about the company's complete history, some titles include additional notes regarding their release by Medusa Pictures.
            </p>
            <p>
              Catalogue numbers follow <b>original label numbering</b> where this can be
              verified from physical media or records. Corrections and additions to the record are welcomed, and you may contact us through this page: <strong><a href="contact.html">Contact Us</a></strong>.
            </p>
            </p>
          </div>
          <div class="sources-list">
            <p class="sources-list-title" onclick="toggleSources(this)">Main Sources ↓</p>
              <ul id="sources-ul">
                <li>Statements by Stephen Rivers</li>
                <li>Bulkley, Kate. “The tale of Tractor Tom”. <em>The Guardian,</em> February 23, 2004.</li>
                <li><em>C21 Media.</em> “Contender buys into DVD business”. February 23, 2004.</li>
                <li><em>Movie City News.</em> “The Weinstein Company Builds A 'Dragon Dynasty'”. Press Release.</li>
                <li>Macnab, Geoffrey. “How a Carpet Salesman from Stevenage Saved the British Film Industry.” <em>The I Paper,</em> October 9, 2020.</li>
                <li><em>Variety.</em> “Guild Home Video To Handle Medusa”. December 10, 1986. p. 44.</li>
                <li><em>Screen Daily.</em> “MIFED News Round-up: Part II.” October 29, 2001.</li>
                <li>Heskins, Andrew. “Hong Kong Legends Is Back!” <em>easternKicks.com,</em> March 18, 2011.</li>
                <li>Dawtrey, Adam. “Entertainment One Buys U.K. Distributor.” <em>Variety,</em> June 14, 2007.</li>
                <li><em>Screen Daily.</em> “Cine-Asia Signs UK Distribution Deal with Weinstein’s Dragon Dynasty.” December 10, 2009.</li>
                <li>Frater, Patrick. “UK’s Medusa Gets Ichi Fingers for Miike.” <em>Screen Daily,</em> February 21, 2002.</li>
                <li><em>Cine Asia.</em> “Cine Asia Presents Hong Kong Legends”. Press Release.</li>
                <li>Dale Lloyd, a.k.a. VivaVHS</li>
                <li>Companies House</li>
                <li>British Board of Film Classification</li>
                <li>Contender Entertainment Group</li>
                <li>Audiovisual Identity Database</li>
                <li>IMDb</li>
                <li>The Internet Archive</li>
                <li>Entertainment One</li>
                <li>Showbox Media Group</li>
              </ul>
          </div>
        </div>
      </div>
    </div>`;
}

function renderContact(app) {
  app.innerHTML = `
    <div class="page-header">
      <h1 class="page-title">Contact Us</h1>
    </div>
    <div class="about-body">
      <div class="about-sec">
        <p class="about-sec-label">Get in touch</p>
        <div>
          <div class="about-sec-body">
            <p>
              We welcome correspondence regarding this website, such as corrections to factual errors, missing entries, or any additional documentation that could improve the accuracy
              of the archive.
            </p>
            <p>
              Enquiries regarding the history of Medusa Pictures and its associated
              labels are also welcome.
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:contact@medusapictures.co.uk"
              style="color:var(--text);text-decoration:underline;text-underline-offset:3px;">
              contact@medusapictures.co.uk</a>
            </p>
          </div>
        </div>
      </div>
    </div>`;
}

/* ============================================================
   CATALOGUE
============================================================ */

function renderCatalogue(app, labelId) {
  const label  = LABELS[labelId];
  const films  = ALL_FILMS[labelId];
  const genres = [...new Set(films.flatMap(f => f.genre.split('/').map(g => g.trim())).filter(g => g !== '[GENRE]'))].sort();
  const formats = [...new Set(films.flatMap(f => f.format.split('/').map(f => f.trim())).filter(f => f !== '[FORMAT]'))].sort();

  app.innerHTML = `
    <div style="--ac:${label.color}; --ac-bg:${label.bg};">
      <div class="cat-header">
        <div class="cat-header-top">
          <div>
            <span class="cat-label-badge">${label.period} — ${label.region}</span>
            <h1 class="cat-title">${label.name}</h1>
            <p class="cat-desc">${label.desc}</p>
          </div>
          <span class="cat-count" id="cat-count">${films.length} releases</span>
        </div>
      </div>

      <div class="filters-bar">
        <span class="filters-label">Filter</span>
        <div class="filter-sep"></div>
        <button class="fbtn on" data-filter="genre" data-value="all"
                onclick="applyFilter('${labelId}','genre','all')">All genres</button>
        ${genres.map(g =>
          `<button class="fbtn" data-filter="genre" data-value="${g}"
                   onclick="applyFilter('${labelId}','genre','${g}')">${g}</button>`
        ).join('')}
        <div class="filter-sep"></div>
        <button class="fbtn on" data-filter="format" data-value="all"
                onclick="applyFilter('${labelId}','format','all')">All formats</button>
        ${formats.map(f =>
          `<button class="fbtn" data-filter="format" data-value="${f}"
                   onclick="applyFilter('${labelId}','format','${f}')">${f}</button>`
        ).join('')}
      </div>

      <div class="cat-table-wrap">
        <div id="cat-table-container">
          ${buildTable(films, labelId)}
        </div>
      </div>
    </div>`;

  window._catState = { labelId, activeGenre: 'all', activeFormat: 'all' };
}

function buildTable(films, labelId) {
  if (!films.length) {
    return `<p class="no-results">No releases match the current filters.</p>`;
  }
  return `
    <table class="cat-table">
      <thead>
        <tr>
          ${labelId !== 'hkl' && labelId !== 'premier' ? `<th style="width:7%">Cat. No.</th>` : ''}
          <th style="width:13%">Title</th>
          <th class="col-country" style="width:15%">Country<br><span style="font-weight:300;letter-spacing:0.1em;opacity:0.6;">of production</span></th>
          <th style="width:12%">Year<br><span style="font-weight:300;letter-spacing:0.1em;opacity:0.6;">${labelId === 'hkl' ? 'of original release' : 'of Medusa release'}</span></th>
          <th style="width:11%">Director</th>
          <th style="width:7%">Genre</th>
          <th class="col-format" style="width:7%">Format</th>
          <th class="col-synopsis" style="width:28%">Synopsis</th>
        </tr>
      </thead>
      <tbody>
        ${films.map(f => `
          <tr>
            ${labelId !== 'hkl' && labelId !== 'premier' ? `<td class="td-cat">${f.cat}</td>` : ''}
            <td>
              <div class="td-title">${f.title}</div>
              ${f.originalTitle ? `<div class="td-orig">${f.originalTitle}</div>` : ''}
            </td>
            <td class="td-meta col-country">${f.country}</td>
            <td class="td-meta">${f.year}</td>
            <td class="td-meta">${f.director}</td>
            <td class="td-genre">${f.genre}</td>
            <td class="td-format col-format">${f.format}</td>
            <td class="td-synopsis col-synopsis">${f.synopsis}${f.notes && f.notes !== '[Release notes]' ? `<br><span style="opacity:0.6;font-size:0.8em;">${f.notes}</span>` : ''}</td>
          </tr>`).join('')}
      </tbody>
    </table>`;
}

function applyFilter(labelId, type, value) {
  if (!window._catState) return;
  window._catState[type === 'genre' ? 'activeGenre' : 'activeFormat'] = value;

  document.querySelectorAll(`[data-filter="${type}"]`).forEach(btn => {
    btn.classList.toggle('on', btn.dataset.value === value);
  });

  const { activeGenre, activeFormat } = window._catState;
  const filtered = ALL_FILMS[labelId].filter(f => {
    const genreOk  = activeGenre  === 'all' || f.genre.split('/').map(g => g.trim()).includes(activeGenre);
    const formatOk = activeFormat === 'all' || f.format.includes(activeFormat);
    return genreOk && formatOk;
  });

  document.getElementById('cat-count').textContent =
    `${filtered.length} release${filtered.length !== 1 ? 's' : ''}`;
  document.getElementById('cat-table-container').innerHTML = buildTable(filtered, labelId);
}

/* Catalogue dropdown: click to open, click again or outside to close */
const navDrop = document.querySelector('.nav-drop');
navDrop.querySelector('.nav-drop-toggle').addEventListener('click', function(e) {
  e.stopPropagation();
  navDrop.classList.toggle('open');
});
document.addEventListener('click', function() {
  navDrop.classList.remove('open');
});

function setActiveNav() {
  const path = window.location.pathname.split('/').pop();
  const map = {
    'index.html':             'home',
    'about.html':             'about',
    'contact.html':           'contact',
    'catalogue-medusa.html':  'catalogue/medusa',
    'catalogue-hkl.html':     'catalogue/hkl',
    'catalogue-newdim.html':  'catalogue/newdim',
    'catalogue-pegasus.html': 'catalogue/pegasus',
    'catalogue-premier.html': 'catalogue/premier',
  };
  const current = map[path] || 'home';
  document.querySelectorAll('[data-page]').forEach(el => {
    el.classList.toggle('active', el.dataset.page === current);
  });
}

document.getElementById('footer-year').textContent = new Date().getFullYear();
