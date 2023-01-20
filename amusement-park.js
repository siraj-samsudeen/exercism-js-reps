export const createVisitor = (name, age, ticketId) => {
  return {
    name: name,
    age: age,
    ticketId: ticketId,
  };
};

export const revokeTicket = (visitor) => {
  visitor.ticketId = null;
  return visitor;
};

export const ticketStatus = (visitor, ticketId) => {
  if (visitor[ticketId] === undefined) {
    return "unknown ticket id";
  } else if (visitor[ticketId] === null) {
    return "not sold";
  } else return `sold to ${visitor[ticketId]}`;
};

export const simpleTicketStatus = (visitor, ticketId) => {
  return visitor[ticketId] ?? "invalid ticket !!!";
};

export const gtcVersion = (visitor) => {
  return visitor.gtc?.version;
};
