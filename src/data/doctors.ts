export type PrimarySpecialty = {
	specialty: string;
	id: number;
}

export type Procedures = {
	id: number;
	procedure: string;
}

export type Doctor = {
	npi: string;
	first_name: string;
	last_name: string;
	title: string;
	scheduling_enabled: boolean;
	image_url: string;
	primary_specialty: PrimarySpecialty;
	procedures: Array<Procedures>;
}

export default [
	{
		"npi": "abc1234",
		"first_name": "Rachel",
		"last_name": "Nazarian",
		"title": "MD",
		"scheduling_enabled": true,
		"image_url": "https://2k13vh13cuiw33o3102gklib-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/rachel_nazarian-400.200x200.jpg",
		"primary_specialty": {
			"specialty": "Dermatology",
			"id": 1
		},
		"procedures": [
			{
				"id": 1,
				"procedure": "Botox"
			},
			{
				"id": 2,
				"procedure": "Chemical Peel"
			}
		]
	},
	{
		"npi": "zjd7492",
		"first_name": "Lara",
		"last_name": "Decter",
		"title": "PA",
		"scheduling_enabled": false,
		"image_url": "https://2k13vh13cuiw33o3102gklib-wpengine.netdna-ssl.com/wp-content/uploads/2021/03/Lara-Decter-200x200-1-200x200.jpg",
		"primary_specialty": {
			"specialty": "Dermatology",
			"id": 1
		},
		"procedures": [
			{
				"id": 3,
				"procedure": "Laser Hair Removal"
			},
			{
				"id": 2,
				"procedure": "Chemical Peel"
			}
		]
	},
	{
		"npi": "ldh9473",
		"first_name": "Abraham",
		"last_name": "Freilich",
		"title": "MD",
		"scheduling_enabled": false,
		"image_url": "https://2k13vh13cuiw33o3102gklib-wpengine.netdna-ssl.com/wp-content/uploads/2017/05/freilich-e1524765559492-200x200.png",
		"primary_specialty": {
			"specialty": "Dermatology",
			"id": 1
		},
		"procedures": [
			{
				"id": 1,
				"procedure": "Botox"
			},
			{
				"id": 4,
				"procedure": "Cool Sculpting"
			}
		]
	},
	{
		"npi": "oij3648",
		"first_name": "Emily",
		"last_name": "Appel",
		"title": "NP",
		"scheduling_enabled": true,
		"image_url": "https://2k13vh13cuiw33o3102gklib-wpengine.netdna-ssl.com/wp-content/uploads/2021/09/EmilyAppel-200x200-1-200x200.jpg",
		"primary_specialty": {
			"specialty": "Dermatology",
			"id": 1
		},
		"procedures": [
			{
				"id": 4,
				"procedure": "Cool Sculpting"
			},
			{
				"id": 2,
				"procedure": "Chemical Peel"
			}
		]
	},
	{
		"npi": "aaa1111",
		"first_name": "Eric",
		"last_name": "Schweiger",
		"title": "MD",
		"scheduling_enabled": true,
		"image_url": "https://2k13vh13cuiw33o3102gklib-wpengine.netdna-ssl.com/wp-content/uploads/2014/01/ES_Profile-200x200.jpg",
		"primary_specialty": {
			"specialty": "Dermatology",
			"id": 1
		},
		"procedures": [
			{
				"id": 1,
				"procedure": "Botox"
			},
			{
				"id": 3,
				"procedure": "Laser Hair Removal"
			}
		]
	}
]