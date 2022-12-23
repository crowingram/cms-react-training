	export default interface Publication {
		id: number;
		title: string;
		issueNumber: number;
		description: string;
		resourceURI: string;
		thumbnail: object;
		publishDate: Date;
		creators: object[];
		characters: object[];
		events: object[];
		favorite: boolean;
	}