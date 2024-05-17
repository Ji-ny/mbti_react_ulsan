

function ProgressBar({page, questionList}){
    return(
        <div className='mbtiTitle'> 
            <div>울청스타 MBTI 테스트</div>  
            {/* 프로그래스 바 */}
            <div className='progress_bar'> 
            {/*  현재 페이지 (1/13%) */}
            <span style={{width:`${(page / 13) * 100}%`}} className='progress_bar_inner'> </span>
            </div>
            <div>{`${page} / ${questionList.length}`}</div> 
        
        </div>

    )


}

export default ProgressBar;