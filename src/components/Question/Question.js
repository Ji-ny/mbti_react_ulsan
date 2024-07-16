
// Question : 질문 페이지 

function Question({questionList, page, mbtiList, handleCkAnswer}){
    
    
    return(
    <>
        {questionList.map((val,idx)=> //질문 리스트 받기
            <div className='questionList' key={idx} style={{display:page===idx+1? "flex" : "none"}}>
                {/* {console.log(mbtiList)} */}
                <div className='questionItemLayout'>
                    {/* 내용 */}
                    <div className="chatListLayout">
                    {val.q.map((qval, qidx)=> // val은 현재 질문 
                        <div key={qidx} className='chatBox'> 
                        
                        <div>Q{page}.</div> {/* 질문 번호 */}
                        <div> {qval} </div> {/* 질문 내용 */}
                        </div>
                    )}
                    </div>
                </div>
                {/* 답변 */}
                <div className='answerItemLayout'>
                    
                    {/* 답변 내용 */}
                    {val.a.map((aval,aidx) => 
                    <div key={aidx} className="answerBox" onClick={() => handleCkAnswer(aval.type, idx )}>
                        {aval.text}
                    </div>
                    )}
                </div>
            </div>
        )}
    </>
    )
    
}

export default Question;