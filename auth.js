const PASSWORD = "Schottland2026";

window.addEventListener("load", () => {

  if (sessionStorage.getItem("hochzeit_access") === "granted") {
    return;
  }

  document.body.innerHTML = `
    <div style="
      min-height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      background:#013201;
      font-family:Arial,sans-serif;
    ">
      <div style="
        background:white;
        padding:3rem;
        border-radius:12px;
        width:min(90%,420px);
        text-align:center;
      ">
        <h2>Annika & Nick</h2>
        <p>Bitte Passwort eingeben</p>

        <input
          id="password"
          type="password"
          placeholder="Passwort"
          style="width:100%;padding:12px;margin:1rem 0;box-sizing:border-box;"
        >

        <button
          id="loginBtn"
          style="
            width:100%;
            padding:12px;
            background:#013201;
            color:white;
            border:none;
            cursor:pointer;
          "
        >
          Website öffnen
        </button>

        <p id="error" style="color:red;"></p>
      </div>
    </div>
  `;

  function login() {
    const entered = document.getElementById("password").value;

    if (entered === PASSWORD) {
      sessionStorage.setItem("hochzeit_access", "granted");
      location.reload();
    } else {
      document.getElementById("error").textContent =
        "Das Passwort ist nicht korrekt.";
    }
  }

  document.getElementById("loginBtn").onclick = login;

  document.getElementById("password").addEventListener("keydown", e => {
    if (e.key === "Enter") {
      login();
    }
  });
});
