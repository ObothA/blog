function handleSlider(){
    var urlHolder = document.querySelectorAll(".getUrl");
    var urlArray = [];
    if(urlHolder){
    urlHolder.forEach((holder) => {
        urlArray.push(holder.classList[1]);
    });
    }

    console.log(urlArray);
    advert = document.getElementById("advertBox");

    var length = urlArray.length;
    var count = 0;
    if(urlArray.length && advert){
    setInterval(() => {
        if(count === length){
            count = 0;
        }
        advert.src = urlArray[count];
        console.log(count);
        count++
    },
    3000);
}
}