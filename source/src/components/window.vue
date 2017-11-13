<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="btnclose">
            <button type="button" class="btn  btn-info" v-on:click="$emit('close')">close</button>
          </div>
          <h6>B.B. DETAILS</h6>
          <p v-if="success != ''" class="alert-danger" style="text-align: center;" >{{success}}</p>
          <table class="table table-bordered">
            <tbody>
              <tr>
                <th v-if="access == '2'">Time</th>
                <th v-else-if="(access == '1' && user.id == currentEventIdUser)">Time</th>
                <th v-else>Time</th>
                <td v-if="access == '2'">
                  <select  v-model="StartHour">
                    <option :value="StartHour"  v-for="StartHour in 12">{{StartHour}}</option>
                  </select>
                  <select v-model="StartMinutes">
                    <option :value="StartMinutes * 15" v-for="StartMinutes in 4">{{StartMinutes * 15}}</option>
                  </select>
                  <select  v-model="EndHour">
                    <option :value="EndHour"  v-for="EndHour in 24">{{EndHour}}</option>
                  </select>
                  <select v-model="EndMinutes">
                    <option :value="EndMinutes * 15" v-for="EndMinutes in 4">{{EndMinutes * 15}}</option>
                  </select>
                </td>
                <td v-else-if="(access == '1' && user.id == currentEventIdUser)">
                  <select  v-model="StartHour">
                    <option :value="StartHour"  v-for="StartHour in 12">{{StartHour}}</option>
                  </select>
                  <select v-model="StartMinutes">
                    <option :value="StartMinutes * 15" v-for="StartMinutes in 4">{{StartMinutes * 15}}</option>
                  </select>
                  <select  v-model="EndHour">
                    <option :value="EndHour"  v-for="EndHour in 24">{{EndHour}}</option>
                  </select>
                  <select v-model="EndMinutes">
                    <option :value="EndMinutes * 15" v-for="EndMinutes in 4">{{EndMinutes * 15}}</option>
                  </select>
                </td>
                <td v-else>{{timeStart}}</td>
                  <tr>
                    <th>notes:</th>
                    <td v-if="access == '2'">
                      <input type="text" v-model="vModelForDescription" :value="currentEvent.description">
                    </td>
                    <td v-else-if="(access == '1' && user.id == currentEventIdUser)">
                      <input type="text" v-model="vModelForDescription" :value="currentEvent.description">
                    </td>
                    <td v-else>{{currentEvent.description}}</td>
                  </tr>
                  <tr>
                    <th>who:</th>
                    <td v-if="access == '2'">
                    <select class="selUser" v-model="currenForUsersVmodel">
                        <option v-for="userRole in rolesArray" :value="userRole.id" >{{userRole.login}}</option>
                    </select>
                    </td>
                    <td v-else-if="(access == '1')">Only for admin</td>
                  </tr>
                  <tr>
                    <td colspan="2">Submitted: {{curentCreateTime}}</td>
                  </tr>
              </tbody>
            </table>
        <div v-if="success != 'success'">
          <div v-if="access == '2'">
            <button  v-on:click="updateEvent()" class="btn btn-secondary">Update</button>
            <button v-on:click="deleteEvent(currentEventId)" class="btn btn-secondary">Delete</button>
          </div>
          <div v-if="(access == '1' && user.id == currentEventIdUser)">
            <button  v-on:click="updateEvent()" class="btn btn-secondary">Update</button>
            <button v-on:click="deleteEvent(currentEventId)" class="btn btn-secondary">Delete</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'HelloWorld',
    props: ['sentEvent', 'timeFormat'],
    data () {
      return {
        msg: '',
        role:'',
        errorMsg: '',
        success: '',
        access: '',
        currentEvent: {},
        user: {},
        rolesArray:[],
        nameUserFromCurrentEvent:'',
        currentDescription:'',
        curentIdUserInCurrentEvent:'',
        curentCreateTime:'',
        StartHour:'',
        StartMinutes:'',
        EndHour:'',
        EndMinutes:'',
        startDate:'',
        endDate:'',
        FullDateStart:'',
        success:'',
        oneUserInModal:'',
        config: {
          headers: {'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
       }
    },
    methods: {
      setProporties: function(){
        var self = this
        self.currentEvent = self.sentEvent
        self.currentEventId = self.currentEvent.id
        self.currentEventIdUser = self.currentEvent.id_user
        self.roomIdCurrentEvent = self.currentEvent.id_room
        self.vModelForDescription = self.currentEvent.description
        self.curentIdUserInCurrentEvent = self.rolesArray.id
        self.curentCreateTime = self.currentEvent.create_time
        self.currenForUsersVmodel = 1
        self.timeStart =  self.currentEvent.time_start
        self.timeEnd =  self.currentEvent.time_end
        self.startTime = new Date(self.timeStart);
        self.monthsStart = ['01','02','03','04','05','06','07','08','09','10','11','12'];
        self.yearStart = self.startTime.getFullYear();
        self.monthStart = self.monthsStart[self.startTime.getMonth()];
        self.dateStart =  self.startTime.getDate();
        self.StartHour = self.startTime.getHours();
        self.StartMinutes =  self.startTime.getMinutes();
        self.endTime = new Date(self.timeEnd);
        self.monthsEnd = ['01','02','03','04','05','06','07','08','09','10','11','12'];
        self.yearEnd = self.endTime.getFullYear();
        self.monthEnd = self.monthsEnd[self.endTime.getMonth()];
        self.dateEnd =  self.endTime.getDate();
        self.EndHour = self.endTime.getHours();
        self.EndMinutes =  self.endTime.getMinutes();
      },

      getAllUsers: function(){
        var self = this
        //axios.get('http://192.168.0.15/~user2/Booker/client/api/employees/', self.config)
        axios.get('http://BoardroomBooker/user2/Booker/client/api/employees/', self.config)
        .then(function (response) {
          if (response.status == 200) {
            self.rolesArray = response.data;
          }
          else{
            self.errors = response.data
          }
        })
        .catch(function (error) {
          console.log(error)
        });
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
              self.role = response.data[0].role
              self.checkUserRole()
              self.setProporties()  
              return true
            }
          })
          .catch(function (error) {
            console.log(error)
          });
        }
        else{
          self.checkUser = ''
          delete localStorage['user']
          self.$router.push('/')
          return false
        }
      },

      checkUserRole: function(){
        var self = this
        if (self.role == 'admin')
        {
          self.access = '2'
        }
        else{
          self.access = '1'
        }
      },

      updateEvent: function(){
        var self = this
        self.error = ''
        var data = {}
       
        self.timeStart = self.yearStart + '-' + self.monthStart + '-' +self.dateStart  + ' ' + self.StartHour + ':' + self.StartMinutes + ':' + '00' ;
        self.timeEnd = self.yearEnd + '-' + self.monthEnd + '-' +self.dateEnd  + ' ' + self.EndHour + ':' + self.EndMinutes + ':' + '00' ;
        data.id =  self.currentEventId 
         if(self.access == 1)
         {
           data.id_user =  self.user.id
         }else
         {
           data.id_user =  self.currenForUsersVmodel;
         }
        data.id_room = self.roomIdCurrentEvent
        data.description = self.vModelForDescription
        data.time_start =  self.timeStart 
        data.time_end =    self.timeEnd
        data.create_time =   (Date.now()/1000).toFixed()
      
        axios.put('http://BoardroomBooker/user2/Booker/client/api/events/', data, self.config)
        //axios.put('http://192.168.0.15/~user2/Booker/client/api/events/', data, self.config)
        .then(function(response){
          if (response)
          {  
            self.success = 'Update success'
            //self.$emit('refresh',response)
          }
          else {
            self.error = 'Error update!'
          } 
        })
      },

      deleteEvent: function($id){
      var self = this
      axios.delete('http://BoardroomBooker/user2/Booker/client/api/events/' + $id)
      //axios.delete('http://192.168.0.15/~user2/Booker/client/api/events/' + $id)
      .then(function (response) {
        if (response.data)
        {
          self.success = 'Event deleted'
          self.$emit('refresh')
        }
        else
        {
          self.errorMsg = 'error'
        }            
      })
    },
    },

    created(){
      var self = this
      this.checkUserFun()
      this.getAllUsers()     
    }
  }
</script>

<style scoped>
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color:  #40E0D0;
  border:2px solid red;
}
table tr td{
     border:2px solid #6495ED;
}
table tr th{
     border:2px solid #6495ED;
}
.btnclose{
  float: right;
  padding-bottom: 8px;
}
.btn-section{
  text-align: center;
}
.btn-section .btn-danger{
  margin-left: 20px;
}
h6{
  text-align: center;
}
th{
  width: 50px;
}

.plusWidth{
  width: 420px;
}
</style>