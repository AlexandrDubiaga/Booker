<template>
  <div v-if="checkUser >0" class="main">
    <div v-if="success !== ''" class="alert alert-danger">
      {{ success }}
    </div>
    <div>
      <p v-for="s in boardroom">1. Booked for:  {{s.name}}</p>
    </div>
    <div v-if="role=='admin'">
      <select class="firstSelect"   v-model="chooseUserId" >
        <option :value="user.id" v-for="user in users">{{user.login}}</option>  
      </select>
    </div>
    <div v-else-if="role=='user'">
      <select class="firstSelect"  v-model="chooseUserId">
        <option  :value="one.id" v-for="one in OneUser">{{one.login}}</option>  
      </select>
    </div>
    <div class="monthYearsSelects">
      <p>2. I would like to book this meeting:</p>
      <select  v-model="month" >
        <option :value="key"  v-for="(month,key) in monthArr">{{month}}</option>
      </select>
      <select v-model="day" >
        <option :value="key" v-for="(day,key) in days">{{day}}</option>
      </select>
      <select v-model="year">
        <option :value="key" v-for="(year,key) in yearsArr">{{year}}</option>
      </select>
    </div>
    <div>
      <p>3. Specify what the time and end of the meeting(This will be what people see on the calendar.)</p>
      <div class="FirstChoiseTime">
        <select  v-model="timeStartHour">
          <option :value="hour"  v-for="hour in 12">{{hour}}</option>
        </select>
          <select v-model="timeStartMin">
            <option value="0" >0</option>
            <option :value="minute * 15" v-for="minute in 4">{{minute * 15}}</option>
          </select>
          <select v-model="timeStartMidnight">
            <option value="0">AM</option>
            <option value="1">PM</option>
          </select>
        </div>
        <div class="SecondChoiseTime">
          <select  v-model="timeEndHour">
            <option :value="hour"  v-for="hour in 12">{{hour}}</option>
          </select>
          <select v-model="timeEndMin">
            <option value="0" >0</option>
            <option :value="minute * 15" v-for="minute in 4">{{minute * 15}}</option>
          </select>
          <select v-model="timeEndMidnight">
            <option value="0">AM</option>
            <option value="1">PM</option>
          </select>
        </div>
      </div>
      <div>
        <p>4. Enter the specifics for the meetings(This will be what peolpe see when they click on an. event link.)</p>
        <div class="textarea form-controll">
          <textarea v-model="desc" rows="5"></textarea>
      </div>
      </div>
      <div>
        <p>It's going to be recurring event?</p>
        <div>
          <input v-model="recurring" type="radio" name="optionsRadios" id="optionsRadios1" :value="false" checked>
              No
        </div>
        <div>
          <input v-model="recurring" type="radio" name="optionsRadios" id="optionsRadios2" :value="true">
              Yes
        </div>
      </div>
      <div v-if="recurring" class="recurning">
        <p>5. If it's recurring specify weekly, bi-weekly, or monthly</p>
        <div>
          <input v-model="recurringType" type="radio" name="recurringType" id="recurringType1" :value="1" checked>
             <label>weekly</label>
        </div>
        <div>
          <input v-model="recurringType" type="radio" name="recurringType" id="recurringType2" :value="2">
            <label>bi-weekly</label>
        </div> 
        <div>
          <input v-model="recurringType" type="radio" name="recurringType" id="recurringType3" :value="3">
             <label>monthly</label>
        </div>
        <p>6. If weekly or be weekly, specify number of weeks for it to keep recurring. If monthly, specify the number of months</p>
        <div>
          <input class="duration" v-model="recurringDuration"  type="text">
            duration(max 4 weeks)
        </div>
      </div>
      <div>
        <button v-on:click="addEvent" type="button" class="btn btn-success">Send</button>
        <router-link to='/calendar'><button class="btn btn-success">Back</button></router-link>
      </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
  data () {
    return {
      user:[],
      success:'',
      checkUser:0,
      room:'',
      role:'',
      boardroom:'',
      users:[],
      yearsArr: ['2017','2018','2019'],
      monthArr: [
        "January", 
        "February", 
        "March", 
        "April", 
        "May", 
        "June", 
        "Julay", 
        "August", 
        "September", 
        "October", 
        "November", 
        "December"
      ],
      days:[],
      OneUser:[],
      month:0,
      year:0,
      day:0,
      timeStartHour:1,
      timeEndHour:1,
      timeStartMin:0,
      timeEndMin:0,
      timeStartMidnight:0,
      timeEndMidnight:0,
      recurring:false,
      recurringType:1,
      recurringDuration:'',
      desc:'',
      duration:'',
    }
  },
  watch:{
    chooseUserId: function(){
       var self = this
    },
    month(newMonth){
      this.dateFixed(newMonth)
    }
  },

  methods: {
     dateFixed(month=false){
      var actuallDate = new Date
      if(month){
        var mon = month + 1 
      }else{
        var mon = actuallDate.getMonth() + 1 
      }
      this.days = []
      var col = new Date(actuallDate.getFullYear(),mon , 0).getDate()
      for(var i = 1; i <= col; i++){
        this.days.push(i)
      }
    },

      getAllUsers: function(){
      var self = this
         // axios.get('http://192.168.0.15/~user2/Booker/client/api/employees/', self.config)
          axios.get('http://BoardroomBooker/user2/Booker/client/api/employees/', self.config)
            .then(function (response) {
              if (response.status == 200) {
                  self.users = response.data; 
                   self.chooseUserId =  self.users[0].id
              }
            else{
              self.errors = response.data
            }
        })
        .catch(function (error) {
          console.log(error)
        });
      },

      getOneUser: function($id){
      var self = this
         // axios.get('http://192.168.0.15/~user2/Booker/client/api/users/'  + $id,  self.config)
          axios.get('http://BoardroomBooker/user2/Booker/client/api/users/' + $id, self.config)
            .then(function (response) {
              //console.log(response)
              if (response.status == 200) {
                  self.OneUser = response.data;    
                  self.chooseUserId =  self.OneUser[0].id
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
     
     getBoadRoomById: function(id){
      var self = this
          //axios.get('http://192.168.0.15/~user2/Booker/client/api/rooms/' + id)
          axios.get('http://BoardroomBooker/user2/Booker/client/api/rooms/'+ id)
            .then(function (response) {
              if (response.status == 200) {
                  self.boardroom = response.data;
              }
            else{
              self.errors = response.data
            }
        })
        .catch(function (error) {
          console.log(error)
        });
      },

      addEvent: function () {
        var self = this
        var currentData = new Date();
        if(self.timeStartMidnight == '1'){
          self.timeStartHour += 12
        }
        if(self.timeEndMidnight == '1'){
          self.timeEndHour += 12
        }
        var timeNow = (Date.now()/1000).toFixed()
        var eventStart = new Date(self.yearsArr[self.year],self.month,self.days[self.day],self.timeStartHour,self.timeStartMin)
        var eventEnd = new Date(self.yearsArr[self.year],self.month,self.days[self.day],self.timeEndHour,self.timeEndMin)
        var data = new URLSearchParams();
        data.append('id_room', self.boardroom[0].id);
        data.append('id_user', self.chooseUserId);
        data.append('description', self.desc);
        data.append('time_start', eventStart.getTime() / 1000);
        data.append('time_end', eventEnd.getTime() / 1000);
        data.append('create_time', timeNow);
        if(self.recurring){
          data.append('recurningType', self.recurringType);
          data.append('id_parent', self.recurringDuration);
        }
        axios.post('http://BoardroomBooker/user2/Booker/client/api/events/', data, self.config)
        //axios.post('http://192.168.0.15/~user2/Booker/client/api/events/', data, self.config)
        .then(function (response) {
          if (response.data === 1)
          {
            self.success = 'Data added'
          }
          else
          {
            self.errorMsg = response.data
          }
        }).catch(function (error) {
            console.log(error);
          });
      }
  },

  created(){
    var self = this
    this.checkUserFun()
    this.getBoadRoomById(this.$route.params.id)
    this.getAllUsers()
    this.getOneUser(self.user.id)
  },
}
</script>

<style scoped>
.main
{
  background-image: url('/static/img/userList.jpg');
  background-attachment: fixed;
}
.firstSelect{
  border:2px solid #507299;
  width:200px;
  height:40px;
}
.monthYearsSelects select
{
 border:2px solid #507299;
  width:200px;
  height:40px;
}
.FirstChoiseTime select 
{
   border:2px solid #507299;
  width:200px;
  height:40px;
}
.SecondChoiseTime select
{
  border:2px solid #507299;
  width:200px;
  height:40px;
}
.textarea textarea
{
 width:600px;
}
.btn
{
  width:100px;
  margin-bottom:200px;
   margin-top:20px;
}
.duration
{
  border:2px solid #507299;
  width:50px;
  height:40px;
}
</style>