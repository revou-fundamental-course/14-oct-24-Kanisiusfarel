

// Validasi dan tampilkan nilai form
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    document.getElementById("formOutput").textContent = "Nama: " + name + ", Pesan: " + message;
});
