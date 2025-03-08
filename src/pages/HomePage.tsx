import React from "react";
import { Period } from "../types/article";
import { useArticles } from "../hooks/useArticles";
import ArticleList from "../components/features/ArticleList";

interface HomePageProps {
  period: Period;
}

const HomePage: React.FC<HomePageProps> = ({ period }) => {
  const { articles, loading, error } = useArticles(period);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {period === 1
            ? "Today's"
            : period === 7
            ? "This Week's"
            : "This Month's"}{" "}
          Most Popular Articles
        </h1>
        <p className="text-gray-600">
          The most viewed articles on The New York Times for the past{" "}
          {period === 1 ? "day" : period === 7 ? "week" : "month"}.
        </p>
      </div>

      <ArticleList
        articles={articles}
        loading={loading}
        error={error}
        period={period}
      />
    </div>
  );
};

export default HomePage;
