var holder = document.querySelector(".popup-holder"),
    btn = document.querySelector("#show"),
    close = document.querySelector(".close"),
    bg = document.querySelector(".bg");

btn.addEventListener("click",comein);
function comein()
{
    holder.style.display="block";
    bg.style.filter="blur(8px)";
}

close.addEventListener("click",goaway);
function goaway()
{
    holder.style.display="none";
    bg.style.filter="blur(0px)";
}

holder.addEventListener("click",removeholder);
function removeholder(e)
{
    if(e.target.className=="popup-holder"){
        holder.style.display="none";
        bg.style.filter="blur(0px)";
    }
}