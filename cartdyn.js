let likesBt = document.getElementById('likes-btn');
let dislikesBt=document.getElementById('dislikes-btn');
let displikes=document.getElementById('likes-display');
let dispdislikes=document.getElementById('dislikes-display');
let disptotal=document.getElementById('total');

let likes=0;
let dislikes=0;
let total=0;

displikes.textContent=likes;
dispdislikes.textContent=dislikes;
disptotal.textContent=total;

likesBt.addEventListener('click', function()
{
    likes++;
    displikes.textContent=likes;
    total++;
    disptotal.textContent=total;
}
)

dislikesBt.addEventListener('click', function()
{
    dislikes++;
    dispdislikes.textContent=dislikes;
    total++;
    disptotal.textContent=total;
}
)