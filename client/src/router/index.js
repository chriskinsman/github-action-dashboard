import VueRouter from "vue-router"
import Login from "@/components/login"
import Actiondashboard from "@/components/actiondashboard"

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "Actiondashboard",
      component: Actiondashboard
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    }
  ]
})