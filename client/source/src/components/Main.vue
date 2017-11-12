<template>
  <div class="login navbar-form" >
    <div v-if="checkUser == ''">
      <h1 class="Authorization">Authorization</h1>
      <div class="form-group">
        <input v-model="login" type="text" class="form-control" name="username" placeholder="Username">
      </div>
      <div class="form-group">
        <input v-model="pass" type="password" class="form-control" name="password" placeholder="Password">
      </div>
      <div class="form-group">
        <button v-on:click="loginFun()" type="submit" class="btn btn-warning">Sign In</button>
      </div>
      <p><span class="alert-info">{{errorMsg}}</span></p>
    </div>
    <div v-else class="form-group">
       <router-link class="link" to='/calendar'><button class="btn btn-success">Back to Calendar, {{user.firstName}}</button></router-link>
     </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      login: '',
      pass: '',
      checkUser: '',
      errorMsg: '',
      user: {
        id: '',
        hash: '',
        firstName: '',
      },
      role: '',
      config: {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
            }
      },
    }
  }, 
  methods: {
    getCheck: function(){
      var self = this
      if (localStorage['id'] && localStorage['hash'])
      {
        self.checkUser = 1
      }
      else{
        self.checkUser = ''
      }
    },
    loginFun: function(){
      var self = this
      self.errorMsg = ''
        if (self.login && self.pass)
        {
          //axios.put('http://192.168.0.15/~user2/Booker/client/api/users/', {
          axios.put('http://BoardroomBooker/user2/Booker/client/api/users/', {
            login: self.login,
            pass: self.pass 
          }, self.config)
          .then(function (response) {
            if (response.data.id && response.data.hash)
            {
              self.user.id = response.data.id
              self.user.hash = response.data.hash 
              self.user.firstName = response.data.login
              self.role = response.data.role
              localStorage['user'] = JSON.stringify(self.user)
              self.checkUserFun()
              self.getCheck()
            if (response.data.role) {
              self.$router.push("/calendar");
            }
            else
            {
              self.$router.push("/");
            }
            return true;
           }else {
           
              self.errorMsg = 'Wrong password or login'
           }
         })
          .catch(function (error) {
            console.log(error)
          });
        }
        else
        {
          self.errorMsg = 'Enter data in all fields!'
        }
      },
      checkUserFun: function(){
        var self = this
        if (localStorage['user'])
        {    
          self.user = JSON.parse(localStorage['user'])
          //axios.get('http://192.168.0.15/~user2/Booker/client/api/users/' + self.user.id)
            axios.get('http://BoardroomBooker/user2/Booker/client/api/users/' + self.user.id)
            .then(function (response) {
            if (self.user.hash === response.data[0].hash)
            {
              self.checkUser = 1;
              self.role = response.data[0].role
              return true
            }
            else
            {
              self.checkUser = ''
              delete localStorage['user']
            }
            })
            .catch(function (error) {
              console.log(error)
            });
          }
        else{
          self.checkUser = ''
          return false
        }
      },
  },
  created(){
    this.checkUserFun()
    this.deleteEmployeeById()
    this.putEmployeeById()
  },
}
</script>

<style scoped>
.login{
  padding-top: 10px;
  padding-bottom: 480px;
  background-image: url('/static/img/auth.jpg');
   background-repeat: no-repeat;
   background-size: cover;
   margin-top:0px;
   margin-bottom:0px;
}
.form-group{
  padding-bottom: 10px;
}

.hello {
  font-weight: bold;
  font-size: 18px;
  color: darkblue;
}
.Authorization
{
   color: snow;
}

</style>