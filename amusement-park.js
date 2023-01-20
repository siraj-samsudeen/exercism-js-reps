
export function createVisitor(name, age, ticketId){
  return {
    name,
    age,
    ticketId,
  }
}

export function revokeTicket(visitor){
    visitor.ticketId = null;
    return visitor
}

export function ticketStatus(tickets, ticketId){
    return tickets[ticketId] === null ? "not sold" : tickets[ticketId] === undefined ? "unknown ticket id" : `sold to ${tickets[ticketId]}`
}

export function simpleTicketStatus(tickets, ticketId){
   return tickets[ticketId] == null ? 'invalid ticket !!!' : tickets[ticketId]
}
                 
export function gtcVersion(visitor){  

    if(visitor.gtc){
        return visitor.gtc.version;
      } else return undefined
    
    //null coalescing operator
    // return visitor.gtc?.version
}