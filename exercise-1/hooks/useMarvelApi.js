import { useEffect, useState } from 'react'
import md5 from 'blueimp-md5'

const API_PRIVATE=process.env.NEXT_PUBLIC_PRIVATE_API_KEY
const API_PUBLIC=process.env.NEXT_PUBLIC_PUBLIC_API_KEY
const API_URL=process.env.NEXT_PUBLIC_API_URL

const useMarvelApi = () => {
	const [returnData, setReturnData] = useState('')
		
	useEffect(() => {
		const timestamp = new Date().toString()
		const unencoded_hash = timestamp + API_PRIVATE + API_PUBLIC
		const auth = md5(unencoded_hash)
		const fetch_url = API_URL + '/v1/public/comics?ts=' + timestamp + '&apikey=' + API_PUBLIC + '&hash=' + auth
		
		const fetchData = async () => {
			try { 
				const res = await fetch(fetch_url)
				const comics = await res.json()
				setReturnData(comics)
			} catch (error) {
				console.log("error", error)
			}
		}

		fetchData();
	}, [])

	return returnData
}

export default useMarvelApi


