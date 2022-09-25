const agents = [
    {
        name: "Mario",
        interventionsBooked: []
    },
    {
        name: "Hamidou",
        interventionsBooked: []
    },
    {
        name: "Naïm",
        interventionsBooked: []
    },
    {
        name: "Michel",
        interventionsBooked: []
    },
    {
        name: "Bernard",
        interventionsBooked: []
    },
    {
        name: "Julie",
        interventionsBooked: []
    },
    {
        name: "Maxime",
        interventionsBooked: []
    },
    {
        name: "Bastien",
        interventionsBooked: []
    },
    {
        name: "Alice",
        interventionsBooked: []
    },
];

const daysArray = [];

const interventions = [
    {
        id: 0,
        title: "Intervention 1",
        status: "running",
    },
    {
        id: 1,

        title: "Intervention 2",
        status: "pending",
    },
    {
        id: 2,

        title: "Intervention 3",
        status: "closed",
    },
    {
        id: 3,

        title: "Intervention 4",
        status: "running",
    },
    {
        id: 4,

        title: "Intervention 5",
        status: "running",
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
        status: "closed",
    },
];

const agentsBooked = [
]

let date = new Date();

function onInit() {
    displayAllInterventions(interventions);
    displayAllAgents(agents);
    displayAgentsRows()
    displayWeekDays();
    displayCells()
    onSortAgents();

}
onInit();

function displayAllInterventions(interventions) {
    interventions.map((intervention) => {
        const status = getInterventionStyleByStatus(intervention.status);
        document.getElementsByClassName(
            "box-interventions"
        )[0].innerHTML += `<div class="box-intervention ${status}" draggable="true" data-intervention=${intervention.id} >
            <span class="intervention-title">${intervention.title}</span>
            <span class="intervention-status">${intervention.status}</span>
          </div>`;
    });
}

function displayAllAgents(agents) {
    agents.map((agent, index) => {
        document.getElementsByClassName(
            "body-agents"
        )[0].innerHTML += `<div id="${index}" data-name="${agent.name}" class="agents name-agent">${agent.name}
        </div>`;
    });
}

function getInterventionStyleByStatus(interventionStatus) {
    switch (interventionStatus) {
        case "pending":
            return "box-intervention--pending";
        case "running":
            return "box-intervention--running";
        case "closed":
            return "box-intervention--closed";
        default:
            break;
    }
}

function displayAgentsRows() {
    return agents.map((agent, index) => {
        document.getElementsByClassName(
            "planning-rows"
        )[0].innerHTML += `<div id="row ${agent.name}" class="row">
        <div id="${index}" class="cell"></div>
        <div id="${index}" class="cell"></div>
        <div id="${index}" class="cell"></div>
        <div id="${index}" class="cell"></div>
        <div id="${index}" class="cell"></div>
        <div id="${index}" class="cell"></div>
        <div id="${index}" class="cell"></div>
        </div>`;
    });
}

function displayCells() {

}

// WORKING SORT
function sortAgents(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}

function onSortAgents() {
    sortRowAgents()
    return document.querySelector(".sort").addEventListener("click", (e) => {
        e.preventDefault();
        agents.sort(sortAgents)
        displayAllAgents(agents);
        document.getElementsByClassName(
            "body-agents"
        )[0].innerHTML = ``;
        return agents.map((agent, index) => {
            return document.getElementsByClassName(
                "body-agents"
            )[0].innerHTML += `<div class="agents name-agent" > ${agent.name}
                </div > `;
        });
    })
}

function sortRowAgents() {
    const allRows = document.getElementById("allRows");
    const children = document.getElementById("allRows").children;
    console.log(children);
    // Array.from(allRows).map((row) => {
    // })
    // [...allRows]
    //     .sort((a, b) => (a.id > b.id ? 1 : -1));
    // console.log("new", allRows);
    // Array.from(allRows).sort(function (a, b) {
    //     a = new Date(a.attributes[0].nodeValue).valueOf()
    //     b = new Date(b.attributes[0].nodeValue).valueOf()
    //     return a - b;
    // })
    // [...allRows]
    //     .sort((a, b) => a.id > b.id ? 1 : -1)
    //     .forEach(node => allRows.appendChild(node));
    // console.log(allRows, "new");
    [].slice.call(children).sort(function (a, b) {
        return a.id.localeCompare(b.id);
    }).forEach(function (val, index) {
        displayAgentsRows();
    });
}


function initDroppableCells() {
    const cells = document.querySelectorAll(".cell");
    for (const cell of cells) {
        cell.addEventListener("dragover", (e) => e.preventDefault());
        cell.addEventListener("dragenter", (e) => e.preventDefault());
        cell.addEventListener("dragleave", (e) => e.preventDefault());
        cell.addEventListener("drop", (e) => interventionOnDrop(e));
    }
}
initDroppableCells();

function interventionOnDrop(e) {
    const interventionsDraggables = document.getElementsByClassName(
        "box-intervention"
    );
    let interventionDropped = null;
    return Array.from(interventionsDraggables)
        .map((interventionDraggable, index) => {
            if (
                interventionDraggable.getAttribute("data-intervention") ==
                indexInterventionDragged
            ) {
                interventions.splice(index, 1);
                interventionDraggable.classList.add("box-intervention--dropped");
                interventionDropped = interventionDraggable;
                e.path[0].appendChild(interventionDropped);
            }

        })
        .join(" ");
}

function interventionDropped() {
    interventionDropped ? agents.push({
        title: `${interventions.title} `,
        status: `${interventions.status} `,
    }) : null;
}

Array.from(document.getElementsByClassName("box-intervention")).map(
    (intervention, index) => {
        return intervention.addEventListener("dragstart", () => {
            indexInterventionDragged = index;
        });
    }
);


function displayWeekDays() {
    const head = document.getElementsByClassName("dates")[0];
    var curr = new Date(); // get current date
    var first = curr.getDate() - curr.getDay();
    for (var i = 1; i < 8; i++) {
        var dayOfTheWeek = new Date(curr.getTime());
        dayOfTheWeek.setDate(first + i);
        dayOfTheWeek.timeZoneName = "short";
        var options = { weekday: 'short', year: "numeric", month: 'short', day: 'numeric' };
        // console.log(dayOfTheWeek.toLocaleDateString('fr-FR', options));
        const displayDays = dayOfTheWeek.toLocaleDateString('fr-FR', options);
        const array = daysArray.push(displayDays);
    };
    for (let i = 0; i < daysArray.length; i++) {
        daysArray[i]
        head.innerHTML += `<div div id = "${i}" class="date" > ${daysArray[i]}</div > `;
    }

    // console.log(daysArray);
}

function calculateDate(day, dayNumber) {
    console.log(day + " " + dayNumber);
    switch (day) {
        case "Mon":
            dayNumber -= 0;
            break;
        case "Tue":
            dayNumber - 1;
            break;
        case "Wed":
            dayNumber - 2;
            break;
        case "Thu":
            dayNumber - 3;
            break;
        case "Fri":
            dayNumber - 4;
            break;
        default:
            break;
    }
}