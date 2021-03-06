export default class BookStoreService {
	data = [
		{
			id: 1,
			title: 'Production-Ready Microservices',
			author: 'Susan J. Fowler',
			price: 10,
			imgUrl: 'https://cv02.twirpx.net/2111/2111167.jpg?t=20161219031735',
		},
		{
			id: 2,
			title: 'Release It!',
			author: 'Michael T. Nygard',
			price: 20,
			imgUrl: 'https://mxsmirnov.files.wordpress.com/2016/08/releaseit.jpg',
		}
	];

	getBooks() {
		return new Promise((resolve, reject) => {
			setTimeout(() => resolve(this.data), 700);
			// setTimeout(() => reject(new Error('Missing get books')), 700);
		});
	}
};