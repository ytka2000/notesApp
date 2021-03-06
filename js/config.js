const activeNotes = [
	{
		icon: "",
		name: "Shopping list",
		createdOn: "20/04/2021",
		category: "Task",
		content: "Tomatoes, bread",
		dates: "",
	},
	{
		icon: "",
		name: "The theory of evolution",
		createdOn: "27/04/2021",
		category: "Random Thought",
		content: "The evolution has its own theory",
		dates: "",
	},
	{
		icon: "",
		name: "New Feature",
		createdOn: "05/05/2021",
		category: "Idea",
		content: "Implement new features during 3/5/2021 - 5/5/2021",
		dates: "3/5/2021, 5/5/2021",
	},
	{
		icon: "",
		name: "William Gaddis",
		createdOn: "07/05/2021",
		category: "Quote",
		content: "Tomatoes, bread",
		dates: "",
	},
	{
		icon: "",
		name: "Books",
		createdOn: "15/05/2021",
		category: "Task",
		content: "The Lean Startup",
		dates: "",
	},
];

const archivedNotes = [
	{
		icon: "",
		name: "Archived Card",
		createdOn: "20/04/2021",
		category: "Task",
		content: "This card is archived",
		dates: "",
	},
];

const summaryNotes = [
	{
		icon: "",
		noteCategory: "Task",
		active: 2,
		archived: 1,
	},
	{
		icon: "",
		noteCategory: "Random Thought",
		active: 1,
		archived: 0,
	},
	,
	{
		icon: "",
		noteCategory: "Idea",
		active: 1,
		archived: 0,
	},
	,
	{
		icon: "",
		noteCategory: "Quote",
		active: 1,
		archived: 0,
	},
];

const categories = ["Task", "Random Thought", "Idea", "Quote"];

export { activeNotes, archivedNotes, summaryNotes, categories };
