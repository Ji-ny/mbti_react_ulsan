import mainImage from '../../images/main.png';
import { useState, useEffect } from 'react';
function Start({page, setPage}){
    // *---------- 참여한 사람 수 증가 --------------------------------------//
    const [number, setNumber] = useState(0); // 초기 값은 0으로 설정
    let max = 100000;
    
    
    useEffect(() => {
        let now = max; // 현재 값 초기화
        const handle = setInterval(() => {
        setNumber(Math.ceil(max - now)); // 현재 값 설정
    
        // 목표에 도달하면 정지
        if (now < 1) {
            clearInterval(handle); // setInterval 정지
        }
    
        // 증가되는 값이 계속하여 작아짐
        const step = now / 10;
    
        // 값을 적용시키면서 다음 차례에 영향을 끼침
        now -= step; // 현재 값 업데이트
        }, 50);
    
        // useEffect에서 반환한 함수는 cleanup 함수로서 clearInterval을 호출하여 메모리 누수를 방지합니다.
        return () => clearInterval(handle); // cleanup 함수
    }, []); // 의존성 배열 비워서 한 번만 실행되도록 함

    // *------------------------------ --------------------------------------//
    return(
        <div className='startPageLayout'>
            <div className='startLogo'>
                <div>울청스타</div>
                <div>나와 잘 맞는 IT직군 & 유명인 테스트</div>
                <img src={mainImage} alt="사진"/>
            </div>
            <div onClick={()=> setPage(1)} className='startButton' >테스트 시작하기</div>
            <div className='startIntro'> 현재까지<span style={{color:"#59A5F5", fontWeight:"bold"}}> {number} </span>명의 <br></br>친구가 참여했어요😊</div>
        </div>
    )
}

export default Start;