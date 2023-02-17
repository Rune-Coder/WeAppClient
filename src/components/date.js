

function Date(dateProps){
    if(!dateProps.time)
        return "";
    var time = new Date(dateProps.time);
    var date = time.getDate();
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var fullDate = ("0" + date).slice(-2) + "/" + ("0" + month).slice(-2)  + "/" + year;
    
    var today = new Date();
    date = today.getDate();
    year = today.getFullYear();
    month = today.getMonth() + 1;

    if((("0" + date).slice(-2) + "/" + ("0" + month).slice(-2)  + "/" + year) === fullDate)
        fullDate = "Today";

    today.setDate(today.getDate() - 1);
    date = today.getDate();
    year = today.getFullYear();
    month = today.getMonth() + 1;

    if((("0" + date).slice(-2) + "/" + ("0" + month).slice(-2)  + "/" + year) === fullDate)
        fullDate = "Yesterday";

    return fullDate;
}
