/* images should be 1: 1.8 ratio */
var data = [
	/* Work Experience */
	{
		title: "Financial Website Project",
		type: "work",
		imgurl: "./img/optimai_logo.png",
		company: "Optimai Pte Ltd",
		position: "Project Intern",
		start: new Date("5 May 2015"),
		end: new Date("04 Sep 2015"),
		desc: "Develop an Educational Warrants Financial Website in a team of 2 interns.",
		details: "<p>Used SQL Server Management Studio and external libraries to implement black-scholes prediction for warrants.</p>\
					<p>Maintains windows service program to automate database maintenance from data vendors.</p>\
					<p>Prototype solution is deployed to Microsoft Azure Web Services for UAT.</p>\
					<p>Kendo-ui is used as the front end library in combination with bootstrap to achieve a responsive layout.</p>\
					<p>Development is done using ASP.NET wrapper. Earlier prototypes includes spring MVC (Java Servlet).</p>\
					<p>Considering the scale of the project, git is used as Version Control, mainly to raise issues and backup working copies of the project.</p>",
		priority: 45,
		relevance: {
			ssms: 10,
			aspmvc: 8,
			winservice: 8,
			git: 6,
			maws: 7,
			kendoui: 8,
			bootstrap: 8,
			options: 8,
			springmvc: 3
		}
	},
	{
		title: "Optimization Research",
		type: "work",
		imgurl: "./img/optimai_logo.png",
		company: "Optimai Pte Ltd",
		position: "Project Intern",
		start: new Date("01 Jul 2015"),
		end: new Date("04 Sep 2015"),
		desc: "Implemented Simulated Annealing optimization algorithm on large dataset in SSMS and explored ways to optimize performance quality and speed.",
		details: "<p>Applying Simulated Annealing in real world optimization problem proves to be more challenging then it seems.</p>\
					<p>First, we need to find the objective function of the algorithm through trial and error.</p>\
					<p>Given a large dataset, we also need tools to visualize how the data changes over each trial parameters.</p>\
					<p>Above all, writing efficient queries is paramount for performance speed.</p>\
					<p>The project demands a higher understanding of Sql Server Management Studio and the optimization problem than a typical application development.</p>",
		priority: 25,
		relevance: {
			ssms: 10,
			simulated_annealing: 7,
			tableau: 3,
			options: 6,
			matlab: 3
		}
	},
	{
		title: "System Administrator",
		type: "work",
		imgurl: "./img/optimai_logo.png",
		company: "Optimai Pte Ltd",
		position: "Part Time Employee",
		start: new Date("28 Oct 2014"),
		end: new Date("3 May 2015"),
		desc: "Managed Windows Servers to ensure maximum team productivity.",
		details: "<p>Work scope focuses primarily on hyper-v maintenance and ensuring that key Virtual Machines are up at all times.</p>\
					<p>Meanwhile, an system clustering project is in place.</p>\
					<p>Project includes rewiring of switches and Network Attached Storage configuration to support the new technology.</p>",
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
		imgurl: "./img/amd_logo.png",
		company: "Advanced Micro Devices, Inc.",
		position: "Summer Intern",
		start: new Date("05 May 2014"),
		end: new Date("31 Aug 2014"),
		desc: "Assist Senior Developer in design and implementation of new feature across multiple clients and production sites.\
			Support and Maintain automated test software in a team of 8 developers.",
		details: "<p>Key takeaways from this internship includes exposure to linux OS, parallel development of similar client in 2 different technologies (Credence and 93k), and introduction to Atlassian Test Automation tools.\
					<p>The main project focuses on capitalizing C++ Macros to inject codes to measure new parameters in legacy client.</p>\
					<p>Major tickets tackled includes creation of scripts to automate atlassian platform to test newly developed test programs.</p>\
					<p>Another ticket involves discussion with clients from Austin to push out new features.</p>\
					<p>Git and Subversion are used as vcs for the two clients.</p>",
		priority: 25,
		relevance: {
			java: 5,
			credence: 1,
			cpp: 7,
			ninety_three_k: 2,
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
		imgurl: "./img/optimai_logo.png",
		company: "Optimai Pte Ltd",
		position: "Part Time Employee",
		start: new Date("21 Sep 2013"),
		end: new Date("19 Dec 2013"),
		desc: "Assisted Software Developers build Windows application using VB.NET.",
		details: "<p>Maintenance and Development of new features of an existing Windows Application.</p>\
					<p>Development uses Visual Basic Studio 2008, TFS, Devexpress third party library, and Sql Server Management Studio.</p>",
		priority: 20,
		relevance: {
			vbnet: 9,
			devexpress: 5,
			ssms: 4,
			tfs: 3
		}
	},
	{
		title: "Appsilient Framework Developer",
		type: "work",
		imgurl: "./img/optimai_logo.png",
		company: "Optimai Pte Ltd",
		position: "Intern",
		start: new Date("15 Feb 2013"),
		end: new Date("19 Apr 2013"),
		desc: "Reverse Engineered Windows application in a team of 2 interns.",
		details: "<p>Development of a Framework inspired by a dynamic Windows Application, the Margin Trade System.<p>\
					<p>Initial exposure to Sql Server Management Studio, VB.NET (Visual Studio 2008), and Windows Application development.</p>\
					<p>One memorable side project was on a ticket to workaround an intersoft control limitation.</p>",
		priority: 15,
		relevance: {
			vbnet: 9,
			devexpress: 7,
			intersoft: 2,
			ssms: 4
		}
	},
	{ //.....................................................
		title: "Restaurant/Ballroom Waiter",
		type: "work",
		imgurl: "./img/adecco_logo.png",
		company: "Adecco Personnel Pte Ltd",
		position: "Part Time Employee",
		start: new Date("10 Jan 2013"),
		end: new Date("19 Apr 2013"),
		desc: "Part Time Waiter.",
		details: "<p>I believe that I have gained invaluable people skills throughout my short journey in the F&B world.</p>",
		priority: 2,
		relevance: {
			fnb: 10,
			teamwork: 10
		}
	},
	
	/* Projects */
	{
		title: "SUTD PADI Website",
		type: "project",
		imgurl: "./img/padi_logo.png",
		company: "SUTD PADI",
		position: "Developer",
		start: new Date("01 Jul 2015"),
		end: new Date("24 Oct 2015"),
		desc: "Built <a href=\"http://sutdindonesia.sg\" target=\"_blank\">SUTD PADI Website</a> and passed it on to the new Media and Information Technology head.",
		details: "<p>A mini project for the Indonesian community in SUTD.</p>\
				<p>Designed templates to dynamically load pages using AJAX on static website.</p>\
				<p>Initial exposure about networks and DNS deployment models.</p>",
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
		imgurl: "./img/theheist_logo.png",
		company: "SUTD Game Design Club",
		position: "Props Engineer",
		start: new Date("01 Jun 2014"),
		end: new Date("27 Nov 2014"),
		desc: "Part of Props team which focuses on making electronic traps using Arduino.",
		details: "<p>DIY electronic card locks, and manufactured a wooden safe, among other things.</p>\
					<p>And of course, game design.</p>",
		priority: 20,
		relevance: {
			arduino: 10,
			woodworks: 10,
			gamedev: 8
		}
	},
	{
		title: "UROP: Tracking People in Smart City",
		type: "project",
		imgurl: "./img/smartcity_logo.png",
		company: "SUTD United Research Opportunity Project",
		position: "Student Assistant",
		start: new Date("09 Mar 2014"),
		end: new Date("30 Jun 2014"),
		desc: "Assisted researchers develop server side processing to name, guess and group location data.",
		details: "<p>Initial exposure to kml, geolocation processing, and cascading agglomeration algorithms under valuable mentorship of the Assistant Researcher.</p>",
		priority: 10,
		relevance: {
			java: 10,
			geolocation: 8,
			algorithm: 1
		}
	},
	{
		title: "SAJC Graduation Night 2012",
		type: "project",
		imgurl: "./img/sajc_logo.png",
		company: "SAJC",
		position: "Sponsorship Committee",
		start: new Date("01 Sep 2012"),
		end: new Date("06 Dec 2012"),
		desc: "Liaise with external companies to provide sponsorship.",
		details: "<p>Experienced the nature of liasing with third party companies, branding, public speaking, and marketing benefits to potential sponsors.</p>",
		priority: 10,
		relevance: {
			sponsorship: 10,
			eventplanning: 10
		}
	},
	{
		title: "Hot-Tiles",
		type: "project",
		imgurl: "./img/hottiles_logo.png",
		company: "SUTD",
		position: "Developer",
		start: new Date("19 Jan 2015"),
		end: new Date("16 Apr 2015"),
		desc: "Developed a multiplayer android arcade game using libgdx.",
		details: "<p>Initial exposure to libgdx and android studio.</p>",
		priority: 15,
		relevance: {
			libgdx: 10,
			androidstudio: 10
		}
	},
	{
		title: "Travelkat",
		type: "project",
		imgurl: "./img/travelkat_logo.png",
		company: "SUTD",
		position: "Developer",
		start: new Date("14 Sep 2014"),
		end: new Date("11 Dec 2014"),
		desc: "Developed a simple android travel app.",
		details: "<p>Initial exposure to eclipseadt and RANSAC image recognition.</p>",
		priority: 5,
		relevance: {
			eclipseadt: 3,
			ransac: 1
		}
	},
	{
		title: "Okathello",
		type: "project",
		imgurl: "./img/okathello_logo.png",
		company: "SUTD",
		position: "Developer",
		start: new Date("14 Sep 2014"),
		end: new Date("15 Dec 2014"),
		desc: "Created a modified othello hardware game in a group of 3 undergraduates using Multisim.",
		details: "<p>Learned to appreciate MOSFETs, Logic Gates, and semiconductor companies that make modern age developers' life much better.</p>\
					<p>Credits to prof. <a href=\"http://www.okakurniawan.net/\" target=\"_blank\">Oka</a> for the kind guidance and also, as the inspiration for the name of the game.</p>",
		priority: 8,
		relevance: {
			gamedev: 10,
			multisim: 10
		}
	},
	{
		title: "Teslar",
		type: "project",
		imgurl: "./img/teslar_logo.png",
		company: "SUTD",
		position: "Developer",
		start: new Date("16 Sep 2013"),
		end: new Date("16 Dec 2013"),
		desc: "Designed and Assembled TESLAR, your modular surface structure that can act as a lamp. Oh, did we mention solar energy?",
		details: "<p>First major project in SUTD, gained initial exposure to Arduino programming and electrical assemblies.</p>\
					<p>Also, learned a great deal of design, prototyping, and manufacturing of an actual product.</p>\
					<p>Picked up Premiere Pro, Photoshop, Circuitry, Renewable Energy, and great teammates.</p>",
		priority: 12,
		relevance: {
			arduino: 5,
			premiere_pro: 4
		}
	},
	
	/* achievements */
	{
		title: "DBS Digital Gamejam 2014",
		type: "achievement",
		imgurl: "./img/dbsgamejam_logo.png",
		company: "DBS",
		position: "3rd Prize",
		start: new Date("12 Dec 2014"),
		end: new Date("14 Dec 2014"),
		desc: "Design and development of First World Crisis.",
		details: "<p>Re-exploration of childhood game development passion brought to life by <a href=\"http://surijagabriel.wix.com/portfolio\" target=\"_blank\">Gabriel Stephanus Surija</a>, talented artist, animator, and rigger, among other things.</p>",
		priority: 25,
		relevance: {
			gamemaker: 10
		}
	},
	{
		title: "SAJC Book Prize for H2 Computing",
		type: "achievement",
		imgurl: "./img/sajc_logo.png",
		company: "SAJC",
		position: "Winner",
		start: new Date("14 Apr 2012"),
		end: new Date("15 Apr 2012"),
		desc: "College Day 2012.",
		details: "<p>Syllabus includes basic C++ and Database concepts.</p>",
		priority: 5,
		relevance: {
			cpp: 5,
			database: 5
		}
	},
	{
		title: "Hackathon@SG50 Smart Nation",
		type: "achievement",
		imgurl: "./img/hackathonsg_logo.png",
		company: "Hackathon@SG",
		position: "Participant",
		start: new Date("25 Jul 2015"),
		end: new Date("26 Jul 2015"),
		desc: "Developed google cardboard app aiming to help big data visualization.",
		details: "<p>Initial exposure to hackathon and Virtual Reality technologies.</p>",
		priority: 5,
		relevance: {
			java: 10,
			datavis: 6,
			vr: 3
		}
	},
	{
		title: "Cyberdefender Discovery Camp 2012",
		type: "achievement",
		imgurl: "./img/cyberdefender_logo.png",
		company: "DSTA",
		position: "Participant",
		start: new Date("06 Jun 2012"),
		end: new Date("07 Jun 2012"),
		desc: "Initial Exposure to netcat and simple networks hacking.",
		details: "<p>Netcat and Wireshark was kind of fun.</p>\
					<p>Also, hacking is cool.</p>",
		priority: 2,
		relevance: {
			batchscript: 2,
			networks: 10
		}
	},
	
	/* Others */
	{
		title: "OCIP Batam 2012",
		type: "other",
		imgurl: "./img/other_logo.png",
		company: "SAJC",
		position: "Member",
		start: new Date("08 Jun 2012"),
		end: new Date("10 Jun 2012"),
		desc: "OCIP Member.",
		details: "<p>Appreciation for small joys in life.</p>",
		priority: 5,
		relevance: {
			eventplanning: 10
		}
	},
];