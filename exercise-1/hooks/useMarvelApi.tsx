import { useEffect, useState } from 'react';
import md5 from 'blueimp-md5';

const API_PRIVATE: string | undefined = process.env.NEXT_PUBLIC_PRIVATE_API_KEY;
const API_PUBLIC: string | undefined = process.env.NEXT_PUBLIC_PUBLIC_API_KEY;
const API_URL: string | undefined = process.env.NEXT_PUBLIC_API_URL;

const useMarvelApi = ( verb: string, query: string, page: number, character: number, creator: number, favorites: number[]) => {
	const [returnData, setReturnData] = useState({});
		
	useEffect(() => {
		const timestamp: string = new Date().toString();
		const unencoded_hash: string = timestamp + API_PRIVATE + API_PUBLIC;
		const auth: string = md5(unencoded_hash);
		const fetch_url: string = API_URL + '/v1/public/' + verb + '?' + query + 'ts=' + timestamp + '&apikey=' + API_PUBLIC + '&hash=' + auth;
		
		const fetchData = async () => {
			try { 
				const res: Response = await fetch(fetch_url);
				const data: object[] = await res.json();
				setReturnData(data);
			} catch (error: any) {
				console.error("error", error);
			}
		}

		fetchData();
	}, [page, character, creator, favorites])

	return returnData;
}

export default useMarvelApi


