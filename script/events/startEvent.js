var startEvent = {
	'first-event': {
		id: "first-event",
		title: "南一封了！！！",
		desc: "你正在南一摸鱼，你的朋友在QQ群里告诉你，南一封了。你想起明天的比赛和呆在宿舍的队友，心里有点焦急。",
		logs: "你突然得知南一封了。你想起明天的比赛和呆在宿舍的队友，心里有点焦急。",
		optionList: [
			{
				id: "check-status",
				title: "了解",
				desc: "你决定去一楼看看详细情况。",
				logs: "你坐电梯到了一楼。平常安静的一楼走廊现在充斥着焦虑的气氛。周遭人来人往，大家都很焦急。",
				eventList: [
					'check-status'
				],
			}
		]
	},
	'check-status': {
		id: "check-status",
		title: "康康情况",
		desc: "你扫视了一下南一一楼的情况",
		optionList: [
			{
				id: "check-doors",
				title: "康康两侧的大门",
				desc: "你决定去看看东西侧的大门",
				logs: "东西侧的大门都紧锁着。有人在外侧呼喊着你无法理解的语句。",
				eventList: [
					'check-status'
				]
			},
			{
				id: "check-bars",
				title: "康康走廊",
				desc: "你决定康康与花园只隔着一条栅栏的走廊",
				logs: "走廊的栏杆很窄，外侧的花园没有围栏。",
				eventList: [
					'check-bars'
				]
			}
		]
	},
	'check-bars': {
		id: "check-bars",
		title: "花园守卫",
		desc: "走廊的栏杆很窄，外侧的花园没有围栏。你相信可以从这里翻出去。你翻越围栏到了花园里，但被人拦住了。",
		logs: "你翻越围栏到了花园里。",
		optionList: [
			{
				id: "listen-him",
				title: "你听到他大喊。",
				desc: "你听到一段不可名状不愿理解的语句。但是你的本能先于你的意识理解了。",
				logs: "你听到一段不可名状不愿理解的语句。但是你的本能先于你的意识理解了。",
				eventList: [
					'first-choice'
				]
			}
		]
	},
	'check-bars': {
		id: "check-bars",
		title: "花园守卫",
		desc: "走廊的栏杆很窄，外侧的花园没有围栏。你相信可以从这里翻出去。你翻越围栏到了花园里，但被人拦住了。",
		logs: "你翻越围栏到了花园里。",
		optionList: [
			{
				id: "listen-him",
				title: "你听到他大喊。",
				desc: "你听到一段不可名状不愿理解的语句。但是你的本能先于你的意识理解了。",
				logs: "你听到一段不可名状不愿理解的语句。但是你的本能先于你的意识理解了。",
				eventList: [
					'first-choice'
				]
			}
		]
	},
	'first-choice': {
		id: "first-choice",
		title: "抉择",
		desc: "你听到他大喊：「别出去，不然要挨处分。抗疫不是开玩笑的。」你面临一个艰难的抉择。",
		logs: "你听到他大喊：「别出去，不然要挨处分。抗疫不是开玩笑的。」",
		optionList: [
			{
				id: "run-now",
				title: "跑！！！",
				desc: "你决定立刻跑路。",
				eventList: [
					'mid-end-1'
				]
			},
			{
				id: "back-now",
				title: "服从",
				desc: "你有点怂，加之你想起你的东西都没拿，决定回去拿东西。",
				eventList: [
					'bring-computers'
				]
			}
		]
	},
	'bring-computers': {
		id: "bring-computers",
		title: "带上物资",
		desc: "你回到了机房，带上了你的电脑和材料。同时，你的朋友们落下了电脑在南一，她们希望你帮她们带出去。",
		logs: "你背上了书包，同时得知了你的朋友们希望你帮忙带上她们的电脑。",
		optionList: [
			{
				id: "submit-bring",
				title: "确定",
				desc: "你带上物资。",
				logs: "你将她们的笔记本电脑装入公文包，坐电梯到了一楼。",
				eventList: [
					'down-again'
				],
				functionList: [
					{
						type: "pointAdd",
						info: {
							name: ["computer"],
							value: [1]
						}
					}
				]
			}
		]
	},
	'down-again': {
		id: 'down-again',
		title: "再次下楼",
		desc: "你重新抵达了一楼，然而令人惊恐的是，一楼原本可以轻松翻越的走廊现在有人坐在那儿驻守！",
		logs: "走廊现在被保安看守着。",
		optionList: [
			{
				id: "try-u-best",
				title: "冲！",
				desc: "你决定提着包直接冲出去。",
				logs: "你提着公文包尝试迅速翻越围栏。",
				eventList: [
					'end-2'
				]
			},{
				id: "wander-around1",
				title: "转转",
				desc: "你决定先转转看看有没有其他合适的地方。",
				logs: "你绕着南一楼转了一圈。",
				eventList: [
					'wander-around1'
				],
				functionList: [
					{
						type: "pointAdd",
						info: {
							name: ["know-door"],
							value: [1]
						}
					}
				]
			},{
				id: "wait",
				title: "别急，再等等",
				desc: "你决定站在一个他看不到的地方观望。",
				logs: "你站在了一个他的视野死角等了很久很久。",
				eventList: [
					'chance'
				],
			}
		]
	},
	"wander-around1": {
		id: 'wander-around1',
		title: '无路可逃',
		desc: '你在南一楼大致转了一圈，完全是徒劳。没有任何一扇门是开着的。你发觉手头的公文包似乎有点不方便行动。',
		optionList: [
			{
				id: 'put',
				title: '放下',
				desc: '你决定放下公文包',
				logs: '你将公文包放在了走廊某处，先专心研究如何逃出。',
				eventList: [
					'return'
				],
				functionList: [
					{
						type: "pointAdd",
						info: {
							name: ["computer"],
							value: [-1]
						}
					}
				]
			},{
				id: 'take',
				title: '拿着',
				desc: '你决定继续拿着公文包',
				logs: '你提着公文包继续寻找出路。',
				eventList: [
					'return'
				]
			}
		]
	},
	'return': {
		id: 'return',
		title: '死路一条',
		desc: '你回到了走廊。保安仍然如同门神一样守卫在那里。在等待中你不禁有些焦虑：这样的等待真的有结果吗？',
		optionList: [
			{
				id: 'wander-around2',
				title: '再逛逛',
				desc: '你想试着再仔细看看每个门。',
				logs: '你注意到东北侧某处有一扇铁门的缝隙挺大，可以把包塞过去。但是人无法通过。',
				eventList: [
					'return'
				],
				functionList: [
					{
						type: "pointAdd",
						info: {
							name: ["know-door"],
							value: [1]
						}
					}
				]
			},{
				id: "wait",
				title: "别急，再等等",
				desc: "你决定站在一个他看不到的地方观望。",
				logs: "你站在了一个他的视野死角等了很久很久。",
				eventList: [
					'chance'
				],
			},{
				id: "back",
				title: "怂了",
				desc: "无数的无效的挣扎让你决定接受命运的安排。",
				logs: "你放弃逃离，回到了楼上的机房。",
				eventList: [
					'end-3'
				]
			}
		]
	},
	'chance': {
		id: 'chance',
		title: '绝妙良机',
		desc: '在耐心地等待许久之后，你的朋友下来买水，你们交谈了一番。这是，你的朋友提醒你看守的人离开了，似乎是去上厕所了？！',
		optionList: [
			{
				id: "run-now-no-comp",
				title: "就是现在！",
				desc: "你决定提着包直接冲出去。",
				logs: "你提着公文包尝试迅速翻越围栏。",
				eventList: [
					'end-4'
				],
				conditionList: [
					{
						type: 'point',
						info: {
							name: ['computer'],
							value: [1]
						}
					}
				],
			},{
				id: "run-now-comp",
				title: "就是现在！",
				desc: "虽然你的公文包没在手边，但是机不可失失不再来，你决定立即翻越围栏。",
				logs: "你背着书包迅速翻越围栏。",
				eventList: [
					'mid-end-1'
				],
				conditionList: [
					{
						type: 'not',
						info: {
							type: 'point',
							info: {
								name: ['computer'],
								value: [1]
							}
						}
					}
				],
			},{
				id: "get-comp",
				title: "等等，先去拿公文包。",
				desc: "你意识到你的公文包没在手边，你决定先去拿公文包。",
				logs: "你错过了良机。",
				eventList: [
					'mid-end-3'
				],
				conditionList: [
					{
						type: 'not',
						info: {
							type: 'point',
							info: {
								name: ['computer'],
								value: [1]
							}
						}
					}
				],
			}
		]
	},
	
	'mid-end-1': {
		id: "mid-end-1",
		title: "独自跑路",
		desc: "你成功逃出了南一，但你和你的朋友们的包还在里头。",
		logs: "你成功逃出了南一，但你和你的朋友们的包还在里头。",
		optionList: [
			{
				id: "nothing-todo",
				title: "无能为力",
				desc: "你想了一圈，没有想到合适的方案。",
				logs: "你未能带出你们的包。",
				eventList: [
					'end-1'
				]
			},{
				id: 'the-door',
				title: '那扇铁门！',
				desc: '你想起了你之前寻找出路的时候见到的那扇铁栅栏门',
				logs: '你让你的朋友从那扇铁栅栏门的缝隙中递出了包。',
				eventList: [
					'end-4'
				],
				conditionList: [
					{
						type: 'point',
						info: {
							name: ['know-door'],
							value: [1]
						}
					}
				],
			}
		]
	},
	'mid-end-3': {
		id: 'mid-end-3',
		title: "错失良机",
		desc: "当你取回公文包回来时，保安已经重新回到了他的岗位守着了。你意识到良机已经失去了。在等待许久未果后，你屈服了，回到了楼上的机房。",
		optionList: [
			{
				id: "back",
				title: "寄了",
				desc: "无数的无效的挣扎让你决定接受命运的安排。",
				logs: "你放弃逃离，回到了楼上的机房。",
				eventList: [
					'end-3'
				]
			}
		]
	},
	'end-1': {
		id: "end-1",
		title: "结局一：单人冒险",
		desc: "幸好你提前逃出了南一。晚两个小时南一就解封了。你的另一个朋友帮你们把东西带了出来。无论如何，你确保了自己能参加第二天的比赛，没有被**的封楼干扰。",
	},
	'end-2': {
		id: "end-2",
		title: "结局二：提心吊胆",
		desc: "你成功润出了南一。后方的人追了你一段路后放弃了。你忐忑不安地送还了电脑，抢购物资，回到寝室，有点后悔刚才武断的决定。然后，两个小时过去了，你得知了阳伪的消息。南一解封了。平安无事。",
	},
	'end-3': {
		id: "end-3",
		title: "结局三：非日常的日常",
		desc: "你在机房仅仅呆了一会，就收到了阳伪的消息，南一解除封控了。一切都显得那么自然而平凡，对吗？但是否错失了什么在生命中留下回忆的机会……",
	},
	'end-4': {
		id: "end-4",
		title: "结局四：飞马牌汽车",
		desc: "你顺利地把公文包带了出去，送还给了你的朋友。你突然想起了《飞马牌汽车》里的那句台词：「每一次相见，都可能是最后一次；每一次分别，都可能是永别。」这是后疫情时代的你的真实写照。",
	},
	'findDrink': {
		id: "findDrink",
		title: "试图解渴",
		desc: "你观察四周，有了几个解渴的方法。",
		logs: "你找到了几种解渴的方案。",
		optionList: [
			{
				id: "tryWaterOnLeaf",
				title: "可能树上的露珠可以解渴。",
				desc: "你决定舔一舔树上的露珠。",
				logs: "你决定试试树上的露珠。",
				eventList: [
					'findDrink-tryWaterOnLeaf'
				],
				functionList: [
					{
						type: "pointAdd",
						info: {
							name: ["computer"],
							value: [1]
						}
					}
				]
			},
			{
				id: "tryFruits",
				title: "找一找周围有什么可口的水果。",
				desc: "试试旁边的浆果。",
				logs: "你决定找找周围有什么可以解渴的水果。",
				eventList: [
					'findDrink-tryFruits'
				],
				functionList: [
					{
						type: "pointAdd",
						info: {
							name: ["energy"],
							value: [-1]
						}
					}
				]
			},
			{
				id: "tryWetDirt",
				title: "泥土比较潮湿，也许掘地三尺会有地下水。",
				desc: "你尝试着挖一个坑。",
				logs: "你尝试挖一个坑来寻找地下水。",
				eventList: [
					'findDrink-tryBuildWells'
				],
				functionList: [
					{
						type: "pointAdd",
						info: {
							name: ["energy"],
							value: [-4]
						}
					}
				]
			},
			{
				id: "observeAround",
				title: "还是先观察一下四周吧。",
				desc: "观察周围的情况。",
				logs: "你决定在解渴之前先弄清楚现在自己所处的状况。",
				eventList: [
					'getDirection'
				]
			}
		]
	},
	'findDrink-tryWaterOnLeaf': {
		id: "findDrink-tryWaterOnLeaf",
		title: "垂緌饮清露",
		desc: "你尝试舔了舔树上的露珠，发现完全没有想象中那么好喝，甚至有一种苦味。不过口干难忍得以暂时缓解。",
		logs: "露珠可以润喉，但是那个奇怪的味道实在是让人难以忍受。",
		optionList: [
			{
				id: "findDrink",
				title: "但是还是觉得有点渴啊，要不要试试其他方法吧。",
				desc: "再找找其他的寻找水源的方式。",
				logs: "你还是感到有点口渴。",
				eventList: [
					'findDrink'
				]
			},
			{
				id: "observeAround",
				title: "已经不那么渴了，先观察一下四周吧。",
				desc: "观察周围的情况。（p.s.你真的不想知道你是渴还是不渴吗）",
				logs: "你决定先弄清楚现在自己所处的状况。",
				eventList: [
					'getDirection'
				]
			}
		]
	},
	'findDrink-tryFruits': {
		id: "findDrink-tryFruits",
		title: "水灵灵的浆果",
		desc: "你看到了旁边有一棵树，树上有一些看起来水灵灵的浆果，你在想要不要去摘上面的浆果。",
		logs: "你找到了一棵长满了浆果的树。浆果水灵灵的，看上去似乎可以补充很多水分。",
		optionList: [
			{
				id: "tryTheFruit",
				title: "那就试着去摘它吧。",
				desc: "尝试爬上树去摘浆果。",
				logs: "你尝试爬树，体会到了当猴子的快感。"
				
			},
			{
				id: "findOtherFruits",
				title: "还是找找周围有什么其他水果吧。",
				desc: "尝试去寻找浆果之外的其他水果。",
				logs: "你试图去寻找其他水果。"
				
			},
			{
				id: "findDrink",
				title: "试试其他方法。",
				desc: "尝试其他可以解渴的方法。",
				logs: "你决定试试其他可以解渴的方法。",
				eventList: [
					'findDrink'
				]
			}
		]
	},
	'findDrink-tryBuildWells': {
		id: "findDrink-tryBuildWells",
		title: "浑浊的井水",
		desc: "你挖开了约一米深的圆锥形水坑，但是由于你没有办法固定坑壁松软的泥土，所以水和泥土一起落到了水坑中。",
		logs: "你挖开了一个土坑，",
		optionList: [
			{
				id: "drinkDirectly",
				title: "算了，吃土就吃土，不碍事，将就着喝吧。",
				desc: "真的猛士敢于饮下浑浊的泥浆！",
				logs: "你勇敢的喝下了这看起来很浑浊的水。"
				
			},
			{
				id: "findStones",
				title: "有点脏啊，去周围看看有没有可以固定坑壁的石料吧。",
				desc: "尝试去寻找石料。",
				logs: "你决定去寻找一些适合的石料。",
				eventList: [
					'findDrink-tryBuildWells-findStoneBlock',
					'findDrink-tryBuildWells-findStone',
					'findDrink-tryBuildWells-findNothing'
				],
				conditionEventList: [
					{
						type: 'attr',
						info: {
							name: ['observationAbility'],
							value: [9]
						}
					}
				],
				functionList: [
					{
						type: "pointAdd",
						info: {
							name: ["energy"],
							value: [-1]
						}
					}
				]
			},
			{
				id: "buildWells",
				title: "我想可以用收集到的一些东西固定一下。",
				desc: "在当前位置建一口井。",
				logs: "你尝试建一口井。"
			},
			{
				id: "findDrink",
				title: "这水一看就不能喝，还是试试其他方法吧。",
				desc: "尝试其他可以解渴的方法。",
				logs: "你决定试试其他可以解渴的方法。",
				eventList: [
					'findDrink'
				]
			},
			{
				id: "observeAround",
				title: "还是先观察一下四周吧。",
				desc: "观察周围的情况。",
				logs: "你决定在解渴之前先弄清楚现在自己所处的状况。",
				eventList: [
					'getDirection'
				]
			}
		]
	},
	'findDrink-tryBuildWells-findStone': {
		title: "找到石料",
		desc: "你在周围走了一圈，观察到了一些石头散落在地面上。你并不知道它们是哪里来的，但你觉得打磨一下可能就可以用来收集水了。",
		logs: "你找到了一些坚硬的中等大小的石头。",
		functionList: [
			{
				type: "itemAdd",
				info: {
					name: ["stone"],
					value: [10]
				}
			}
		]
	},
	'findDrink-tryBuildWells-findStoneBlock': {
		title: "找到石砖",
		desc: "你一眼就发现了不远处躺着的石砖。石砖散落在森林里堆积的腐烂树叶上，显得那么显眼。石砖很平整，可以直接拿来使用，但你对这种似乎是非自然的物品感到了一丝诡异。",
		logs: "你找到了一些平整的石砖。",
		optionList: [
			{
				id: "returnToBuildWells",
				
				functionList: [
					{
						type: "itemAdd",
						info: {
							name: ["stoneBlock"],
							value: [10]
						}
					}
				]
			}
		]
		
	},
	'findDrink-tryBuildWells-findNothing': {
		title: "野外求生不需要视力",
		desc: "你在周围搜索了一圈，但是周围的地面都被阴影遮蔽着。你害怕离泥坑太远会丢失方向，所以没有走远。但什么有用的东西都没有找到。",
		logs: "你一无所获。",
		optionList: [
			{
				id: "findAgain",
				title: "还是再找找吧",
				desc: "尝试再次寻找。",
				logs: "你不甘心，想要再找一次",
				eventList: [
					'findDrink-tryBuildWells-findNothing'
				],
				functionList: [
					{
						type: "pointAdd",
						info: {
							name: ["energy"],
							value: [-1]
						}
					},
				]
			},
			{
				id: "giveUp",
				title: "算了，还是想想其他办法吧",
				desc: "尝试其他办法喝水",
				logs: "你尝试寻找其他办法喝水",
				eventList: [
					'findDrink-tryBuildWells'
				]
			},
		],
		
	},
	'getDirection': {
		title: "确定方向，探查四周"
	}
}
