import React from "react";
import Article from "./Article.js";

function ArticleList ({posts}) {
  const articleElements = posts.map((post) => {
       return < Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>
    })
    return(
    <main> {articleElements} </main>
    )
} 




export default ArticleList;