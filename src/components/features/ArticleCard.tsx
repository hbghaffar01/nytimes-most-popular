import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../../types/article';
import { getRelativeTime } from '../../utils/dateUtils';
import ImageWithFallback from '../common/ImageWithFallback';

interface ArticleCardProps {
  article: Article;
  period: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, period }) => {
  const thumbnail = article.media?.[0]?.['media-metadata']?.find(meta => 
    meta.format === 'Standard Thumbnail' || meta.format === 'thumbLarge'
  );

  const imageUrl = thumbnail?.url || '/placeholder-image.png';

  return (
    <Link 
      to={`/article/${period}/${article.id}`}
      className="block border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
      data-testid="article-card"
    >
      <div className="flex flex-col h-full">
        <div className="p-4 flex-grow">
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <ImageWithFallback 
                src={imageUrl} 
                alt={article.title}
                className="w-20 h-20 object-cover rounded"
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
                {article.title}
              </h2>
              <p className="text-gray-500 text-sm mb-2">
                {article.byline}
              </p>
              <p className="text-gray-700 text-sm line-clamp-2">
                {article.abstract}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 px-4 py-2 border-t border-gray-100 flex justify-between items-center">
          <span className="text-xs text-gray-500">{article.section}</span>
          <span className="text-xs text-gray-500">{getRelativeTime(article.published_date)}</span>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;