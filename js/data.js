/* images should be 1: 1.8 ratio */
var data = [
	/* Work Experience */
	{
		title: "System & Network Engineer",
		type: "work",
		imgurl: "./img/shift-technology_logo.png",
		company: "Shift Technology",
		position: "System & Network Engineer",
		start: new Date("28 Feb 2022"),
		end: new Date(), /*To be updated*/
		desc: "Create, manage, monitor and maintain company infrastructure, cloud and on-prem",
		details: "<p>Hybrid GUI, CLI, and Infrastructure as Code, both manual and automation.<p>\
					<p>Implement Group Policies and Identity Access Management.</p>\
					<p>Part of ongoing company-wide IaC migration.</p>\
					<p>Manage physical firewalls, WAF, VNet routing, Load Balancers.</p>\
					<p>Perform backups, updates, reboot cycle, vulnerability management, audits, etc.</p>\
					<p>Level 2 Technical support.</p>\
					<p>Develop automation scripts to improve efficiency.</p>\
					<p>Develop and manage various monitoring and alerting. Some examples:</p>\
					<ul>\
						<li>Monitor Azure source IP ranges to prevent integration failure on Firewall whitelist</li>\
						<li>Monitor SQL Server database-level uptime</li>\
						<li>Monitor process resource use unexpected spikes</li>\
					</ul>\
					</p>\
					<p>Document various processes and technical details.</p>\
					<p>Contribute on designing internal team KPI, SOP, and management process.</p>\
					<p>Manage internal and external stakeholders on incidents and support requests.</p>\
					",
		priority: 60,
		relevance: {
			azure: 10,
			ovh: 10,
			terraform: 5,
			aws: 1,
			powershell: 10,
			bash: 7,
			python: 7,
			java: 5,
			git: 5,
			pdq: 8,
			kubernetes: 4,
			ansible: 4,
			nagios: 8,
			grafana: 6,
			opsgenie: 8,
			pagerduty: 6,
			palo_alto: 10,
			globalprotect: 6,
			cloudflare: 7,
			f5: 5,
			ruckus: 5,
			intune: 3,
			device42: 3,
			thycotic: 6,
			identityiq: 6,
			identitynow: 4,
			tenable: 7,
			veeam: 3,
			bitvise: 4,
			windows: 10,
			ad: 8,
			dns: 8,
			gpo: 8,
			nps: 6,
			linux: 8,
			jira: 8,
			confluence: 8
		}
	},
	{
		title: "Database Administrator",
		type: "work",
		imgurl: "./img/shift-technology_logo.png",
		company: "Shift Technology",
		position: "System & Network Engineer",
		start: new Date("28 Feb 2022"),
		end: new Date(), /*To be updated*/
		desc: "Manage and automate database infrastructure and access",
		details: "<p>Maintain automation scripts for database setup and backups.<p>\
					<p>Configure high availability databases and datalakes.</p>\
					<p>Debug and optimize SQL Scripts should developers face any technical issues</p>\
					",
		priority: 25,
		relevance: {
			ssms: 10,
			azure: 7,
			vbnet: 1
		}
	},
	{
		title: "IT Helpdesk",
		type: "work",
		imgurl: "./img/shift-technology_logo.png",
		company: "Shift Technology",
		position: "System & Network Engineer",
		start: new Date("28 Feb 2022"),
		end: new Date(), /*To be updated*/
		desc: "Onboard, Provision and Support user machines",
		details: "<p>Work laptops: Windows (Dell) & Mac, Surface.<p>\
					<p>Manage wifi and access points.</p>\
					<p>Manage office access cards, printers, infrastructure inventory, etc</p>\
					",
		priority: 30,
		relevance: {
			windows: 10,
			mac: 1,
			salto: 6,
			ruckus: 6,
			ad: 6
		}
	},
	{
		title: "REAP Framework Developer",
		type: "work",
		imgurl: "./img/optimai_logo.png",
		company: "Optimai Pte Ltd",
		position: "IT Manager",
		start: new Date("01 Jan 2019"),
		end: new Date("28 Feb 2022"),
		desc: "Design, develop, enhance, and maintain company Framework",
		details: "<p>Metadata-driven framework design, for convenience of business logic deployment.<p>\
					<p>Designed REAP pitch deck that is used for SFF 2019.</p>\
					<p>Main design features include:\
					<ul>\
						<li>Workflow Customization</li>\
						<li>Audit Trail</li>\
						<li>API driven design (REST)</li>\
						<li>Automated Regression Testing</li>\
					</ul>\
					</p>",
		priority: 55,
		relevance: {
			vbnet: 10,
			devexpress: 7,
			ssms: 6
		}
	},
	{
		title: "Crypto Asset Management System",
		type: "work",
		imgurl: "./img/optimai_logo.png",
		company: "Optimai Pte Ltd",
		position: "IT Consultant",
		start: new Date("01 Sep 2017"),
		end: new Date("28 Feb 2022"),
		desc: "Customized Asset Management System to fit Cryptocurrencies Trading.",
		details: "<p>Interesting customizations include: </p> \
					<p>- Supporting up to 18 decimal places</p> \
					<p>- Automated On-Chain Settlements</p> \
					",
		priority: 45,
		relevance: {
			ssms: 10,
			crypto:8,
			finance: 8,
			tfs: 3
		}
	},
	{
		title: "Integrated Investment System",
		type: "work",
		imgurl: "./img/optimai_logo.png",
		company: "Optimai Pte Ltd",
		position: "IT Consultant",
		start: new Date("01 Jul 2017"),
		end: new Date("01 Jul 2021"),
		desc: "Integrated various investment products to produce a comprehensive client statement.",
		details: "<p>A highly customized reporting system where logical presentation is important to produce a logical and accurate final report.</p>",
		priority: 30,
		relevance: {
			ssms: 10,
			finance: 10,
			data_visualization: 6,
			vbnet: 5,
			tfs: 3
		}
	},
	{
		title: "Tuition Teacher (Diploma in IT)",
		type: "work",
		imgurl: "./img/work_logo.png",
		company: "Personal",
		position: "Teacher",
		start: new Date("01 Jan 2017"),
		end: new Date("30 Jun 2018"),
		desc: "Gave weekly tuition to an international student pursuing a Diploma in IT in Kaplan University.",
		details: "<p>Revisiting theoretical concepts that has been forgotten in the hustle and bustle of work life is quite nice.</p>",
		priority: 5,
		relevance: {
			teaching:10
		}
	},
	{
		title: "Loan Management System",
		type: "work",
		imgurl: "./img/optimai_logo.png",
		company: "Optimai Pte Ltd",
		position: "IT Consultant",
		start: new Date("01 Jan 2017"),
		end: new Date("16 Feb 2021"),
		desc: "Developed an all-purpose Loan Management System.",
		details: "<p>A different approach from normal loan systems, this system attempts to generalize all type of loans into different type of parameters.</p>",
		priority: 60,
		relevance: {
			ssms: 10,
			finance: 8,
			data_visualization: 6,
			business_analytics: 9,
			vbnet: 5,
			devexpress: 5,
			tfs: 3
		}
	},
	{
		title: "Settlement Optimization Analytics Tool",
		type: "work",
		imgurl: "./img/optimai_logo.png",
		company: "Optimai Pte Ltd",
		position: "IT Consultant",
		start: new Date("03 Oct 2016"),
		end: new Date("01 Apr 2017"),
		desc: "Implemented an Analytics Tool to compare and study various optimization heuristics and algorithms.",
		details: "<p>This Tool is done in basic VB.NET, building on top of the Optimization Research project.</p>\
					<p>Implemented Real-time Visualization and calculated result analysis at the end of the run.</p>",
		priority: 20,
		relevance: {
			vbnet: 10,
			datavis: 4,
			tfs: 3
		}
	},
	{
		title: "Structured Warrants Website Project",
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
			windows_service: 8,
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
		title: "Winforms Framework Developer",
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
		title: "Hype And Seek",
		type: "project",
		imgurl: "./img/hypeandseek_logo.png",
		company: "Hype And Seek",
		position: "Vendor",
		start: new Date("05 Nov 2017"),
		end: new Date("08 Jan 2018"),
		desc: "Vendor for PHP Laravel Site Migration and Maintenance.",
		details: "<p>I discovered Cloudways at this point and boy, they make cloud deployment easy.</p>\
				<p>Good introduction to PHP here.</p>\
				<p>Oh, and I played around with SEO, as far as the word free is applicable.</p>\
				<p>Hype And Seek is a neat Influencer Marketing Platform. Visit them <a href='https://www.hypeandseek.com' target=\"_blank\">here</a>.</p>",
		priority: 25,
		relevance: {
			site_migration: 10,
			php: 5,
			laravel: 5,
			cloudways: 5,
			seo: 3
		}
	},
	{
		title: "Capstone - SkyOpt VR Prototype",
		type: "project",
		imgurl: "./img/capstoneskyopt_logo.png",
		company: "SUTD",
		position: "Developer & Product Design",
		start: new Date("1 Jan 2016"),
		end: new Date("20 Aug 2016"),
		desc: "Developed a prototype Interior Architecture VR Visualizer.",
		details: "<p>It's more complex than it sounds.</p>\
				<p>We have a 'builder', an Unity plug-in for Interior Architects to import their models and add the key visualizers in their cad.</p>\
				<p>These files, or 'renders' then can be uploaded to our server, where it can be downloaded by the mobile app.</p>\
				<p>Users choose which renders to visualize in VR, and they can walk around, visualizing airflow, noise levels, and more.</p>\
				<p>Oh, we have this both in Google Cardboard and Gear VR, so thats a plus.</p>\
				<p>OK, let's be fair. It's a prototype. It's not as complex as it sounds.</p>",
		priority: 25,
		relevance: {
			vr: 10,
			google_cardboard: 5,
			gearvr: 3,
			unity: 10
		}
	},
	{
		title: "Canone - A 3d Endless Runner Game",
		type: "project",
		imgurl: "./img/canone_logo.png",
		company: "SUTD",
		position: "Graphics & Developer",
		start: new Date("1 May 2016"),
		end: new Date("15 Aug 2016"),
		desc: "Developed a prototype endless runner game in unity.",
		details: "<p>A culture shock for being rather shy from 3D game development engines.</p>\
				<p>TIL Particles, 3D Physics, and basic rigging.</p>",
		priority: 15,
		relevance: {
			unity: 10,
			blender: 10,
			game_development: 7
		}
	},
	{
		title: "GAYA 2016 Website",
		type: "project",
		imgurl: "./img/gaya2016_logo.png",
		company: "SMU SMUKI",
		position: "Marketing",
		start: new Date("1 Sep 2015"),
		end: new Date("20 Mar 2016"),
		desc: "Built an event website that track orders in a spreadsheet and send automated confirmation e-mails.",
		details: "<p>This is an interesting challenge to explore if I can leverage on github's free static space and the power of a webapp with a database and a server.</p>\
				<p>The end result is a decent user experience platform built on top of google forms, spreadsheets, and some google scripts.</p>\
				<p>Not sure about security concerns. Do drop me an e-mail if that renders my google account hackable.</p>\
				<p>Read up more <a href='./content/2016/jan/google-forms-backend-for-static-web.html' target=\"_blank\">here</a>.</p>",
		priority: 25,
		relevance: {
			html5: 10,
			javascript: 10,
			bootstrap: 7
		}
	},
	{
		title: "LazyBlogger: Static javascript blog template",
		type: "project",
		imgurl: "./img/lazyblogger_logo.png",
		company: "Personal",
		position: "N/A",
		start: new Date("26 Nov 2015"),
		end: new Date("26 Nov 2015"),
		desc: "Deployed a simple and minimalistic static js blog template.",
		details: "<p>I disliked the idea of having to run a script to generate static pages to deploy a blog.</p>\
				<p>As such, I played around with iframes to create a blog template that reuses layout with minimal hassle.</p>\
				<p>It has its limitations, but I will try to improve it as much as possible.</p>\
				<p>Read up more <a href='./content/2015/nov/lazyblogger.html' target=\"_blank\">here</a>.</p>",
		priority: 15,
		relevance: {
			html5: 10,
			javascript: 10
		}
	},
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
		title: "Image-Based Navigation Using 3D Visual SLAM ",
		type: "project",
		imgurl: "./img/ignus_logo.png",
		company: "SUTD United Research Opportunity Project",
		position: "Student Assistant",
		start: new Date("19 Jan 2015"),
		end: new Date("30 Apr 2015"),
		desc: "Assisted researchers develop application using Kinect SDK to generate 3D .stl files used for further processing.",
		details: "<p>Exposure to image rendering and kinect sdk. Also learned the basic idea of SLAM and its various applications.</p>",
		priority: 5,
		relevance: {
			csharp: 10,
			kinectsdk: 7,
			pointcloud: 7,
			slam: 5
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
			wood_works: 10,
			game_development: 8
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
			event_planning: 10
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
		priority: 8,
		relevance: {
			libgdx: 10,
			android_studio: 10,
			game_development: 5
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
		priority: 10,
		relevance: {
			game_development: 10,
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
		priority: 15,
		relevance: {
			arduino: 5,
			premiere_pro: 4
		}
	},
	
	/* achievements */
	{
		title: "SUTD Accenture Analytics Edge Award 2016",
		type: "achievement",
		imgurl: "./img/achievement_logo.png",
		company: "SUTD & Accenture",
		position: "Winner",
		start: new Date("1 Sep 2016"),
		end: new Date("1 Sep 2016"),
		desc: "Best in 2016 cohort for Analytics Edge (40.220) Course.",
		details: "<p>Technically, tied with another person, but hey.</p>",
		priority: 25,
		relevance: {
			business_analytics: 10
		}
	},
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
	
	/* Others */
	{
		title: "YSEALI Cultural Heritage Hackathon 2023",
		type: "other",
		imgurl: "./img/conservationofwatershed_logo.png",
		company: "Shopee",
		position: "Participant",
		start: new Date("18 Mar 2023"),
		end: new Date("19 Mar 2023"),
		desc: "Pitched eco-tourism as a solution to tangible water-related issues on Watershed as a cultural heritage",
		details: "<p>No cigar, (not sure about being close though), just a humble cert (To be issued).</p>\
					<p>Likely to start an episode of hackathon participations for the months to come.</p>\
					<p>Thanks, YSEALI & Urban Studies Lab!</p>\
					<p></p>\
					<p>Special Mention: My teammates Fedra dos Santos & Reniel Rocaberte, thanks for the 2 fun days :)</p>\
					",
		priority: 10,
		relevance: {
			powerpoint: 10,
			miro: 7
		}
	},
	{
		title: "Shopee Code League",
		type: "other",
		imgurl: "./img/shopeecodeleague_logo.png",
		company: "Shopee",
		position: "Participant",
		start: new Date("08 Jun 2020"),
		end: new Date("08 Aug 2020"),
		desc: "Took part on a couple of mini-competitions in a string of Coding challenges",
		details: "<p>Nothing much to brag about, no prize, just a humble cert.</p>\
					<p>Best achievement is on 'Order Brushing'. I think I did pretty well (but not so sure if the leaderboard has changed since then)</p>\
					<p>A fun change in using SQL for pure analysis instead of using it to store data.</p>",
		priority: 10,
		relevance: {
			ssms: 10,
			business_analytics: 10
		}
	},
	{
		title: "Hackathon Merdeka 3.0",
		type: "other",
		imgurl: "./img/hackathonmerdeka_logo.png",
		company: "Code4Nation",
		position: "Participant",
		start: new Date("04 Dec 2015"),
		end: new Date("06 Dec 2015"),
		desc: "Developed an image-oriented reporting platform that targets teenagers who love to snap.",
		details: "<p>This platform is inspired by the online platform 9gag and Instagram.</p>\
					<p>In a team of 5, we build a platform from scratch using meteor.js.</p>\
					<p>As for image hosting, we used a free service, <a href='http://cloudinary.com/' target=\"_blank\">cloudinary</a>, and link it to our website. This is an unique experience as we have to hack around the service to search for an image hosting service whose image url can be retrieved. Our mongodb only stores the urlstring to the image.</p>\
					<p>We also implemented a basic rating system and an admin who needs to approve posts to elevate their popularity.</p>\
					<p>Unfortunately, a similar service has been put in place and the judges deem that our project lack UX. Despite all of these, I personally feel that we have made quite an application in under 48 hours.</p>\
					<p>I would like to thank Made Raditya Pujamurti, Jefferey Effendy, Indra Firmansyah, and Ryan Alexander for an amazing 3-day sprint.</p>",
		priority: 25,
		relevance: {
			meteorjs: 10,
			html5: 3,
			bootstrap: 3
		}
	},
	{
		title: "DBS Digital Gamejam 2015",
		type: "achievement",
		imgurl: "./img/moneyfarm_logo.png",
		company: "DBS",
		position: "Participant",
		start: new Date("11 Dec 2015"),
		end: new Date("13 Dec 2015"),
		desc: "Design and development of Money Farm.",
		details: "<p>Back to Gamejam, with a new topic of 'The Bulls and The Bears'.</p>\
					<p>It tingles my interest in the stock market more than ever.</p>",
		priority: 10,
		relevance: {
			gamemaker: 10
		}
	},
	{
		title: "Hackathon@SG50 Smart Nation",
		type: "other",
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
			data_visualization: 6,
			vr: 3
		}
	},
	{
		title: "Cyberdefender Discovery Camp 2012",
		type: "other",
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
			event_planning: 10
		}
	},
];
