# Week 4 review

## 실습 1>

InputSample 컴포넌트는 name과 nickname을 입력받아서 render시키는 컴포넌트 입니다. 해당 기능을 수행하기 위해 주석이 있는 부분을 채워 기능을 완성시켜 봅시다<br>
![image](https://user-images.githubusercontent.com/77886826/167911379-d2877351-6507-4c26-8b49-fbb647980b0d.png)<br>
![image](https://user-images.githubusercontent.com/77886826/167911449-35a018d5-8405-42d2-ad4c-56e88af3a5e8.png)<br>

주석을 채워서 name과 nickname 을 입력받아 봅시다!
해당하는 페이지는 /component/input 페이지 입니다.

ex) <br>
![image](https://user-images.githubusercontent.com/77886826/167907952-0b89c5e1-db78-40c0-90f6-8e2ee8b54d88.png)
<br>
현재 상태입니다.<br>

https://user-images.githubusercontent.com/77886826/167908055-e3287bcf-5176-4188-8222-0773abc215d5.mov

<br>
다음과 같이 입력받을 때 name, nickname 등이 수정되도록 바꾸어 주세요 또한 reset 버튼을 사용하면 모든 입력값이 초기화되도록 해주세요!<br>
쉽게 말해서 위의 동영상과 완벽히 동일하게 구현하시면 됩니다!
<br>
+) 해당 페이지에서 useState()를 한번만 사용하신다면 선착순!! 제가 커피한잔 사드리겠습니다!</br>

## Sol)

- 다음 사진과 같이 name과 nickName에 대한 useState를 선언해줍니다.
  <br>-if, else문을 사용하여 이름 값이 변경되었을 때 name 값변경, 아닌 경우 nickname 값을 변경해주도록 설정합니다.</br>

<img width="80%" src="https://user-images.githubusercontent.com/102964287/174480319-a925c968-3602-4d9b-ac26-a07214751e62.png"/>

- InputWrapper와 ViewWrapper을 만들어준 다음,
- InputWrapper에는 이름과 닉네임 그리고 초기화 버튼값에 대한 내용은 변경할 수 있도록 onChange와 onClick을 이용하여 써줍니다.
- ViewWrapper에는 삼항연산자를 사용하여 아무것도 적지 않았을 때에는 name칸과 nickName칸에 각각 "이름이 없습니다" , "별명이 없습니다"가 나타나도록 합니다.

<img width="80%" src="https://user-images.githubusercontent.com/102964287/174480342-316b3b7a-05db-44cd-9be9-1efb9f014ffe.png"/>

- 다음과 같은 결과가 나옵니다.
  <img width="80%" src="https://user-images.githubusercontent.com/102964287/174480370-89c0f8a6-c694-4f12-ae19-40a11a90f3c6.png"/>

# 실습 2번문제

우리를 아주 거슬리게 하는 경고가 있습니다...ㅠ

![image](https://user-images.githubusercontent.com/77886826/167908932-02e6913b-02e6-4774-8939-43125eb32082.png)
![image](https://user-images.githubusercontent.com/77886826/167909006-f5dfa5c9-b7b2-49c9-a71f-16db78a9dd4f.png)
경고를 직접 읽어보시고 문제를 해결해주세요!! 해당 오류를 읽어보면 useEffect의 deps에 count가 없다고 하는데 과연...?!

<br>
 ### 목표)
 해당 button을 클릭할 때마다 숫자가 count되어 올라가도록 만들어주세요!(오류 수정후에도)
 해당 경고의 발생원인과 해결방법을 꼭 적어주세요!
 해당 경고를 완벽하게 지워주세요!!

### 제한조건

- 해당 문제는 useState 와 useEffect를 모두 사용해야 합니다.
- useEffect의 deps에 해당하는 부분에서 eslint를 무시하는 방법은 사용하면 안됩니다.

## Sol)

- 해당 오류를 읽어보면 useEffect의 deps에 count가 없다는 것을 보아 count를 인식하지 못한 오류가 발생한 것같다.
- 따라서 setCount((count) => count +1));을 적어서 버튼을 누를 때마다 count 값에 1을 더하도록 만들어준다.

<img width="80%" src="https://user-images.githubusercontent.com/102964287/174480415-7f3309dd-c564-46cd-a8c4-1296470b0046.png"/>

# 실습 3번문제

대망의 끝판왕 계산기 컴포넌트를 제작합니다!
어떤 방법을 사용하셔도 괜찮습니다. 이번에는 통상적으로 알고있는 계산기로서의 기능이 다 들어가 있기만 하면 됩니다!! 디자인에 너무 부담가지지 않으셔도 좋습니다.

https://user-images.githubusercontent.com/77886826/167910647-88da0576-8467-4b1b-9849-48f78da49c15.mov

### 제한조건

- useState를 필수적으로 사용합니다.
- 마지막 = 버튼을 사용할 때 useEffect를 이용하여 값을 출력시킵니다.
- 계산결과가 나올때마다 화면에 표시해야 합니다.

## Sol)

- 실습 3 문제는 useState 사용하는 법을 적용시키지 못하고 끝냈다..ㅜㅜ
- 계산기 디자인만 하고 문제를 다 완성시키지 못했다.
- 여기에서 뭔가 실수가 난 것같은데 코드자체를 변경해야할 것 같다.
  <img width ="80%" src ="https://user-images.githubusercontent.com/102964287/174485441-c441c548-b804-4551-830c-0187c4ebf337.png">
- 이 부분은 공통 솔루션보고 적은 내용들
- if /else 문을 줄여서 만들어 낸 코드이다.
  <img width="80%" src="https://user-images.githubusercontent.com/102964287/174485444-33cdc422-ea05-4b4f-b4fb-e79ae773998d.png">
- 다시 수정해서 꼭 계산기가 작동하도록 만들어야지,,,,,,

 <img width="80%" src="https://user-images.githubusercontent.com/102964287/174480452-473b0008-9bbd-4b4e-b437-e59349a307d1.png"/>

# 실습 실행화면

## 실습1 작동화면

<img src="https://user-images.githubusercontent.com/102964287/174480135-4a3730cb-3a34-4d3f-8b5b-e815af170cef.gif"/>
