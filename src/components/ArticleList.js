import React from 'react'
import Article from './Article';

function ArticleList({posts}) {
  return (
    <main>
        {
            posts.map(post => {
                console.log(post);
                return (
                    < Article key={post.id} title={post.title} date={post.title} preview={post.preview} />
                )
            })
        }
    </main>
  )
}

export default ArticleList