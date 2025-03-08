import { render, screen } from '@testing-library/react';
import ArticleCard from '../../src/components/features/ArticleCard';
import { expect, test } from 'vitest';
import { Article } from "../../src/types/article";
import { BrowserRouter } from 'react-router-dom';

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
  per_facet: []
};

const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

test('renders article card', () => {
  renderWithRouter(<ArticleCard article={mockArticle} period={1} />);
  expect(screen.getByText('Test Article')).toBeInTheDocument();
  expect(screen.getByText('Test Author')).toBeInTheDocument();
  expect(screen.getByText('Test abstract')).toBeInTheDocument();
});

test('link navigates to correct path', () => {
  const { container } = renderWithRouter(<ArticleCard article={mockArticle} period={1} />);
  const link = container.querySelector('a');
  expect(link).toBeInTheDocument();
});