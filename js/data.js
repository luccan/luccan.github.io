var data = [
	/* Work Experience */
	{
		title: "Financial Website Project",
		type: "work",
		imgurl: "./img/gaya_logo.png",
		company: "Optimai Pte Ltd",
		position: "Project Intern",
		start: new Date("May 2015"),
		end: new Date("Sep 2015"),
		desc: "Develop an Educational Financial Website in a team of 2 interns. Also, Implemented Optimization Algorithm in SSMS.",
		details: "",
		priority: 45,
		relevance: {
			ssms: 10,
			aspmvc: 8,
			winservice: 8,
			git: 6,
			maws: 7,
			tableau: 2,
			kendoui: 8,
			bootstrap: 8,
			options: 8,
			springmvc: 3,
			matlab: 1
		}
	},
	{
		title: "System Administrator",
		type: "work",
		imgurl: "./img/gaya_logo.png",
		company: "Optimai Pte Ltd",
		position: "Part Time Employee",
		start: new Date("Oct 2014"),
		end: new Date("Apr 2015"),
		desc: "Managed Windows Servers to ensure maximum team productivity.",
		details: "",
		priority: 10,
		relevance: {
			winserver: 7,
			hyperv: 10,
			netconfig: 6,
			batchscript: 3
		}
	},
	{
		title: "Software Test Automation",
		type: "work",
		imgurl: "./img/gaya_logo.png",
		company: "Advanced Micro Devices, Inc.",
		position: "Summer Intern",
		start: new Date("May 2014"),
		end: new Date("Aug 2014"),
		desc: "Assist Senior Developer in design and implementation of new feature across multiple clients and production sites.\
			Support and Maintain automated test software in a team of 8 developers.",
		details: "",
		priority: 25,
		relevance: {
			java: 5,
			credence: 1,
			cpp: 7,
			ninethreek: 2,
			batchscript: 5,
			shellscript: 6,
			git: 4,
			svn: 4,
			atlassian: 4
		}
	},
	{
		title: "Margin Trade System Developer",
		type: "work",
		imgurl: "./img/gaya_logo.png",
		company: "Optimai Pte Ltd",
		position: "Part Time Employee",
		start: new Date("Oct 2013"),
		end: new Date("Dec 2013"),
		desc: "Assisted Software Developers build Windows application using VB.NET.",
		details: "",
		priority: 20,
		relevance: {
			vbnet: 9,
			ssms: 4
		}
	},
	{
		title: "Reverse Engineering Margin Trade System Framework",
		type: "work",
		imgurl: "./img/gaya_logo.png",
		company: "Optimai Pte Ltd",
		position: "Intern",
		start: new Date("Feb 2013"),
		end: new Date("Apr 2013"),
		desc: "Reverse Engineered Windows application in a team of 2 interns.",
		details: "",
		priority: 15,
		relevance: {
			vbnet: 9,
			ssms: 4
		}
	},
	{ //.....................................................
		title: "Restaurant/Ballroom Waiter",
		type: "work",
		imgurl: "./img/gaya_logo.png",
		company: "Adecco Personnel Pte Ltd",
		position: "Part Time Employee",
		start: new Date("Jan 2013"),
		end: new Date("Apr 2013"),
		desc: "Part Time Waiter.",
		details: "",
		priority: 2,
		relevance: {
			teamwork: 10
		}
	},
	
	/* Projects */
	{
		title: "SUTD PADI Website",
		type: "project",
		imgurl: "./img/gaya_logo.png",
		company: "SUTD PADI",
		position: "Developer",
		start: new Date("Jul 2015"),
		end: new Date("Oct 2015"),
		desc: "Built SUTD PADI Website and passed it on to the new Media and Information Technology head.",
		details: "",
		priority: 20,
		relevance: {
			html5: 10,
			javascript: 10,
			bootstrap: 8
		}
	},
	{
		title: "The Heist",
		type: "project",
		imgurl: "./img/gaya_logo.png",
		company: "SUTD Game Design Club",
		position: "Props Engineer",
		start: new Date("Jun 2014"),
		end: new Date("Oct 2014"),
		desc: "Part of Props team which focuses on making electronic traps using Arduino.",
		details: "",
		priority: 20,
		relevance: {
			arduino: 10,
			gamedev: 8
		}
	},
	{
		title: "United Research Opportunity Project: Tracking People in Smart City",
		type: "project",
		imgurl: "./img/gaya_logo.png",
		company: "SUTD",
		position: "Student Assistant",
		start: new Date("Mar 2014"),
		end: new Date("Jun 2014"),
		desc: "Assisted researchers develop server side processing to name, guess and group location data.",
		details: "",
		priority: 10,
		relevance: {
			java: 10,
			geolocation: 8
		}
	},
	{
		title: "SAJC Graduation Night 2012",
		type: "project",
		imgurl: "./img/gaya_logo.png",
		company: "SAJC",
		position: "Sponsorship Committee",
		start: new Date("Sep 2012"),
		end: new Date("Nov 2012"),
		desc: "Liaise with external companies to provide sponsorship.",
		details: "",
		priority: 10,
		relevance: {
			sponsorship: 10,
			eventplanning: 10
		}
	},
	{
		title: "OCIP Batam 2012",
		type: "project",
		imgurl: "./img/gaya_logo.png",
		company: "SAJC",
		position: "Member",
		start: new Date("Jun 2012"),
		end: new Date("Jun 2012"),
		desc: "OCIP Member.",
		details: "",
		priority: 5,
		relevance: {
			eventplanning: 10
		}
	},
	{
		title: "Hot-Tiles",
		type: "project",
		imgurl: "./img/gaya_logo.png",
		company: "SUTD",
		position: "Developer",
		start: new Date("Jan 2015"),
		end: new Date("Apr 2015"),
		desc: "Developed a multiplayer android arcade game using libgdx.",
		details: "",
		priority: 15,
		relevance: {
			libgdx: 10,
			androidstudio: 10
		}
	},
	
	/* competitions */
	{
		title: "DBS Digital Gamejam 2014",
		type: "competition",
		imgurl: "./img/gaya_logo.png",
		company: "DBS",
		position: "3rd Prize Winner",
		start: new Date("Dec 2014"),
		end: new Date("Dec 2014"),
		desc: "First World Crisis",
		details: "",
		priority: 25,
		relevance: {
			gamemaker: 10
		}
	},
	{
		title: "SAJC Book Prize Winner for H2 Computing (College Day 2012)",
		type: "competition",
		imgurl: "./img/gaya_logo.png",
		company: "SAJC",
		position: "Winner",
		start: new Date("Oct 2012"),
		end: new Date("Oct 2012"),
		desc: "Best in Cohort",
		details: "",
		priority: 5,
		relevance: {
			cpp: 10
		}
	},
	{
		title: "Hackathon@SG50 Smart Nation",
		type: "competition",
		imgurl: "./img/gaya_logo.png",
		company: "SUTD",
		position: "Participant",
		start: new Date("Jul 2015"),
		end: new Date("Jul 2015"),
		desc: "Developed google cardboard app aiming to help big data visualization.",
		details: "",
		priority: 5,
		relevance: {
			java: 10,
			datavis: 6,
			vr: 3
		}
	},
	{
		title: "Cyberdefender Discovery Camp 2012",
		type: "competition",
		imgurl: "./img/gaya_logo.png",
		company: "SAJC",
		position: "Participant",
		start: new Date("Jan 2012"),
		end: new Date("Jan 2012"),
		desc: "Initial Exposure to netcat and simple networks hacking.",
		details: "",
		priority: 2,
		relevance: {
			batchscript: 2,
			networks: 10
		}
	},
];