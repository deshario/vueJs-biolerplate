import {GET_EMPLOYEES, ADD_EMPLOYEE, DEL_EMPLOYEE, EDIT_EMPLOYEE, FETCH_EMPLOYEES, SET_EMPLOYEES } from './type'

export const employee = {
    state:{
        employees: []
    },
    getters:{
        [GET_EMPLOYEES]: state => {
            return state.employees.map(e => {
              return {
                key: e.id.toString(),
                id: e.id,
                name: e.name,
                email: e.email
              }
            })
        }
    },
    mutations:{
        [SET_EMPLOYEES]: (state,dataset) => {
            state.employees = dataset
        },
        [ADD_EMPLOYEE]:(state,newEmployee) => {
            state.employees = [...state.employees, newEmployee]
        },
        [DEL_EMPLOYEE]:(state,employeeIndex) => {
            state.employees.splice(employeeIndex,1)
        },
        editEmployee(state,updateEmployee){
            const employeeIndex = state.employees.findIndex(e => e.id === updateEmployee.id);
            if(employeeIndex != -1){
                state.employees[employeeIndex] = updateEmployee
                console.log('update complete');
            }
        },
    },
    actions:{
        [FETCH_EMPLOYEES]: ({commit, getters}) => {
            const totalEmployees = getters.GET_EMPLOYEES;
            if(totalEmployees.length <= 0){
                fetch('https://jsonplaceholder.typicode.com/users/')
                .then(response => {
                    return response.json()
                }).then(jsonOnj => {
                    const employees = jsonOnj.map(e => {
                        return {
                        key: e.id.toString(),
                        id: e.id,
                        name: e.name,
                        email: e.email
                        }
                    })
                    commit(SET_EMPLOYEES,employees)
                }).catch(err => console.log(err))
            }else{
                console.log('Data already loaded')
            }
        },
        [ADD_EMPLOYEE]: (context,employee) => {
            const newEmployee = {
                id:employee.id,
                name:employee.name,
                email:employee.email
            }
            context.commit(ADD_EMPLOYEE,newEmployee)
        },
        [DEL_EMPLOYEE]: ({commit, getters},employeeId) => {
            const totalEmployees = getters.GET_EMPLOYEES;
            const employeeIndex = totalEmployees.findIndex(e => e.id === employeeId);
            if(employeeIndex != -1){
                commit(DEL_EMPLOYEE,employeeIndex)
            }
        },
        [EDIT_EMPLOYEE]: ({commit, getters},employee) => {
            console.log('Ready To Edit : ',employee)
        }
    }
}