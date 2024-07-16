
import { useEffect, useState } from 'react';
import './Home.scss';
import istpImage from "../../images/istp.jpg";
import isfpImage from "../../images/isfp.jpg";
import istjImage from "../../images/istj.jpg";
import isfjImage from "../../images/isfj.jpg";
import infjImage from "../../images/infj.jpg";
import intjImage from "../../images/intj.jpg";
import infpImage from "../../images/infp.jpg";
import intpImage from "../../images/intp.jpg";
import esfpImage from "../../images/esfp.jpg";
import estpImage from "../../images/estp.jpg";
import esfjImage from "../../images/esfj.jpg";
import estjImage from "../../images/estj.jpg";
import entpImage from "../../images/entp.jpg";
import enfpImage from "../../images/enfp.jpg";
import enfjImage from "../../images/enfj.jpg";
import entjImage from "../../images/entj.jpg";
import Result from '../Result/Result';
import Start from '../Start/Start';
import ProgressBar from '../ProgessBar/ProgressBar';
import Question from '../Question/Question';


function Home() {



  // ** =============뷰포트 높이 구하기 ===============** //
  
  /** 현재 뷰포트 높이의 1%를 계산한다. */
  const setVh = () => {
    const vh = window.innerHeight * 0.01; //window.innerHeight : 뷰포트의 높이를 가져온다. | 뷰포트 높이를 100분의 1로 나누어서 사용하는 것 (1%)
    document.documentElement.style.setProperty('--vh', `${vh}px`); // css 변수를 만들어준다.
  }

  // * 첫 렌더링시, 뷰포트 사이즈 계산 후 적용
  useEffect(()=> {
    setVh();
    
    // 사이즈가 변경될 때, 다시 뷰포트 높이를 구한다.
    function onResize(){
      setVh();
    }
                            // 이벤트 유형 , 이벤트가 발생할때 실행하는 함수.
    window.addEventListener('resize', onResize);
  },[]);


  // ** ============================================** //



    // ** =============페이지 관련 ===============** //
  const [page, setPage] = useState(0); // 페이지 번호 상태
  
  useEffect(()=>{ console.log("으아ㅏ아")},[page]); // * 페이지 건너갈때마다 리렌더링

    // ** ============================================** //



  // ** =============질문 & 답변 리스트 ===============** //
      // 질문 & 답변 리스트 생성
  const questionList = [
    {
      q: ['방학이 끝나고, 드디어 새학기가 되었다! 나의 기분은?'],
      a:[ // 답변
        {type:"I", text:"설레면서도 잘 지낼 수 있을까 걱정된다."},
        {type:"E", text:"새로운 친구들을 만날 생각에 너무 기대된다."}]
    },

    {
      q: ['수업을 듣기 위해 교실에 왔다. 옆자리 사람에게 말을 걸어볼까? '],
      a:[ // 답변
        {type:"I", text:"(먼저 말 걸어주기를 기다린다.)"},
        {type:"E", text:"안녕? 혹시 이름이 뭐야?"}]
    },

    {
      q: ['수업에 써야하는 컴퓨터가 켜지지 않는다!! 옆 친구에게 물어볼까?'],
      a:[ // 답변
        {type:"I", text:"(속으로 10번 고민하고 물어본다)"},
        {type:"E", text:"OO아 혹시 이거 도와줄 수 있어?"}]
    },

    {
      q: ['IT 현장체험학습 전날! 나의 심정은?'],
      a:[ // 답변
        {type:"S", text:"내일 일찍 일어나야하니까 빨리 잠든다."},
        {type:"N", text:"내일 게임 만들려나?!? (생각이 많아져 잠이 오지 않는다) "}]
    },

    {
      q: ['친구들과 놀다보니 집에 가야할 시간이 넘었다. 어떡하지?'],
      a:[ // 답변
        {type:"S", text:"일단 놀고 본다"},
        {type:"N", text:"어쩌지 혼날 것 같은데..."}]
    },

    {
      q: ['멋쟁이 IT 형누나들의 울청스타 부스에 왔다! 지금 MBTI 테스트를 체험하고 있는 심정은?'],
      a:[ // 답변
        {type:"S", text:"우왕 재밌당~"},
        {type:"N", text:"이 질문지 어떻게 만든거지?"}]
    },

    {
      q: ['친구가 넘어서 울고 있다. 뭐라고 해야할까?'],
      a:[ // 답변
        {type:"F", text:"헐 어떡해ㅠㅠ 아프겠다ㅠㅠ 괜찮아?"},
        {type:"T", text:"괜찮아? 빨리 보건실(양호실) 가자"}]
    },

    {
      q: ['친구가 게임이 재밌어 같이하자고 한다.'],
      a:[ // 답변
        {type:"F", text:"재미있어 보인다! 같이할까?"},
        {type:"T", text:"무슨 게임인데?"}]
    },

    {
      q: ['친구가 코딩공부 잘하는 OO이를 좋아한다고 한다.'],
      a:[ // 답변
        {type:"F", text:"언제부터 좋아했어?"},
        {type:"T", text:"OO이 타자 몇타야?"}]
    },

    {
      q: ['내일은 친구의 생일파티 날이다! 생일선물을 준비하자!'],
      a:[ // 답변
        {type:"P", text:"아 내일이네? 뭐사지? 이거 살까?"},
        {type:"J", text:"며칠 전에 미리 준비해놓는다."}]
    },

    {
      q: ['방학 숙제가 많이 있다. 어떻게 하지?'],
      a:[ // 답변
        {type:"P", text:"개학 전날 한번에 몰아서 한다."},
        {type:"J", text:"미리미리 숙제를 해둔다."}]
    },

    {
      q: ['모르는 문제가 생겼다. 어디서 알아보지?'],
      a:[ // 답변
        {type:"P", text:"ChatGPT(생성형 AI)에게 물어보고 해결한다"},
        {type:"J", text:"미리 예습해서 모르는게 없다."}]
    },

    {
      q: ['테스트 종료! 결과를 보러 가시겠습니까? '],
      a:[ // 답변
        {type:"", text:"결과 보러 가기"},
      ] 
    },
    
    
  ];

  const [mbtiList, setMbtiList ] = useState([
    {name:"I", count:0}, {name:"E", count:0}, {name:"S", count:0}, {name:"N", count:0},
    {name:"F", count:0}, {name:"T", count:0}, {name:"P", count:0}, {name:"J", count:0},
  ]);

    


  // ** ==== 답변을 클릭했을 때 실행할 함수. (MTTI 타입 / 질문 idx) =====** //
  const handleCkAnswer = (type, idx) => {
    let ls = mbtiList;
    for(let i = 0; i < ls.length; i++){
      if (ls[i].name === type){ //mbtiList의 name이, type과 같을 경우
        ls[i].count +=1; // count값을 1 늘려준다.
      }
    }

    setMbtiList(ls); //mbtiList를 업데이트 시킨다.
    setPage(page+1); // 페이지도 1 업데이트 시킨다.

    //결과페이지 | idx가 질문리스트 길이만큼 됐다면
    if(idx+1 === questionList.length){
      // console.log("결과보기")
      setMbti();
      
    }
  }

  // ** ===========================================** //
  
  
  // ** ============= mbti 결과 관련  ===============** //
  // 최종 mbti 결과를 담을 상태
  const [mbtiContents, setMbtiContents] = useState([]);


  const mbtis = [
    {   mbti:"ISTP", 
        name: ['스티브잡스 (APPLE CEO)'], 
        contents:['벼락치기 진짜 잘해요.','논리적이고 뛰어난 적응력을 가지고 있어요.','처음엔 낯을 가리지만 친해지면 장난도 잘 쳐요.'],   
        goods:['ESFJ', 'ENTJ'], //ENFP, ENTJ
        bads:['INFP, ENFP, INFJ, ENFJ'],
        image:istpImage,
      },    // 백과사전형
        
        

    {   mbti:"ISFP", 
        name: ['이재용 (삼성전자 회장)'], 
        contents:['타인 배려를 잘하지만 눈치를 많이 봐요.','순하고 정이 많아요.','상대방의 이야기를 잘 들어줘요.'],   
        goods:['ENFJ','ESFJ','ESTJ'], //INFJ, INTJ
        bads:['INFP', 'ENFP', 'INFJ'],
        image:isfpImage,
      }, //default    // 성인군자형

    {   mbti:"ISTJ", 
        name: ['일론머스크 (테슬라 CEO)'], 
        contents:['책임감이 높고, 신중해요.','한번 시작한 일을 끝까지 해내요.','약속 어기는건 싫어요.'],     
        goods:['ESFP', 'ESTP'], 
        bads:['INFP', 'ENFP', 'INFJ', 'ENFJ'],
        image:istjImage,
      },    // 과학자형

    {   mbti:"ISFJ", 
        name: ['카카오톡 개발자'], 
        contents:['나서는건 싫어하지만 관심받는건 좋아요.','성실하고 온화해요.','눈치가 빠르고 센스있어요.'],       
        goods:['ESFP','ESTP'], 
        bads:['INFP', 'ENFP', 'INFJ', 'ENFJ'],
        image:isfjImage,
      },    // 권력형

    {   mbti:"INFJ", 
        name: ['가온누리 회장 김민재'], 
        contents:['혼자 쉬는 시간이 필요해요.','인간관계에 통찰력이 뛰어나서, 눈치가 빨라요.','계획적인걸 좋아해요.'],     
        goods:['ENFP','ENTP'], 
        bads:['ISFP', 'ESFP', 'ISTP', 'ESTP', 'ISFJ', 'ESFJ', 'ISTJ', 'ESTJ'],
        image:infjImage,
      },    // 예언자형

    {   mbti:"INTJ", 
        name: ['리드 헤이스팅스 (넷플릭스 CEO)'], 
        contents:['자립심이 강해요.','효율적이에요.','도움이 필요한 사람에게는 차별없이 잘 도와줘요.'],     
        goods:['ENFP','ENTP'], 
        bads:['INFP', 'INFJ', 'ENFJ', 'INTJ', 'ENTJ', 'INTP'],
        image:intjImage,
      },    // 과학자형

    {   mbti:"INFP", 
        name: ['노치 (마인크래프트 개발자)'],
        contents:['공감을 잘해줘요','자주 우울하지만, 티를 안내요.','따뜻한 마음씨를 가져, 사람들과 잘 어울려요.'],   
        goods:['ENFJ','ENTJ'],  // * ENFJ, ENTJ
        bads:['ISFP', 'ESFP', 'ISTP', 'ESTP', 'ISFJ', 'ESFJ', 'ISTJ', 'ESTJ'],
        image:infpImage,
      }, // * ISFP, ESFP, ISTP, ESTP, ISFJ, ESFJ, ISTJ, ESTJ
        // 잔다르크형

    {   mbti:"INTP", 
        name: ['마크 주커버그(메타 창업)'], 
        contents:['신중하고, 논리적이에요.','감정기복이 적어요.','친해진 사람에게는 정말 잘해줘요.'],   
        goods:['ENTJ','ESTJ'], 
        bads:[''],
        image:intpImage,
      },    // 아이디어형

    {   mbti:"ESFP", 
        name: ['김봉진 (배달의 민족 대표)'], 
        contents:['자존감이 높아요.','정이 많아서 거절을 잘 못해요.','평화로운게 좋아요.'],       
        goods:['ISFJ','ISTJ'], 
        bads:['INFP', 'ENFP', 'INFJ', 'ENFJ'],
        image:esfpImage,
      },    // 사교형

    {   mbti:"ESTP", // ! 다른거 
        name: ['테트리스 개발자(아타리)'], 
        contents:['친화력 최강!','직설적인 말투로 오해받을때가 있지만, 절대 나쁜 의도가 아니에요.','재미있는 이야기로 모임을 주도해요.'],    
        goods:['ISFJ','ISTJ'], 
        bads:['INFP', 'ENFP', 'INFJ', 'ENFJ'],
        image:estpImage,
      },    // 활동가형

    {   mbti:"ESFJ", 
        name: ['발로란트 개발자'], 
        contents:['약속은 무조건 지켜요.','주변 사람을 잘 챙겨줘요.','분위기 파악을 잘 해요.'],   
        goods:['ISFP','ISTP'], 
        bads:['INFP','ENFP','INFJ','ENFJ'],
        image:esfjImage,
      },    // 친선도모형

    {   mbti:"ESTJ", 
        name: ['브롤스타즈 개발자'], 
        contents:['리더십이 있고 체계적이에요.','호불호가 확실해요.','공정하고 논리적이에요.'],     
        goods:['ISFP','ISTP'], 
        bads:['INFP', 'ENFP', 'INFJ', 'ENFJ'],
        image:estjImage,
      },    // 사업가형

    {   mbti:"ENTP", 
        name: ['AI 개발자'], 
        contents:['토론이나 논쟁은 이겨야해요.','아이디어가 많아요.','자기주장이 강해요.'],     
        goods:['INFJ','INTJ'], 
        bads:[''],
        image:entpImage,
      },    // 발명가형

    {   mbti:"ENFP", 
        name: ['로블록스 개발자'], 
        contents:['사교적이고 에너지가 넘쳐요.','쉽게 질려해요.','호기심이 많아요.'],     
        goods:['INFJ','INTJ'],
        bads:['ISFP', 'ESFP', 'ISTP', 'ESTP', 'ISFJ', 'ESFJ','ISTJ', 'ESTJ'],
        image:enfpImage,
      }, //['ISFP', 'ESFP', 'ISTP', 'ESTP', 'ISFJ', 'ESFJ','ISTJ', 'ESTJ']  
          // 스파크형

    {   mbti:"ENFJ", 
        name: ['메이플스토리 개발자'], 
        contents:['타인을 사로잡는 카리스마와 매력이 있어요.','사람들과 커뮤니케이션을 잘해요.','공과 사를 확실히 구분해요.'],  
        goods:['INFP','ISFP'], 
        bads:['ESFP', 'ISTP', 'ESTP', 'ISFJ', 'ESFJ', 'ISTJ', 'ESTJ'],
        image:enfjImage,
      },    // 언변능숙형

    {   mbti:"ENTJ", 
        name: ['빌게이츠 (전 마이크로소프트 경영자)'], 
        contents:['리더 역할을 잘해요.','어딜 가든 누구와 친해질 수 있지만, 굳이 친해지진 않아요.','솔직하면서 단호해요.'],    
        goods:['INFP','INTP'], 
        bads:[''],
        image:entjImage,
      },    // 지도자형

  ];



  // mbti 설정해주는 함수
  function setMbti(){
    


    // I와 E를 구분한다.
    let IorE= // data : mbtiList를 데표하는 변수.
      mbtiList.find(function(data){return data.name === "I"}).count >
      mbtiList.find(function(data){return data.name === "E"}).count ? "I" : "E";

    //구분한다.
    let NorS= // data : mbtiList를 데표하는 변수.
      mbtiList.find(function(data){return data.name === "N"}).count >
      mbtiList.find(function(data){return data.name === "S"}).count ? "N" : "S";

          //구분한다.
    let ForT= // data : mbtiList를 데표하는 변수.
      mbtiList.find(function(data){return data.name === "F"}).count >
      mbtiList.find(function(data){return data.name === "T"}).count ? "F" : "T";

                //구분한다.
    let JorP= // data : mbtiList를 데표하는 변수.
    mbtiList.find(function(data){return data.name === "J"}).count >
    mbtiList.find(function(data){return data.name === "P"}).count ? "J" : "P";
    
  
    // 아래 변수에, 찾은 MBTI를 모두 합쳐준다.
    let mbti = IorE+ NorS + ForT + JorP;
    console.log("결과:mbti",mbti);

    //
    setMbtiContents(mbtis.filter((val)=>val.mbti === mbti)[0]); 
    
  
  }


  // ** =============최종 mbti 결과  ===============** //

  return (
    <div className="mbtiLayout">
      {/* 페이지에 따라 나타내는 상태가 다르게 한다. */}
      {page===0?
        <Start page={page} setPage={setPage}/>
        
        // !현재 페이지가 질문 길이보다 작다면,
        : page <= questionList.length? 
        <div className='questionLayout'>
          {/* 프로그레스바 */}
          <ProgressBar page={page} questionList={questionList}/>

          {/* 질문 부분 */}
          <Question questionList = {questionList} page={page} mbtiList={mbtiList} handleCkAnswer={handleCkAnswer}/>
        </div>
        : // !현재 페이지가 질문 길이보다 크다면, (결과페이지)
          <Result mbtiContents={mbtiContents} mbtis={mbtis} />
      }
    </div>
  );
}

export default Home;
