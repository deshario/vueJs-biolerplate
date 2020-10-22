<template>
    <div id="employee-table" style="margin-top:20px;">
        <p v-if="employeesList.length < 1" class="empty-table">
            No Employees
        </p>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="employee in employeesList" :key="employee.id">

                    <td v-if="editing === employee.id">
                        <input type="text" v-model="employee.name"/>
                    </td>
                    <td v-else>{{employee.name}}</td>
                    
                    <td v-if="editing === employee.id">
                        <input type="text" v-model="employee.email"/>
                    </td>
                    <td v-else>{{employee.email}}</td>

                    <td v-if="editing === employee.id">
                        <button @click="saveEditing(employee)">Save</button>
                        <button class="muted-button" @click="cancelEdit(employee)">Cancel</button>
                    </td>
                    <td v-else>
                        <button @click="enableEdit(employee)">Edit</button>
                        <button @click="deleteEmployee(employee.id)">Delete</button>
                        <!-- Emit = root comp function-->
                    </td>

                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import { EDIT_EMPLOYEE, DEL_EMPLOYEE, FETCH_EMPLOYEES, GET_EMPLOYEES } from '../store/modules/employee/type'
    export default {
        name: 'employee-table', 
        data(){
            return {
                editing: null
            }
        },
        computed: {
            ...mapGetters({
                employeesList: GET_EMPLOYEES
            })
        },
        methods:{
            ...mapActions({
                loadData: FETCH_EMPLOYEES
            }),
            enableEdit(employee){
                this.cachedEmployee = Object.assign({}, employee) // replace target with source
                this.editing = employee.id
            },
            cancelEdit(employee){
                Object.assign(employee, this.cachedEmployee) // replace target with source
                this.editing = null
            },
            saveEditing(employee){
                if(employee.name === '' || employee.email === '') return
                this.$store.dispatch(EDIT_EMPLOYEE,employee)
                this.editing = null
            },
            deleteEmployee(employeeId){
                this.$store.dispatch(DEL_EMPLOYEE,employeeId)
            },
        },
        created(){
            this.loadData()
        }
    }
</script>

<style scoped>

    table {
        font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    table td, table th {
        border: 1px solid #ddd;
        padding: 8px;
    }

    table tr:nth-child(even){background-color: #f2f2f2;}

    table tr:hover {background-color: #ddd;}

    table th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #4CAF50;
        color: white;
    }

</style>