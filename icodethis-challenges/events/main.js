// object array with card values
const objArr = [
    {
        "month": "MAY",
        "startDate": 4,
        "heading": "Computer Hardware Desktops And Notebooks And Handhelds Oh My",
        "startTime": 15,
        "endTime": 17,
        "location": "Online"
    },
    {
        "month": "MAY",
        "startDate": 2,
        "heading": "Compatible Inkjet Cartridge",
        "startTime": 12,
        "endTime": 14,
        "location": "Online"
    },
    {
        "month": "MAY",
        "startDate": 8,
        "heading": "Choose The Best Audio Player Software For Your Computer",
        "startTime": 14,
        "endTime": 15,
        "location": "Online"
    },
    {
        "month": "MAY",
        "startDate": 11,
        "heading": "Microsoft Patch Management For Home Users",
        "startTime": 9,
        "endTime": 11,
        "location": "Online"
    },
    {
        "month": "MAY",
        "startDate": 14,
        "endDate": 16,
        "heading": "Help Finding Information Online",
        "startTime": 11,
        "endTime": 13,
        "location": "Online"
    },
    {
        "month": "MAY",
        "startDate": 18,
        "endDate": 20,
        "heading": "Steps In Installing Rack Mount Lcd Monitors",
        "startTime": 13,
        "endTime": 14,
        "location": "Online"
    }
]


// hooking into #root div
const root = document.getElementById("root");

//creating grid
const grid = document.createElement("div");
grid.className = "grid";
root.appendChild(grid);

// creating cards
function createCards() {
    objArr.forEach(obj => {
        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<h1>${obj.month}</h1>
                    <h2>${obj.startDate}</h2>
                    <h3>${obj.heading}</h3>
                    <p>${obj.startTime} - ${obj.endTime} <span></br>${obj.location}</span></p>
                    <svg width="1.75em" height="1.25em" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg" id="arrowRight">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M15.416 0.722642C15.2628 0.492878 14.9524 0.430791 14.7226 0.583967C14.4929 0.737143 14.4308 1.04758 14.584 1.27734L18.0658 6.50005H1C0.723858 6.50005 0.5 6.72391 0.5 7.00005C0.5 7.2762 0.723858 7.50005 1 7.50005L17.9596 7.50005L14.6096 11.6876C14.4371 11.9033 14.472 12.2179 14.6877 12.3904C14.9033 12.5629 15.2179 12.528 15.3904 12.3123L19.3858 7.31807C19.4563 7.23268 19.499 7.1235 19.5 7.00438C19.5 6.99719 19.5 6.99 19.4997 6.98281C19.4994 6.97432 19.4989 6.96583 19.4982 6.95736C19.4908 6.86966 19.4607 6.78841 19.4139 6.71947L15.416 0.722642Z"
                            fill="currentColor" />
                    </svg>
        
        `
        grid.appendChild(card);
    })
}

// create button
function createButton() {
    const loadButton = document.createElement("button");
    loadButton.id = "loadButton";
    loadButton.innerText = "LOAD MORE EVENTS";
    root.appendChild(loadButton);
}




// loadFunction
function loadPage() {
    createCards();
    createButton();
}

loadPage();