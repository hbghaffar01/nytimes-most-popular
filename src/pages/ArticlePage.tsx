import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Article, Period } from '../types/article';
import { getArticleById } from '../services/articleService';
import ArticleDetail from '../components/features/ArticleDetail';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';

const ArticlePage: React.FC = () => {
  const { periodParam, id } = useParams<{ periodParam: string; id: string }>();
  const navigate = useNavigate();
  
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!periodParam || !id) {
        setError(new Error('Invalid article parameters'));
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        
        const period = parseInt(periodParam) as Period;
        const articleId = parseInt(id);
        
        if (isNaN(period) || ![1, 7, 30].includes(period)) {
          throw new Error('Invalid period parameter');
        }
        
        if (isNaN(articleId)) {
          throw new Error('Invalid article ID');
        }
        
        const response = await getArticleById(period, articleId);
        
        if (response.results.length === 0) {
          throw new Error('Article not found');
        }
        
        setArticle(response.results[0]);
        setError(null);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [periodParam, id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <ErrorMessage message={error.message || 'Failed to load article'} />
        <button
          onClick={() => navigate('/')}
          className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded transition-colors"
        >
          Back to Home
        </button>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded">
        Article not found. It may have been removed or is no longer available.
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <Link 
          to="/" 
          className="inline-flex items-center text-gray-600 hover:text-nyt-red transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to All Articles
        </Link>
      </div>

      <ArticleDetail article={article} />
    </div>
  );
};

export default ArticlePage;