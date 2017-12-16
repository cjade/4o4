webpackJsonp([7],{

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(26)
/* script */
var __vue_script__ = __webpack_require__(207)
/* template */
var __vue_template__ = __webpack_require__(208)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/admin/js/components/login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-18ec84bc", Component.options)
  } else {
    hotAPI.reload("data-v-18ec84bc", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    var _this = this;

    var checkAge = function checkAge(rule, value, callback) {
      if (!value) {
        return callback(new Error('年龄不能为空'));
      }
      setTimeout(function () {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = function validatePass(rule, value, callback) {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (_this.ruleForm2.checkPass !== '') {
          _this.$refs.ruleForm2.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = function validatePass2(rule, value, callback) {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== _this.ruleForm2.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
        age: [{ validator: checkAge, trigger: 'blur' }]
      }
    };
  },

  methods: {
    submitForm: function submitForm(formName) {
      this.$refs[formName].validate(function (valid) {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm: function resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    goTo: function goTo() {
      this.$router.push({ name: 'hello' });
    }
  }
});

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-form",
    {
      ref: "ruleForm2",
      staticClass: "demo-ruleForm",
      attrs: {
        model: _vm.ruleForm2,
        "status-icon": "",
        rules: _vm.rules2,
        "label-width": "100px"
      }
    },
    [
      _c(
        "el-form-item",
        { attrs: { label: "密码", prop: "pass" } },
        [
          _c("el-input", {
            attrs: { type: "password", "auto-complete": "off" },
            model: {
              value: _vm.ruleForm2.pass,
              callback: function($$v) {
                _vm.$set(_vm.ruleForm2, "pass", $$v)
              },
              expression: "ruleForm2.pass"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: "确认密码", prop: "checkPass" } },
        [
          _c("el-input", {
            attrs: { type: "password", "auto-complete": "off" },
            model: {
              value: _vm.ruleForm2.checkPass,
              callback: function($$v) {
                _vm.$set(_vm.ruleForm2, "checkPass", $$v)
              },
              expression: "ruleForm2.checkPass"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: "年龄", prop: "age" } },
        [
          _c("el-input", {
            model: {
              value: _vm.ruleForm2.age,
              callback: function($$v) {
                _vm.$set(_vm.ruleForm2, "age", _vm._n($$v))
              },
              expression: "ruleForm2.age"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        [
          _c(
            "el-button",
            {
              attrs: { type: "primary" },
              on: {
                click: function($event) {
                  _vm.submitForm("ruleForm2")
                }
              }
            },
            [_vm._v("提交")]
          ),
          _vm._v(" "),
          _c(
            "el-button",
            {
              on: {
                click: function($event) {
                  _vm.resetForm("ruleForm2")
                }
              }
            },
            [_vm._v("重置")]
          ),
          _vm._v(" "),
          _c(
            "el-button",
            {
              on: {
                click: function($event) {
                  _vm.goTo()
                }
              }
            },
            [_vm._v("跳转")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-18ec84bc", module.exports)
  }
}

/***/ })

});