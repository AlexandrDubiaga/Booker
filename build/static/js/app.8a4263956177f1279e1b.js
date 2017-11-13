webpackJsonp([1],{

/***/ "2kvK":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "75+T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'EmployeeAdd',
  data() {
    return {
      users: [],
      success: '',
      errorMsg: '',
      config: {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      },
      employee: ''
    };
  },
  methods: {
    getAllUsers: function () {
      var self = this;
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('http://192.168.0.15/~user2/Booker/client/api/employees/', self.config)
      //axios.get('http://BoardroomBooker/user2/Booker/client/api/employees/', self.config)
      .then(function (response) {
        if (response.status == 200) {
          self.users = response.data;
        } else {
          self.errors = response.data;
        }
      }).catch(function (error) {
        console.log(error);
      });
    },

    deleteEmployeeById: function ($id) {
      var self = this;
      //axios.delete('http://BoardroomBooker/user2/Booker/client/api/users/' + $id)
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.delete('http://192.168.0.15/~user2/Booker/client/api/users/' + $id).then(function (response) {
        if (response.data === 1) {
          self.success = 'Employee deleted';
        } else {
          self.errorMsg = 'error';
        }
      });
    },

    computed: {
      //empty
    },

    checkUserFun: function () {
      var self = this;
      if (localStorage['user']) {
        self.user = JSON.parse(localStorage['user']);
        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('http://192.168.0.15/~user2/Booker/client/api/users/' + self.user.id)
        //axios.get('http://BoardroomBooker/user2/Booker/client/api/users/' + self.user.id)
        .then(function (response) {
          if (self.user.hash === response.data[0].hash) {
            self.checkUser = 1;
            self.role = response.data[0].role;
            return true;
          }
        }).catch(function (error) {
          console.log(error);
        });
      } else {
        self.checkUser = '';
        delete localStorage['user'];
        self.$router.push('/');
        return false;
      }
    },
    checkUser: function () {
      var self = this;
      if (localStorage['user']) {
        self.$router.push('/EmployeesForm');
      } else {
        self.$router.push('/');
      }
    },

    saveDataUsers: function (index) {
      var self = this;
      var data = {};
      data = self.users[index];
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.put('http://192.168.0.15/~user2/Booker/client/api/employees/', data, self.config)
      //axios.put('http://BoardroomBooker/user2/Booker/client/api/employees/', data, self.config)
      .then(function (response) {
        if (response.data === 1) {
          self.success = 'Employee update';
        } else {
          self.errorMsg = 'error';
        }
      }).catch(function (error) {
        console.log(error);
      });
    }
  },

  created() {
    this.getAllUsers();
    this.checkUserFun();
  }
});

/***/ }),

/***/ "D6cc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"modal"}},[_c('div',{staticClass:"modal-mask"},[_c('div',{staticClass:"modal-wrapper"},[_c('div',{staticClass:"modal-container"},[_c('div',{staticClass:"btnclose"},[_c('button',{staticClass:"btn  btn-info",attrs:{"type":"button"},on:{"click":function($event){_vm.$emit('close')}}},[_vm._v("close")])]),_vm._v(" "),_c('h6',[_vm._v("B.B. DETAILS")]),_vm._v(" "),(_vm.success != '')?_c('p',{staticClass:"alert-danger",staticStyle:{"text-align":"center"}},[_vm._v(_vm._s(_vm.success))]):_vm._e(),_vm._v(" "),_c('table',{staticClass:"table table-bordered"},[_c('tbody',[_c('tr',[(_vm.access == '2')?_c('th',[_vm._v("Time")]):((_vm.access == '1' && _vm.user.id == _vm.currentEventIdUser))?_c('th',[_vm._v("Time")]):_c('th',[_vm._v("Time")]),_vm._v(" "),(_vm.access == '2')?_c('td',[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.StartHour),expression:"StartHour"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.StartHour=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((12),function(StartHour){return _c('option',{domProps:{"value":StartHour}},[_vm._v(_vm._s(StartHour))])})),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.StartMinutes),expression:"StartMinutes"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.StartMinutes=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((3),function(StartMinutes){return _c('option',{domProps:{"value":StartMinutes * 15}},[_vm._v(_vm._s(StartMinutes * 15))])})),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.EndHour),expression:"EndHour"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.EndHour=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((24),function(EndHour){return _c('option',{domProps:{"value":EndHour}},[_vm._v(_vm._s(EndHour))])})),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.EndMinutes),expression:"EndMinutes"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.EndMinutes=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((3),function(EndMinutes){return _c('option',{domProps:{"value":EndMinutes * 15}},[_vm._v(_vm._s(EndMinutes * 15))])}))]):((_vm.access == '1' && _vm.user.id == _vm.currentEventIdUser))?_c('td',[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.StartHour),expression:"StartHour"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.StartHour=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((12),function(StartHour){return _c('option',{domProps:{"value":StartHour}},[_vm._v(_vm._s(StartHour))])})),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.StartMinutes),expression:"StartMinutes"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.StartMinutes=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((3),function(StartMinutes){return _c('option',{domProps:{"value":StartMinutes * 15}},[_vm._v(_vm._s(StartMinutes * 15))])})),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.EndHour),expression:"EndHour"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.EndHour=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((24),function(EndHour){return _c('option',{domProps:{"value":EndHour}},[_vm._v(_vm._s(EndHour))])})),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.EndMinutes),expression:"EndMinutes"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.EndMinutes=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((3),function(EndMinutes){return _c('option',{domProps:{"value":EndMinutes * 15}},[_vm._v(_vm._s(EndMinutes * 15))])}))]):_c('td',[_vm._v(_vm._s(_vm.timeStart))])]),_c('tr',[_c('th',[_vm._v("notes:")]),_vm._v(" "),(_vm.access == '2')?_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.vModelForDescription),expression:"vModelForDescription"}],attrs:{"type":"text"},domProps:{"value":_vm.currentEvent.description,"value":(_vm.vModelForDescription)},on:{"input":function($event){if($event.target.composing){ return; }_vm.vModelForDescription=$event.target.value}}})]):((_vm.access == '1' && _vm.user.id == _vm.currentEventIdUser))?_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.vModelForDescription),expression:"vModelForDescription"}],attrs:{"type":"text"},domProps:{"value":_vm.currentEvent.description,"value":(_vm.vModelForDescription)},on:{"input":function($event){if($event.target.composing){ return; }_vm.vModelForDescription=$event.target.value}}})]):_c('td',[_vm._v(_vm._s(_vm.currentEvent.description))])]),_vm._v(" "),_c('tr',[_c('th',[_vm._v("who:")]),_vm._v(" "),(_vm.access == '2')?_c('td',[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.currenForUsersVmodel),expression:"currenForUsersVmodel"}],staticClass:"selUser",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.currenForUsersVmodel=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((_vm.rolesArray),function(userRole){return _c('option',{domProps:{"value":userRole.id}},[_vm._v(_vm._s(userRole.login))])}))]):((_vm.access == '1'))?_c('td',[_vm._v("Only for admin")]):_vm._e()]),_vm._v(" "),_c('tr',[_c('td',{attrs:{"colspan":"2"}},[_vm._v("Submitted: "+_vm._s(_vm.curentCreateTime))])])])]),_vm._v(" "),(_vm.success != 'success')?_c('div',[(_vm.access == '2')?_c('div',[_c('button',{staticClass:"btn btn-secondary",on:{"click":function($event){_vm.updateEvent()}}},[_vm._v("Update")]),_vm._v(" "),_c('button',{staticClass:"btn btn-secondary",on:{"click":function($event){_vm.deleteEvent(_vm.currentEventId)}}},[_vm._v("Delete")])]):_vm._e(),_vm._v(" "),((_vm.access == '1' && _vm.user.id == _vm.currentEventIdUser))?_c('div',[_c('button',{staticClass:"btn btn-secondary",on:{"click":function($event){_vm.updateEvent()}}},[_vm._v("Update")]),_vm._v(" "),_c('button',{staticClass:"btn btn-secondary",on:{"click":function($event){_vm.deleteEvent(_vm.currentEventId)}}},[_vm._v("Delete")])]):_vm._e()]):_vm._e()])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "Dd1R":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_window_vue__ = __webpack_require__("JSsc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7f6e5861_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_window_vue__ = __webpack_require__("D6cc");
function injectStyle (ssrContext) {
  __webpack_require__("UAWx")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7f6e5861"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_window_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7f6e5861_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_window_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Gvm3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_EmployeesForm_vue__ = __webpack_require__("tw02");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_039aa3e8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_EmployeesForm_vue__ = __webpack_require__("Ttyk");
function injectStyle (ssrContext) {
  __webpack_require__("PjHm")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-039aa3e8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_EmployeesForm_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_039aa3e8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_EmployeesForm_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Iovp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      user: [],
      success: '',
      checkUser: 0,
      room: '',
      role: '',
      boardroom: '',
      users: [],
      yearsArr: ['2017', '2018', '2019'],
      monthArr: ["January", "February", "March", "April", "May", "June", "Julay", "August", "September", "October", "November", "December"],
      days: [],
      OneUser: [],
      month: 0,
      year: 0,
      day: 0,
      timeStartHour: 1,
      timeEndHour: 1,
      timeStartMin: 0,
      timeEndMin: 0,
      timeStartMidnight: 0,
      timeEndMidnight: 0,
      recurring: false,
      recurringType: 1,
      recurringDuration: '',
      desc: '',
      duration: ''
    };
  },
  watch: {
    chooseUserId: function () {
      var self = this;
    },
    month(newMonth) {
      this.dateFixed(newMonth);
    }
  },

  methods: {
    dateFixed(month = false) {
      var actuallDate = new Date();
      if (month) {
        var mon = month + 1;
      } else {
        var mon = actuallDate.getMonth() + 1;
      }
      this.days = [];
      var col = new Date(actuallDate.getFullYear(), mon, 0).getDate();
      for (var i = 1; i <= col; i++) {
        this.days.push(i);
      }
    },

    getAllUsers: function () {
      var self = this;
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('http://192.168.0.15/~user2/Booker/client/api/employees/', self.config)
      //axios.get('http://BoardroomBooker/user2/Booker/client/api/employees/', self.config)
      .then(function (response) {
        if (response.status == 200) {
          self.users = response.data;
          self.chooseUserId = self.users[0].id;
        } else {
          self.errors = response.data;
        }
      }).catch(function (error) {
        console.log(error);
      });
    },

    getOneUser: function ($id) {
      var self = this;
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('http://192.168.0.15/~user2/Booker/client/api/users/' + $id, self.config)
      // axios.get('http://BoardroomBooker/user2/Booker/client/api/users/' + $id, self.config)
      .then(function (response) {
        //console.log(response)
        if (response.status == 200) {
          self.OneUser = response.data;
          self.chooseUserId = self.OneUser[0].id;
        } else {
          self.errors = response.data;
        }
      }).catch(function (error) {
        console.log(error);
      });
    },

    checkUserFun: function () {
      var self = this;
      if (localStorage['user']) {
        self.user = JSON.parse(localStorage['user']);
        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('http://192.168.0.15/~user2/Booker/client/api/users/' + self.user.id)
        //axios.get('http://BoardroomBooker/user2/Booker/client/api/users/' + self.user.id)
        .then(function (response) {
          if (self.user.hash === response.data[0].hash) {
            self.checkUser = 1;
            self.role = response.data[0].role;
            return true;
          } else {
            self.checkUser = '';
            delete localStorage['user'];
          }
        }).catch(function (error) {
          console.log(error);
        });
      } else {
        self.checkUser = '';
        return false;
      }
    },

    getBoadRoomById: function (id) {
      var self = this;
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('http://192.168.0.15/~user2/Booker/client/api/rooms/' + id)
      // axios.get('http://BoardroomBooker/user2/Booker/client/api/rooms/'+ id)
      .then(function (response) {
        if (response.status == 200) {
          self.boardroom = response.data;
        } else {
          self.errors = response.data;
        }
      }).catch(function (error) {
        console.log(error);
      });
    },

    addEvent: function () {
      var self = this;
      var currentData = new Date();
      if (self.timeStartMidnight == '1') {
        self.timeStartHour += 12;
      }
      if (self.timeEndMidnight == '1') {
        self.timeEndHour += 12;
      }
      var timeNow = (Date.now() / 1000).toFixed();
      var eventStart = new Date(self.yearsArr[self.year], self.month, self.days[self.day], self.timeStartHour, self.timeStartMin);
      var eventEnd = new Date(self.yearsArr[self.year], self.month, self.days[self.day], self.timeEndHour, self.timeEndMin);
      var data = new URLSearchParams();
      data.append('id_room', self.boardroom[0].id);
      data.append('id_user', self.chooseUserId);
      data.append('description', self.desc);
      data.append('time_start', eventStart.getTime() / 1000);
      data.append('time_end', eventEnd.getTime() / 1000);
      data.append('create_time', timeNow);
      if (self.recurring) {
        data.append('recurningType', self.recurringType);
        data.append('id_parent', self.recurringDuration);
      }
      //axios.post('http://BoardroomBooker/user2/Booker/client/api/events/', data, self.config)
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('http://192.168.0.15/~user2/Booker/client/api/events/', data, self.config).then(function (response) {
        if (response.data === 1) {
          self.success = 'Data added';
        } else {
          self.errorMsg = response.data;
        }
      }).catch(function (error) {
        console.log(error);
      });
    }
  },

  created() {
    var self = this;
    this.checkUserFun();
    this.getBoadRoomById(this.$route.params.id);
    this.getAllUsers();
    this.getOneUser(self.user.id);
  }
});

/***/ }),

/***/ "JSsc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'HelloWorld',
  props: ['sentEvent', 'timeFormat'],
  data() {
    return {
      msg: '',
      role: '',
      errorMsg: '',
      success: '',
      access: '',
      currentEvent: {},
      user: {},
      rolesArray: [],
      nameUserFromCurrentEvent: '',
      currentDescription: '',
      curentIdUserInCurrentEvent: '',
      curentCreateTime: '',
      StartHour: '',
      StartMinutes: '',
      EndHour: '',
      EndMinutes: '',
      startDate: '',
      endDate: '',
      FullDateStart: '',
      success: '',
      oneUserInModal: '',

      config: {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    };
  },

  methods: {
    setProporties: function () {
      var self = this;
      self.currentEvent = self.sentEvent;
      self.currentEventId = self.currentEvent.id;
      self.currentEventIdUser = self.currentEvent.id_user;
      self.roomIdCurrentEvent = self.currentEvent.id_room;
      self.vModelForDescription = self.currentEvent.description;
      self.curentIdUserInCurrentEvent = self.rolesArray.id;
      self.curentCreateTime = self.currentEvent.create_time;
      self.currenForUsersVmodel = self.finalUserOne;
      self.timeStart = self.currentEvent.time_start;
      self.timeEnd = self.currentEvent.time_end;

      self.startTime = new Date(self.timeStart);
      self.monthsStart = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
      self.yearStart = self.startTime.getFullYear();
      self.monthStart = self.monthsStart[self.startTime.getMonth()];
      self.dateStart = self.startTime.getDate();
      self.StartHour = self.startTime.getHours();
      self.StartMinutes = self.startTime.getMinutes();

      self.endTime = new Date(self.timeEnd);
      self.EndHour = self.endTime.getHours();
      self.EndMinutes = self.endTime.getMinutes();
    },

    getAllUsers: function () {
      var self = this;
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('http://192.168.0.15/~user2/Booker/client/api/employees/', self.config)
      //axios.get('http://BoardroomBooker/user2/Booker/client/api/employees/', self.config)
      .then(function (response) {
        if (response.status == 200) {
          self.rolesArray = response.data;
        } else {
          self.errors = response.data;
        }
      }).catch(function (error) {
        console.log(error);
      });
    },

    getAdmins: function ($id) {
      var self = this;
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('http://192.168.0.15/~user2/Booker/client/api/modalemployee/' + $id)
      //axios.get('http://BoardroomBooker/user2/Booker/client/api/modalemployee/' + $id)
      .then(function (response) {
        if (response.status == 200) {
          self.oneUserInModal = response.data;
          self.finalUserOne = self.oneUserInModal[0].id;
        } else {
          self.errors = response.data;
        }
      }).catch(function (error) {
        console.log(error);
      });
    },

    checkUserFun: function () {
      var self = this;
      if (localStorage['user']) {
        self.user = JSON.parse(localStorage['user']);
        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('http://192.168.0.15/~user2/Booker/client/api/users/' + self.user.id)
        //axios.get('http://BoardroomBooker/user2/Booker/client/api/users/' + self.user.id)
        .then(function (response) {
          if (self.user.hash === response.data[0].hash) {
            self.role = response.data[0].role;
            self.checkUserRole();
            self.setProporties();

            return true;
          }
        }).catch(function (error) {
          console.log(error);
        });
      } else {
        self.checkUser = '';
        delete localStorage['user'];
        self.$router.push('/');
        return false;
      }
    },

    checkUserRole: function () {
      var self = this;
      if (self.role == 'admin') {
        self.access = '2';
      } else {
        self.access = '1';
      }
    },

    updateEvent: function () {
      var self = this;
      self.error = '';
      var data = {};

      self.timeStart = self.yearStart + '-' + self.monthStart + '-' + self.dateStart + ' ' + self.StartHour + ':' + self.StartMinutes + ':' + '00';
      self.timeEnd = self.yearStart + '-' + self.monthStart + '-' + self.dateStart + ' ' + self.EndHour + ':' + self.EndMinutes + ':' + '00';
      data.id = self.currentEventId;
      if (self.access == 1) {
        data.id_user = self.user.id;
      } else {
        data.id_user = self.currenForUsersVmodel;
      }
      data.id_room = self.roomIdCurrentEvent;
      data.description = self.vModelForDescription;
      data.time_start = self.timeStart;
      data.time_end = self.timeEnd;
      data.create_time = (Date.now() / 1000).toFixed();

      //axios.put('http://BoardroomBooker/user2/Booker/client/api/events/', data, self.config)
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.put('http://192.168.0.15/~user2/Booker/client/api/events/', data, self.config).then(function (response) {
        console.log(response);
        if (response) {
          self.success = 'Update success';
          //self.$emit('refresh',response)
        } else {
          self.error = 'Error update!';
        }
      });
    },

    deleteEvent: function ($id) {
      var self = this;
      //axios.delete('http://BoardroomBooker/user2/Booker/client/api/events/' + $id)
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.delete('http://192.168.0.15/~user2/Booker/client/api/events/' + $id).then(function (response) {
        if (response.data) {
          self.success = 'Event deleted';
          self.$emit('refresh');
        } else {
          self.errorMsg = 'error';
        }
      });
    }
  },

  created() {
    var self = this;
    this.getAdmins(self.sentEvent.id);
    this.checkUserFun();
    this.getAllUsers();
  }
});

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ee58cd4e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("YmZc");
function injectStyle (ssrContext) {
  __webpack_require__("QqqF")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ee58cd4e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__("YaEn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_axios__ = __webpack_require__("Rf8U");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue_axios__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_4_vue_axios___default.a, __WEBPACK_IMPORTED_MODULE_3_axios___default.a);

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
});

/***/ }),

/***/ "NPDU":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "PjHm":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "PxQM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.checkUser>0)?_c('div',{staticClass:"main container-fluid"},[(_vm.showModal)?_c('window',{attrs:{"sentEvent":_vm.sentEvent},on:{"close":function($event){_vm.showModal = false}}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"row"},[_c('p',{staticClass:"rooms"},[_vm._l((_vm.rooms),function(room,index){return _c('button',{staticClass:"btn btn-light",on:{"click":function($event){ _vm.getAppointmentByIdUserBoardroomId(index)}}},[_vm._v(_vm._s(room.name))])}),_vm._v(" "),_c('router-link',{attrs:{"to":{name:'AddAppointment',params:{id:_vm.selRoom.id}}}},[_c('button',{staticClass:"btn btn-success"},[_vm._v("Book it")])]),_vm._v(" "),_c('router-link',{attrs:{"to":"/EmployeeAdd"}},[(_vm.checkUser == 2)?_c('button',{staticClass:"btn btn-success"},[_vm._v("Employee List")]):_vm._e()]),_vm._v(" "),_c('button',{staticClass:"btn btn-primary exit",attrs:{"type":"submit"},on:{"click":function($event){_vm.logoutFun()}}},[_vm._v("Exit")])],2),_c('p',[_c('span',{staticClass:"hello"},[_vm._v(_vm._s("Hello,"+_vm.uservar))])]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',{staticClass:"roomSel"},[_vm._v("\n      Room is: "),_c('strong',{staticClass:"roomSelIn"},[_vm._v(_vm._s(_vm.fix))])])]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"title"},[_c('p',{staticClass:"leftCursor",on:{"click":function($event){_vm.minusMonth()}}},[_c('button',{staticClass:"btn btn-primary"},[_vm._v("<<")])]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.getMonth[_vm.currentMonth])+" "+_vm._s(_vm.currentYear))]),_vm._v(" "),_c('p',{staticClass:"rightCursor",on:{"click":function($event){_vm.plusMonth()}}},[_c('button',{staticClass:"btn btn-primary"},[_vm._v(">>")])])]),_vm._v(" "),_c('table',{staticClass:"table table-bordered"},[_c('thead',[_c('tr',{staticClass:"heads"},_vm._l((_vm.getDays),function(wday){return _c('th',[_vm._v(_vm._s(wday))])}))]),_vm._v(" "),_c('tbody',_vm._l((_vm.weeks),function(week){return _c('tr',_vm._l((week),function(day){return _c('td',{staticClass:"day",class:{date: day[0] == _vm.currentDay}},[_vm._v(_vm._s(day[0])+"\n          "),_vm._l((day[1]),function(event){return (day.length > 1)?_c('p',{staticClass:"events"},[_c('button',{staticClass:"btn btn-link",on:{"click":function($event){_vm.showEvent(event)}}},[_vm._v(_vm._s(event.timeString))])]):_vm._e()})],2)}))}))])],1):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-5  solo"},[_c('h1',[_vm._v("Boardroom Booker")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "QqqF":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "RAcb":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Ttyk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"regForm"},[_c('p',{staticClass:"alert-warning"},[_vm._v(_vm._s(_vm.errorMsg))]),_vm._v(" "),(_vm.success !== 'success')?_c('div',[_c('fieldset',[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"control-group"},[_c('label',{staticClass:"control-label",attrs:{"for":"login"}},[_vm._v("login")]),_vm._v(" "),_c('div',{staticClass:"controls"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.login),expression:"login"}],attrs:{"type":"text","id":"login","name":"login","placeholder":""},domProps:{"value":(_vm.login)},on:{"input":function($event){if($event.target.composing){ return; }_vm.login=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"control-group"},[_c('label',{staticClass:"control-label",attrs:{"for":"email"}},[_vm._v("Email")]),_vm._v(" "),_c('div',{staticClass:"controls"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.email),expression:"email"}],attrs:{"type":"email","id":"email","name":"email","placeholder":""},domProps:{"value":(_vm.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.email=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"control-group"},[_c('label',{staticClass:"control-label",attrs:{"for":"password"}},[_vm._v("password")]),_vm._v(" "),_c('div',{staticClass:"controls"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.pass),expression:"pass"}],attrs:{"type":"password","id":"password","name":"password","placeholder":""},domProps:{"value":(_vm.pass)},on:{"input":function($event){if($event.target.composing){ return; }_vm.pass=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"control-group"},[_c('label',{staticClass:"control-label",attrs:{"for":"password"}},[_vm._v("password confirm")]),_vm._v(" "),_c('div',{staticClass:"controls"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.passConfirm),expression:"passConfirm"}],attrs:{"type":"password","id":"password","name":"password","placeholder":""},domProps:{"value":(_vm.passConfirm)},on:{"input":function($event){if($event.target.composing){ return; }_vm.passConfirm=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"control-group"},[_c('div',{staticClass:"controls"},[_c('button',{staticClass:"btn  btn-success",on:{"click":function($event){_vm.registration()}}},[_vm._v("Add Employee")]),_vm._v(" "),_c('router-link',{staticClass:"link",attrs:{"to":"/EmployeeAdd"}},[_c('button',{staticClass:"btn btn-success"},[_vm._v("Back")])])],1)])])]):_c('div',{staticClass:"success"},[_c('h2',[_vm._v("Thank you "),_c('strong',[_vm._v(_vm._s(_vm.fullName))]),_vm._v(", ")]),_vm._v(" "),_c('router-link',{staticClass:"link",attrs:{"to":"/EmployeeAdd"}},[_vm._v("Back to employees list")])],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"legend"}},[_c('legend',{staticClass:"title"},[_vm._v("Add new Employees")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "UAWx":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Uhku":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      login: '',
      pass: '',
      checkUser: '',
      errorMsg: '',
      user: {
        id: '',
        hash: '',
        firstName: ''
      },
      role: '',
      config: {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    };
  },
  methods: {
    getCheck: function () {
      var self = this;
      if (localStorage['id'] && localStorage['hash']) {
        self.checkUser = 1;
      } else {
        self.checkUser = '';
      }
    },
    loginFun: function () {
      var self = this;
      self.errorMsg = '';
      if (self.login && self.pass) {
        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.put('http://192.168.0.15/~user2/Booker/client/api/users/', {
          //axios.put('http://BoardroomBooker/user2/Booker/client/api/users/', {
          login: self.login,
          pass: self.pass
        }, self.config).then(function (response) {
          if (response.data.id && response.data.hash) {
            self.user.id = response.data.id;
            self.user.hash = response.data.hash;
            self.user.firstName = response.data.login;
            self.role = response.data.role;
            localStorage['user'] = JSON.stringify(self.user);
            self.checkUserFun();
            self.getCheck();
            if (response.data.role) {
              self.$router.push("/calendar");
            } else {
              self.$router.push("/");
            }
            return true;
          } else {

            self.errorMsg = 'Wrong password or login';
          }
        }).catch(function (error) {
          console.log(error);
        });
      } else {
        self.errorMsg = 'Enter data in all fields!';
      }
    },
    checkUserFun: function () {
      var self = this;
      if (localStorage['user']) {
        self.user = JSON.parse(localStorage['user']);
        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('http://192.168.0.15/~user2/Booker/client/api/users/' + self.user.id)
        //axios.get('http://BoardroomBooker/user2/Booker/client/api/users/' + self.user.id)
        .then(function (response) {
          if (self.user.hash === response.data[0].hash) {
            self.checkUser = 1;
            self.role = response.data[0].role;
            return true;
          } else {
            self.checkUser = '';
            delete localStorage['user'];
          }
        }).catch(function (error) {
          console.log(error);
        });
      } else {
        self.checkUser = '';
        return false;
      }
    }
  },
  created() {
    this.checkUserFun();
    this.deleteEmployeeById();
    this.putEmployeeById();
  }
});

/***/ }),

/***/ "YT0m":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__window__ = __webpack_require__("Dd1R");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: "Calendar",
  data() {
    return {
      id: '',
      uservar: '',
      checkUser: 0,
      dataInCalendar: '',
      rooms: [],
      timeData: {},
      selRoom: 1,
      fix: {},
      counter: 2,
      typeC: '',
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
    showEvent: function (event) {
      var self = this;
      self.showModal = true;
      self.sentEvent = event;
    },

    getRooms: function () {
      var self = this;
      //axios.get('http://BoardroomBooker/user2/Booker/client/api/rooms/')
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('http://192.168.0.15/~user2/Booker/client/api/rooms/').then(function (response) {
        self.rooms = response.data;
        if (!localStorage['room']) {
          self.selRoom = self.rooms[0];
          self.fix = self.selRoom.name;
          localStorage['room'] = JSON.stringify(self.fix);
        } else {
          self.selRoom = localStorage['room'];
          self.fix = JSON.parse(localStorage['room']);
        }
      }).catch(function (error) {
        console.log(error);
      });
    },

    getAllEvents: function () {
      var self = this;
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('http://192.168.0.15/~user2/Booker/client/api/events/' + 1)
      //axios.get('http://BoardroomBooker/user2/Booker/client/api/events/')
      .then(function (response) {
        //console.log(response)
        self.eventsMonth = response.data;
        self.getArrayCalendar();
      }).catch(function (error) {
        console.log(error);
      });
    },

    getAppointmentByIdUserBoardroomId: function (index) {
      var self = this;
      self.selRoom = self.rooms[index];
      self.fix = self.selRoom.name;
      localStorage['room'] = JSON.stringify(self.fix);
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('http://192.168.0.15/~user2/Booker/client/api/events/' + self.selRoom.id)
      //axios.get('http://BoardroomBooker/user2/Booker/client/api/events/' +  self.selRoom.id )
      .then(function (response) {
        //console.log(response)
        self.eventsMonth = response.data;
        self.getArrayCalendar();
      }).catch(function (error) {
        console.log(error);
      });
    },

    getMonthYear: function () {
      var self = this;

      self.currentMonth = self.date.getMonth();
      self.currentYear = self.date.getFullYear();
    },

    getArrayCalendar: function () {
      var self = this;
      self.weeks = [];
      var date = new Date(self.currentYear, self.currentMonth);
      self.weeks[0] = [];
      for (var i = 0; i < self.getNumDay(date); i++) {
        self.weeks[0].push([]);
      }
      var count = 0;
      while (date.getMonth() == self.currentMonth) {
        self.weeks[count].push([date.getDate()]);
        if (self.getNumDay(date) % 7 == 6) {
          count++;
          self.weeks[count] = [];
        }
        date.setDate(date.getDate() + 1);
      }
      self.addEventsToCal();
    },

    addEventsToCal: function () {
      var self = this;
      var calendar = self.weeks;
      calendar.forEach(function (week) {
        week.forEach(function (day) {
          if (day[0]) {
            self.eventsMonth.forEach(function (event) {

              var x = new Date(event.time_start);
              if (x.getMonth() == self.currentMonth) {
                if (event.id_room == self.selRoom.id) {
                  //console.log(self.eventsMonth)
                  var dateEvStart = new Date(event.time_start);
                  var dateEvEnd = new Date(event.time_end);
                  var date = new Date(self.currentYear, self.currentMonth + 1, day[0]);
                  if (dateEvStart.getDate() === day[0]) {
                    var str = '';
                    var start = dateEvStart.getHours();
                    var end = dateEvEnd.getHours();
                    if (dateEvStart.getMinutes() == 0) {
                      start += ':' + dateEvStart.getMinutes() + '0-';
                    } else {
                      start += ':' + dateEvStart.getMinutes() + '-';
                    }
                    if (dateEvEnd.getMinutes() == 0) {
                      end += ':' + dateEvEnd.getMinutes() + '0';
                    } else {
                      end += ':' + dateEvEnd.getMinutes();
                    }
                    str = start + end;
                    event.timeString = str;
                    if (day.length == 1) {
                      day.push([event]);
                    } else {
                      day[1].push(event);
                    }
                  }
                } else if (event.id_room == 1) {
                  var dateEvStart = new Date(event.time_start);
                  var dateEvEnd = new Date(event.time_end);
                  var date = new Date(self.currentYear, self.currentMonth + 1, day[0]);
                  if (dateEvStart.getDate() === day[0]) {
                    var str = '';
                    var start = dateEvStart.getHours();
                    var end = dateEvEnd.getHours();
                    if (dateEvStart.getMinutes() == 0) {
                      start += ':' + dateEvStart.getMinutes() + '0-';
                    } else {
                      start += ':' + dateEvStart.getMinutes() + '-';
                    }
                    if (dateEvEnd.getMinutes() == 0) {
                      end += ':' + dateEvEnd.getMinutes() + '0';
                    } else {
                      end += ':' + dateEvEnd.getMinutes();
                    }
                    str = start + end;
                    event.timeString = str;
                    if (day.length == 1) {
                      day.push([event]);
                    } else {
                      day[1].push(event);
                    }
                  }
                }
              }
            });
          }
        });
      });
    },
    getNumDay: function (date) {
      var self = this;
      var numDay = date.getDay();
      if (self.weekDays == 'mon') {
        if (numDay == 0) {
          numDay = 7;
        }
        return numDay - 1;
      }
      if (self.weekDays == 'ru') {
        if (numDay == 0) {
          numDay = 7;
        }
        return numDay - 1;
      } else {
        return numDay;
      }
    },
    plusMonth: function () {
      var self = this;
      self.currentMonth += 1;
      if (self.currentMonth > 11) {
        self.currentMonth = 0;
        self.currentYear += 1;
      }
      self.getArrayCalendar();
    },
    minusMonth: function () {
      var self = this;
      self.currentMonth -= 1;
      if (self.currentMonth < 0) {
        self.currentMonth = 11;
        self.currentYear -= 1;
      }
      self.getArrayCalendar();
    },

    logoutFun: function () {
      var self = this;
      delete localStorage['user'];
      delete localStorage['room'];
      self.checkUser = '';
      self.$router.push("/");
    },

    checkUserFun: function () {
      var self = this;
      if (localStorage['user']) {
        self.user = JSON.parse(localStorage['user']);
        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('http://192.168.0.15/~user2/Booker/client/api/users/' + self.user.id)
        //axios.get('http://BoardroomBooker/user2/Booker/client/api/users/' + self.user.id)
        .then(function (response) {
          if (self.user.hash === response.data[0].hash) {

            if (response.data[0].role == "admin") {
              self.checkUser = 2;
              self.role = response.data[0].role;
              self.uservar = response.data[0].login;

              return true;
            }
            if (response.data[0].role == "user") {
              self.checkUser = 1;
              self.role = response.data[0].role;
              self.uservar = response.data[0].login;
              return true;
            }
          } else {
            self.checkUser = '';
            delete localStorage['user'];
            self.$router.push('/');
          }
        }).catch(function (error) {
          console.log(error);
        });
      } else {
        self.checkUser = '';
        return false;
      }
    },

    getNameMonth: function (str) {
      if (str == 'en') {
        return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      } else if (str == 'ru') {
        return ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
      }
    },

    getWeekDays: function (str) {
      if (str == 'sun') {
        return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      } else if (str == 'mon') {
        return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      } else if (str == 'ru') {
        return ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
      }
    }

  },
  computed: {
    getDays() {
      var self = this;
      return self.getWeekDays('sun');
    },
    getMonth() {
      var self = this;
      return self.getNameMonth('en');
    },
    currentDay() {
      var self = this;
      if (self.date.getMonth() == self.currentMonth && self.date.getFullYear() == self.currentYear) {
        return self.date.getDate();
      } else {
        return false;
      }
    }
  },

  created() {
    var self = this;
    this.checkUserFun();
    this.getArrayCalendar();
    this.getAllEvents();
    this.getMonthYear();
    this.getRooms();
  },
  components: {
    'window': __WEBPACK_IMPORTED_MODULE_1__window__["a" /* default */]
  }
});

/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Main__ = __webpack_require__("s6+2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_axios__ = __webpack_require__("Rf8U");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Calendar__ = __webpack_require__("iyFI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_EmployeesForm__ = __webpack_require__("Gvm3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_EmployeeAdd__ = __webpack_require__("rEml");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_AddAppointment__ = __webpack_require__("lIPO");










__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_4_vue_axios___default.a, __WEBPACK_IMPORTED_MODULE_3_axios___default.a);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'Main',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Main__["a" /* default */]
  }, {
    path: '/calendar',
    name: 'Calendar',
    component: __WEBPACK_IMPORTED_MODULE_5__components_Calendar__["a" /* default */]
  }, {
    path: '/employeesForm',
    name: 'EmployeesForm',
    component: __WEBPACK_IMPORTED_MODULE_6__components_EmployeesForm__["a" /* default */]
  }, {
    path: '/employeeAdd',
    name: 'EmployeeAdd',
    component: __WEBPACK_IMPORTED_MODULE_7__components_EmployeeAdd__["a" /* default */]
  }, {
    path: '/addAppointment/:id',
    name: 'AddAppointment',
    component: __WEBPACK_IMPORTED_MODULE_8__components_AddAppointment__["a" /* default */]
  }]
}));

/***/ }),

/***/ "YmZc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "Z1k7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.checkUser >0)?_c('div',{staticClass:"main"},[(_vm.success !== '')?_c('div',{staticClass:"alert alert-danger"},[_vm._v("\n    "+_vm._s(_vm.success)+"\n  ")]):_vm._e(),_vm._v(" "),_c('div',_vm._l((_vm.boardroom),function(s){return _c('p',[_vm._v("1. Booked for:  "+_vm._s(s.name))])})),_vm._v(" "),(_vm.role=='admin')?_c('div',[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.chooseUserId),expression:"chooseUserId"}],staticClass:"firstSelect",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.chooseUserId=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((_vm.users),function(user){return _c('option',{domProps:{"value":user.id}},[_vm._v(_vm._s(user.login))])}))]):(_vm.role=='user')?_c('div',[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.chooseUserId),expression:"chooseUserId"}],staticClass:"firstSelect",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.chooseUserId=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((_vm.OneUser),function(one){return _c('option',{domProps:{"value":one.id}},[_vm._v(_vm._s(one.login))])}))]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"monthYearsSelects"},[_c('p',[_vm._v("2. I would like to book this meeting:")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.month),expression:"month"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.month=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((_vm.monthArr),function(month,key){return _c('option',{domProps:{"value":key}},[_vm._v(_vm._s(month))])})),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.day),expression:"day"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.day=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((_vm.days),function(day,key){return _c('option',{domProps:{"value":key}},[_vm._v(_vm._s(day))])})),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.year),expression:"year"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.year=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((_vm.yearsArr),function(year,key){return _c('option',{domProps:{"value":key}},[_vm._v(_vm._s(year))])}))]),_vm._v(" "),_c('div',[_c('p',[_vm._v("3. Specify what the time and end of the meeting(This will be what people see on the calendar.)")]),_vm._v(" "),_c('div',{staticClass:"FirstChoiseTime"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.timeStartHour),expression:"timeStartHour"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.timeStartHour=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((12),function(hour){return _c('option',{domProps:{"value":hour}},[_vm._v(_vm._s(hour))])})),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.timeStartMin),expression:"timeStartMin"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.timeStartMin=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"0"}},[_vm._v("0")]),_vm._v(" "),_vm._l((3),function(minute){return _c('option',{domProps:{"value":minute * 15}},[_vm._v(_vm._s(minute * 15))])})],2),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.timeStartMidnight),expression:"timeStartMidnight"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.timeStartMidnight=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"0"}},[_vm._v("AM")]),_vm._v(" "),_c('option',{attrs:{"value":"1"}},[_vm._v("PM")])])]),_vm._v(" "),_c('div',{staticClass:"SecondChoiseTime"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.timeEndHour),expression:"timeEndHour"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.timeEndHour=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((12),function(hour){return _c('option',{domProps:{"value":hour}},[_vm._v(_vm._s(hour))])})),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.timeEndMin),expression:"timeEndMin"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.timeEndMin=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"0"}},[_vm._v("0")]),_vm._v(" "),_vm._l((3),function(minute){return _c('option',{domProps:{"value":minute * 15}},[_vm._v(_vm._s(minute * 15))])})],2),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.timeEndMidnight),expression:"timeEndMidnight"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.timeEndMidnight=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"0"}},[_vm._v("AM")]),_vm._v(" "),_c('option',{attrs:{"value":"1"}},[_vm._v("PM")])])])]),_vm._v(" "),_c('div',[_c('p',[_vm._v("4. Enter the specifics for the meetings(This will be what peolpe see when they click on an. event link.)")]),_vm._v(" "),_c('div',{staticClass:"textarea form-controll"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.desc),expression:"desc"}],attrs:{"rows":"5"},domProps:{"value":(_vm.desc)},on:{"input":function($event){if($event.target.composing){ return; }_vm.desc=$event.target.value}}})])]),_vm._v(" "),_c('div',[_c('p',[_vm._v("It's going to be recurring event?")]),_vm._v(" "),_c('div',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.recurring),expression:"recurring"}],attrs:{"type":"radio","name":"optionsRadios","id":"optionsRadios1","checked":""},domProps:{"value":false,"checked":_vm._q(_vm.recurring,false)},on:{"change":function($event){_vm.recurring=false}}}),_vm._v("\n            No\n      ")]),_vm._v(" "),_c('div',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.recurring),expression:"recurring"}],attrs:{"type":"radio","name":"optionsRadios","id":"optionsRadios2"},domProps:{"value":true,"checked":_vm._q(_vm.recurring,true)},on:{"change":function($event){_vm.recurring=true}}}),_vm._v("\n            Yes\n      ")])]),_vm._v(" "),(_vm.recurring)?_c('div',{staticClass:"recurning"},[_c('p',[_vm._v("5. If it's recurring specify weekly, bi-weekly, or monthly")]),_vm._v(" "),_c('div',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.recurringType),expression:"recurringType"}],attrs:{"type":"radio","name":"recurringType","id":"recurringType1","checked":""},domProps:{"value":1,"checked":_vm._q(_vm.recurringType,1)},on:{"change":function($event){_vm.recurringType=1}}}),_vm._v(" "),_c('label',[_vm._v("weekly")])]),_vm._v(" "),_c('div',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.recurringType),expression:"recurringType"}],attrs:{"type":"radio","name":"recurringType","id":"recurringType2"},domProps:{"value":2,"checked":_vm._q(_vm.recurringType,2)},on:{"change":function($event){_vm.recurringType=2}}}),_vm._v(" "),_c('label',[_vm._v("bi-weekly")])]),_vm._v(" "),_c('div',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.recurringType),expression:"recurringType"}],attrs:{"type":"radio","name":"recurringType","id":"recurringType3"},domProps:{"value":3,"checked":_vm._q(_vm.recurringType,3)},on:{"change":function($event){_vm.recurringType=3}}}),_vm._v(" "),_c('label',[_vm._v("monthly")])]),_vm._v(" "),_c('p',[_vm._v("6. If weekly or be weekly, specify number of weeks for it to keep recurring. If monthly, specify the number of months")]),_vm._v(" "),_c('div',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.recurringDuration),expression:"recurringDuration"}],staticClass:"duration",attrs:{"type":"text"},domProps:{"value":(_vm.recurringDuration)},on:{"input":function($event){if($event.target.composing){ return; }_vm.recurringDuration=$event.target.value}}}),_vm._v("\n          duration(max 4 weeks)\n      ")])]):_vm._e(),_vm._v(" "),_c('div',[_c('button',{staticClass:"btn btn-success",attrs:{"type":"button"},on:{"click":_vm.addEvent}},[_vm._v("Send")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/calendar"}},[_c('button',{staticClass:"btn btn-success"},[_vm._v("Back")])])],1)]):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "cIeQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"control-group"},[(_vm.success !== '')?_c('div',{staticClass:"alert alert-danger"},[_vm._v(_vm._s(_vm.success))]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"author"},[_c('table',{staticClass:"table table-striped"},[_vm._m(0),_vm._v(" "),_c('tbody',_vm._l((_vm.users),function(employee,index){return _c('tr',[_c('td',[_c('div',{staticClass:"col-sm-10"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(employee.login),expression:"employee.login"}],staticClass:"form-control",attrs:{"type":"text","id":"login","name":"login"},domProps:{"value":employee.login,"value":(employee.login)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(employee, "login", $event.target.value)}}})])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"col-sm-10"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(employee.email),expression:"employee.email"}],staticClass:"form-control",attrs:{"type":"text","id":"email","name":"email"},domProps:{"value":employee.email,"value":(employee.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(employee, "email", $event.target.value)}}})])]),_vm._v(" "),_c('td',[_c('button',{staticClass:"btn btn-outline-primary",on:{"click":function($event){_vm.saveDataUsers(index)}}},[_vm._v("Edit")])]),_vm._v(" "),_c('td',[_c('button',{staticClass:"btn btn-outline-primary",on:{"click":function($event){_vm.deleteEmployeeById(employee.id)}}},[_vm._v("Remove")])]),_vm._v(" "),_c('td',[_c('button',{staticClass:"btn btn-outline-primary"},[_c('a',{attrs:{"href":'mailto:'+employee.email}},[_vm._v(_vm._s(employee.login))])])])])}))])]),_vm._v(" "),_c('div',{staticClass:"controls"},[_c('router-link',{attrs:{"to":"/employeesForm"}},[_c('button',{staticClass:"btn btn-success"},[_vm._v("Add employee")])]),_vm._v(" "),_c('router-link',{staticClass:"link",attrs:{"to":"/calendar"}},[_c('button',{staticClass:"btn btn-success"},[_vm._v("Back to Calendar")])])],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',{staticClass:"head"},[_c('th',[_vm._v("Login Employee")]),_vm._v(" "),_c('th',[_vm._v("Email Employee")]),_vm._v(" "),_c('th',[_vm._v("Edit Employee")]),_vm._v(" "),_c('th',[_vm._v("Remove Employee")]),_vm._v(" "),_c('th',[_vm._v("Mail to")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "iyFI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Calendar_vue__ = __webpack_require__("YT0m");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_59313ae2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Calendar_vue__ = __webpack_require__("PxQM");
function injectStyle (ssrContext) {
  __webpack_require__("v2Oq")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-59313ae2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Calendar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_59313ae2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Calendar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "lIPO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AddAppointment_vue__ = __webpack_require__("Iovp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_616604cf_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AddAppointment_vue__ = __webpack_require__("Z1k7");
function injectStyle (ssrContext) {
  __webpack_require__("NPDU")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-616604cf"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AddAppointment_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_616604cf_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AddAppointment_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "rEml":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_EmployeeAdd_vue__ = __webpack_require__("75+T");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_061fcc5c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_EmployeeAdd_vue__ = __webpack_require__("cIeQ");
function injectStyle (ssrContext) {
  __webpack_require__("RAcb")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-061fcc5c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_EmployeeAdd_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_061fcc5c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_EmployeeAdd_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "s6+2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Main_vue__ = __webpack_require__("Uhku");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_05a707ec_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Main_vue__ = __webpack_require__("z5oL");
function injectStyle (ssrContext) {
  __webpack_require__("2kvK")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-05a707ec"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Main_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_05a707ec_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Main_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "tw02":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'EmployeesForm',
    data() {
        return {
            login: '',
            pass: '',
            email: '',
            passConfirm: '',
            passConf: '',
            config: {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            },
            success: '',
            errorMsg: ''
        };
    },
    watch: {

        email: function () {
            var self = this;
            self.pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/;
            $(email).keyup(function () {
                if (!self.pattern.test($(email).val())) {
                    $(email).css('background-color', 'red');
                    self.emailWatch = false;
                } else {
                    $(email).css('background-color', 'white');
                    self.emailWatch = true;
                }
            });
        },
        login: function () {
            var self = this;
            self.patternLogin = /^[a-zA-Z1-9]+$/;
            $(login).keyup(function () {
                if (!self.patternLogin.test($(login).val())) {
                    $(login).css('background-color', 'pink');
                    self.loginWatch = false;
                } else {
                    $(login).css('background-color', 'white');
                    self.loginWatch = true;
                }
            });
        }
    },

    methods: {
        registration: function () {
            var self = this;
            self.errorMsg = '';
            if (self.login && self.pass && self.email) {

                if (self.login.length <= 3) {
                    self.errorMsg = 'login should be at least 4 characters';
                    return false;
                }
                if (self.login.length >= 20) {
                    self.errorMsg = 'login should be not more 20 characters';
                    return false;
                }
                if (!self.loginWatch) {
                    self.errorMsg = 'Only latin letters in login';
                    return false;
                }
                if (self.pass.length <= 3) {
                    self.errorMsg = 'Password should be at least 4 characters';
                    return false;
                }
                if (self.pass !== self.passConfirm) {
                    self.errorMsg = 'Passwords do not match';
                    return false;
                }
                if (!self.emailWatch) {
                    self.errorMsg = 'Invalid email symbols';
                    return false;
                }
                var data = new URLSearchParams();
                data.append('login', self.login);
                data.append('email', self.email);
                data.append('pass', self.pass);
                //axios.post('http://BoardroomBooker/user2/Booker/client/api/employees/', data, self.config)
                __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('http://192.168.0.15/~user2/Booker/client/api/employees/', data, self.config).then(function (response) {
                    if (response.data === 1) {
                        self.success = 'success';
                    } else {
                        self.errorMsg = response.data;
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            } else {
                self.errorMsg = 'Enter data in all fields!';
            }
        },

        checkUser: function () {
            var self = this;
            if (localStorage['user']) {
                self.$router.push('/EmployeesForm');
            } else {
                self.$router.push('/');
            }
        }
    },
    computed: {
        fullName() {
            return this.login;
        }
    },
    created() {
        this.checkUser();
    }
});

/***/ }),

/***/ "v2Oq":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app',
  data() {
    return {};
  }

});

/***/ }),

/***/ "z5oL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"login navbar-form"},[(_vm.checkUser == '')?_c('div',[_c('h1',{staticClass:"Authorization"},[_vm._v("Authorization")]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.login),expression:"login"}],staticClass:"form-control",attrs:{"type":"text","name":"username","placeholder":"Username"},domProps:{"value":(_vm.login)},on:{"input":function($event){if($event.target.composing){ return; }_vm.login=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.pass),expression:"pass"}],staticClass:"form-control",attrs:{"type":"password","name":"password","placeholder":"Password"},domProps:{"value":(_vm.pass)},on:{"input":function($event){if($event.target.composing){ return; }_vm.pass=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('button',{staticClass:"btn btn-warning",attrs:{"type":"submit"},on:{"click":function($event){_vm.loginFun()}}},[_vm._v("Sign In")])]),_vm._v(" "),_c('p',[_c('span',{staticClass:"alert-info"},[_vm._v(_vm._s(_vm.errorMsg))])])]):_c('div',{staticClass:"form-group"},[_c('router-link',{staticClass:"link",attrs:{"to":"/calendar"}},[_c('button',{staticClass:"btn btn-success"},[_vm._v("Back to Calendar, "+_vm._s(_vm.user.firstName))])])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.8a4263956177f1279e1b.js.map