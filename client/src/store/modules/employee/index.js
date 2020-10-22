import Api from '../../../services/Api'
import {
    GET_EMPLOYEES,
    ADD_EMPLOYEE,
    DEL_EMPLOYEE,
    EDIT_EMPLOYEE,
    FETCH_EMPLOYEES,
    SET_EMPLOYEES,
    FORCE_FETCH_EMPLOYEES
} from './type'

export const employee = {
    state:{
        employees: []
    },
    getters:{
        [GET_EMPLOYEES]: state => {
            return state.employees.map(e => {
              return {
                key: `${e.id}`,
                id: e.id,
                name: e.name,
                email: e.email
              }
            })
        }
    },
    mutations:{
        [SET_EMPLOYEES]:(state,dataset) => {
            state.employees = dataset
        },
        [ADD_EMPLOYEE]:(state,newEmployee) => {
            state.employees = [...state.employees, newEmployee]
        },
        [DEL_EMPLOYEE]:(state,employeeIndex) => {
            state.employees.splice(employeeIndex,1)
        },
        [EDIT_EMPLOYEE]:(state,updateEmployee) => {
            console.log('[EDIT_EMPLOYEE] : ',state.employees)
            console.log('updateEmployee : ',updateEmployee)
            // const employeeIndex = state.employees.findIndex(e => e.id === updateEmployee.id);
            // if(employeeIndex != -1){
            //     state.employees[employeeIndex] = updateEmployee
            //     console.log('update complete');
            // }
        }
    },
    actions:{
        [FORCE_FETCH_EMPLOYEES]: async ({commit}) => {
            const results = await Api().get('users')
            const usersList = results.data.map(e => {
                return {
                    key: `${e._id}`,
                    id: e._id,
                    name: e.name || '',
                    email: e.email || ''
                }
            })
            commit(SET_EMPLOYEES,usersList)
        },
        [FETCH_EMPLOYEES]: async ({getters, dispatch}) => {
            const totalEmployees = getters.GET_EMPLOYEES;
            if(totalEmployees.length <= 0){
                dispatch(FORCE_FETCH_EMPLOYEES)
            }
        },
        [ADD_EMPLOYEE]: async ({commit},employee) => {
            const result = await Api().post('users',{
                name: employee.name,
                email:employee.email
            })
            if(result && result.data){
                const newUser = result.data;
                commit(ADD_EMPLOYEE,newUser)
            }
        },
        [EDIT_EMPLOYEE]: async ({commit},employee) => {
            const result = await Api().put(`users/${employee.id}`,employee)
            if(result && result.data){
                const { _id } = result.data;
                if(_id == employee.id){
                    commit(EDIT_EMPLOYEE,employee)
                }
            }
        },
        [DEL_EMPLOYEE]: async ({commit, getters},employeeId) => {
            const totalEmployees = getters.GET_EMPLOYEES;
            const results = await Api().delete(`users/${employeeId}`)
            if(results && results.data){
                const { _id } = results.data;
                if(_id == employeeId){
                    const isFound = totalEmployees.findIndex(e => e.key == _id)
                    if(isFound != -1){
                        commit(DEL_EMPLOYEE,isFound)
                    }
                }
            }
        }
    }
}