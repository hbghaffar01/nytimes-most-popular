import { useState, useEffect } from 'react';
import { Article, Period } from '../types/article';
import { getPopularArticles } from '../services/articleService';

interface UseArticlesResult {
    articles: Article[];
    loading: boolean;
    error: Error | null;
    refetch: () => Promise<void>;
}

export const useArticles = (period: Period = 1): UseArticlesResult => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchArticles = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await getPopularArticles(period);
            setArticles(data.results);
        } catch (err) {
            setError(err as Error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchArticles();
    }, [period]);

    return { articles, loading, error, refetch: fetchArticles };
};