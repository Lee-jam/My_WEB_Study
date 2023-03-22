# 230321 Web - jQuery
> 어제 진행했던 jQuery의 내용들을 한번더 수업을 진행했음.

<br>

## 조상 자손 근접 관계
---
```

parent() : 선택자의 부모
parents() : 선택자의 부모부터 body까지
parentUntil() : 선택자의 부모부터 지정한 부모까지
closest() : 자신과 자신 상위요소 중 하나를 선택하여 반환

-----형제 탐색-----
next() : 선택자 바로 다음에 있는 태그 선택 (선택자보다 상위요소는 해당x)
nextAll() : 선택자 다음으로 나오는 모든 태그 (선택자보다 상위요소는 해당x)
siblings() : 선택자를 제외한 나머지 형제요소들을 찾아줌

-----하위요소 탐색----- 
find() : 선택자에 속한 태그나 아이디, 클래스 찾기
children() : 선택자의 자손

```

## preview
---
```
prev() : 선택자보다 앞에 있는 태그 선택
prevAll() : 선택자보다 앞에 있는 태그 전부 선택
prevUntill() : 선택자부터 () 안에 넣은 요소까지 전부 선택
```

## insert 함수
---
```
insertBefore(대상) : 선택자를 대상 전으로 놓는다.
insertAfter(대상) : 선택자를 대상 앞으로 놓는다.
```

## wrap 함수
---
```
wrap(어떻게 묶을지) : 선택자인 태그들이나, 아이디, 클래스 별로 ()안에 넣은 태그로 묶음
ex) 선택자.wrap('<div></div>')
wrapAll(어떻게 묶을지) : 선택자가 속해있는 전부를 ()안에 넣은 태그로  묶음.
wrapInner() : 선택자 내부 요소들을 ()안에 넣은 태그로 묶음.
unwrap() : 선택자의 상위 태그(()안에 넣은 태그)를 제거 
```

## 화살표 함수 (Fat Arrow)
---
> function을 대신하여 사용할 수 있는 함수   
주의점
```
        //화살표 함수 경우 이때 this는 window를 가르킨다.
        $('p').click(()=>$(this).toggleClass('light'));
        
        //이를 해결하려면 function으로 작성하거나 e를 적어준다.
        $('p').click(function(){
            $(this).toggleClass('light')
        });
        $('p').click((e)=>$(e.target).toggleClass('light'));
```

## attr 함수, prop함수
---
