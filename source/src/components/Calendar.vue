<template>
  <div class="main container-fluid" v-if="checkUser>0">
    <window v-if="showModal" :sentEvent="sentEvent" v-on:close="showModal = false"></window>
    <div class="row">
      <p class="rooms">
        <button class="btn btn-light" v-for="(room,index) in rooms" v-on:click=" getAppointmentByIdUserBoardroomId(index)">{{room.name}}</button>
        <router-link :to="{name:'AddAppointment',params:{id:selRoom.id}}"><button class="btn btn-success">Book it</button></router-link>
        <router-link to='/EmployeeAdd'><button class="btn btn-success"  v-if="checkUser == 2">Employee List</button></router-link>  
        <button v-on:click="logoutFun()" type="submit" class="btn btn-primary exit">Exit</button>
        <p><span class="hello">{{"Hello,"+uservar}}</span></p>
      </p>
      <p class="roomSel">
        Room is: <strong class="roomSelIn">{{fix}}</strong>
      </p> 
    </div>
    <div class="row">  
      <div class="col-md-5  solo"><h1>Boardroom Booker</h1></div>
    </div>
    <div class="title">
      <p class="leftCursor" v-on:click="minusMonth()"><button class="btn btn-primary"><<</button></p>
      <p>{{getMonth[currentMonth]}} {{currentYear}}</p>
      <p class="rightCursor" v-on:click="plusMonth()"><button class="btn btn-primary">>></button></p>
    </div>
    <table class="table table-bordered">
      <thead>
        <tr class="heads">
          <th v-for="wday in getDays">{{wday}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="week in weeks">
          <td class="day" v-for="day in week" :class="{date: day[0] == currentDay}">{{day[0]}}
            <p  class="events" v-if="day.length > 1" v-for="event in day[1]" ><button class="btn btn-link" v-on:click="showEvent(event)" >{{event.timeString}}</button></p>
          </td>  
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>
<script>
  import axios from "axios";
  import Modalwindow from './window'
  export default {
    name: "Calendar",
    data() {
      return {
        id:'',
        uservar:'',
        checkUser: 0,
        dataInCalendar:'',
        rooms: [],
        timeData:{},
        selRoom:1,
        fix:{},
        counter: 2,
        typeC:'',
        inst_date: new Date(),
        config: {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        msg: '',
        errorMsg: '',
        date: new Date(),
        weeks: [],
        currentMonth: '',
        currentYear: '',
        rooms: [],
        eventsMonth: [],
        sentEvent: {},
        showModal: false
      };
    },
    methods: {
      showEvent: function(event){
      var self = this
      self.showModal = true
      self.sentEvent = event  
    },
      
    getRooms: function(){
      var self = this
      axios.get('http://BoardroomBooker/user2/Booker/client/api/rooms/')
      //axios.get('http://192.168.0.15/~user2/Booker/client/api/rooms/')
      .then(function (response) {
        self.rooms = response.data
         if(!localStorage['room'])
         {
            self.selRoom = self.rooms[0]
             self.fix = self.selRoom.name
            localStorage['room'] = JSON.stringify(self.fix)
         }
         else
         {
           self.selRoom = localStorage['room']
           self.fix = JSON.parse(localStorage['room'])
         }
      })
       .catch(function (error) {
          console.log(error)
      })
    },
     
    getAllEvents: function(){
      var self = this
      //axios.get('http://192.168.0.15/~user2/Booker/client/api/rooms/events')
      axios.get('http://BoardroomBooker/user2/Booker/client/api/events/')
      .then(function (response) {
        self.eventsMonth = response.data
        self.getArrayCalendar()   
      })
      .catch(function (error) {
        console.log(error)
      })
    },

    getAppointmentByIdUserBoardroomId: function(index){
      var self = this
      self.selRoom = self.rooms[index]
      self.fix = self.selRoom.name
      localStorage['room'] = JSON.stringify(self.fix) 
      //axios.get('http://192.168.0.15/~user2/Booker/client/api/rooms/events'+  self.selRoom.id)
      axios.get('http://BoardroomBooker/user2/Booker/client/api/events/' +  self.selRoom.id )
      .then(function (response) {
        self.eventsMonth = response.data
        self.getArrayCalendar()
      })
      .catch(function (error) {
        console.log(error)
      })
    },

    getMonthYear: function()
    {
      var self = this
     
      self.currentMonth =self.date.getMonth()
      self.currentYear = self.date.getFullYear()
     
    },

    getArrayCalendar: function(){
      var self = this
      self.weeks = []
      var date = new Date(self.currentYear, self.currentMonth)
      self.weeks[0] = []
      for (var i=0; i < self.getNumDay(date); i++)
      {
        self.weeks[0].push([])
      }
      var count = 0
      while (date.getMonth() == self.currentMonth)
      {
        self.weeks[count].push([date.getDate()])
        if (self.getNumDay(date) % 7 == 6)
        {
          count++
          self.weeks[count] = []
        }
        date.setDate(date.getDate()+1)
      }
      self.addEventsToCal()
    },

    addEventsToCal: function(){
      var self = this
      var calendar = self.weeks
      calendar.forEach(function(week) {
        week.forEach(function(day){
          if (day[0]){
            self.eventsMonth.forEach(function(event)
            {
              var x = new Date(event.time_start)
              if(x.getMonth() == self.currentMonth){
                if (event.id_room == self.selRoom.id)
                {
                  var dateEvStart = new Date(event.time_start)
                  var dateEvEnd = new Date(event.time_end)
                  var date = new Date(self.currentYear, self.currentMonth+1, day[0])
                  if (dateEvStart.getDate() === day[0])
                  {
                    var str = ''
                    var start = dateEvStart.getHours()
                    var end = dateEvEnd.getHours()
                    if (dateEvStart.getMinutes() == 0)
                    {
                      start +=':' + dateEvStart.getMinutes() + '0-'
                    }
                    else{
                      start +=':' + dateEvStart.getMinutes() + '-'
                    }
                    if (dateEvEnd.getMinutes() == 0)
                    {
                      end += ':' + dateEvEnd.getMinutes() + '0'
                    }
                    else{
                      end += ':' + dateEvEnd.getMinutes() 
                    }
                    str = start + end
                    event.timeString = str
                    if (day.length == 1)
                    {
                      day.push([event])
                    }
                    else{
                      day[1].push(event)
                    }
                  }
                }
              }
            })
          }
        })
      });
    },
    getNumDay: function(date){
      var self = this
      var numDay = date.getDay()
      if (self.weekDays == 'mon')
      {
        if (numDay == 0)
        {
          numDay = 7
        }
        return numDay - 1
      }
      if (self.weekDays == 'ru')
      {
        if (numDay == 0)
        {
          numDay = 7
        }
        return numDay - 1
      }
      else
      {
        return numDay
      }
    },
    plusMonth: function(){
      var self = this
      self.currentMonth += 1
      if (self.currentMonth > 11)
      {
        self.currentMonth = 0
        self.currentYear += 1
      }
      self.getArrayCalendar()  
    },
    minusMonth: function(){
      var self = this
      self.currentMonth -= 1
      if (self.currentMonth < 0){
        self.currentMonth = 11
        self.currentYear -= 1
      }
      self.getArrayCalendar()
    },

     logoutFun: function(){
      var self = this
      delete localStorage['user'] 
      delete localStorage['room']
       self.checkUser = ''
       self.$router.push("/");
    },

    checkUserFun: function(){
      var self = this
      if (localStorage['user'])
      {    
        self.user = JSON.parse(localStorage['user'])
      // axios.get('http://192.168.0.15/~user2/Booker/client/api/users/' + self.user.id)
        axios.get('http://BoardroomBooker/user2/Booker/client/api/users/' + self.user.id)
        .then(function (response) {
          if (self.user.hash === response.data[0].hash)
          {
            
            if(response.data[0].role == "admin")
            {
              self.checkUser = 2;
              self.role = response.data[0].role
              self.uservar = response.data[0].login
              
              return true
            }
            if(response.data[0].role == "user")
            {
              self.checkUser = 1;
              self.role = response.data[0].role
              self.uservar = response.data[0].login
              return true
            }
          }
          else
          {
            self.checkUser = ''
            delete localStorage['user']
            self.$router.push('/')
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

    getNameMonth:function(str){
      if (str == 'en')
      {
        return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
         'October', 'November', 'December']
      }
      else if (str == 'ru')
      {
        return ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
        'Октябрь', 'Ноябрь', 'Декабрь']
      }
    },
    
    getWeekDays:function(str){
      if (str == 'sun')
      {
        return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      }
      else if (str == 'mon')
      {
        return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
      }
      else if (str == 'ru')
      {
        return ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
      }
    },
   
    },
    computed: {
      getDays(){
        var self = this
        return self.getWeekDays('sun')
      },
      getMonth(){
        var self = this
        return self.getNameMonth('en')
      },
      currentDay(){
        var self = this
        if (self.date.getMonth() == self.currentMonth && self.date.getFullYear() == self.currentYear)
        {
          return self.date.getDate()
        }
        else
        {
          return false
        }
      }
   }, 

  created(){
    var self = this
    this.checkUserFun()
    this.getAllEvents()
    this.getMonthYear()
    this.getRooms()
  },
    components: {
      'window': Modalwindow
  }
};
</script>

<style scoped>
.main{
   background-image: url('/static/img/mix.jpg');
   background-attachment: fixed;
   background-repeat: no-repeat;
   background-size:cover; 
}
.heads
{
  background: red;
}
.roomSel
{
   color:#00FFFF;
    font-size: 20px;
}
.roomSelIn
{
   color:slateblue;
    font-size: 20px;
}
.hello
{
  color:sienna;
  font-size: 20px;
}
.leftCursor
{
  padding-right: 20px;
  cursor: pointer;
}
.rightCursor
{
  padding-left: 20px;
   cursor: pointer;
}
.solo
{
  padding-right: 230px;
}
.shadow {
  padding: 0;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
}
.date{
  background-color: pink;
  color: #b12d1f;
  font-weight: bold;
}
.title{
  text-align: center;
  color: darkblue;
  font-size: 17px;
  font-weight: bold;
  background-color: #3CB371;
  padding-top: 10px;
  width: 500px;
}
table{
  width: 1500px;
}
table tr{
    background:#8FBC8F;
}
table th{
    background: #3CB371;
   
}
.title p{ 
  display: inline-table;
}
.day{
  cursor: pointer;
  width: 122.61px;
  height: 118.33px;
}
.events{
  text-align: center;
  color: black;
  font-weight: normal; 
  margin: 0;
}
.events button{
  padding: 0;
}
.link
{
  font-size:15px;
}
.linkDiv
{
  position: absolute;
  left: 1600px;
  top:210px;
}
</style>