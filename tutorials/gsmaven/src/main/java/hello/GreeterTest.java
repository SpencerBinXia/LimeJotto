package hello;

//import static org.hamcrest.CoreMatchers.containsString;
import static org.junit.Assert.*;
//import static org.junit.matchers.JUnitMatchers.containsString;

import org.junit.Test;

public class GreeterTest {

    private Greeter greeter = new Greeter();

    @Test
    public void greeterSaysHello() {
        assertEquals(greeter.sayHello(),("Hello"));
    }

}