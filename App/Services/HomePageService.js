
var privateHeaders = {
	'X-LC-Id':'xzF4HavabiRfEU2eKvLnvpU9-gzGzoHsz',
    'X-LC-Key':'YpykRlmTqtTSlLA1t32SywUt',
    'Content-Type':'application/json',
}

export default class HomePageService {
	async getHomePageData(){
		let url = "http://localhost:8888/info";
		let map = {};
		map.method = "GET";
		// map.headers = privateHeaders;

		let result = {};
		result.response = await fetch(url, map);
		result.responseData = await result.response.json();
		result.status = result.response.status;
		result.success = result.response.ok;
		return result;
	}
}