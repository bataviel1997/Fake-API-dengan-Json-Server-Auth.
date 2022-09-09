import Not_found from './SRC/views/404';
import Dashboard from './SRC/views/Dashboard';
import Login from './SRC/views/Login';
import Register from './SRC/views/Register';
import './style.css'


const app = document.getElementById('app');
const page = document.location.pathname;

switch(page){
  case '/' :
    app.innerHTML = Register()
    break

    case '/login' :
      app.innerHTML = Login()
      break

      case '/dashboard' :
      app.innerHTML = Dashboard()
      break

      default : 
      app.innerHTML = Not_found()
}