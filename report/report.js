$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("signup.feature");
formatter.feature({
  "line": 1,
  "name": "Sign up functionality",
  "description": "",
  "id": "sign-up-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Launch E-Learning website and sign up",
  "description": "",
  "id": "sign-up-functionality;launch-e-learning-website-and-sign-up",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on the signup page of E-learning site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User is on the elearning site",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click on the sign up button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "sign up page launched successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters the \"\u003cfname\u003e\" in firstname textbox",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters the \"\u003clname\u003e\" in lastname textbox",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enters the \"\u003cemailid\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enters the \"\u003cuname\u003e\" in username field",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user set the \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user enters the \"\u003cconfirmpwd\u003e\" as confirmpwd",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "click on register button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user click on profile button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user click on inbox link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user click on composebox link",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user enters the \"\u003csender\u003e\" details",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user select the first item",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user enters the \"\u003csubject_body\u003e\" in subject textbox",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user writes the \"\u003cmessage_body\u003e\" in the messagebody",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user click on sendmessage button",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "sign-up-functionality;launch-e-learning-website-and-sign-up;",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "emailid",
        "uname",
        "password",
        "confirmpwd",
        "sender",
        "subject_body",
        "message_body"
      ],
      "line": 25,
      "id": "sign-up-functionality;launch-e-learning-website-and-sign-up;;1"
    },
    {
      "cells": [
        "Dev146",
        "mathur",
        "a@gmail.com",
        "dev146",
        "mathur4321",
        "mathur4321",
        "dev",
        "Welcome",
        "Welcome to the testing class"
      ],
      "line": 26,
      "id": "sign-up-functionality;launch-e-learning-website-and-sign-up;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5918722000,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Launch E-Learning website and sign up",
  "description": "",
  "id": "sign-up-functionality;launch-e-learning-website-and-sign-up;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on the signup page of E-learning site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User is on the elearning site",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click on the sign up button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "sign up page launched successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters the \"Dev146\" in firstname textbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters the \"mathur\" in lastname textbox",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enters the \"a@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enters the \"dev146\" in username field",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user set the \"mathur4321\"",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user enters the \"mathur4321\" as confirmpwd",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "click on register button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user click on profile button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user click on inbox link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user click on composebox link",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user enters the \"dev\" details",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user select the first item",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user enters the \"Welcome\" in subject textbox",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user writes the \"Welcome to the testing class\" in the messagebody",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user click on sendmessage button",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupExample.user_is_on_the_signup_page_of_E_learning_site()"
});
formatter.result({
  "duration": 4424757500,
  "status": "passed"
});
formatter.match({
  "location": "SignupExample.user_is_on_the_elearning_site()"
});
formatter.result({
  "duration": 121600,
  "status": "passed"
});
formatter.match({
  "location": "SignupExample.click_on_the_sign_up_button()"
});
formatter.result({
  "duration": 5084651700,
  "status": "passed"
});
formatter.match({
  "location": "SignupExample.sign_up_page_launched_successfully()"
});
formatter.result({
  "duration": 122000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dev146",
      "offset": 17
    }
  ],
  "location": "SignupExample.user_enters_the_in_firstname_textbox(String)"
});
formatter.result({
  "duration": 3186526900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mathur",
      "offset": 17
    }
  ],
  "location": "SignupExample.user_enters_the_in_lastname_textbox(String)"
});
formatter.result({
  "duration": 3161537400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "a@gmail.com",
      "offset": 17
    }
  ],
  "location": "SignupExample.user_enters_the(String)"
});
formatter.result({
  "duration": 3191688500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dev146",
      "offset": 17
    }
  ],
  "location": "SignupExample.user_enters_the_in_username_field(String)"
});
formatter.result({
  "duration": 3166784400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mathur4321",
      "offset": 14
    }
  ],
  "location": "SignupExample.user_set_the(String)"
});
formatter.result({
  "duration": 3193594000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mathur4321",
      "offset": 17
    }
  ],
  "location": "SignupExample.user_enters_the_as_confirmpwd(String)"
});
formatter.result({
  "duration": 3230228400,
  "status": "passed"
});
formatter.match({
  "location": "SignupExample.click_on_register_button()"
});
formatter.result({
  "duration": 6143693300,
  "status": "passed"
});
formatter.match({
  "location": "SignupExample.user_click_on_profile_button()"
});
formatter.result({
  "duration": 3149406800,
  "status": "passed"
});
formatter.match({
  "location": "SignupExample.user_click_on_inbox_link()"
});
formatter.result({
  "duration": 6766951200,
  "status": "passed"
});
formatter.match({
  "location": "SignupExample.user_click_on_composebox_link()"
});
formatter.result({
  "duration": 5574304700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dev",
      "offset": 17
    }
  ],
  "location": "SignupExample.user_enters_the_details(String)"
});
formatter.result({
  "duration": 3541074000,
  "status": "passed"
});
formatter.match({
  "location": "SignupExample.user_select_the_first_item()"
});
formatter.result({
  "duration": 3001532500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome",
      "offset": 17
    }
  ],
  "location": "SignupExample.user_enters_the_in_subject_textbox(String)"
});
formatter.result({
  "duration": 3180190000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome to the testing class",
      "offset": 17
    }
  ],
  "location": "SignupExample.user_writes_the_in_the_messagebody(String)"
});
formatter.result({
  "duration": 7274500400,
  "status": "passed"
});
formatter.match({
  "location": "SignupExample.user_click_on_sendmessage_button()"
});
formatter.result({
  "duration": 5036359000,
  "status": "passed"
});
formatter.after({
  "duration": 259140000,
  "status": "passed"
});
});