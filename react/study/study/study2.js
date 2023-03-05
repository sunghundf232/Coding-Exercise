//리엑트 최신 버전 안내

// 2022년 3월 8일 이후로 리액트의 18 버전이 나왔습니다. 그래서 수업에서 소개하는 내용 중 index.js 파일에서 코드를 쓰는 방식이 조금 바뀌었는데요.

// 수업에 소개된 방법으로 프로젝트를 생성하면 최신 버전의 리액트가 설치될 겁니다. index.js 파일을 보시면 ReactDOM.render 가 아니라  ReactDOM.createRoot라는 함수를 사용하는 코드가 만들어지는데요. 수업에서 나오는 코드를 그대로 쓰게 되면 아래와 같은 경고 메시지가 개발자 도구 콘솔창에 나올 수 있습니다.

// if) 에러창 뜨는 경우

//이런 경우 index.js 파일의 코드를 아래처럼 수정하시면 됩니다.

import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>안녕 리액트!</h1>);

// 이후 레슨에서 index.js 파일을 수정하면서 여러 가지를 배우게 될텐데요. 
// 수업에서는 ReactDOM.render() 함수 안에서 코드를 작성하는데, 최신 버전을 사용하시는 분들은 root.render() 함수 안에서 작성하시면 됩니다.

