var relevance_relations = [
	{
		parent: "database",
		child: {
			sql: 10
		}
	},
	{
		parent: "graphics",
		child: {
			pointcloud: 10,
			ransac: 10
		}
	},
	{
		parent: "algorithm",
		child: {
			simulated_annealing: 9,
			ransac: 10
		}
	},
	{
		parent: "optimization",
		child: {
			simulated_annealing: 10
		}
	},
	{
		parent: "business_analytics",
		child: {
			options: 10,
			setinstrs: 10
		}
	},
	{
		parent: "data_visualization",
		child: {
			grafana: 6,
			tableau: 6,
			matlab: 2
		}
	},
	{
		parent: "robotics",
		child: {
			arduino: 7
		}
	},
	{
		parent: "sysadmin",
		child: {
			winserver: 10,
			netconfig: 10
		}
	},
	{
		parent: "userinterface",
		child: {
			telerik: 10,
			devexpress: 10,
			intersoft: 10
		}
	},
	{
		parent: "userexperience",
		child: {
			web_development: 3,
			mobile_development: 3,
			game_development: 3,
			userinterface: 3
		}
	},
	{
		parent: "networks",
		child: {
			wireshark: 10,
			firewall: 10,
			vpn: 6,
			netconfig: 5
		}
	},
	{
		parent: "teamwork",
		child: {
			vcs: 10
		}
	},
	{
		parent: "infrastructure",
		child: {
			infrastructure_cloud: 10,
			infrastructure_onprem: 10,
			load_balancer: 10,
			firewall: 10,
			winserver: 10,
			vpn: 10,
			pdq: 8,
			kubernetes: 8,
			
		}
	},
	{
		parent: "infrastructure_cloud",
		child: {
			azure: 10,
			aws: 10,
			cloudways: 10,
			ovh: 10,
			intune: 7
		}
	},
	{
		parent: "infrastructure_onprem",
		child: {
			ovh: 10,
			biznet: 10,
			vsphere: 10
		}
	},
	{
		parent: "infrastructure_windows",
		child: {
			azure: 10,
			powershell: 5,
			batch_script: 5,
			ad: 10,
			dns: 8,
			gpo: 10,
			nps: 10
		}
	},
	{
		parent: "inventory",
		child: {
			device42: 10
		}
	},
	{
		parent: "firewall",
		child: {
			palo_alto: 10,
			cloudflare: 10,
			fortinet: 10
		}
	},
	{
		parent: "vpn",
		child: {
			globalprotect: 10
		}
	},
	{
		parent: "wifi",
		child: {
			ruckus: 10
		}
	},
	{
		parent: "load_balancer",
		child: {
			f5: 10,
			cloudflare: 10,
			azure_loadbalancer: 10
		}
	},
	{ /*Infra As Code*/
		parent: "iac",
		child: {
			terraform: 10,
			ansible: 10
		}
	},
	{ /*Identity Access Management*/
		parent: "iam",
		child: {
			identityiq: 10,
			identitynow: 10
		}
	},
	{
		parent: "policy_management",
		child: {
			gpo: 10,
			intune: 10
		}
	},
	{
		parent: "vulnerability_management",
		child: {
			tenable: 10
		}
	},
	{
		parent: "sftp",
		child: {
			bitvise: 10
		}
	},
	
	/* Product / Vendor Grouping */
	{
		parent: "azure",
		child: {
			maws: 10,
			winserver: 6
		}
	},
	{
		parent: "winserver",
		child: {
			hyperv: 10,
			powershell: 10,
			batch_script: 5
		}
	},
	{
		parent: "sailpoint",
		child: {
			identityiq: 10,
			identitynow: 10
		}
	},
	
	
	/* workflow / role */
	{
		parent: "development",
		child: {
			sql: 10,
			vbnet: 10,
			python: 5,
			java: 10,
			html5: 8,
			javascript: 9,
			cpp: 10,
			csharp: 8,
			php: 7,
			vcs: 8
		}
	},
	{
		parent: "automation",
		child: {
			iac: 10,
			monitoring: 10,
			testautomation: 10
		}
	},
	{
		parent: "monitoring",
		child: {
			nagios: 10,
			grafana: 10
		}
	},
	{
		parent: "alerting",
		child: {
			opsgenie: 10,
			pagerduty: 10
		}
	},
	{ /*TODO: To be Reclassified*/
		parent: "testautomation",
		child: {
			atlassian: 10,
			vcs: 5
		}
	},
	{
		parent: "deployment",
		child: {
			infrastructure: 10,
			site_migration: 10
		}
	},
	{
		parent: "project_management",
		child: {
			jira: 10,
			confluence: 10
		}
	},
	
	
	/* language */
	{
		parent: "sql",
		child: {
			ssms: 10,
			mysql: 10
		}
	},
	{
		parent: "vbnet",
		child: {
			aspmvc: 10,
			windows_service: 10,
			ssms: 3
		}
	},
	{
		parent: "python",
		child: {
			django: 10,
			flask: 10
		}
	},
	{
		parent: "java",
		child: {
			springmvc: 10,
			jsp: 10,
			eclipseadt: 10,
			android_studio: 10,
			credence: 10,
			identityiq: 5
		}
	},
	{
		parent: "html5",
		child: {
			kendoui: 10,
			bootstrap: 10
		}
	},
	{
		parent: "javascript",
		child: {
			kendoui: 10,
			bootstrap: 10,
			jquery: 10,
			meteor: 10
		}
	},
	{
		parent: "cpp",
		child: {
			ninety_three_k: 10
		}
	},
	{
		parent: "csharp",
		child: {
			arduino: 10,
			kinectsdk: 10
		}
	},
	{
		parent: "batch_script",
		child: {
			atlassian: 10
		}
	},
	{
		parent: "shell_script",
		child: {
			atlassian: 10
		}
	},
	{
		parent: "vcs",
		child: {
			git: 10,
			svn: 10,
			tfs: 10,
			atlassian: 10
		}
	},
	
	/* Role */
	{
		parent: "web_development",
		child: {
			aspmvc: 10,
			springmvc: 10,
			jsp: 10,
			php: 10,
			html5: 10,
			javascript: 10
		}
	},
	{
		parent: "game_development",
		child: {
			gamemaker: 10,
			libgdx: 10,
			wciii: 10
		}
	},
	{
		parent: "mobile_development",
		child: {
			eclipseadt: 10,
			android_studio: 10
		}
	},
	{
		parent: "sysadmin",
		child: {
			infrastructure: 10
		}
	},
	
	/* expertise */
	{
		parent: "finance",
		child: {
			options:10,
			crypto: 8
		}
	},
	{
		parent: "telerik",
		child: {
			kendoui: 10
		}
	},
	{
		parent: "semiconductor",
		child: {
			credence: 10,
			ninety_three_k: 10
		}
	}
];

