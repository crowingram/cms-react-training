const { comics } = require('./static_data.json') 

export default function handler (req, res) {
	if(req.method === 'GET') {
		res.status(200).json(comics)
	} else {
		res.setHeader('Allow', ['GET'])
		res.status(405).json({message: `Method ${req.method} is not allowed.`})
	}
}