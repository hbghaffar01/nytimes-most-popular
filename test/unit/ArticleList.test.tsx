import { render, screen } from "@testing-library/react";
import ArticleList from "../../src/components/features/ArticleList";
import { Period } from "../../src/types/article";
import { describe, expect, test } from "vitest";
import { BrowserRouter } from 'react-router-dom';

describe("ArticleList", () => {
  const mockArticles = [
    {
      id: 1,
      title: "Test Article",
      byline: "Test Author",
      abstract: "Test abstract",
      section: "Test Section",
      published_date: "2024-01-01",
      media: [],
      uri: "457wIgaAUEeTMcWWD0mOgb0GThdXvQ7Y",
      url: "https://api.nytimes.com/svc/mostpopular/v2",
      asset_id: 123,
      source: "The New York Times",
      type: "Article",
      subsection: "Subsection",
      adx_keywords: "keyword1",
      updated: "2024-01-01T00:00:00Z",
      nytdsection: "Test Section",
      column: null,
      des_facet: ["Test Keyword"],
      wkblg_name: "",
      geo_facet: [],
      org_facet: [],
      per_facet: [],
      multimedia: [],
      eta_id: 456,
    },
  ];

  const renderWithRouter = (ui) => {
    return render(<BrowserRouter>{ui}</BrowserRouter>);
  };

  test("renders articles list", () => {
    renderWithRouter(
      <ArticleList
        articles={mockArticles}
        loading={false}
        error={null}
        period={1 as Period}
      />
    );
    expect(screen.getByTestId("article-list")).toBeInTheDocument();
    expect(screen.getByText("Test Article")).toBeInTheDocument();
  });
});