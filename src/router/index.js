import Vue from "vue";
import VueRouter from "vue-router";
import AppLayout from "../layout/AppLayout.vue";
import Home from "../views/Home.vue";
import MemberDetail from "../views/MemberDetail.vue";
import Error404 from "../views/Error404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "layout",
    component: AppLayout,
    redirect: { name: 'home' },
    children: [
      {
        path: "members",
        name: "home",
        component: Home,
        // children: [
        //   {
        //     path: ":member",
        //     name: "member",
        //     component: MemberDetail
        //   },
        // ]
      },
      {
        path: "members/:member",
        name: "member",
        component: MemberDetail
      },
    ],
  },
  { path: "*", component: Error404 }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
