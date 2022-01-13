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
            }
        ]

    constructor(){
        super();
        this.state={
        articles:  this.articles,
        loading:false
        }
      }
    async  componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c32daaf137624b03aba1b94cb1f67c53";
        let data= await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles:parsedData.articles})
      }
    render() {
        return (
            <div className="container my-3">
                <h2>mynews-Top Headlines</h2>
                <div className="row">
                {this.state.articles.map((element)=>{

                    return <div className="col-md-4" key={element.url} >
                        <NewsItem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,90):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
                })}
                </div>
            </div>

            
        )
    }
}
export default News