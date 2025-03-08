import React from 'react';
import { Article, Period } from '../../types/article';
import ArticleCard from './ArticleCard';
import LoadingSpinner from '../common/LoadingSpinner';
import ErrorMessage from '../common/ErrorMessage';

interface ArticleListProps {
  articles: Article[];
  loading: boolean;
  error: Error | null;
  period: Period;
}

const ArticleList: React.FC<ArticleListProps> = ({ 
  articles, 
  loading, 
  error, 
  period 
}) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <LoadingSpinner data-testid="loading-spinner" size="lg" />
      </div>
    );
  }

  if (error) {
    return <ErrorMessage message={error.message || 'Failed to load articles'} />;
  }

  if (articles.length === 0) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded" data-testid="no-articles-message">
        No articles found. Try changing the time period.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:gap-8" data-testid="article-list">
      {articles.map(article => (
        <ArticleCard
          key={article.id}
          article={article}
          period={period}
        />
      ))}
    </div>
  );
};

export default ArticleList;