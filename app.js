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
];

const interventions = [
  {
    id: 0,
    title: "Intervention 1",
  },
  {
    id: 1,

    title: "Intervention 2",
  },
  {
    id: 2,
    title: "Intervention 3",
  },
];

const daysArray = [];
let interventionSelected = {};

// @********* ON INIT *********@

function onPageInit() {
  displayWeekDays();
  displayInterventions();
  displayAgentsRows();
  initDroppableCells();
}
onPageInit();

// @********* DISPLAY WEEKS DAYS *********@

function displayWeekDays() {
  const head = document.getElementsByClassName("weeks_dates")[0];
  var curr = new Date();
  var first = curr.getDate() - curr.getDay();
  for (var i = 1; i < 8; i++) {
    var dayOfTheWeek = new Date(curr.getTime());
    dayOfTheWeek.setDate(first + i);
    dayOfTheWeek.timeZoneName = "short";
    var options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const displayDays = dayOfTheWeek.toLocaleDateString("fr-FR", options);
    const array = daysArray.push(displayDays);
  }
  for (let i = 0; i < daysArray.length; i++) {
    daysArray[i];
    head.innerHTML += `<div div id = "${i}" class="date" > ${daysArray[i]}</div > `;
  }
}

// @********* DISPLAY INTERVENTIONS *********@

function displayInterventions() {
  interventions.map((intervention) => {
    document.getElementsByClassName(
      "board_interventions"
    )[0].innerHTML += `<div class='box_intervention' draggable="true" ondragstart="onDragStart(event)">${intervention.title}</div>`;
  });
}

// @********* DISPLAY AGENTS ROWS *********@
//  prevoir cellules pour chaque events

function displayAgentsRows() {
  agents.map((agentRow, index) => {
    document.getElementsByClassName("planning")[0].innerHTML += `
        <div id=${index} class='agent-row' data-agent=${agentRow.name}>
            <div class='row-name-cell'>
                ${agentRow.name}
            </div>
            <div class='row_cells'>
            ${[0, 1, 2, 3, 4, 5, 6].map(() => {
      return `<div class='cell'></div>`;
    })}
            </div>
        </div>
        `;
  });
}

// @********* SORT AGENTS ROWS *********@

function sortAgentsRows() {
  var agentsRows = document.querySelectorAll("[data-agent]");
  var agentsRowsArray = Array.from(agentsRows);
  let sorted = agentsRowsArray.sort(sorter);
  function sorter(a, b) {
    if (a.dataset.agent < b.dataset.agent) return -1;
    if (a.dataset.agent > b.dataset.agent) return 1;
    return 0;
  }
  sorted.forEach(e => document.querySelector(".planning").appendChild(e));
  isSorted = true;
}

// @********* INIT DROPPABLE CELLS *********@

function initDroppableCells() {
  const cells = document.querySelectorAll(".cell");
  for (const cell of cells) {
    cell.addEventListener("dragover", (e) => e.preventDefault());
    cell.addEventListener("dragenter", (e) => onDragEnter(e));
    cell.addEventListener("dragleave", (e) => onDragLeave(e));
    cell.addEventListener("drop", (e) => onDrop(e));
  }
}

// @********* ON DRAG START *********@

function onDragStart(e) {
  const srcElement = e.srcElement;
  return interventions.map((intervention) => {
    if (intervention.title === srcElement.textContent) {
      return interventionSelected = intervention
    }
  })
}

// @********* ON DRAG ENTER *********@

function onDragEnter(e) {
  e.preventDefault()
  e.target.classList.add('cell_drag_enter');
  const agentName = e.path[2].attributes[1].value;
  agents.map((agent) => {
    if (agent.name === agentName) {
      agent.interventionsBooked.push(interventionSelected)
    }
  })
}

// @********* ON DRAG LEAVE *********@

function onDragLeave(e) {
  e.preventDefault()
  e.target.classList.remove('cell_drag_enter');
}

// @********* ON DROP *********@

function onDrop(e) {
  console.log(e);
  e.path[0].innerHTML = interventionSelected.title;
  const boardInterventions = document.getElementsByClassName('board_interventions')[0];
  Array.from(boardInterventions).map((intervention) => {
    console.log(intervention);
  })
  interventions.map((intervention, index) => {
    if (intervention.title === interventionSelected.title) {
      return interventions.splice(index, index + 1)
    }
  })
  console.log(document.getElementsByClassName('board_interventions')[0]);
  document.getElementsByClassName('board_interventions')[0].innerHTML = ''
  displayInterventions()
}