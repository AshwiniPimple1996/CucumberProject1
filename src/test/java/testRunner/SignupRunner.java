package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/java/features",
		glue={"stepDefination","utilities"},
		monochrome=true,
		plugin={"pretty","html:report/","json:report/jsonfile.json"})

public class SignupRunner {

}
