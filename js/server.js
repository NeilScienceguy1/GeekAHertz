const signupBtn = document.getElementById('signup-btn-submit');
const loginBtn = document.getElementById('login-btn-submit');

signupBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const username = document.getElementById('signup-username').value;
    const pfp = document.getElementById('signup-pfp').value;

    if (!email) {
        return alert('Please enter an email');
    }

    if (!username) {
      return alert("Please enter an username");
    }

    if (!password) {
      return alert("Please enter an password");
    }

    if (!pfp) {
       return alert("Please enter an pfp");
    }

    axios.post("https://GeekAHertz-Server.neilscienceguy1.repl.co/api/v1/auth/signup", {
        username,
        password,
        email,
        pfp
    }).then(res => {
        console.log(res);
        if (res.data) {
            localStorage.setItem("user", JSON.stringify(res.data));
            window.location.href = "./index.html";
        }
    }).catch(err => {
        alert(err.response.data);
    })
})

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;


  if (!email) {
    return alert("Please enter an email");
  }
  if (!password) {
    return alert("Please enter an password");
  }

  axios
    .post(
      "https://GeekAHertz-Server.neilscienceguy1.repl.co/api/v1/auth/login",
      {
        password,
        email
      }
    )
    .then((res) => {
      console.log(res);
      if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
        window.location.href = "./index.html";
      }
    })
    .catch((err) => {
      alert(err.response.data.error);
    });
});