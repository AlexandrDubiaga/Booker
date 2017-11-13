import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Calendar from '@/components/Calendar'
import EmployeesForm from '@/components/EmployeesForm'
import EmployeeAdd from '@/components/EmployeeAdd'
import AddAppointment from '@/components/AddAppointment'


Vue.use(Router)
Vue.use(VueAxios, axios)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/employeesForm',
      name: 'EmployeesForm',
      component: EmployeesForm
    },
    {
      path: '/employeeAdd',
      name: 'EmployeeAdd',
      component: EmployeeAdd
    },
    {
      path: '/addAppointment/:id',
      name: 'AddAppointment',
      component: AddAppointment
    }

  
  ]
})
