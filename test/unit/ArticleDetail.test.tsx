import { render, screen } from '@testing-library/react';
import ArticleDetail from '../../src/components/features/ArticleDetail';
import { expect, test } from 'vitest';
import { Article } from "../../src/types/article";

const mockArticle: Article = {
  id: 1,
  title: 'Test Article',
  byline: 'Test Author',
  abstract: 'Test abstract',
  section: 'Test Section',
  published_date: '2024-01-01',
  media: [],
  uri: '457wIgaAUEeTMcWWD0mOgb0GThdXvQ7Y',
  url: 'https://api.nytimes.com/svc/mostpopular/v2',
  asset_id: 123,
  source: 'The New York Times',
  type: 'Article',
  subsection: 'Subsection',
  adx_keywords: 'keyword1; keyword2',
  eta_id: 456,
  updated: '2024-01-01T00:00:00Z',
  nytdsection: 'Test Section',
  column: null,
  des_facet: ['Test Keyword'],
  geo_facet: [],
  org_facet: [],
  per_facet: [],
};

test('renders article details', () => {
  render(<ArticleDetail article={mockArticle} />);
  expect(screen.getByText('Test Article')).toBeInTheDocument();
  expect(screen.getByText('Test Author')).toBeInTheDocument();
  expect(screen.getByText('Test Section')).toBeInTheDocument();
  expect(screen.getByText('keyword1')).toBeInTheDocument();
  expect(screen.getByText('Read Full Article on NY Times')).toBeInTheDocument();
});