

// <Result mbtiContents={mbtiContents} mbtis={mbtis} />
function Result({mbtiContents, mbtis}){
      // 공유 버튼 나타나개 하는 창 띄우기
    const handleShare  = async () => { // 비동기를 동기처럼 사용하자.
        // 공유하기에 띄울 데이터 
        const shareData = {
        title: "MbtiTest", // 제목
        text: "울청스타 IT 직군 & 유명인 mbti test 결과보기!", // 공유할때 같이 가는 내용
        url: "https://ji-ny.github.io/mbti_test_ulsan/", // 사이트
        };

        // 공유기능!
        const url = window.location.href; // 현재 ㅇurl 정보!
        try{
        await navigator.share(shareData);
        console.log("공유하기 성공");
        } catch{
        // console.log("공유하기 실패");
        await navigator.clipboard.writeText(url);
        alert("클립보드에 링크가 복사되었습니다.");
        }
    }

    return(
    <div className='resultLayout'>
        <div className='result_title_Layout'>
            <div>나의 IT 유명인 및 직군 유형은?</div>
            <div>{mbtiContents.name}</div> 
            <div>{mbtiContents.mbti}</div>
            <img src={mbtiContents.image} alt="사진"/>
        </div>

        <div className='result_example'>
            <div>{mbtiContents.mbti}는요,</div>
            {mbtiContents.contents.map((val,idx)=> 
                    <div key={idx}>
                        <div>{val ? val : "어떤어떤 유형이에요."}</div>  {/* 유형 설명 있다면 띄우기 */}
                    </div>
            )}
                
        </div>

        <hr/>
            
        <div className="result_mbtis">
            <div className="mbti_item">
                <div>잘 맞아요😊</div>
                {/* 좋은 mbti 모음  // ! find 수정하기 */}
                {mbtiContents.goods.map((val,idx)=> // ISTP,, 등 차례대로 꺼내진다.
                <div className="mbtis" key={idx}>  
                    <li className='mbtis-li'>
                    {mbtis.find(item => item.mbti === val)?.name || "CUTE"}
                    </li>
                </div>
            )}
                
            </div>

            <div className="mbti_item">
                    <div>함께 맞춰가요🥹</div>
                    {/* 별로인 mbti 모음 */}
                    {mbtiContents.bads.map((val,idx)=>
                    <div className="mbtis" key={idx}>
                        <li className='mbtis-li'>
                        {mbtis.find(item => item.mbti === val)?.name || "CUTE"}{/* MBTI 내용 없다면 띄우기 */}
                        </li>
                    </div>
                    )}
            </div>
        </div>
            
        <hr/>

        <div className='result_btn_Layout'>
            {/* reload : 페이지 새로고침  */}
            <div onClick={()=> window.location.reload()}> 
                
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_27_4"  maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
                <rect x="0.5" y="0.5" width="24" height="24" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_27_4)">
                <path d="M12.5 22.5C11.25 22.5 10.0792 22.2625 8.9875 21.7875C7.89583 21.3125 6.94583 20.6708 6.1375 19.8625C5.32917 19.0542 4.6875 18.1042 4.2125 17.0125C3.7375 15.9208 3.5 14.75 3.5 13.5H5.5C5.5 15.45 6.17917 17.1042 7.5375 18.4625C8.89583 19.8208 10.55 20.5 12.5 20.5C14.45 20.5 16.1042 19.8208 17.4625 18.4625C18.8208 17.1042 19.5 15.45 19.5 13.5C19.5 11.55 18.8208 9.89583 17.4625 8.5375C16.1042 7.17917 14.45 6.5 12.5 6.5H12.35L13.9 8.05L12.5 9.5L8.5 5.5L12.5 1.5L13.9 2.95L12.35 4.5H12.5C13.75 4.5 14.9208 4.7375 16.0125 5.2125C17.1042 5.6875 18.0542 6.32917 18.8625 7.1375C19.6708 7.94583 20.3125 8.89583 20.7875 9.9875C21.2625 11.0792 21.5 12.25 21.5 13.5C21.5 14.75 21.2625 15.9208 20.7875 17.0125C20.3125 18.1042 19.6708 19.0542 18.8625 19.8625C18.0542 20.6708 17.1042 21.3125 16.0125 21.7875C14.9208 22.2625 13.75 22.5 12.5 22.5Z" fill="#C0FFF6"/>
                </g>
                </svg>

                다시하기
            </div> 
            <div onClick={handleShare}> 
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_27_11" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
                <rect x="0.5" y="0.5" width="24" height="24" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_27_11)">
                <path d="M6.5 23.5C5.95 23.5 5.47917 23.3042 5.0875 22.9125C4.69583 22.5208 4.5 22.05 4.5 21.5V10.5C4.5 9.95 4.69583 9.47917 5.0875 9.0875C5.47917 8.69583 5.95 8.5 6.5 8.5H9.5V10.5H6.5V21.5H18.5V10.5H15.5V8.5H18.5C19.05 8.5 19.5208 8.69583 19.9125 9.0875C20.3042 9.47917 20.5 9.95 20.5 10.5V21.5C20.5 22.05 20.3042 22.5208 19.9125 22.9125C19.5208 23.3042 19.05 23.5 18.5 23.5H6.5ZM11.5 16.5V5.325L9.9 6.925L8.5 5.5L12.5 1.5L16.5 5.5L15.1 6.925L13.5 5.325V16.5H11.5Z" fill="#C0FFF6"/>
                </g>
                </svg>
                공유하기 
            </div>
        </div>

    </div>

    )

}

export default Result;