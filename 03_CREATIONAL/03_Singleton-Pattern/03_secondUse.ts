// import FancyLogger from "./01_singleton";
import logger from "./01_singleton"
// This is the second place we're going to use 
// our FancyLogger

// const logger = new FancyLogger

export default function logSecondImplementation(){
        // inside we'll log the number of logs we have 
    // using dot notation, again
    logger.printLogCount()
    // then we'll log something to the logger again
    // 
   logger.log("Secomd file (secondUse.ts)")
   // Then after the logger.log, we call 
   // printingCount again

   logger.printLogCount()
    
}

