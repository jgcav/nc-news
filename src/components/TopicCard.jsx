import React from 'react'
import { Link } from 'react-router-dom'


export default function TopicCard({topic}) {

    let imgUrl = ""
    let imgAlt = ""

    if(topic.slug === 'coding'){
        imgUrl = 'https://images.unsplash.com/photo-1629904869392-ae2a682d4d01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80'
        imgAlt = 'group of people coding at a desk'
    } else if(topic.slug === 'football'){
        imgUrl = 'https://images.unsplash.com/photo-1643796903573-68834ffadcb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
        imgAlt = 'aerial view of football stadium'
    } else if(topic.slug === 'cooking'){
        imgUrl = 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
        imgAlt = 'woman smiling and stirring a pot of food'
    }

    return (
        <div>
            <div className="row">
        <div className="column">
            <br />
        <div className="topicCard">
            <Link className="topicName" to={`/articles/${topic.slug}`} style={{textDecoration: 'none'}}><h4>{topic.slug.toUpperCase()}</h4></Link>
            <Link className="topicImage" to={`/articles/${topic.slug}`}><img src={imgUrl} alt={imgAlt} /></Link>
        </div>
        </div>
        </div>
        </div>
    )
}
