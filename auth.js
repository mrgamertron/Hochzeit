const PASSWORD = "Schottland2026";

function checkPassword() {
  const entered = document.getElementById("password").value;

  if (entered === PASSWORD) {
    sessionStorage.setItem("hochzeit_access", "granted");
    location.reload();
  } else {
    document.getElementById("error").textContent =
      "Das Passwort ist nicht korrekt.";
  }
}

if (sessionStorage.getItem("hochzeit_access") !== "granted") {

  document.documentElement.innerHTML = `
  <head>
    <title>Annika & Nick</title>
    <style>
      body{
        margin:0;
        min-height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        background:#013201;
        font-family:Arial,sans-serif;
      }

      .box{
        background:white;
        padding:3rem;
        border-radius:12px;
        width:min(90%,420px);
        text-align:center;
      }

      input{
        width:100%;
        padding:12px;
        margin:1rem 0;
        box-sizing:border-box;
      }

      button{
        width:100%;
        padding:12px;
        background:#013201;
        color:white;
        border:none;
        cursor:pointer;
      }

      #error{
        color:red;
      }
    </style>
  </head>

  <body>
    <div class="box">
      <h2>Annika & Nick</h2>
      <p>Bitte Passwort eingeben</p>

      <input
        id="password"
        type="password"
        placeholder="Passwort"
        onkeydown="if(event.key==='Enter') checkPassword()"
      >

      <button onclick="checkPassword()">
        Website öffnen
      </button>

      <p id="error"></p>
    </div>
  </body>
  `;
}
