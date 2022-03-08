import {React, useState, useEffect} from 'react'
import ArticleCard from './ArticleCard'
import { fetchAllArticles } from '../api'

export default function Articles() {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetchAllArticles()
        .then((res) => {
            setIsLoading(false)
            setArticles(res)
        })
    }, [])

    return (
        <div>
            <h3 className="articles-header">Articles</h3>
            {isLoading ? (<p>Loading...</p>) : (
                <div className="articles">
                    {articles.map((article) => {
                    return <ArticleCard key = {article.article_id} article={article}/>;
        })}
         </div>
            )}
        </div>
    )
}
