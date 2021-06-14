package utilities;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {

	public static WebDriver driver;
	
	@Before
	public void webdriverInitialization(){
		System.setProperty("webdriver.chrome.driver", "C:/Users/AshwiniPimple/Desktop/SDET Testing Program/chromedriver/chromedriver.exe");
		System.out.println("Before start test");
		driver=new ChromeDriver();
		
	}
	
	@After
	public void closeDriver(){
		driver.close();
	}
}
