/*webstorage localstorage를 활용
class 를 활용해서 display:none을 적용했다가 안했다가 방식
해당 이름의 저장여부를 확인해서 없으면 로그인으로 입력받고 있으면 안녕하세요. 누구라고 출력
*/
const login = document.getElementById('login-form');
const submitbtn = login.lastElementChild;
const greeting = document.getElementById('greeting');
const savedName = localStorage.getItem('name');

if(savedName===null){
    login.classList.remove('hidden');
    login.addEventListener('submit',loginSubmit)
}
else{
    show();
}

function loginSubmit(event){
    event.preventDefault();
    login.classList.add('hidden');
    localStorage.setItem('name',login.firstElementChild.value);
    show();
}


function show(){
    greeting.innerHTML = `안녕하세요 ${localStorage.getItem('name')}`;
    greeting.classList.remove('hidden');
}