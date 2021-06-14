Feature: Sign up functionality

  Scenario Outline: Launch E-Learning website and sign up
    Given User is on the signup page of E-learning site
    When User is on the elearning site
    And click on the sign up button
    Then sign up page launched successfully
    When user enters the "<fname>" in firstname textbox
    When user enters the "<lname>" in lastname textbox
    When user enters the "<emailid>"
    When user enters the "<uname>" in username field
    When user set the "<password>"
    When user enters the "<confirmpwd>" as confirmpwd
    Then click on register button
    And user click on profile button
    And user click on inbox link
    And user click on composebox link
    And user enters the "<sender>" details
    And user select the first item
    And user enters the "<subject_body>" in subject textbox
    And user writes the "<message_body>" in the messagebody
    Then user click on sendmessage button

    Examples: 
      | fname  | lname  | emailid     | uname  | password   | confirmpwd | sender | subject_body | message_body                 |
      | Dev145 | mathur | a@gmail.com | dev1465 | mathur4321 | mathur4321 | dev    | Welcome      | Welcome to the testing class |
