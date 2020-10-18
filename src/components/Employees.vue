<template>
    <div>
        <a-alert :message="counterLabel" type="info" close-text="Close Now" style="margin-bottom:10px"/>
        <!-- <a-button class="editable-add-btn">Add</a-button> -->
        <a-card title="Employees">
            <a-table :columns="tableColumns" :data-source="allEmployees" bordered>
                <a slot="action" slot-scope="record" @click="() => deleteEmployee(record.id)">Delete</a>
            </a-table>
        </a-card>
    </div>
</template>

<script>

    import { mapGetters } from 'vuex';
    import { GET_COUNTER } from '../store/modules/counter/type'
    import { GET_EMPLOYEES, DEL_EMPLOYEE } from '../store/modules/employee/type'

    const tableColumns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            width: 80,
            align: 'center'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
           
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            ellipsis: true,
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'action',
            scopedSlots: {
                customRender: 'action'
            },
        },
    ];

    export default {
        name: 'about',
        data(){
            return {
                val: this.$store.state.count,
                tableColumns
            }
        },
        computed: {
            ...mapGetters({
                allEmployees: GET_EMPLOYEES,
                mCounter: GET_COUNTER
            }),
            counterLabel(){
                return `Counter : ${this.mCounter}`
            }
        },
        methods:{
            deleteEmployee(employeeID){
                this.$store.dispatch(DEL_EMPLOYEE,employeeID)
            }
        }
    }
</script>

<style scoped></style>