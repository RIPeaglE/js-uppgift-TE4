console.log("-----------")
console.log("Amusment Park ")

CreateVisitor = (name, age, ticketId) => visitor = {name, age, ticketId}

function revokeTicket(visitor){
    visitor.ticketId = null 
    return visitor;
}
console.log(CreateVisitor('Verena Nardi', 45, 'H32AZ123'))
console.log(revokeTicket(visitor))
const tickets = {
    '0H2AZ123': null,
    '23LA9T41': 'Verena Nardi',
};

ticketStatus = (tickets, status) => {
    if (tickets[status] === null){
        return "not sold";
    }
    else if(tickets[status] === undefined){
        return "Not a real ticket";
    }
    else{
        return `sold to ${tickets[status]}`;
    }
}
console.log("-----------")
console.log(ticketStatus(tickets, "23LA9T41"))
console.log(ticketStatus(tickets, "0H2AZ123"))
console.log(ticketStatus(tickets, "0H2OOJ123"))
simpleTicketStatus = (tickets, status) => {
    if (tickets[status] == null){
        return 'Invalid ticket!';
    }
    else{
        return`${tickets[status]}`;
    }
}

console.log("-----------")
console.log(simpleTicketStatus(tickets, "23LA9T40"))
console.log(simpleTicketStatus(tickets, "23LA9T41"))
console.log("-----------")

const NewVisitor = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
    gtc: {
        signed: true,
        version: '2.1',
    }
};

gtcVersion = (NewVisitor) => {
    return NewVisitor.gtc?.version ?? undefined;
}
console.log(gtcVersion(NewVisitor))
console.log("-----------")