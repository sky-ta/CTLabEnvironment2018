#include <Servo.h>

int switchState = 0;
int lastSwitchState = 0;

Servo myservo; //Calling out the servo and name it
int pos = 0; //the degree the servo motor started out as

void setup() {

  Serial.begin(9600);

  pinMode(13,OUTPUT); // declare toggle switch
  myservo.attach(9);
}

void loop() {
  //
  if (Serial.available()) {

    char inByte = Serial.read();
    // mousedown event
    if (inByte == '1') {

      digitalWrite(13, HIGH);
      //myservo.write(180);
      for (pos = 0; pos <= 45; pos += 1) {
        myservo.write(pos);
        delay(5);
      }

    }

    // mouseup event
    else if (inByte == '0') {

      // send the color to the browser, then turn the LED off
      digitalWrite(13, LOW);
      //myservo.write(0);
      for (pos = 45; pos >=0; pos -= 1) {
        myservo.write(pos);
        delay(5);
      }
    }
  }
}
