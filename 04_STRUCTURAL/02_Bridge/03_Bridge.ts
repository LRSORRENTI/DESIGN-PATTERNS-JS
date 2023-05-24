// TYPESCRIPT EXAMPLE

// To illustrate the bridge pattern, we'll 
// look at an example of a payment processor, 
// with two different companies: 

interface OPaymentProcessor{
    processPayment(payment: string): void
}

class OnlinePaymentProcessor {
      processPayment(payment: string){
          console.log("Payment being processed...");
          console.log(payment);
          console.log("Payment finalized");
      }
}


class SkateboardCompany1 {
    name: string = 'Company 1'
   private paymentProcessor: OPaymentProcessor;
    constructor(paymentProcessor: OPaymentProcessor){
         this.paymentProcessor = paymentProcessor
    }

    processPayment(){
        console.log('Company 1 processing payment')
       this.paymentProcessor.processPayment('first payment')
    }
}

class SkateboardCompany2 {
    name: string = 'Company 1'
    private paymentProcessor: OPaymentProcessor;
     constructor(paymentProcessor: OPaymentProcessor){
          this.paymentProcessor = paymentProcessor
     }
 
     processPayment(){
         console.log('Company 2 processing payment')
        this.paymentProcessor.processPayment('first payment')
     }
}

const BirdhouseSkateboards = new SkateboardCompany1(new OnlinePaymentProcessor())
// We're injecting this payment processor in, 
const ElementSkateboards = new SkateboardCompany2(new OnlinePaymentProcessor() )
// So now we need to create an instance of company
BirdhouseSkateboards.processPayment();
ElementSkateboards.processPayment();
