document.getElementById("loginForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const alertBox = document.getElementById("alertBox");

  try {
    const res = await fetch("https://herisusanta.my.id/javalogin/api/auth.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `action=login&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
    });

    const data = await res.json();
    console.log(data); // lihat response di console F12

    if (data.status === "success") {
      localStorage.setItem("username", data.username);
      window.location.href = "../index.html";
    } else {
      alertBox.innerText = "Username atau Password salah, silahkan coba lagi!";
      alertBox.style.display = "block";

      setTimeout(() => {
        alertBox.style.display = "none";
      }, 3000);
    }

  } catch (error) {
    // Ini yang mungkin terjadi — API tidak bisa diakses
    alertBox.innerText = "Gagal terhubung ke server: " + error.message;
    alertBox.style.display = "block";
    console.error(error);
  }

});
