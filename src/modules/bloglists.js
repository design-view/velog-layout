/* 액션 타입 선언 */
const ADD_LIST = 'bloglists/ADD_LIST';
const EDIT_LIST = 'bloglists/EDIT_LIST';
const DEL_LIST = 'bloglists/DEL_LIST';
const SELECT_LIST = 'bloglists/SELECT_LIST';
/* 액션 생성함수 선언 */
let nextId = 10; // lists 데이터에서 사용 할 고유 id
export const addList = list => ({
  type: ADD_LIST,
  list: {
    ...list,
    id: nextId++, // 새 항목을 추가하고 nextId 값에 1을 더해줍니다.
  }
});
export const editList = (id,list) => ({
  type: EDIT_LIST,
  list: {
    ...list,
    id: id
  },
  id: id
});
export const delList = id => ({
  type: DEL_LIST,
  id
});
export const selectList = id => ({
  type: SELECT_LIST,
  id
})
/* 초기 상태 선언 */
const initialState = {
  lists: [
    {
      id: 1,
      src: "images/mainimg1.jpeg",
      title: "인프콘 2022 회고",
      dayCount: 4,
      commentCount: 5,
      registdate: '2022-08-31',
      headdesc: '사실 인프런을 잘 사용하는 편은 아니였다.',
      desc: `사실 인프런을 잘 사용하는 편은 아니였다.
  
      교육기관을 다녔기에 입문자 수준의 영상으로 도움 받기는 힘들었고
      그 외 다양한 영상이 있었지만, 나는 영상매체에 집중을 못하는 편이라 사용하지 않았다.
      그럼에도 가보고싶었다. 누군가의 경험을 들을 수 있는 기회는 자주 오는 편이 아니기에.
      
      결론만 말하면 즐겁게 다녀왔다!
      
      입사한지 5일만에 컨퍼런스를 보내주신 우리 회사에게 감사를...^^....
      
      컨퍼런스의 꽃은 기업 부스 털기다!
      사실 이런 컨퍼런스보다는 나는 지스타에 조금 더 익숙한 편이였다.
      
      NDC는 3회정도 가보긴 했지만 거긴 넥슨 사옥에서 하다보니 기업부스가 따로 없고 (와 넥슨에서 타사가 채용하려고하면 ㅋㅋ)
      강연만 있다보니, 지스타에 조금 더 가깝다는 생각이 들었다.
      
      그래서 열심히 털어왔다!
      일부로 엄청 일찍 가서 더더욱 잘 털어왔다. (행사장에 12시에 도착함!)
      무신사도 좀 털어올껄 무신사랑 제트브레인은 뭔가....뭔가 아우라가 미묘해서 다가가지 못했다 ㅠ_ㅠ 엄청 아쉽다..`,
      userSrc: "",
      userId: "kijepark"
    },
    {
      id: 2,
      src: "images/mainimg2.png",
      title: "인프콘 2022 회고",
      dayCount: 4,
      commentCount: 5,
      registdate: '2022-08-31',
      headdesc: '사실 인프런을 잘 사용하는 편은 아니였다.',
      desc: `사실 인프런을 잘 사용하는 편은 아니였다.
  
      교육기관을 다녔기에 입문자 수준의 영상으로 도움 받기는 힘들었고
      그 외 다양한 영상이 있었지만, 나는 영상매체에 집중을 못하는 편이라 사용하지 않았다.
      그럼에도 가보고싶었다. 누군가의 경험을 들을 수 있는 기회는 자주 오는 편이 아니기에.
      
      결론만 말하면 즐겁게 다녀왔다!
      
      입사한지 5일만에 컨퍼런스를 보내주신 우리 회사에게 감사를...^^....
      
      컨퍼런스의 꽃은 기업 부스 털기다!
      사실 이런 컨퍼런스보다는 나는 지스타에 조금 더 익숙한 편이였다.
      
      NDC는 3회정도 가보긴 했지만 거긴 넥슨 사옥에서 하다보니 기업부스가 따로 없고 (와 넥슨에서 타사가 채용하려고하면 ㅋㅋ)
      강연만 있다보니, 지스타에 조금 더 가깝다는 생각이 들었다.
      
      그래서 열심히 털어왔다!
      일부로 엄청 일찍 가서 더더욱 잘 털어왔다. (행사장에 12시에 도착함!)
      무신사도 좀 털어올껄 무신사랑 제트브레인은 뭔가....뭔가 아우라가 미묘해서 다가가지 못했다 ㅠ_ㅠ 엄청 아쉽다..`,
      userSrc: "",
      userId: "kijepark"
    },
    {
      id: 3,
      src: "images/mainimg3.png",
      title: "인프콘 2022 회고",
      dayCount: 4,
      commentCount: 5,
      registdate: '2022-08-31',
      headdesc: '사실 인프런을 잘 사용하는 편은 아니였다.',
      desc: `사실 인프런을 잘 사용하는 편은 아니였다.
  
      교육기관을 다녔기에 입문자 수준의 영상으로 도움 받기는 힘들었고
      그 외 다양한 영상이 있었지만, 나는 영상매체에 집중을 못하는 편이라 사용하지 않았다.
      그럼에도 가보고싶었다. 누군가의 경험을 들을 수 있는 기회는 자주 오는 편이 아니기에.
      
      결론만 말하면 즐겁게 다녀왔다!
      
      입사한지 5일만에 컨퍼런스를 보내주신 우리 회사에게 감사를...^^....
      
      컨퍼런스의 꽃은 기업 부스 털기다!
      사실 이런 컨퍼런스보다는 나는 지스타에 조금 더 익숙한 편이였다.
      
      NDC는 3회정도 가보긴 했지만 거긴 넥슨 사옥에서 하다보니 기업부스가 따로 없고 (와 넥슨에서 타사가 채용하려고하면 ㅋㅋ)
      강연만 있다보니, 지스타에 조금 더 가깝다는 생각이 들었다.
      
      그래서 열심히 털어왔다!
      일부로 엄청 일찍 가서 더더욱 잘 털어왔다. (행사장에 12시에 도착함!)
      무신사도 좀 털어올껄 무신사랑 제트브레인은 뭔가....뭔가 아우라가 미묘해서 다가가지 못했다 ㅠ_ㅠ 엄청 아쉽다..`,
      userSrc: "",
      userId: "kijepark"
    },
    {
      id: 4,
      src: "images/mainimg4.png",
      title: "인프콘 2022 회고",
      dayCount: 4,
      commentCount: 5,
      registdate: '2022-08-31',
      headdesc: '사실 인프런을 잘 사용하는 편은 아니였다.',
      desc: `사실 인프런을 잘 사용하는 편은 아니였다.
  
      교육기관을 다녔기에 입문자 수준의 영상으로 도움 받기는 힘들었고
      그 외 다양한 영상이 있었지만, 나는 영상매체에 집중을 못하는 편이라 사용하지 않았다.
      그럼에도 가보고싶었다. 누군가의 경험을 들을 수 있는 기회는 자주 오는 편이 아니기에.
      
      결론만 말하면 즐겁게 다녀왔다!
      
      입사한지 5일만에 컨퍼런스를 보내주신 우리 회사에게 감사를...^^....
      
      컨퍼런스의 꽃은 기업 부스 털기다!
      사실 이런 컨퍼런스보다는 나는 지스타에 조금 더 익숙한 편이였다.
      
      NDC는 3회정도 가보긴 했지만 거긴 넥슨 사옥에서 하다보니 기업부스가 따로 없고 (와 넥슨에서 타사가 채용하려고하면 ㅋㅋ)
      강연만 있다보니, 지스타에 조금 더 가깝다는 생각이 들었다.
      
      그래서 열심히 털어왔다!
      일부로 엄청 일찍 가서 더더욱 잘 털어왔다. (행사장에 12시에 도착함!)
      무신사도 좀 털어올껄 무신사랑 제트브레인은 뭔가....뭔가 아우라가 미묘해서 다가가지 못했다 ㅠ_ㅠ 엄청 아쉽다..`,
      userSrc: "",
      userId: "kijepark"
    },
    {
      id: 5,
      src: "images/mainimg1.jpeg",
      title: "인프콘 2022 회고",
      dayCount: 4,
      commentCount: 5,
      registdate: '2022-08-31',
      headdesc: '사실 인프런을 잘 사용하는 편은 아니였다.',
      desc: `사실 인프런을 잘 사용하는 편은 아니였다.
  
      교육기관을 다녔기에 입문자 수준의 영상으로 도움 받기는 힘들었고
      그 외 다양한 영상이 있었지만, 나는 영상매체에 집중을 못하는 편이라 사용하지 않았다.
      그럼에도 가보고싶었다. 누군가의 경험을 들을 수 있는 기회는 자주 오는 편이 아니기에.
      
      결론만 말하면 즐겁게 다녀왔다!
      
      입사한지 5일만에 컨퍼런스를 보내주신 우리 회사에게 감사를...^^....
      
      컨퍼런스의 꽃은 기업 부스 털기다!
      사실 이런 컨퍼런스보다는 나는 지스타에 조금 더 익숙한 편이였다.
      
      NDC는 3회정도 가보긴 했지만 거긴 넥슨 사옥에서 하다보니 기업부스가 따로 없고 (와 넥슨에서 타사가 채용하려고하면 ㅋㅋ)
      강연만 있다보니, 지스타에 조금 더 가깝다는 생각이 들었다.
      
      그래서 열심히 털어왔다!
      일부로 엄청 일찍 가서 더더욱 잘 털어왔다. (행사장에 12시에 도착함!)
      무신사도 좀 털어올껄 무신사랑 제트브레인은 뭔가....뭔가 아우라가 미묘해서 다가가지 못했다 ㅠ_ㅠ 엄청 아쉽다..`,
      userSrc: "",
      userId: "kijepark"
    },
    {
      id: 6,
      src: "images/mainimg2.png",
      title: "인프콘 2022 회고",
      dayCount: 4,
      commentCount: 5,
      registdate: '2022-08-31',
      headdesc: '사실 인프런을 잘 사용하는 편은 아니였다.',
      desc: `사실 인프런을 잘 사용하는 편은 아니였다.
  
      교육기관을 다녔기에 입문자 수준의 영상으로 도움 받기는 힘들었고
      그 외 다양한 영상이 있었지만, 나는 영상매체에 집중을 못하는 편이라 사용하지 않았다.
      그럼에도 가보고싶었다. 누군가의 경험을 들을 수 있는 기회는 자주 오는 편이 아니기에.
      
      결론만 말하면 즐겁게 다녀왔다!
      
      입사한지 5일만에 컨퍼런스를 보내주신 우리 회사에게 감사를...^^....
      
      컨퍼런스의 꽃은 기업 부스 털기다!
      사실 이런 컨퍼런스보다는 나는 지스타에 조금 더 익숙한 편이였다.
      
      NDC는 3회정도 가보긴 했지만 거긴 넥슨 사옥에서 하다보니 기업부스가 따로 없고 (와 넥슨에서 타사가 채용하려고하면 ㅋㅋ)
      강연만 있다보니, 지스타에 조금 더 가깝다는 생각이 들었다.
      
      그래서 열심히 털어왔다!
      일부로 엄청 일찍 가서 더더욱 잘 털어왔다. (행사장에 12시에 도착함!)
      무신사도 좀 털어올껄 무신사랑 제트브레인은 뭔가....뭔가 아우라가 미묘해서 다가가지 못했다 ㅠ_ㅠ 엄청 아쉽다..`,
      userSrc: "",
      userId: "kijepark"
    },
    {
      id: 7,
      src: "images/mainimg3.png",
      title: "인프콘 2022 회고",
      dayCount: 4,
      commentCount: 5,
      registdate: '2022-08-31',
      headdesc: '사실 인프런을 잘 사용하는 편은 아니였다.',
      desc: `사실 인프런을 잘 사용하는 편은 아니였다.
  
      교육기관을 다녔기에 입문자 수준의 영상으로 도움 받기는 힘들었고
      그 외 다양한 영상이 있었지만, 나는 영상매체에 집중을 못하는 편이라 사용하지 않았다.
      그럼에도 가보고싶었다. 누군가의 경험을 들을 수 있는 기회는 자주 오는 편이 아니기에.
      
      결론만 말하면 즐겁게 다녀왔다!
      
      입사한지 5일만에 컨퍼런스를 보내주신 우리 회사에게 감사를...^^....
      
      컨퍼런스의 꽃은 기업 부스 털기다!
      사실 이런 컨퍼런스보다는 나는 지스타에 조금 더 익숙한 편이였다.
      
      NDC는 3회정도 가보긴 했지만 거긴 넥슨 사옥에서 하다보니 기업부스가 따로 없고 (와 넥슨에서 타사가 채용하려고하면 ㅋㅋ)
      강연만 있다보니, 지스타에 조금 더 가깝다는 생각이 들었다.
      
      그래서 열심히 털어왔다!
      일부로 엄청 일찍 가서 더더욱 잘 털어왔다. (행사장에 12시에 도착함!)
      무신사도 좀 털어올껄 무신사랑 제트브레인은 뭔가....뭔가 아우라가 미묘해서 다가가지 못했다 ㅠ_ㅠ 엄청 아쉽다..`,
      userSrc: "",
      userId: "kijepark"
    },
    {
      id: 8,
      src: "images/mainimg4.png",
      title: "인프콘 2022 회고",
      registdate: '2022-08-31',
      dayCount: 4,
      commentCount: 5,
      headdesc: '사실 인프런을 잘 사용하는 편은 아니였다.',
      desc: `사실 인프런을 잘 사용하는 편은 아니였다.
  
      교육기관을 다녔기에 입문자 수준의 영상으로 도움 받기는 힘들었고
      그 외 다양한 영상이 있었지만, 나는 영상매체에 집중을 못하는 편이라 사용하지 않았다.
      그럼에도 가보고싶었다. 누군가의 경험을 들을 수 있는 기회는 자주 오는 편이 아니기에.
      
      결론만 말하면 즐겁게 다녀왔다!
      
      입사한지 5일만에 컨퍼런스를 보내주신 우리 회사에게 감사를...^^....
      
      컨퍼런스의 꽃은 기업 부스 털기다!
      사실 이런 컨퍼런스보다는 나는 지스타에 조금 더 익숙한 편이였다.
      
      NDC는 3회정도 가보긴 했지만 거긴 넥슨 사옥에서 하다보니 기업부스가 따로 없고 (와 넥슨에서 타사가 채용하려고하면 ㅋㅋ)
      강연만 있다보니, 지스타에 조금 더 가깝다는 생각이 들었다.
      
      그래서 열심히 털어왔다!
      일부로 엄청 일찍 가서 더더욱 잘 털어왔다. (행사장에 12시에 도착함!)
      무신사도 좀 털어올껄 무신사랑 제트브레인은 뭔가....뭔가 아우라가 미묘해서 다가가지 못했다 ㅠ_ㅠ 엄청 아쉽다..`,
      userSrc: "",
      userId: "kijepark"
    },
    {
      id: 9,
      src: "images/mainimg1.jpeg",
      title: "인프콘 2022 회고",
      registdate: '2022-08-31',
      dayCount: 4,
      commentCount: 5,
      headdesc: '사실 인프런을 잘 사용하는 편은 아니였다.',
      desc: `사실 인프런을 잘 사용하는 편은 아니였다.
  
      교육기관을 다녔기에 입문자 수준의 영상으로 도움 받기는 힘들었고
      그 외 다양한 영상이 있었지만, 나는 영상매체에 집중을 못하는 편이라 사용하지 않았다.
      그럼에도 가보고싶었다. 누군가의 경험을 들을 수 있는 기회는 자주 오는 편이 아니기에.
      
      결론만 말하면 즐겁게 다녀왔다!
      
      입사한지 5일만에 컨퍼런스를 보내주신 우리 회사에게 감사를...^^....
      
      컨퍼런스의 꽃은 기업 부스 털기다!
      사실 이런 컨퍼런스보다는 나는 지스타에 조금 더 익숙한 편이였다.
      
      NDC는 3회정도 가보긴 했지만 거긴 넥슨 사옥에서 하다보니 기업부스가 따로 없고 (와 넥슨에서 타사가 채용하려고하면 ㅋㅋ)
      강연만 있다보니, 지스타에 조금 더 가깝다는 생각이 들었다.
      
      그래서 열심히 털어왔다!
      일부로 엄청 일찍 가서 더더욱 잘 털어왔다. (행사장에 12시에 도착함!)
      무신사도 좀 털어올껄 무신사랑 제트브레인은 뭔가....뭔가 아우라가 미묘해서 다가가지 못했다 ㅠ_ㅠ 엄청 아쉽다..`,
      userSrc: "",
      userId: "kijepark"
    },
    {
      id: 10,
      src: "images/mainimg2.png",
      title: "인프콘 2022 회고",
      dayCount: 4,
      commentCount: 5,
      registdate: '2022-08-31',
      headdesc: '사실 인프런을 잘 사용하는 편은 아니였다.',
      desc: `사실 인프런을 잘 사용하는 편은 아니였다.
  
      교육기관을 다녔기에 입문자 수준의 영상으로 도움 받기는 힘들었고
      그 외 다양한 영상이 있었지만, 나는 영상매체에 집중을 못하는 편이라 사용하지 않았다.
      그럼에도 가보고싶었다. 누군가의 경험을 들을 수 있는 기회는 자주 오는 편이 아니기에.
      
      결론만 말하면 즐겁게 다녀왔다!
      
      입사한지 5일만에 컨퍼런스를 보내주신 우리 회사에게 감사를...^^....
      
      컨퍼런스의 꽃은 기업 부스 털기다!
      사실 이런 컨퍼런스보다는 나는 지스타에 조금 더 익숙한 편이였다.
      
      NDC는 3회정도 가보긴 했지만 거긴 넥슨 사옥에서 하다보니 기업부스가 따로 없고 (와 넥슨에서 타사가 채용하려고하면 ㅋㅋ)
      강연만 있다보니, 지스타에 조금 더 가깝다는 생각이 들었다.
      
      그래서 열심히 털어왔다!
      일부로 엄청 일찍 가서 더더욱 잘 털어왔다. (행사장에 12시에 도착함!)
      무신사도 좀 털어올껄 무신사랑 제트브레인은 뭔가....뭔가 아우라가 미묘해서 다가가지 못했다 ㅠ_ㅠ 엄청 아쉽다..`,
      userSrc: "",
      userId: "kijepark"
    }, 
  ],
  selectList: {
    id: 10,
    src: "images/mainimg2.png",
    title: "인프콘 2022 회고",
    registdate: '2022-08-31',
    dayCount: 4,
    commentCount: 5,
    headdesc: '사실 인프런을 잘 사용하는 편은 아니였다.',
    desc: `사실 인프런을 잘 사용하는 편은 아니였다.

    교육기관을 다녔기에 입문자 수준의 영상으로 도움 받기는 힘들었고
    그 외 다양한 영상이 있었지만, 나는 영상매체에 집중을 못하는 편이라 사용하지 않았다.
    그럼에도 가보고싶었다. 누군가의 경험을 들을 수 있는 기회는 자주 오는 편이 아니기에.
  
    결론만 말하면 즐겁게 다녀왔다!
  
    입사한지 5일만에 컨퍼런스를 보내주신 우리 회사에게 감사를...^^....
  
    컨퍼런스의 꽃은 기업 부스 털기다!
    사실 이런 컨퍼런스보다는 나는 지스타에 조금 더 익숙한 편이였다.
  
    NDC는 3회정도 가보긴 했지만 거긴 넥슨 사옥에서 하다보니 기업부스가 따로 없고 (와 넥슨에서 타사가 채용하려고하면 ㅋㅋ)
    강연만 있다보니, 지스타에 조금 더 가깝다는 생각이 들었다.
  
    그래서 열심히 털어왔다!
    일부로 엄청 일찍 가서 더더욱 잘 털어왔다. (행사장에 12시에 도착함!)
    무신사도 좀 털어올껄 무신사랑 제트브레인은 뭔가....뭔가 아우라가 미묘해서 다가가지 못했다 ㅠ_ㅠ 엄청 아쉽다..`,
    userSrc: "",
    userId: "kijepark"
  }
}


export default function bloglists(state = initialState, action) {
  switch (action.type) {
    case ADD_LIST:
      return {
        ...state,
        lists: state.lists.concat(action.list)
      }
    case SELECT_LIST: 
      return {
        ...state,
        selectList: state.lists.find(list=> list.id === action.id)
      }
    default:
      return state;
  }
}