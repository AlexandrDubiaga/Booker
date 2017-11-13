<template>
    <div class="regForm">
      <p class="alert-warning">{{errorMsg}}</p>
      <div v-if="success !== 'success'">
        <fieldset>
            <div id="legend">
                <legend class="title">Add new Employees</legend>
            </div>
            <div class="control-group">
                <label class="control-label"  for="login">login</label>
                <div class="controls">
                    <input v-model="login"   type="text" id="login" name="login" placeholder="" >
                </div>
            </div>
            <div class="control-group">
                <label class="control-label" for="email">Email</label>
                <div class="controls">
                    <input v-model="email" type="email" id="email" name="email" placeholder="" >
                </div>
            </div>
            <div class="control-group">
                <label class="control-label" for="password">password</label>
                <div class="controls">
                    <input v-model="pass" type="password" id="password" name="password" placeholder="" >
                </div>
            </div>
             <div class="control-group">
                <label class="control-label" for="password">password confirm</label>
                <div class="controls">
                    <input v-model="passConfirm" type="password" id="password" name="password" placeholder="" >
                </div>
            </div>
            <div class="control-group">
            <div class="controls">
                <button v-on:click="registration()" class="btn  btn-success">Add Employee</button>
                <router-link class="link" to='/EmployeeAdd'><button class="btn btn-success">Back</button></router-link>
            </div>
            </div>
        </fieldset>
    </div>
    <div v-else class="success">
      <h2>Thank you <strong>{{fullName}}</strong>, </h2>
      <router-link class="link" to='/EmployeeAdd'>Back to employees list</router-link>
    </div>
    </div>
 </template>

<script>
    import axios from 'axios'
    export default {
    name: 'EmployeesForm',
    data () {
        return {
            login: '',
            pass: '',
            email:'',
            passConfirm:'',
            passConf: '',
            config: {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            },
            success: '',
            errorMsg: ''
        }
    },
    watch:{
    
    email:function()
    {
        var self = this
        self.pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/;
        $(email).keyup(function(){
            if(!self.pattern.test($(email).val()))
            {
                $(email).css('background-color', 'red')
                self.emailWatch = false
            }
            else
            {
                $(email).css('background-color', 'white');
                self.emailWatch = true
            }
        });      
    },
     login:function()
    {
        var self = this
        self.patternLogin = /^[a-zA-Z1-9]+$/;
        $(login).keyup(function(){
            if(!self.patternLogin.test($(login).val()))
            {
                $(login).css('background-color', 'pink')
                self.loginWatch = false
            }
            else
            {
                $(login).css('background-color', 'white');
                self.loginWatch = true
            }
        });      
    }
    },

    methods: {
        registration: function () {
          var self = this
          self.errorMsg = ''
          if (self.login && self.pass && self.email)
          {
               
            if (self.login.length <= 3)
            {
              self.errorMsg = 'login should be at least 4 characters'
                return false
            }
            if (self.login.length >=20 )
            {
              self.errorMsg = 'login should be not more 20 characters'
                return false
            }
            if(!self.loginWatch)
            {
                self.errorMsg = 'Only latin letters in login'
                return false
            }
            if (self.pass.length <= 3)
            {
              self.errorMsg = 'Password should be at least 4 characters'
              return false
            }
            if(self.pass !== self.passConfirm)
            {
                 self.errorMsg = 'Passwords do not match'
                 return false
            }
           if(!self.emailWatch)
           {
                 self.errorMsg = 'Invalid email symbols'
                  return false
           }
            var data = new URLSearchParams();
            data.append('login', self.login);
            data.append('email', self.email);
            data.append('pass', self.pass);
            axios.post('http://BoardroomBooker/user2/Booker/client/api/employees/', data, self.config)
            //axios.post('http://192.168.0.15/~user2/Booker/client/api/employees/', data, self.config)
            .then(function (response) {
                if (response.data === 1)
                {
                    self.success = 'success'
                }
                else
                {
                    self.errorMsg = response.data
                }
                })
                .catch(function (error) {
                    console.log(error);
                });
          }
          else{
              self.errorMsg =  'Enter data in all fields!'
          }
          
      },

    checkUser: function(){
        var self = this
        if (localStorage['user']){
            self.$router.push('/EmployeesForm')
            }else{
                self.$router.push('/')
           }
        }
    },
    computed: {
        fullName(){
            return this.login;
        }
    },
    created(){
      this.checkUser()
    }
  }
</script>

<style scoped>

.x
{
    position:absolute;
    top:10px;
}
.regForm
{
   padding-top: 10px;
   padding-bottom: 240px;
   background-repeat: no-repeat;
   background-size: cover;
   margin-top:0px;
   margin-bottom:0px;
   background-image: url('/static/img/edituser.jpg');
   background-attachment: fixed;
}
input
{
    height:40px;
    width: 300px;
    border-radius:10px;
}
button
{
    margin-top:10px;
}
</style>