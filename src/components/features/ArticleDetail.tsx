import React from 'react';
import { Article } from '../../types/article';
import { formatDate } from '../../utils/dateUtils';
import ImageWithFallback from '../common/ImageWithFallback';

interface ArticleDetailProps {
  article: Article;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article }) => {
  const largeImage = article.media?.[0]?.['media-metadata']?.find(meta => 
    meta.format === 'mediumThreeByTwo440' || meta.format === 'Large'
  );

  const imageUrl = largeImage?.url || article.media?.[0]?.['media-metadata']?.[0]?.url || '/placeholder-image.png';

  const keywords = article.adx_keywords.split(';').filter(Boolean);

  return (
    <article className="max-w-3xl mx-auto" data-testid="article-detail">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
          {article.title}
        </h1>
        <div className="text-gray-500 mb-6">
          <span>{article.byline}</span>
          <span className="mx-2">|</span>
          <span>{formatDate(article.published_date)}</span>
        </div>
        <div className="mb-6">
          <ImageWithFallback 
            src={imageUrl} 
            alt={article.title}
            className="w-full h-auto rounded-lg shadow-md"
          />
          {article.media?.[0]?.caption && (
            <p className="mt-2 text-sm text-gray-500 italic">
              {article.media[0].caption}
            </p>
          )}
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-700 mb-6">
          {article.abstract}
        </p>
        
        <div className="my-8 p-4 bg-gray-50 border-l-4 border-nyt-red rounded">
          <h2 className="text-lg font-medium mb-2">Article Information</h2>
          <ul className="space-y-1">
            <li><span className="font-medium">Section:</span> {article.section}</li>
            {article.subsection && <li><span className="font-medium">Subsection:</span> {article.subsection}</li>}
            <li><span className="font-medium">Published:</span> {formatDate(article.published_date)}</li>
            <li><span className="font-medium">Source:</span> {article.source}</li>
            <li><span className="font-medium">Type:</span> {article.type}</li>
          </ul>
        </div>

        {keywords.length > 0 && (
          <div className="mt-8">
            <h2 className="text-lg font-medium mb-3">Keywords</h2>
            <div className="flex flex-wrap gap-2">
              {keywords.map((keyword, index) => (
                <span 
                  key={index} 
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {keyword.trim()}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-gray-200">
          <a 
            href={article.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block hover:bg-gray-700 hover:text-white text-gray-500 border font-bold py-2 px-4 rounded transition-colors"
          >
            Read Full Article on NY Times
          </a>
        </div>
      </div>
    </article>
  );
};

export default ArticleDetail;