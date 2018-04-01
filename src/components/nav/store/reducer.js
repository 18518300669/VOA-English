import * as actionTypes from './actionTypes'

const defaultState = {
  		"data":{

                "list": [
                            {
                                "title":"常速英语",
                                "content":["音频","视频","翻译"]
                            },
                            {
                                "title":"慢速英语",
                                "content":["科技报道","词汇掌故","美国故事","时事新闻","经济报道","建国史话","教育报道","自然探索","健康报道","美国万花筒","科学动态","农业报道","美国专栏","美国人物"]
                            },
                            {
                                "title":"英语教学",
                                "content":["流行美语","美语三级跳","美国习惯用语","学个词","AS IT IS","体育美语","美语怎么说","商务礼节美语","双语新闻","美语咖啡屋","中级美语","美语训练班","VOA每日一课","OMG美语","VOA相关资料"]
                            }
                        ]

        }

  	}

export default (state = defaultState, action) => {
	switch(action.type) {
		case actionTypes.CHANGE_DATA:
			return {
				...state,
				data:action.value

			}


		default:
			return state
	}

}
