import {React, useEffect, useState} from 'react'
import { fetchArticlesByTopic } from '../api'
import ArticleCard from './ArticleCard'
import { useParams } from 'react-router-dom'

export default function TopicPage() {
    const { topic } = useParams()

    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetchArticlesByTopic(topic)
        .then((res) => {
            setIsLoading(false)
            setArticles(res)
        })
    }, [topic])

    const formattedTopic = topic.slice(0, 1).toUpperCase() + topic.slice(1)

    return (
        <div className="container">
            <div>
            <h3 className="subHeader">{formattedTopic} News</h3>
            {isLoading ? (<p>Loading...</p>) : (
                <div className="articles">
                    {articles.map((article) => {
                    return <ArticleCard key = {article.article_id} article={article}/>;
        })}
         </div>
            )}
        </div>
        </div>
    )
}
