function addTask() {
    const taskInput = document.getElementById("taskInput").value;
    if (taskInput === "") {
        alert("Masukkan list minimal bang");
        return;
    } 

    const taskList = document.getElementById("taskList");
    const listItem = document.createElement("li");
    listItem.textContent = taskInput;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function() {
        taskList.removeChild(listItem);
    };

    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);

    document.getElementById("taskInput").value = "";
}

function changeBackgroundColor() {
    const bgColor = document.getElementById("bgColor").value;
    document.body.style.backgroundColor = bgColor;
}

function changeFontSize(size) {
    document.body.style.fontSize = size + "px";
    document.getElementById("fontSizeValue").textContent = size + "px";
}

function toggleDarkMode() {
    const container = document.querySelector(".container");
    if (container) {
        container.classList.toggle("dark-mode"); // Tambahkan atau hapus kelas mode gelap
    }

    // Mengubah teks tombol sesuai dengan mode
    const darkModeButton = document.querySelector("button[onclick='toggleDarkMode()']");
    if (container.classList.contains("dark-mode")) {
        darkModeButton.textContent = "Ganti Mode Terang";
    } else {
        darkModeButton.textContent = "Ganti Mode Gelap";
    }
}

function changeFontStyle() {
    const currentFont = document.body.style.fontFamily;
    document.body.style.fontFamily = currentFont === "Arial, sans-serif" ? "Courier New, monospace" : "Arial, sans-serif";
}
