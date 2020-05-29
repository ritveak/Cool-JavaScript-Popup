
//------------------stubborn prompt-----------------------
function one (){
    document.getElementById("title").innerHTML="Hey there "
    var name = prompt("What is your name?")
    while(name==null || name =="")
    {
        // name = askagain();
        name = prompt("No!, you are supposed to enter your name u dumbo!");

    }
    document.getElementById("title").innerHTML+=name+"!"

    // function askagain()
    // {
    //     return prompt("No!, you are supposed to enter your name u dumbo!")
    // }
}

// -----------------age in days------------------buttons created using javascript
function two(){
    document.getElementById("two").disabled=true;

    document.getElementById("title").innerHTML="Let's get your age in days"
    
    var text = document.createElement("H3");
    text.id = "inp";
    text.classList="text-center martop";
    document.getElementById("content").appendChild(text);
    var enterAge = document.createElement("BUTTON");
    enterAge.innerHTML = "Enter age";
    enterAge.classList="btn btn-primary text-center martop"
    enterAge.onclick =askage;
    document.getElementById("content").appendChild(enterAge);

}

function askage(){
    var y = prompt("Enter your age");
    document.getElementById("inp").innerHTML="Your age in years is "+y+"<br><br> Your age in days is "+y*365;


}