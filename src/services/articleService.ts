import axios from 'axios';
import { ApiResponse, Period } from '../types/article';

const API_KEY = import.meta.env.VITE_NYT_API_KEY;
const BASE_URL = import.meta.env.VITE_NYT_BASE_URL || 'https://api.nytimes.com/svc/mostpopular/v2';

const api = axios.create({
    baseURL: BASE_URL,
    params: {
        'api-key': API_KEY,
    },
});

export const getPopularArticles = async (period: Period = 1): Promise<ApiResponse> => {
    try {
        const response = await api.get<ApiResponse>(`/viewed/${period}.json`);
        return response.data;
    } catch (error) {
        console.error('Error fetching popular articles:', error);
        throw error;
    }
};

export const getArticleById = async (period: Period = 1, id: number): Promise<ApiResponse> => {
    try {
        const response = await api.get<ApiResponse>(`/viewed/${period}.json`);
        return {
            ...response.data,
            results: response.data.results.filter(article => article.id === id)
        };
    } catch (error) {
        console.error(`Error fetching article with id ${id}:`, error);
        throw error;
    }
};