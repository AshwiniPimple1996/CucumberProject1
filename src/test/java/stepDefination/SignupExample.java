package stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utilities.Hooks;

public class SignupExample {

	WebDriver driver=Hooks.driver;
	@Given("^User is on the signup page of E-learning site$")
	public void user_is_on_the_signup_page_of_E_learning_site() {
	    driver.get("http://elearningm1.upskills.in/");
	}

	@When("^User is on the elearning site$")
	public void user_is_on_the_elearning_site()  {
	  System.out.println("User is on the E-learning site");
	    
	}

	@When("^click on the sign up button$")
	public void click_on_the_sign_up_button() throws Exception {
		  driver.findElement(By.linkText("Sign up!")).click();
		  Thread.sleep(3000);
	}

	@Then("^sign up page launched successfully$")
	public void sign_up_page_launched_successfully(){
	    System.out.println("Sign up page launched successfully");
	    System.out.println("--------------------Signup Page------------");
	}
	
	@When("^user enters the \"([^\"]*)\" in firstname textbox$")
	public void user_enters_the_in_firstname_textbox(String fname) throws Exception  {
	    driver.findElement(By.name("firstname")).sendKeys(fname);
	    Thread.sleep(3000);
	    System.out.println("Firstname entered");
	}

	@When("^user enters the \"([^\"]*)\" in lastname textbox$")
	public void user_enters_the_in_lastname_textbox(String lname) throws Exception  {
	    driver.findElement(By.name("lastname")).sendKeys(lname);
	    Thread.sleep(3000);
	    System.out.println("Last Name entered");
	}

	@When("^user enters the \"([^\"]*)\"$")
	public void user_enters_the(String emailid) throws Exception  {
	    driver.findElement(By.xpath("*//div/input[@id='registration_email']")).sendKeys(emailid);
	    Thread.sleep(3000);
	    System.out.println("email id entered");
	}

	@When("^user enters the \"([^\"]*)\" in username field$")
	public void user_enters_the_in_username_field(String uname) throws Exception  {
	    driver.findElement(By.xpath("*//div/input[@id='username']")).sendKeys(uname);
	    Thread.sleep(3000);
	    System.out.println("username entered");
	}

	@When("^user set the \"([^\"]*)\"$")
	public void user_set_the(String password) throws Exception  {
	   driver.findElement(By.xpath("*//div/input[@id='pass1']")).sendKeys(password);
	   Thread.sleep(3000);
	   System.out.println("Password entered");
	}
	
	@When("^user enters the \"([^\"]*)\" as confirmpwd$")
	public void user_enters_the_as_confirmpwd(String confirmpwd) throws Exception  {
	    driver.findElement(By.xpath("*//div/input[@id='pass2']")).sendKeys(confirmpwd);
	    Thread.sleep(3000);
	}


	@Then("^click on register button$")
	public void click_on_register_button() throws Exception  {
	  driver.findElement(By.xpath("*//div/button[@type='submit']")).click();
	  Thread.sleep(3000);
	  System.out.println("Registration Completed..!!");
	}
	
	@Then("^user click on profile button$")
	public void user_click_on_profile_button() throws Exception  {
	   driver.findElement(By.xpath("//a[contains(@class,'dropdown-')]/img[1]")).click();
	   Thread.sleep(3000);
	   System.out.println("Navigate to Profile..!!");
	   
	}

	@Then("^user click on inbox link$")
	public void user_click_on_inbox_link() throws Exception  {
	   driver.findElement(By.xpath("*//a[@href='http://elearningm1.upskills.in/main/messages/inbox.php' and @title='Inbox']")).click();
	   Thread.sleep(3000);
	   System.out.println("Clicked on Inbox..!!");
	   
	}

	@Then("^user click on composebox link$")
	public void user_click_on_composebox_link() throws Exception  {
	    driver.findElement(By.xpath("//a/img[@title='Compose message']")).click();
		
		Thread.sleep(3000);
		System.out.println("Compose box clicked..!!");
		
	}
	
	@Then("^user enters the \"([^\"]*)\" details$")
	public void user_enters_the_details(String sender) throws Exception {
		driver.findElement(By.xpath("*//div[contains(@class,'col-sm-8')]/span/descendant::span/span/ul/li[1]/input")).sendKeys(sender);
		Thread.sleep(3000);
		driver.findElement(By.xpath("*//span[contains(@class,'select2-dropdown select2-dropdown--below')]/span/ul/li[1]")).click();
	}

	@Then("^user select the first item$")
	public void user_select_the_first_item() throws Exception  {
//		driver.findElement(By.xpath("*//span[contains(@class,'select2-dropdown select2-dropdown--below')]/span/ul/li[1]")).sendKeys(Keys.ENTER);
		Thread.sleep(3000);
	}

	
	@Then("^user enters the \"([^\"]*)\" in subject textbox$")
	public void user_enters_the_in_subject_textbox(String subject_body) throws Exception  {
		driver.findElement(By.xpath("*//div/input[@id='compose_message_title']")).sendKeys(subject_body);
		Thread.sleep(3000);
		
	}

	@Then("^user writes the \"([^\"]*)\" in the messagebody$")
	public void user_writes_the_in_the_messagebody(String message_body) throws Exception  {
		Thread.sleep(2000);
		driver.findElement(By.xpath("//*[contains(@class,'cke_contents cke_reset')]/iframe[1]")).sendKeys(message_body);
		Thread.sleep(5000);
	}
	
	@Then("^user click on sendmessage button$")
	public void user_click_on_sendmessage_button() throws Exception  {
		driver.findElement(By.xpath("*//div/button[@type='submit']")).click();
		
		Thread.sleep(3000);
		System.out.println("Message sent successfully..!!");
	   
	}

}
