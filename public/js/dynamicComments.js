var btn = document.querySelector(".customButton");
var commentDiv = document.querySelector(".commentsDivInitial");
var type = "open";

btn.addEventListener("click", () => {
    if (type === "open") {
        btn.className = "btn-sm btn btn-outline-danger customButton";
        commentDiv.className = "commentsDivAfterClick";
        btn.innerHTML = "close comments";
        type = "close";
    } else {
        btn.className = "btn-sm btn btn-outline-success customButton";
        commentDiv.className = "commentsDivInitial";
        btn.innerHTML = "view comments";
        type = "open"
    }
});


function handleSubmit(){
    const id = event.target.id;
    event.preventDefault();
    var divv = document.querySelector(".message");
    divv.className = "messageActivated";

    var username = document.getElementById("username").value;
    var comment = document.getElementById("comment").value;
    
    document.getElementById("username").value = "";
    document.getElementById("comment").value = "";

    const Http = new XMLHttpRequest();
    const url = `/comments/add/${id}`;

    Http.open("POST", url, true);
    Http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    Http.send(`username=${username}&comment=${comment}`);
}

function x(){
    const id = event.target.id;
    var approveBtn = document.querySelector(".approveBtn");
    const postId = approveBtn.className.split(" ").pop();
    approveBtn.className = "approveBtnRemoved";

    const Http = new XMLHttpRequest();
    const url = `/comments/approve/${id}/${postId}`;

    Http.open("POST", url, true);
    Http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    Http.send();
}