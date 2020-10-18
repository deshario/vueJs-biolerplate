import Vue from 'vue'
import Vuex from 'vuex'
import {counter} from './modules/counter/'
import {employee} from './modules/employee/'

Vue.use(Vuex)

const vuexStore = new Vuex.Store({
  // state: {
  //   employees: [
  //     { id:1, name:'Robert Pattinson', email:'robert@pattinson.com' },
  //     { id:2, name:'Thomas Muller', email:'thomas@muller.com' },
  //     { id:3, name:'Manuel Nuyer', email:'nuyer@manuel.com' }
  //   ]
  // },
  // getters:{
  //   getLatestEmployees: state => {
  //     return state.employees.map(e => {
  //       return {
  //         key: e.id.toString(),
  //         id: e.id,
  //         name: e.name,
  //         email: e.email
  //       }
  //     })
  //   }
  // },
  // mutations: {
  //   insertEmployee(state,newEmployee){
  //     state.employees = [...state.employees, newEmployee]
  //   },
  //   editEmployee(state,updateEmployee){
  //     const employeeIndex = state.employees.findIndex(e => e.id === updateEmployee.id);
  //     if(employeeIndex != -1){
  //       state.employees[employeeIndex] = updateEmployee
  //       console.log('update complete');
  //     }
  //   },
  //   deleteEmployee(state,employeeId){
  //     const employeeIndex = state.employees.findIndex(e => e.id === employeeId);
  //     if(employeeIndex != -1){
  //       const firstArr = state.employees.slice(0, employeeIndex);
  //       const secondArr = state.employees.slice(employeeIndex + 1);
  //       const newEmployees = [...firstArr, ...secondArr];
  //       state.employees = newEmployees;
  //     }
  //   }
  // },
  // actions:{
  //   insertEmployeeMutation(context,employee){
  //     const newEmployee = {
  //       id:employee.id,
  //       name:employee.name,
  //       email:employee.email
  //     }
  //     context.commit('insertEmployee',newEmployee)
  //   }
  // },
  modules:{
    counter,
    employee
  }
})

export default vuexStore