// ADAPTER PATTERN


// To illustrate the adapter pattern we have two
// classes, one for apple phones, and one for 
// android phones 

// We want to be able to charge our iPhone with 
// a micro usb, we need an adapter to make this 
// possible, to change the port to lighting 

// First we need to create some interfaces: 

interface ApplePhones{
 useLightning();
}
// Both of these will need methods tied to their 
// respective ports 
interface AndroidPhones{
 useMicroUSB();
}

class iPhone implements ApplePhones {
    useLightning(){
      console.log("Using lighting port!")
    }
  }
  
  class galaxyPhone implements AndroidPhones{
     useMicroUSB(){
      console.log("Using microUSB!")
     }
  }

  // Now we need to define the adapter, so we'll 
  // create a new class: 

  class LightningToMicroUSBAdapter implements AndroidPhones{
    // before we utilize this, we also need a new device
    iPhoneDevice: iPhone; 
    // and we'll use that iPhone device in 
    // the constructor: 
    constructor(iPhone: iPhone){
        this.iPhoneDevice = iPhone
    }
     // so now through this adapter we can use the 
     // useMicroUSB function
      useMicroUSB() {
        //   throw new Error("Method not implemented.");
        // But we need to map it somehow, to a way iphones
        // understand 
        console.log("Need to use MicroUSB, converting to lightning")
        this.iPhoneDevice.useLightning();
        // So we can now make this iphone use a microUSB

      }
      
  }

  let lukesIphone = new iPhone();
  // and we want luke's iphone to be 
  // adaptable to microUSB: 

  let lukesChargerAdapter = new LightningToMicroUSBAdapter(lukesIphone);

  // We pass in lukesIphone to the constructor

  lukesChargerAdapter.useMicroUSB();

  // And running ts-node adapter.ts: 

  // Need to use MicroUSB, converting to lightning
  // Using lighting port!

  // That's what makes the adapter pattern so cool, 
  // we can make classes adaptable with others for 
  // functionality!

  // In a real code base it'll be much much more 
  // complex! However the underlying priciple 
  // of adapter pattern is there!

  // You may need to change the order of the 
  // arguments, or convert data types to different 
  // ones, or may need to use many classes to utilize 
  // the adapter pattern, but it's in the name! 

  // The adapter pattern makes different classes 
  // adaptable to each other!!
