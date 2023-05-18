// import FancyLogger from "./01_singleton";
import logger from './01_singleton'
// This is where we'll first use our FancyLogger

// const logger = new FancyLogger

// So we've imported the FancyLogger, and above 
// created a new instance of it using 'new' keyword

export default function logFirstImplementation(){
    // inside we'll log the number of logs we have 
    // using dot notation
    logger.printLogCount()
    // then we'll log something to the logger 
    // itself below:
   logger.log("First file (firstUse.ts)")
   // Then after the logger.log, we call 
   // printingCount again

   logger.printLogCount()
  
}

