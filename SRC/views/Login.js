export default function Login(){
  return `
    <div class="container auth_page">
    
          <h1>Login</h1>
            <form id="login_form" class="auth_form"
            autocomplete="off">

                <div class="form_grup">
                  <label for="email">Email</label>
                  <input id="email" type="email" required>
                </div>

              <div class="form_grup">
                <label for="password">password</label>
                <input id="password" type="password" required>
              </div>

              <button type="submit">Login</button>

              <small>
              Belum Punya akun ? <a href="/"> Register Disini </a>
              </small>

            </form>

    </div>
  `
}