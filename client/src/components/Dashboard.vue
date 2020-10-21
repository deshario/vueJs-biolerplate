<template>
    <div>
      <employee-form/>
      <employee-table/>
      <!-- <employee-table :employeesList="dataList" @delete-employee="deleteEmployee"/> -->
    </div>
</template>

<script>
  import EmployeeForm from './Dash1'
  import EmployeeTable from './Dash2'

  export default {
    name: 'Employee',
    components: {
      EmployeeForm,
      EmployeeTable
    },
    data(){
      return {
        // dataList: this.$store.getters.getLatestEmployees
      }
    },
    methods:{
      deleteEmployee(employee){
        // console.log('Deleting from root')
      },
    }
  }

</script>

<style>
  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
</style>
