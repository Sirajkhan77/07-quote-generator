const api_url="https://api.quotable.io/random";

async function getquote(url){
    const responce = await fetch(url);
    var data = await responce.json();
    var content = data.content;
    var author = data.author;
    document.getElementById("xx").innerHTML=content;
    document.getElementById("yy").innerHTML=author;
}
getquote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+content, "Tweet Window" , "width=600" , "height=300");
}