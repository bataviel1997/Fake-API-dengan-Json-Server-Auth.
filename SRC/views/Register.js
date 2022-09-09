// 1
import axios from "axios";
// function untuk store data ke backend
// 2 menampilkan/aktivkan handle
window.handleRegister=(event)=>{
// 3 stop reset page
  event.preventDefault();
// 4 menangkap data input
  let email = event.target.email.value;
  let password = event.target.password.value;
  
// 5 link backend API
  axios.post('https://vitejs-vite-zmhj5z--3000.local.webcontainer.io/register', {
    email : email,
    password : password
  })
  // 6 respon berhasil push
  .then(res => {
    // console.info(res)
    alert('Registrasi Berhasil')
    // 9 setelah berhasil menuju ke page login
    window.location.href = '/login'
  })
  // 7 respon error push
  .catch (err => {
    // console.error(err.response.data)
    alert(err.response.data)
  })

  // 8 reset
  event.target.email.value = ""
  event.target.password.value = ""
  event.target.password2.value = ""
  
}


export default function Register(){
  return `
  <div class="container auth_page">
  
    <h1>Register</h1>
    <form id="register_form" class="auth_form"
    autocomplete="off" onsubmit="handleRegister(event)">

      <div class="form_grup">
        <label for="email">Email</label>
        <input id="email" type="email" required>
      </div>

    <div class="form_grup">
      <label for="password">password</label>
      <input id="password" type="password" required>
    </div>

    <div class="form_grup">
      <label for="password2">ulangi password</label>
      <input id="password2" type="password" required>
    </div>

    <button type="submit">Register</button>

    <small>
    Sudah Punya akun ? <a href="/login"> Login Disini </a>
    </small>

    </form>
  </div>
  `
}