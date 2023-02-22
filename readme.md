## 프론트앤드 개발을 위한 웹팩+바벨 기본 설정
1. 기본 설정은 basic폴더 참고

2. nodejs설치+jquery환경은 node폴더 참고
[참고] 
* public이 static경로로 설정되어있기때문에 ejs에서 외부경로인 dist폴더경로로 접근 불가. public/build폴더내에 dist내용을 복제

* ejs안에 다른 ejs를 추가하면?
다른 ejs는 독립된 파일로 만약 빌드를 하고싶다면 js안에 넣거나 혹은 multiple빌드 방법을 찾아봐야한다.

## 웹팩 로딩속도 실험 포스팅 블로그
<!-- 웹팩하기전과 후 로딩속도 비교 -->

제이쿼리 로딩속도
https://dubaiyu.tistory.com/384?category=1089090

이미지 aws외부링크 vs 내부경로 어떤게 더 로딩속도가 빠를까?
이미지 용량도 로딩속도에 영향을 미칠까?
https://dubaiyu.tistory.com/385

```npm i @babel/core @babel/polyfill @babel/preset-env babel-loader --save-dev```