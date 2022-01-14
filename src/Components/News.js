import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles= [
        {
                "source": {
                    "id": null,
                    "name": "VentureBeat"
                },
                "author": "wpengine",
                "title": "LongTailPro can supercharge all of your SEO efforts for only $40",
                "description": "LongTailPro is a nifty keyword suggestion tool that can help a business or manager find those skeleton key words that can unlock a bounty of new web traffic for your product.",
                "url": "https://venturebeat.com/2021/12/30/longtailpro-can-supercharge-all-of-your-seo-efforts-for-only-40/",
                "urlToImage": "https://venturebeat.com/wp-content/uploads/2021/12/sale_29427_article_image.jpg?w=1200&strip=all",
                "publishedAt": "2021-12-30T15:00:00Z",
                "content": "Long tail keywords are usually phrases of three words or more and theyre a lot more common in the search world than you might think. In fact, as much as 70 percent of all Google search traffic is a l… [+2269 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Gizmodo.com"
                },
                "author": "David Nield",
                "title": "How to Organize Your Mess of a Dropbox Once and for All",
                "description": "Dropbox is one of those huge, ubiquitous apps—like Gmail, or iMessage, or Spotify—that is constantly adding new features. But if you’re not using the service on a daily basis, you might miss some of the tools that have been added. The most recent Dropbox upgr…",
                "url": "https://gizmodo.com/how-to-organize-your-mess-of-a-dropbox-once-and-for-all-1848265498",
                "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/153b6168d2ac09e7d46225cbe0f773cd.jpg",
                "publishedAt": "2021-12-24T13:30:00Z",
                "content": "Dropbox is one of those huge, ubiquitous appslike Gmail, or iMessage, or Spotifythat is constantly adding new features. But if youre not using the service on a daily basis, you might miss some of the… [+4691 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Gizmodo.com"
                },
                "author": "Brianna Provenzano",
                "title": "TikTok Testing Feature That Lets You Stream Live From Your PC",
                "description": "While almost every other app is trying to become TikTok, TikTok is apparently angling to be more like Twitch.Read more...",
                "url": "https://gizmodo.com/tiktok-testing-feature-that-lets-you-stream-live-from-y-1848227244",
                "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/b8f3c567c26d4d7842c258ce0d67ab1d.jpg",
                "publishedAt": "2021-12-16T18:25:00Z",
                "content": "While almost every other app is trying to become TikTok, TikTok is apparently angling to be more like Twitch.\r\nOn Thursday, TechCrunch reported that TikTok is testing out something called TikTok Live… [+2035 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "New York Times"
                },
                "author": "Lou Stoppard",
                "title": "How Gen Z is Channeling 1990s Fashion",
                "description": "The icons and fashions of the fin de siecle are objects of fascination for those who didn’t experience them the first time around. Here’s what they say about why.",
                "url": "https://www.nytimes.com/2021/12/23/style/gen-z-fashion-1990s.html",
                "urlToImage": "https://static01.nyt.com/images/2021/12/22/fashion/22GENZ-90s-1/22GENZ-90s-1-facebookJumbo.jpg",
                "publishedAt": "2021-12-23T08:00:15Z",
                "content": "James Abraham, 35, who runs the popular Instagram account @90sanxiety, which he started in 2016, sees the intrigue as related to the sense of something uncompromising about the period the rawness, th… [+1904 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Search Engine Journal"
                },
                "author": "Matt Southern",
                "title": "Keyword Stemming: Is It A Google Ranking Factor? via @sejournal, @MattGSouthern",
                "description": "Is keyword stemming a Google search ranking factor? Let's investigate those claims and get clarity around keyword stemming and its relationship with SEO.The post Keyword Stemming: Is It A Google Ranking Factor? appeared first on Search Engine Journal.",
                "url": "https://www.searchenginejournal.com/ranking-factors/keyword-stemming/",
                "urlToImage": "https://cdn.searchenginejournal.com/wp-content/uploads/2021/12/chapter-48-61bb585be77df-sej.png",
                "publishedAt": "2022-01-03T12:45:08Z",
                "content": "When people talk about keyword stemming as a ranking factor, they’re referring to Google’s ability to recognize different variations of the same word.\r\nSince Google can understand when a user enters … [+3833 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Search Engine Journal"
                },
                "author": "Matt Southern",
                "title": "Keyword Stuffing As A Google Ranking Factor: What You Need To Know via @sejournal, @MattGSouthern",
                "description": "Keyword stuffing was a widely used technique because it yielded results. But is it a ranking factor today?The post Keyword Stuffing As A Google Ranking Factor: What You Need To Know appeared first on Search Engine Journal.",
                "url": "https://www.searchenginejournal.com/ranking-factors/keyword-stuffing/",
                "urlToImage": "https://cdn.searchenginejournal.com/wp-content/uploads/2021/12/chapter-49-61bb605ee1a03-sej.png",
                "publishedAt": "2022-01-05T07:45:11Z",
                "content": "If some keywords are good, then more must be better, right?\r\nThat’s the simple logic behind keyword stuffing as a ranking factor.\r\nIn the early days of web search, way before SEO was a thing, Google … [+4911 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Search Engine Journal"
                },
                "author": "Tony Wright",
                "title": "How Can Different Departments Avoid Keyword Cannibalization? via @sejournal, @tonynwright",
                "description": "How can you avoid cannibalization in search results when multiple departments in your company want to rank on the same keywords?The post How Can Different Departments Avoid Keyword Cannibalization? appeared first on Search Engine Journal.",
                "url": "https://www.searchenginejournal.com/cannibalizing-search-results/431440/",
                "urlToImage": "https://cdn.searchenginejournal.com/wp-content/uploads/2021/12/cannibalization-2-61d4577e4d10d-sej.png",
                "publishedAt": "2022-01-04T15:45:28Z",
                "content": "This week’s Ask An SEO question comes from Caroline in Cleveland, who wrote:\r\nMultiple divisions of our company want to rank for the same keywords.\r\nAre there any tips for how to approach this type o… [+3303 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Search Engine Journal"
                },
                "author": "Brandon Gaille",
                "title": "25 Unique SEO Tactics That Deliver Big Results via @sejournal, @brandongaille",
                "description": "Want to be guaranteed top positions on your most relevant keyword SERPs?Reach your goal with these 25 link building, keyword research, and optimization tactics.The post 25 Unique SEO Tactics That Deliver Big Results appeared first on Search Engine Journal.",
                "url": "https://www.searchenginejournal.com/rankiq-unique-seo-tactics/430609/",
                "urlToImage": "https://cdn.searchenginejournal.com/wp-content/uploads/2021/12/featured-image-1-61ce0be58ad51-sej.png",
                "publishedAt": "2022-01-11T06:00:18Z",
                "content": "9. Identify Keyword Clusters Of Topics To Build Content Hubs Around\r\nA strategically interlinked content hub will push each of your topic posts higher up in Google rankings.\r\nFirst, create your futur… [+7811 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Search Engine Journal"
                },
                "author": "Matt Southern",
                "title": "Yoast SEO Offers Keyword Position Tracking With Wincher Integration via @sejournal, @MattGSouthern",
                "description": "Yoast SEO is partnering with Wincher to offer users the ability to track keyword ranking positions for their WordPress pages.The post Yoast SEO Offers Keyword Position Tracking With Wincher Integration appeared first on Search Engine Journal.",
                "url": "https://www.searchenginejournal.com/yoast-seo-wincher/432685/",
                "urlToImage": "https://cdn.searchenginejournal.com/wp-content/uploads/2022/01/5e36f1ec-7f79-4f21-a095-3882b2d7c296-61de5ea631d7c-sej.png",
                "publishedAt": "2022-01-12T04:56:31Z",
                "content": "Yoast SEO is partnering with Wincher to offer users the ability to track keyword ranking positions for their WordPress pages.\r\nKeyword position tracking will be available to both free and paid users,… [+2821 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Entrepreneur"
                },
                "author": "Entrepreneur Store",
                "title": "Scale Your Business with a Comprehensive Digital Marketing Plan",
                "description": "Give your digital marketing strategy a boost with this Cyber Week discount.",
                "url": "https://www.entrepreneur.com/article/404336",
                "urlToImage": "https://assets.entrepreneur.com/content/3x2/2000/1640217158-Ent-2022DigitalMarketing.jpeg",
                "publishedAt": "2021-12-29T17:00:00Z",
                "content": "As the world has increasingly shifted toward online businesses, it's absolutely essential that all entrepreneurs have a digital marketing plan. If you're not sure what you're doing when it comes to r… [+1838 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Boing Boing"
                },
                "author": "Devin Nealy",
                "title": "Watch this chicken leg disappear in acid",
                "description": "Science is such an interesting double-edged sword. On one end, science provides innumerable life-saving innovations and technological conveniences that are integral to our continued survival as a species. At the same time, some of the most horrific weapons hu…",
                "url": "https://boingboing.net/2021/12/27/watch-this-chicken-leg-disappear-in-acid.html",
                "urlToImage": "https://i0.wp.com/boingboing.net/wp-content/uploads/2021/12/Screen-Shot-2021-12-27-at-8.25.29-AM.png?fit=1200%2C679&ssl=1",
                "publishedAt": "2021-12-27T19:31:07Z",
                "content": "Science is such an interesting double-edged sword. On one end, science provides innumerable life-saving innovations and technological conveniences that are integral to our continued survival as a spe… [+860 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Search Engine Land"
                },
                "author": "Pamela Parker",
                "title": "SEO software tools: What marketers need to know",
                "description": "SEO platforms offer numerous capabilities that range from keyword research and rank-checking to backlink analysis and acquisition, as well as competitive intelligence, social signal integration, and workflow rights and roles. \n\nPlease visit Search Engine Land…",
                "url": "https://searchengineland.com/seo-software-tools-what-marketers-need-to-know-378360",
                "urlToImage": "https://searchengineland.com/figz/wp-content/seloads/2022/01/shutterstock_387573454.jpg",
                "publishedAt": "2022-01-10T09:48:34Z",
                "content": "Search Engine Optimization remains the stalwart mainstay of digital marketing, with search driving around 50% of website traffic on average, according to an analysis of SimilarWeb data by Growth Badg… [+11056 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Reuters Poll news stories from around the world - Reuters",
                "description": "Reuters polls experts on the outlook for major world economies, central bank policy, foreign exchange rates, stock markets, money market and bond yields, housing markets, global asset allocation and more. The news stories linked to below are highlights only.",
                "url": "https://www.reuters.com/markets/asia/reuters-poll-news-stories-around-world-2021-12-13/",
                "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=63",
                "publishedAt": "2021-12-13T09:52:00Z",
                "content": "Reuters polls experts on the outlook for major world economies, central bank policy, foreign exchange rates, stock markets, money market and bond yields, housing markets, global asset allocation and … [+3722 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Oberien.de"
                },
                "author": null,
                "title": "Thoughts on Return, Break and Continue",
                "description": "Commonly, the keywords return, break and continue are used to influence the control flow of a program. Designing my own language rebo, I’m at a point where I want to implement a form of control-flow-changing operations. This post is primarily a braindump of i…",
                "url": "https://blog.oberien.de/2022/01/04/thoughts-on-return-break-continue.html",
                "urlToImage": null,
                "publishedAt": "2022-01-07T15:32:03Z",
                "content": "2022-01-04\r\nCommonly, the keywords return, break and continue are used to influence the\r\ncontrol flow of a program.\r\nDesigning my own language rebo, Im at a point\r\nwhere I want to implement a form of… [+6756 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Search Engine Journal"
                },
                "author": "Sam Hollingsworth",
                "title": "Google Autocomplete: A Complete SEO Guide via @sejournal, @searchmastergen",
                "description": "Looking for a tool to help inform smarter SEO keyword research? See how Google Autocomplete works and the best ways to use it.The post Google Autocomplete: A Complete SEO Guide appeared first on Search Engine Journal.",
                "url": "https://www.searchenginejournal.com/google-autocomplete-seo-guide/410219/",
                "urlToImage": "https://cdn.searchenginejournal.com/wp-content/uploads/2021/06/google-autocomplete-seo-guide-617ffdf246176-sej.png",
                "publishedAt": "2022-01-12T12:45:27Z",
                "content": "Google Autocomplete is a controversial but powerful search feature.\r\nWhen you type a word, or even a letter, into Google, it populates a list of search suggestions. That’s what autocomplete is.\r\nSEO … [+11545 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Search Engine Journal"
                },
                "author": "Semrush",
                "title": "Dominate SERPs With Search Intent: How To Improve Your SEO & Content Strategy via @sejournal, @semrush",
                "description": "It's up to you to be on the SERPs at the right time for each type of search.Rank better by understanding Search Intent.The post Dominate SERPs With Search Intent: How To Improve Your SEO & Content Strategy appeared first on Search Engine Journal.",
                "url": "https://www.searchenginejournal.com/semrush-search-intent-strategy/428162/",
                "urlToImage": "https://cdn.searchenginejournal.com/wp-content/uploads/2021/11/featured-image-61a69e58d42f7-sej.jpg",
                "publishedAt": "2021-12-14T06:00:32Z",
                "content": "How do you build an SEO and content strategy that targets intent?\r\nWhy is it important to consider search intent?\r\nHow do you show the right content to the right audience at the right time in the buy… [+6991 chars]"
            }
        ]

    constructor(){
        super();
        this.state={
        articles:  this.articles,
        loading:false
        }
      }
    // async  componentDidMount(){
    //     let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c32daaf137624b03aba1b94cb1f67c53";
    //     let data= await fetch(url);
    //     let parsedData = await data.json()
    //     console.log(parsedData);
    //     this.setState({articles:parsedData.articles})
    //   }
    render() {
        return (
            <div className="container my-3">
                <h2>mynews-Top Headlines</h2>
                <div className="row">
                {this.state.articles.map((element)=>{

                    return <div className="col-md-4" key={element.url} >
                        <NewsItem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
                })}
                </div>
            </div>

            
        )
    }
}
export default News