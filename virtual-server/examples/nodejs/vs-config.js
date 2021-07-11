require('dotenv').config();

module.exports = {
	region: "ORD1",
	os: {
		type: "windows"
	},
	resources: {
		gpu: {
			type: "Quadro_RTX_4000",
			count: 1
		},
		cpu: {
			count: 3
		},
		memory: "16Gi"
	},
	storage: {
		root: {
			size: "79Gi",
			storageClassName: "block-nvme-ord1",
			source: {
				pvc: {
					namespace: "vd-images",
					name: "win10-master-20210605-ord1"
				}
			}
		}
	},
	users: [
		{
			username: process.env.USERNAME,
			password: process.env.PASSWORD
		}
	],
	network: {
		public: true,
		tcp: {
			ports: [
				22,
				443,
				60443,
				4172,
				3389,
			]
		},
		udp: {
			ports: [
				4172,
				3389
			]
		}
	}
}
