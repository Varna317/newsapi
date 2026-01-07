import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const News=({category})=>{
    //create a state to store the news articles
    const [articles,setArticles]=useState([]);
    //Useeffect runs when the category changes
    useEffect(()=>
    {
        //fetch API url
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=38f270bee28644128a9aedecf42a10da`)
        .then(res=>res.json())
        .then(data=>{
            setArticles(data.articles||[])
        });
     },[category] //->this category put here beacuse rendering
)
    return(
        <div>
        <p>{category} News</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3 ,1fr)",
            gap:"15px"
        }}>
            
                {/* //looping through articles */}
                {articles.map((news,index)=>(
                    < NewsItem 
                    key={index}
                    title={news.title}
                    description={news.description}
                    image={news.urlToImage}
                    url={news.url}
                    />

                    )
                )
                }
            
        </div>

            </div>
    )
}
export default News