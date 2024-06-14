import React, { Component } from 'react';
import Newsitem from './Newsitem';

export class News extends Component {
  articles=[
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Gabrielle Fonrouge, Ryan Baker",
      "title": "Inside Abercrombie and Fitch's comeback - CNBC",
      "description": "Abercrombie & Fitch nearly faded into irrelevancy, but under the direction of CEO Fran Horowitz, it has transformed into one of Wall Street's biggest winners.",
      "url": "https://www.cnbc.com/2024/06/13/inside-abercrombie-and-fitchs-comeback.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107355326-1704718924380-gettyimages-1040190562-80277983.jpeg?v=1716910240&w=1920&h=1080",
      "publishedAt": "2024-06-13T12:00:02Z",
      "content": "Abercrombie &amp; Fitch has transformed itself from a dying mall brand into a Wall Street darling after spending years revamping its product assortment, overhauling its supply chain and rebranding as… [+1057 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": "Pras Subramanian",
      "title": "Elon Musk drama intensifies as Tesla shareholders vote on his $56B pay package: Here's what's at stake - Yahoo Finance",
      "description": "Today Tesla shareholders will finally answer a $56 billion question hanging over the company: Can CEO Elon Musk keep his record-breaking pay?",
      "url": "https://finance.yahoo.com/news/elon-musk-drama-intensifies-as-tesla-shareholders-vote-on-his-56b-pay-package-heres-whats-at-stake-145645586.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/Oi1iWp33jzSUuBc.g92GDQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-06/4ac370f0-24f3-11ef-bebb-2a11541bbfef",
      "publishedAt": "2024-06-13T11:58:56Z",
      "content": "Today Tesla shareholders will finally answer a $56 billion question hanging over the company: Can CEO Elon Musk keep his record-breaking pay?\r\nWhile Musk posted late Wednesday night that the votes we… [+8640 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "author": null,
      "title": "Russian warships in Cuba are no threat, US says - BBC.com",
      "description": "The visit is seen as Russia's sabre-rattling, amid tensions with the West over Moscow's invasion of Ukraine.",
      "url": "https://www.bbc.com/news/articles/cg66g0neweko",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/31d8/live/a7dfda80-2976-11ef-a1fa-1b739acc6f54.jpg",
      "publishedAt": "2024-06-13T11:39:43Z",
      "content": "US officials have played down Wednesday's arrival of four Russian naval vessels in Cuba for military drills. \r\nThe visit of the vessels - which include a nuclear-powered submarine and a frigate - hav… [+2066 chars]"
    },
    {
      "source": {
        "id": "politico",
        "name": "Politico"
      },
      "author": "POLITICO",
      "title": "Trump's private demand to Johnson: Help overturn my conviction - POLITICO",
      "description": null,
      "url": "https://www.politico.com/news/2024/06/13/donald-trump-conviction-mike-johnson-00163128",
      "urlToImage": null,
      "publishedAt": "2024-06-13T10:59:17Z",
      "content": null
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": "Jeff Zillgitt",
      "title": "Criticism of Luka Doncic mounting with each Mavericks loss in NBA Finals - USA TODAY",
      "description": "Luka Doncic can’t foul out like he did in Game 3. Not in the NBA Finals. Not in a close game that the Mavericks ended up losing to the Celtics.",
      "url": "https://www.usatoday.com/story/sports/nba/playoffs/2024/06/13/luka-doncic-criticism-mounting-mavericks-celtics-nba-finals/74081304007/",
      "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/06/13/USAT/74081587007-usatsi-23534686.jpg?crop=3160,1779,x2,y268&width=3160&height=1779&format=pjpg&auto=webp",
      "publishedAt": "2024-06-13T10:48:36Z",
      "content": "DALLAS Luka Doncic fouled out of the Game 3 in the NBA Finals.\r\nHeres the problem: Doncic cant foul out. Not in the Finals. Not with the game close late in the fourth quarter that Dallas ended up los… [+3351 chars]"
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "BBC.com",
      "title": "Gaza war: Hamas rebuffs Blinken blame for elusive ceasefire - BBC.com",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiLmh0dHBzOi8vd3d3LmJiYy5jb20vbmV3cy9hcnRpY2xlcy9jenJydzkzZzl4eW_SATJodHRwczovL3d3dy5iYmMuY29tL25ld3MvYXJ0aWNsZXMvY3pycnc5M2c5eHlvLmFtcA?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-06-13T10:36:56Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "CBS Sports"
      },
      "author": "",
      "title": "2024 U.S. Open tee times, pairings: Complete schedule on TV, groups in Round 1 on Thursday at Pinehurst - CBS Sports",
      "description": "The third major championship of the season will get underway early Thursday morning with a number of star-studded groups",
      "url": "https://www.cbssports.com/golf/news/2024-u-s-open-tee-times-pairings-complete-schedule-on-tv-groups-in-round-1-on-thursday-at-pinehurst/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/06/11/75821c7d-8289-4ff8-85e2-c69c3cab1655/thumbnail/1200x675/55a64940a04a8f96eafc7f745c1f5156/us-open-tee-marker-2024-pinehurst.png",
      "publishedAt": "2024-06-13T10:30:00Z",
      "content": "The 124th U.S. Open is set to kick off Thursday at Pinehurst No. 2 with 156 of the best players in the world vying for the third major championship of the season. Many of those big-name players will … [+4929 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "author": null,
      "title": "Nasa astronaut distress message broadcast in error - BBC.com",
      "description": "Space agency says the clip was from a training exercise which was accidentally put on YouTube,",
      "url": "https://www.bbc.com/news/articles/c2jj9855955o",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/e620/live/887ccd40-2969-11ef-951f-bfad685c889d.png",
      "publishedAt": "2024-06-13T10:18:46Z",
      "content": "Nasa has confirmed audio shared widely on social media of astronauts in distress was a simulation broadcast on its YouTube channel in error.\r\nIn the clip, intended to be used for training purposes, a… [+1690 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NBCSports.com"
      },
      "author": "Michael David Smith",
      "title": "Tom Brady tells Bill Belichick: \"It wasn't me, it wasn't you, it was us\" - NBC Sports",
      "description": "\"There is no coach in the world I would rather play for than Bill Belichick,\" Brady said at his jersey retirement.",
      "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/tom-brady-tells-bill-belichick-it-wasnt-me-it-wasnt-you-it-was-us",
      "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/137e5df/2147483647/strip/true/crop/3900x2194+0+208/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F9d%2Ff9%2F1258ebfa4df0b2b3625c582620eb%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F2156690317",
      "publishedAt": "2024-06-13T10:07:32Z",
      "content": "Tom Brady says theres no way to say who had more to do with the Patriots success, himself or Bill Belichick.\r\nAs he was inducted into the Patriots Hall of Fame and had his jersey retired Wednesday ni… [+824 chars]"
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "Al Jazeera English",
      "title": "Israel in Gaza, Palestinian fighters in Israel, what the UN accuses them of - Al Jazeera English",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMicmh0dHBzOi8vd3d3LmFsamF6ZWVyYS5jb20vbmV3cy8yMDI0LzYvMTMvaXNyYWVsLWluLWdhemEtcGFsZXN0aW5pYW4tZmlnaHRlcnMtaW4taXNyYWVsLXdoYXQtdGhlLXVuLWFjY3VzZXMtdGhlbS1vZtIBdmh0dHBzOi8vd3d3LmFsamF6ZWVyYS5jb20vYW1wL25ld3MvMjAyNC82LzEzL2lzcmFlbC1pbi1nYXphLXBhbGVzdGluaWFuLWZpZ2h0ZXJzLWluLWlzcmFlbC13aGF0LXRoZS11bi1hY2N1c2VzLXRoZW0tb2Y?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-06-13T10:07:30Z",
      "content": null
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": "Emily DeLetter",
      "title": "NASA livestream: Watch 2 astronauts spacewalk outside ISS - USA TODAY",
      "description": "Astronauts Tracy C. Dyson and Matt Dominick are scheduled to embark on a 6-hour spacewalk to gather scientific evidence.",
      "url": "https://www.usatoday.com/story/news/nation/2024/06/13/watch-nasa-spacewalk-livestream/74070000007/",
      "urlToImage": "https://www.usatoday.com/gcdn/-mm-/eb34b9888702cb3f4641b6ee49362a859a5dfd45/c=0-0-2309-1299/local/-/media/2022/08/01/USATODAY/usatsports/iss-over-earth-with-moon-in-background.jpg?width=2309&height=1299&fit=crop&format=pjpg&auto=webp",
      "publishedAt": "2024-06-13T09:12:49Z",
      "content": "The spacewalk was postponed due to a \"spacesuit discomfort issue,\" the International Space Station said in a post on X. A rescheduled time or date for the spacewalk has not yet been announced.\r\nThe 9… [+1944 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Alex Harring, Lisa Kailai Han, Sam Meredith",
      "title": "U.S. Treasury yields rise as Fed holds rates steady, signals only one cut this year - CNBC",
      "description": "U.S. Treasury yields fell again on Thursday.",
      "url": "https://www.cnbc.com/2024/06/13/us-treasury-yields-in-focus-as-fed-signals-one-rate-cut-this-year.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107427886-1718204603520-gettyimages-2157295674-ms2_7298_vjaaumln.jpeg?v=1718204667&w=1920&h=1080",
      "publishedAt": "2024-06-13T08:48:09Z",
      "content": "U.S. Treasury yields slipped once again on Thursday after the latest inflation data showed an unexpected drop.\r\nThe rate on the 10-year Treasury slid around 3 basis points to 4.264%. The benchmark no… [+1500 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MacRumors"
      },
      "author": "Tim Hardwick",
      "title": "Apple Reportedly Not Paying OpenAI to Use ChatGPT in iOS 18 - MacRumors",
      "description": "Alongside its Apple Intelligence feature set, Apple on Monday announced a partnership with OpenAI that will allow Siri to access ChatGPT directly in...",
      "url": "https://www.macrumors.com/2024/06/13/apple-not-paying-openai-chatgpt-ios-18/",
      "urlToImage": "https://images.macrumors.com/t/7dsbIaosd3Op153XpVVz5XfY258=/1600x/article-new/2024/06/open-ai-logo.jpg",
      "publishedAt": "2024-06-13T07:55:41Z",
      "content": "Alongside its Apple Intelligence feature set, Apple on Monday announced a partnership with OpenAI that will allow Siri to access ChatGPT directly in iOS 18, iPadOS 18, and macOS Sequoia to provide be… [+1845 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Roll Call"
      },
      "author": "Jim Saksa",
      "title": "Protesters run on the field at Congressional Baseball Game - Roll Call ",
      "description": "Climate Defiance claimed credit for the protest against fossil fuels, which saw several people tackled and handcuffed by Capitol Police.",
      "url": "https://rollcall.com/2024/06/12/protesters-congressional-baseball-game/",
      "urlToImage": "https://rollcall.com/app/uploads/2024/06/baseball_TW_122_031224.jpg",
      "publishedAt": "2024-06-13T07:52:30Z",
      "content": "The most exciting action at the annual Congressional Baseball Game had nothing to do with watching Americas pastime played by non-athletes.\r\nProtesters took to the field during the charity fundraisin… [+5972 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Internet"
      },
      "author": "https://www.facebook.com/thehackernews",
      "title": "Google Warns of Pixel Firmware Security Flaw Exploited as Zero-Day - The Hacker News",
      "description": "Google warns of a Pixel Firmware security flaw (CVE-2024-32896) actively exploited as a zero-day. June 2024 update fixes 50 vulnerabilities.",
      "url": "https://thehackernews.com/2024/06/google-warns-of-pixel-firmware-security.html",
      "urlToImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj92IvlWj42Yny1WRZL_gSs10RrV5ahMiQsteDPywWw_EmutO2qszGCBpWsg4ZpZOUVeJjoKTk-iU0xPz95fzv_ChwctuHItz_UavHtP1pkuu7kGkmKk3TYN6TXkZM8ZlPAw9oAOL3cBaEjK23tGMVtEAvHwDPkrqSHiT0P9Q1I_jNBgpzI2AdE3J7nF8of/s728-rw-e365/android.png",
      "publishedAt": "2024-06-13T07:08:00Z",
      "content": "Google has warned that a security flaw impacting Pixel Firmware has been exploited in the wild as a zero-day.\r\nThe high-severity vulnerability, tagged as CVE-2024-32896, has been described as an elev… [+1228 chars]"
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "BBC.com",
      "title": "Hezbollah fires rocket barrages at Israel after commander killed - BBC.com",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiLmh0dHBzOi8vd3d3LmJiYy5jb20vbmV3cy9hcnRpY2xlcy9jNnBwMDFkZ2Uzbm_SATJodHRwczovL3d3dy5iYmMuY29tL25ld3MvYXJ0aWNsZXMvYzZwcDAxZGdlM25vLmFtcA?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-06-13T06:06:38Z",
      "content": null
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Elizabeth Wolfe, Robert Shackelford, Mary Gilbert",
      "title": "Destructive flooding is swamping South Florida streets and homes. The threat still isn’t over - CNN",
      "description": "Heavy rainfall will swamp South Florida for a third day in a row, threatening more destructive flooding after roads turned into canals and water seeped into homes.",
      "url": "https://www.cnn.com/2024/06/13/weather/florida-flooding-storm-forecast-thursday/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2157367531.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-06-13T06:04:00Z",
      "content": "Heavy rainfall will swamp South Florida for a third day in a row on Thursday, threatening more destructive flooding after Wednesdays storms transformed roads into canals and caused water to seep into… [+4733 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": null,
      "title": "2024 NBA Finals: Jaylen Brown has met the moments that make champions — and superstars - Yahoo Sports",
      "description": null,
      "url": "https://sports.yahoo.com/2024-nba-finals-jaylen-brown-has-met-the-moments-that-make-champions--and-superstars-055128097.html",
      "urlToImage": null,
      "publishedAt": "2024-06-13T05:51:00Z",
      "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Push Square"
      },
      "author": "Khayl Adam",
      "title": "Astro Bot PS5 Will Get Free Post-Launch DLC - Push Square",
      "description": "More challenge levels to come",
      "url": "https://www.pushsquare.com/news/2024/06/astro-bot-ps5-will-get-free-post-launch-dlc",
      "urlToImage": "https://images.pushsquare.com/7e55d249fe216/1280x720.jpg",
      "publishedAt": "2024-06-13T05:00:00Z",
      "content": "PlayStation's undeniably likeable mascot, Astro Bot, will have around 80 levels across six worlds at launch to run through, but Team ASOBI says there's plenty more to come via future updates. Best of… [+1298 chars]"
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "NICOLE WINFIELD",
      "title": "G7 summit opens with deal to use Russian assets for Ukraine as EU's traditional powers recalibrate - The Associated Press",
      "description": "A Group of Seven summit is opening in Italy with agreement on a U.S. proposal to back a $50 billion loan to Ukraine using frozen Russian assets as collateral. Diplomatic sources confirmed an agreement had been reached on the deal before the leaders even lande…",
      "url": "https://apnews.com/article/italy-g7-summit-ukraine-biden-pope-a7771f3f8932653b44e21217a121854b",
      "urlToImage": "https://dims.apnews.com/dims4/default/0df8093/2147483647/strip/true/crop/6018x3385+0+313/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F14%2F77%2F359931a71fc0c3e26bac43d48d0b%2Fb7ca36bb169347f49ae156a50aa31e6b",
      "publishedAt": "2024-06-13T04:05:00Z",
      "content": "BARI, Italy (AP) A Group of Seven summit is opening Thursday with agreement on a U.S. proposal to back a $50 billion loan to Ukraine using frozen Russian assets as collateral, giving Kyiv a strong sh… [+6556 chars]"
    }
  ]
  constructor(){
    super();
    this.state={
      articles:this.articles,
      loading:false
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
        <Newsitem title='myTitle' description='mydesc' imageurl="https://image.cnbcfm.com/api/v1/image/107355326-1704718924380-gettyimages-1040190562-80277983.jpeg?v=1716910240&w=1920&h=1080" />
          </div>
          <div className="col-md-4">
        <Newsitem title='myTitle' description='mydesc' />
          </div> <div className="col-md-4">
        <Newsitem title='myTitle' description='mydesc' />
          </div>
        </div>
        
      </div>
    );
  }
}

export default News;
