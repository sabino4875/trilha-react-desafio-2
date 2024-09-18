import axios, { AxiosResponse } from 'axios';
import { User } from '../models/user';
import { Item } from "../models/item";

const instance = axios.create({
	baseURL: 'https://api.github.com/',
	timeout: 15000,
});
const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => instance.get(url).then(responseBody),
	post: (url: string, body: object) =>
		instance.post(url, body).then(responseBody),
	put: (url: string, body: object) => instance.put(url, body).then(responseBody),
	delete: (url: string) => instance.delete(url).then(responseBody),
};

export const GitHub = {
	getUser: (user: string): Promise<User> => requests.get(`users/${user}`),
	getRepositories: (user: string): Promise<Item[]> => requests.get(`users/${user}/repos`),
};