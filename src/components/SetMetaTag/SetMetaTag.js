import React from 'react';
import { Helmet } from 'react-helmet-async';


const SetMetaTag = props =>{
    // props로 content 내용을 불러온다.
    return(
        <Helmet>
            {/* <title> 삥삥빵</title> */}
            {/* <!-- 제목 --> : "울청스타 IT직업 & 유명인 MBTI 테스트" */}
            <meta property="og:title" content={`나와 잘 맞는 IT직업 & 유명인은 : ${props.title} `}/>
            {/* <!-- 설명 -->  : "울청스타 IT직업 & 유명인 MBTI 테스트 해보기! 나의 유형은? */}
            <meta
            property="og:description"
            content={`나와 잘 맞는 IT직업 & 유명인은 : ${props.description} `}
            data-react-helmet="true"
            />
            {/* <!-- 이미지 --> */}
            <meta property="og:image" content={props.image} data-react-helmet="true"/>
            {/* <!-- 링크할 주소 --> */}
            <meta property="og:url" content="https://Ji-ny.github.io/mbti_test_ulsan/"/>
        </Helmet>
    );
};


export default SetMetaTag;



// const SetMetaTag = props =>{
//     // props로 content 내용을 불러온다.
//     return(
//         <Helmet>
//             <meta name="description" content={props.description} />
//             <meta name="keywords" content={props.keywords} />

//             <meta property="og:type" content="website" />
//             <meta property="og:title" content={props.title} />
//             <meta property="og:site_name" content={props.title} />
//             <meta property="og:description" content={props.description} />
//             <meta property="og:image" content={props.imgsrc} />
//             <meta property="og:url" content={props.url} />

//             <meta name="twitter:title" content={props.title} />
//             <meta name="twitter:description" content={props.description} />
//             <meta name="twitter:image" content={props.imgsrc} />

//             <link rel="canonical" href={props.url} />
//         </Helmet>
//     );
// };
