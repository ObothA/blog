
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


function handleSubmit() {
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

    const Http = new XMLHttpRequest();
    const url = `/posts/delete/${id}`;

    Http.open("POST", url, true);
    Http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    Http.send();
}

function onEditPost(){
    event.preventDefault();
    const id = event.target.id;

    const Http = new XMLHttpRequest();
    const url = `/posts/edit/${id}`;

    Http.open("GET", url, true);
    Http.send();  
}

function onDeleteComment(){
    const commentId = event.target.className.split(" ").pop();
    // alert(commentId);
    // change button text

    event.target.className = "btn-sm btn btn-outline-success deleteCommentButton"
    event.target.innerHTML = "Deleted";

    const Http = new XMLHttpRequest();
    const url = `/comments/delete/${commentId}`;
    Http.open("POST", url, true);
    Http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    Http.send();
}