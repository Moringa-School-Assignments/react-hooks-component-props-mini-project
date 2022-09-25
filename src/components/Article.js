import React from 'react'

function Article({title, date, preview, minutes}) {
  return (
    <article>
        <h3>{title}</h3>
        <small>{date ? date : "January 1, 1970"} . ☕️☕️☕️ {minutes} minutes to read</small>
        <p>{preview}</p>
    </article>
  )
}

export default Article