const agents = [
    {
        name: "Mario",
        interventionsBooked: [],
    },
    {
        name: "Hamidou",
        interventionsBooked: [],
    },
    {
        name: "Naïm",
        interventionsBooked: [],
    },
    {
        name: "Michel",
        interventionsBooked: [],
    },
    {
        name: "Bernard",
        interventionsBooked: [],
    },
    {
        name: "Julie",
        interventionsBooked: [],
    },
    {
        name: "Maxime",
        interventionsBooked: [],
    },
    {
        name: "Bastien",
        interventionsBooked: [],
    },
    {
        name: "Alice",
        interventionsBooked: [],
    },
];

const weekDates = [
    {
        day: "Lundi",
        dataDate: "Mon",
        dayDate: 5
    },
    {
        day: "Mardi",
        dataDate: "Tue",
        dayDate: 6
    },
    {
        day: "Mercredi",
        dataDate: "Wed",
        dayDate: 7
    },
    {
        day: "Jeudi",
        dataDate: "Thu",
        dayDate: 8
    },
    {
        day: "Vendredi",
        dataDate: "Fri",
        dayDate: 9
    },
];

const events = [
    {
        id: 0,
        title: "Intervention 1",
        status: "pending",
    },
    {
        id: 1,

        title: "Intervention 2",
        status: "pending",
    },
    {
        id: 2,

        title: "Intervention 3",
        status: "pending",
    },
    {
        id: 3,

        title: "Intervention 4",
        status: "pending",
    },
    {
        id: 4,

        title: "Intervention 5",
        status: "pending",
    },
    {
        id: 5,

        title: "Intervention 6",
        status: "pending",
    },
    {
        id: 6,

        title: "Intervention 7",
        status: "pending",
    },
    {
        id: 7,

        title: "Intervention 8",
        status: "pending",
    },
];

const eventsBooked = []


function BookEvent(event, agent, beginingDate, endDate) {
    eventsBooked.push(
        {
            agent: agent.name,
            event: event,
            beginingDate: beginingDate,
            endDate: endDate
        }
    )
    return console.log(eventsBooked);
}

BookEvent(events[0], agents[0], weekDates[0], weekDates[1])

// function getWeek(fromDate) {
//     var sunday = new Date(fromDate.setDate(fromDate.getDate() - fromDate.getDay()))
//         , result = [new Date(sunday)];
//     while (sunday.setDate(sunday.getDate() + 1) && sunday.getDay() !== 0) {
//         result.push(new Date(sunday));
//     }
//     return console.log(result);
// }

// const date = new Date();

// getWeek(date)

// function getWeek(fromDate) {
//     var sunday = new Date(fromDate.setDate(fromDate.getDate() - fromDate.getDay()))
//         , result = [new Date(sunday)];
//     while (sunday.setDate(sunday.getDate() + 1) && sunday.getDay() !== 0) {
//         result.push(new Date(sunday));
//     }
//     weekDates.map((date, i) => {
//         date.day = result[i]
//     })
//     return console.log(weekDates, 'tesdt')
// }

// const dateNow = new Date();

// getWeek(dateNow)

// let today = new Date()

// console.log(today.toDateString());
console.log("--------------");

var curr = new Date(); // get current date
var first = curr.getDate() - curr.getDay();

var firstDay = (new Date(curr.setUTCDate(first + 1))).toString();

for (var i = 1; i < 5; i++) {
    var dayOfTheWeek = new Date(curr.getTime());
    dayOfTheWeek.setDate(first + i);
    dayOfTheWeek.timeZoneName = "short";
    console.log(dayOfTheWeek.toLocaleDateString("fr-FR"));
}

console.log("--------------");
for (var i = 1; i < 6; i++) {
    var aujourdhui = new Date();
    var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    console.log("New", aujourdhui.toLocaleDateString('fr-FR', options));
}
console.log("--------------");

// var dt = new Date();
// var premier = dt.getDate() - dt.getDay();
// var dayOne = (new Date(dt.setUTCDate(first + 2))).toString();

// for (var j = 1; j < 5; j++) {
//     var int2 = new Date(dt.getTime())
//     int2.setDate(premier + j);
//     int2 = new Intl.DateTimeFormat("fr-FR", { weekday: "long", month: "long", weekday: "long", day: "numeric" });

// }

// console.log(int2.format(dt));

function getWeekDates() {
    const dates = [new Date()]; // today
    const curr = new Date();
    const remDaysCount = 7 - curr.getDay();
    for (let i = 1; i <= remDaysCount; i++) {
        // increase current Date by 1 and set to current Date
        const nextDate = curr.setDate(curr.getDate() + 1);
        dates.push(new Date(nextDate));
    }
    return dates;
}

console.log(getWeekDates());

console.log("--------------");

const name = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi']
const now = Date.now();
const DAY = 60 * 60 * 24 * 1000;
const today = new Date(now).getDay();

for (let i = today; i >= 0; i--) {
    const date = new Date(now - DAY * i);
    console.log("W", name[date.getDay()], date.getDate());
}
for (let i = 1; i < 5 - today; i++) {
    const date = new Date(now + DAY * i);
    console.log("e", name[date.getDay()], date.getDate());
}

var curr = new Date; // get current date
var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
var last = first + 5; // last day is the first day + 6

var firstDay = new Date(curr.setDate(first)).toUTCString();
var lastDay = new Date(curr.setDate(last)).toUTCString();

console.log(firstDay, lastDay);

console.log("--------------");

function dates(current) {
    var week = new Array();
    // Starting Monday not Sunday
    current.setDate((current.getDate() - current.getDay() + 1));
    for (var i = 0; i < 5; i++) {
        week.push(
            new Date(current)
        );
        current.setDate(current.getDate() + 1);
    }
    return week;
}
console.log(dates(new Date()));

console.log("--------------");
for (var i = 1; i < 6; i++) {
    var aujourdhui = new Date();
    var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    console.log("New", aujourdhui.toLocaleDateString('fr-FR', options));
}

console.log("--------------");


var curr = new Date(); // get current date
var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week

// var firstDay = (new Date(curr.setUTCDate(first + 1))).toString();

for (var i = 1; i < 6; i++) {
    var dayOfTheWeek = new Date(curr.getTime());
    dayOfTheWeek.setDate(first + i);
    dayOfTheWeek.timeZoneName = "short";
    var bla = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    console.log(dayOfTheWeek.toLocaleDateString('fr-FR', bla));
}

console.log("--------------");

// const date = new Date;
// const currentDay = date.getDay();
// const weekDays = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"]; 

// const getWeekDay = dayIndexParam => weekDays[dayIndexParam];

// console.log(currentDay, getWeekDay(currentDay - 1));

// var table = document.getElementsByClassName("agents");
// console.log("table", [table]);
// for (let i = 0; i < table.length; i++) {
//     const namesSort = table[i].dataset.name;
//     console.log(table.sort(namesSort));
// }