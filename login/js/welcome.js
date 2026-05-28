document.addEventListener("DOMContentLoaded", function () {

  function goLogin() {
    window.location.href = "login/index.html";
  }

  function logout() {
    localStorage.removeItem("username");
    location.reload();
  }

  const user = localStorage.getItem("username");
  const authArea = document.getElementById("authArea");

  if (user) {
    // Sudah login
    authArea.innerHTML = `
      <span style="color:black; margin-right:10px;">Halo, ${user}!</span>
      <button onclick="logout()" class="btn btn--outline">Logout</button>
    `;
  } else {
    // Belum login
    authArea.innerHTML = `
      <p id="userInfo" style="color:black;">Belum login</p>
      <button onclick="goLogin()" class="btn btn--outline">Login</button>
    `;
  }

  window.goLogin = goLogin;
  window.logout = logout;

});
