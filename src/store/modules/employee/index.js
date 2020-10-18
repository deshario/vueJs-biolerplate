import {GET_EMPLOYEES, ADD_EMPLOYEE, DEL_EMPLOYEE} from './type'

export const employee = {
    state:{
        employees: [
            { id:1, name:'User1', email:'user1@mail.com' },
            { id:2, name:'User2', email:'user2@mail.com' },
            { id:3, name:'User3', email:'user3@mail.com' }
        ]
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
        }
    }
    
}