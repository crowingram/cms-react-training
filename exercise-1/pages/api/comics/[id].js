const { comics } = require('./static_data.json') 

export default function handler (req, res) {
	const { id } = req.query
	const comic = comics.find((comic) => comic.id === parseInt(id))

	if(req.method === 'GET') {
		res.status(200).json(comic)
	} else {
		res.setHeader('Allow', ['GET'])
		res.status(405).json({message: `Method ${req.method} is not allowed.`})
	}
}