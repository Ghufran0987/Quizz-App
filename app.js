window.onload=function(){
    show(0);
}
let questions=[
    {
        id:1,
        question:"Who can kill thanos?",
        Answer:"Iron Man",
        options:[
            "John Wick",
            "Shah rukh Khan",
            "Salman Khan",
            "Iron Man"

        ]

    },
    {
        id:2,
        question:"Rasooda Ma kon tha?",
        Answer:"Wo rashi thi",
        options:[
            "Ma thi",
            "Tm thi",
            "Kon tha",
            "Wo rashi thi"

        ]

    },
    {
        id:3,
        question:"Which is the best game?",
        Answer:"CS GO",
        options:[
            "Forntnite",
            "CS GO",
            "Pubg Moblail",
            "Fifa 20"

        ]

    },
    {
        id:4,
        question:"Zara si -- jga to?",
        Answer:"Dil ma",
        options:[
            "ghar ma",
            "room ma",
            "Dil ma",
            "kahin bhi"

        ]

    }


];

let name=sessionStorage.getItem("name");
document.querySelector(".name").innerHTML=name;

function submitForm(e){
    e.preventDefault();
    let name=document.forms["welcome-form"]["name"].value;
    

    //storing locally

    sessionStorage.setItem("name",name);
    console.log(name);

    location.href="quiz.html";



}
let question_count=0;
let point=0;
function next(){
    
    let user_answer=document.querySelector("li.option.active").innerHTML;
    if (user_answer==questions[question_count].Answer) {

        point+=10
        sessionStorage.setItem('point',point)
    }
    else{
        console.log("wrong answer")
    }
    if (question_count==questions.length-1) {
        location.href="end.html";
        return;
        
    }

        
  
    question_count++;
    show(question_count)
}
function show(count){
    let question=document.getElementById("questions");
    question.innerHTML=`
    <h2>${questions[count].question}</h2>,
    <ul class="option-group">
    <li class="option">${questions[count].options[0]}</li>
    <li class="option">${questions[count].options[1]}</li>
    <li class="option">${questions[count].options[2]}</li>
    <li class="option">${questions[count].options[3]}</li>
    </ul>

    
    
    `;
    toggleactive();
}
function toggleactive() {
    let option=document.querySelectorAll("li.option")
    for (let i = 0; i < option.length; i++) {
        option[i].onclick=function(){
            for (let j= 0; j < option.length; j++) {
                if(option[j].classList.contains("active")){
                    option[j].classList.remove("active");
                }
                
                
            }
            option[i].classList.add("active")
        }
        
    }
    
}



