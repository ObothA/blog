
function handleComments() {
    var btn = document.querySelector(".customButton");
    var commentDiv = document.querySelector(".commentsDivInitial") || document.querySelector(".commentsDivAfterClick");

    if (btn && commentDiv.className === "commentsDivInitial") {
                btn.className = "btn-sm btn btn-outline-danger customButton";
                commentDiv.className = "commentsDivAfterClick";
                btn.innerHTML = "close comments";
    } else if (btn && commentDiv.className === "commentsDivAfterClick"){
                btn.className = "btn-sm btn btn-outline-success customButton";
                commentDiv.className = "commentsDivInitial";
                btn.innerHTML = "view comments";
            }
    }


function handleSubmit(event) {
    const id = event.target.id;
    event.preventDefault();
    var divv = document.querySelector(".message");
    if(divv){
        divv.className = "messageActivated";
    }

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

function x() {
    const id = event.target.id;
    var approveBtn = document.getElementById(id);
    const postId = approveBtn.className.split(" ").pop();
    approveBtn.className = "approveBtnRemoved";

    const Http = new XMLHttpRequest();
    const url = `/comments/approve/${id}/${postId}`;

    Http.open("POST", url, true);
    Http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    Http.send();
}

function onDeletePost() {
    event.preventDefault();
    const id = event.target.id;
    const message = document.getElementById(`meso${id}`);
    if(message){
        message.className = "messageDeleted";
    }

    const Http = new XMLHttpRequest();
    const url = `/posts/delete/${id}`;

    Http.open("POST", url, true);
    Http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    Http.send();
}


function onDeleteComment(){
    const commentId = event.target.className.split(" ").pop();

    event.target.className = "btn-sm btn btn-outline-success deleteCommentButton"
    event.target.innerHTML = "Deleted";

    if(commentId){
    const Http = new XMLHttpRequest();
    const url = `/comments/delete/${commentId}`;
    Http.open("POST", url, true);
    Http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    Http.send();
    }
}

function onDeleteUserAccount(){
    const userAccountId = event.target.className.split(" ").pop();

    event.target.className = "btn-sm btn btn-outline-success"
    event.target.innerHTML = "Deleted";

    if(userAccountId){
    const Http = new XMLHttpRequest();
    const url = `/accounts/delete/${userAccountId}`;
    Http.open("POST", url, true);
    Http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    Http.send();
    }
}

function onDeleteAdvert(){
    const id = event.target.id;

    const message = document.getElementById(`meso${id}`);
    if(message){
        message.className = "messageDeleteAdvertActivated";
    }
    event.target.className = "btn-sm btn btn-outline-success deleteCommentButton"
    event.target.innerHTML = "Deleted";

    /** contact server */
    const Http = new XMLHttpRequest();
    const url = `/adverts/delete/${id}`;

    Http.open("POST", url, true);
    Http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    Http.send(); 
}