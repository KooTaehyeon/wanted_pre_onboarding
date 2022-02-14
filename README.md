# 프리온보딩 프론트엔드

- component 구조

  ![컴포넌트](https://user-images.githubusercontent.com/87509201/152639299-3a5b33a2-2051-4763-833f-042dbc35b884.png)

## 배포 주소

https://kootaehyeon.github.io/wanted_pre_onboarding/index.html

- ### 사용 기술

  - JavaScript

  - HTML5

  - React

  - CSS

## App

![apps](https://user-images.githubusercontent.com/87509201/153185061-1037e3f3-7b8e-4611-8d33-fa6b229d5a2d.png)

- 반응형 웹으로 만들어졌습니다.

## Toggle

1. 토글 기능 같은경우에는 그전에 만들어 본적이 있어서 빠르게 구현 할수 있었습니다

2. js 같은 경우에는 checked 안됐을때와 됐을떄의 ON & OFF 라는 내용을
   Change 해주는거인데 useState 을 사용해 기본값을 OFF 로 주고 checked가 될떄
   값을 ON으로 Change 될수 있게 기능을 구현 했습니다.

- #### 결과

https://user-images.githubusercontent.com/87509201/153182476-fdcf17b4-937e-4691-be18-fe93d2225e58.mp4

## Modal

1. 모달 기능은 useState( Models(변수이름) ) 사용 해서 처음 값을
   false 할당 했습니다.

2. 버튼이 눌리면 false을 할당한 Models 을 사용한 변수에 값을 true로  
   Change 를 해주었습니다.

3. 그후 삼항식을 이용하여 Models에 값이 true라면 모달창이 뜨게 해주었습니다

4. 모달창이 떠있다면 x버튼을 누르면 Models값을 false로 바꾸어 모달창을
   닫아줄수 있게 기능구현을 했습니다.

- #### 결과

https://user-images.githubusercontent.com/87509201/153183006-138f6550-03f0-4836-933a-1c441ca1c331.mp4

## Tab

1.  탭기능은 탭 1,2,3 을 해당 번호의 탭을 누를때마다 내용을 바뀌게 해주기 위해서
    객체를 생성하여 그안에 내용 값을 넣어 주었습니다.

2.  클릭이벤트를 걸어서 해당 탭을 누르면 해당 내용 값을 담고있는 객체
    배열값으로 보여줄수 있게 해주었습니다.

3.  useRef를 사용해서 DOM요소를 얻은후에 해당 탭을 클릭했을시에 배경색을 바꿔주고
    나머지 탭은 배경색을 지워주게 기능을 구현 했습니다.

- #### 결과

https://user-images.githubusercontent.com/87509201/153183233-9bed1796-86f4-4335-a151-1301a51da684.mp4

## Tag

1. useState을 사용하여 input 값을 담아줄수 있는 변수를 할당 하고
   onChange 이벤트를 사용하여 input값을 가져 왔습니다.

2. 다시한번 useState을 이용해서 input값을 담아서 태그를 만들 변수를 할당 해놓고
   keyUP 이벤트를 사용하여 엔터키가 눌렸을떄 태그가 생성 시킬수 있게 만들어
   주엇습니다.
   이떄 만약 input에 있는 값이 공백 이라면 alert 으로 공백이 허용하지않는다는
   안내문을 띄워주었습니다.

3. 태그값을 담은 변수를 맵사용해서 이벤트가 실행될떄마다 생성될수 있게
   만들어 주었으며 그후에 X버튼을 클릭하게 된다면 해당 태그가 사라질수 있는
   기능을 구현 하였습니다.

- #### 결과

https://user-images.githubusercontent.com/87509201/153183284-a730a34c-63e6-4225-8c39-f80c6ec794e1.mp4

## AutoComplete

1.  완성된 단어를 보여줄 더미 데이터를 먼저 배열변수로 만든후에 sort() 메서드를
    이용해서 배열에 단어들을 정렬 시키고 useState 이용해서
    input 값이 있는지 확인해주는 상태값, input 상태값, input 값과 자동완성기능 값 을 비교하는 상태값 변수를 할당해 주었습니다.

2.  useEffect 사용해서 input값이 있을떄는 자동완성값을 보여주고
    input 값이 없다면 안보이게 하는 기능을 구현 했습니다.
    그리고 input값 자동완성을 보여줄떄 toLowerCase를 이용해서 대소문자도
    구분없이 보여줄수 있게 해주었습니다.

3.  useEffect에서 input 값과 자동완성기능 값 을 비교해서 filter() 메서드를 사용해
    데이터 더미에서 필터된 값들을 새로운 변수를 만들어서 그 변수안에
    필터된 값을 map()메서드를 이용해서 새로운 배열로 만들어 자동완성 단어를 보이게
    기능 구현 해주었습니다.
    그후에 그안에 onClick 이벤트를 만들어서 해당 자동완성 단어를 누르게되면
    input 값이 바꿔줄수 있게 했습니다.

4.  마지막으로 X버튼을 누르면 사용자가 적은 input 값을 지울수 있게 했습니다.

- #### 결과

https://user-images.githubusercontent.com/87509201/153184118-77956dbd-903b-4c5f-bf9b-eeb8738d3ca8.mp4

## ClickToEdit

1. useState을 이용해서 이름과 나이 의 상태값을 관리하는 변수를 2개와
   onBlur 이벤트를 이용해서 포커스가 헤제 될때 input값을 이름 과 나이
   값을 바꿔주는 상태값 변수 2개 선언해주었습니다.

2. onChange 이벤트를 이용해서 input의 값이 Change 되도록 해준후에
   onBlur를 이용해 포커스가 해지될 경우 이름과 나이가 변경 할 수 있게 했습니다

- #### 결과

https://user-images.githubusercontent.com/87509201/153183334-c2cea72c-f51e-4550-80fc-af9597c378c4.mp4

## 구현하면서 어려웠던 점

### Tag

- Tag 부분에서 처음에 접근을 keyUp 이벤트후 createElement와querySelector 를
  이용해서 엔터키가 눌리게 된다면 appendChild를 이용해서 생성 하게되고
  그리고 그안에 remove 삭제 기능까지 넣어주었는데 생성은 잘되었지만
  삭제가 키업을 할때마다 1개씩 밖에 지워지지 않는 상황이 되었습니다

##### 해결방법

- useState 와 map을 사용하여 useState에 배열의 값이 생길때마다 추가 시켜주며
  삭제기능 이벤트도 계속 실행컨텍스트에서 찾을수 있게 되어 문제를 해결했습니다.

  ### ClickToEdit

- 처음에 onBlur만 걸어준후에 각각 변수에 이름,나이 상태관리만 해주는 변수만 설정해
  주니 수정이 안되는 이슈가 발생 했으며 그후에 onChange 넣어줘서 input 값이
  변할때마다 상태값을 바꿔주게 했지만 상태 값이 바뀌면서 결과 값이 바로바로
  수정이 되어버리는 문제점을 발견했습니다.

  ##### 해결방법

- onBlur 결과 값에 대한 상태관리값을 따로 설정한후에 onBlur 이벤트가 발생하면
  onChange에 이벤트에 있는 상태값이 onBlur 상태값으로 바꾸어서 해결했습니다.
