<template>
    <div>
        <a-row :gutter="16">
            <a-col :span="8">
                <a-card title="New Employee">
                    <div id="employee-form">
                        <a-form @submit.prevent="handleSubmit">
                            <a-form-item
                                :label-col="formItemLayout.labelCol"
                                :wrapper-col="formItemLayout.wrapperCol"
                                label="Name">
                                <a-input ref="first" v-model="employee.name" @focus="clearStatus" @keypress="clearStatus"/>
                            </a-form-item>

                            <a-form-item
                                :label-col="formItemLayout.labelCol"
                                :wrapper-col="formItemLayout.wrapperCol"
                                label="Email">
                                <a-input v-model="employee.email" @focus="clearStatus"/>
                            </a-form-item>

                            <a-form-item :wrapper-col="{ span: 4, offset: 4 }">
                                <a-button type="primary" html-type="submit">
                                    Save
                                </a-button>
                            </a-form-item>

                            <p v-if="error && submitting" class="error-message">Please fill out required fields</p>
                            <p v-if="success" class="success-message">Employee successfully added</p>
                        </a-form>
                    </div>
                </a-card>
            </a-col>
            <a-col :span="8">
                <a-card hoverable style="width: 300px">
                    <img slot="cover" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>
                    <template slot="actions" class="ant-card-actions">
                        <a-icon key="minus" type="minus" @click="decrement()"/>
                        {{counter}}
                        <a-icon key="plus" type="plus" @click="increment"/>
                    </template>
                    <a-card-meta :title="getCounter" description="Vuex Store Demonstration">
                    <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                    </a-card-meta>
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>

<script>

import {SET_COUNTER, GET_COUNTER, MINUS_COUNTER} from '../store/modules/counter/type'
import {ADD_EMPLOYEE, GET_EMPLOYEES} from '../store/modules/employee/type'
import {mapGetters, mapActions} from 'vuex'

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

export default {
    name: 'employee-form',
    data(){
        return {
            submitting: false,
            error: false,
            success: false,
            employee : { name: '', email :'' },
            formItemLayout,
        }
    },
    methods: {
         ...mapActions({
            increment: SET_COUNTER,
            decrement: MINUS_COUNTER,
            pushEmployee: ADD_EMPLOYEE
        }),
        addEmployee(employee){
            const totalEmployees = this.employeesList
            const lastIndex = totalEmployees.length - 1;
            const lastId = totalEmployees.length > 0 ? totalEmployees[lastIndex].id : 0;
            const id = lastId + 1;
            const newEmployee = {...employee, id}
            //this.$store.dispatch('ADD_EMPLOYEE',newEmployee)
            this.pushEmployee(newEmployee)
        },
        handleSubmit(){
            this.submitting = true
            this.clearStatus()
            if(this.invalidName || this.invalidEmail){
                this.error = true
                return
            }
            // this.$emit('add-employee',this.employee)
            this.addEmployee(this.employee)
            this.$refs.first.focus()
            this.employee = {name: '',email: ''}
            this.error = false
            this.success = true
            this.submitting = false
        },
        clearStatus(){
            this.success = false
            this.error = false
        },
    },
    computed:{
        ...mapGetters({
            counter: GET_COUNTER,
            employeesList: GET_EMPLOYEES,
        }),
        invalidName(){
            return this.employee.name === ''
        },
        invalidEmail(){
            return this.employee.email === ''
        },
        getCounter(){
            return `Counter : ${this.counter}`
        }
    }
}
</script>

<style scoped>
    form{ margin-bottom:2rem;}
    input{ margin-bottom: 1rem; }
    [class*='-message']{ font-weight:bold; }
    .error-message{color:#d33c40}
    .success-message{color:#32a95d}
</style>