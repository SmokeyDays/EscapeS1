var characterInfomation = {
	attribute: {
		'physicalTalent': 0,
		'directionTalent': 0,
		'observationAbility': 0
	},
	point: {
		'water': 0,
		'food': 0,
		'computer': 0,
		'know-door': 0,
	},
	items: {
		'water': 0
	},
	init: function() {
		characterInfomation.attribute.physicalTalent = 2+8*Math.random();
		characterInfomation.attribute.directionTalent = 2+8*Math.random();
		characterInfomation.attribute.observationAbility = 2+8*Math.random();
	}
}
