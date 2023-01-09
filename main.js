function formatDate(date) {
    years = date.getUTCFullYear() - 1970;
    months = date.getUTCMonth();
    days = date.getUTCDate() - 1;
    hours = date.getUTCHours();
    minutes = date.getUTCMinutes();
    
    return years + " " + howToWrite(years, "years") + ",\n" + months + " " + howToWrite(months, "months") + ",\n" + days + " " + howToWrite(days, "days") + ",\n" + hours + " " + howToWrite(hours, "hours") + ", \n" + minutes + " " + howToWrite(minutes, "minutes")
    
}

function howToWrite(number, type) {
    switch(type){
        case "years":
            if (number == 1) return "год";
            else if (number >= 2 && number <= 4) return "года";
            else return "лет";

        case "months":
            if (number == 1) return "месяц";
            else if (number >= 2 && number <= 4) return "месяца";
            else return "месяцев";

        case "days":
            if (number == 1) return "день";
            else if (number >= 2 && number <= 4) return "дня";
            else return "дней";
        
        case "hours":
            if (number == 1) return "час";
            else if (number >= 2 && number <= 4) return "часа";
            else return "часов";

        case "minutes":
            if (number == 1) return "минута";
            else if (number % 10 >= 2 && number % 10 <= 4) return "минуты";
            else return "минут";
    }
}

let time_show = document.getElementById("timer");
var date = new Date(2022, 9, 9, 20, 35);


var dateNow = new Date()
var diff = new Date(dateNow.getTime() - date.getTime())
time_show.innerHTML = formatDate(diff)
console.log(formatDate(diff))

timer = setInterval(function(){
    var dateNow = new Date()
    var diff = new Date(dateNow.getTime() - date.getTime())
    time_show.innerHTML = formatDate(diff)
}, 60000)