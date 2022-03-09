import {React, useEffect, useState} from 'react'
import { fetchArticlesByTopic } from '../api'
import ArticleCard from './ArticleCard'
import { useParams } from 'react-router'

export default function TopicPage() {
    const { topic } = useParams()

    console.log(useParams())
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

    return (
        <div>
            <div>
            <h3 className="topics-page-header">{topic.toUpperCase()} NEWS</h3>
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
