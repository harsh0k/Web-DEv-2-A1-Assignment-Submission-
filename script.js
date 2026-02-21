const eventlist = document.getElementById("eventlist");


function addEvent() {
    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const category = document.getElementById("category").value;
    const text = document.getElementById("text").value;

    if (title === "" || date === "") {
        alert("Please fill title and date");
        return;
    }

    const eventDiv = document.createElement("div");
    eventDiv.className = "event";
    eventDiv.innerHTML =
        `<span class="close-btn" onclick="removeEvent(this)">❌</span> 
        <h4>${title}</h4>  
        <p><strong>Date:</strong> ${date}</p>   
        <p><strong>Category:</strong> ${category}</p>     
        <p>${text}</p>`;

    if (eventlist.innerText = "<p>No events yet. Add your first event!</p>") {
        eventlist.innerHTML = "";
    }      

    eventlist.appendChild(eventDiv);

    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("text").value = "";
}  


function removeEvent(el) {
    el.parentElement.remove();
    const eventList = document.getElementById("eventlist");
    if (eventlist.children.length === 0) {
        eventlist.innerHTML = `<p>No events yet. Add your first event!</p>`;
    }
} 



function clearEvents() {
    eventlist.innerHTML = "<p>No events yet. Add your first event!</p>";
}  



function addSampleEvents() {
    const samples = [
        { title: "Tech Conference", date: "2026-02-20", category: "Conference" },
        { title: "Team Meeting", date: "2026-02-22", category: "Meeting" }
    ];

    eventlist.innerHTML = "";

    samples.forEach(ev => {
        const eventDiv = document.createElement("div");
        eventDiv.className = "event";
        eventDiv.innerHTML = `
                <span class="close-btn" onclick="removeEvent(this)">❌</span>   
                <h4>${ev.title}</h4>
                <p><strong>Date:</strong> ${ev.date}</p>
                <p><strong>Category:</strong> ${ev.category}</p>`;
        eventlist.appendChild(eventDiv);
    });
}


document.addEventListener("keydown", function (e) {
    document.getElementById("display").textContent = "You Pressed: " + e.key;
});  