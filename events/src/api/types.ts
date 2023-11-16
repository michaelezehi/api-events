export interface Ticket {
    name: string;
    type: "adult" | "child";
    price: number;
    bookingFee: number;
    availability: "available" | "sold out";
  }
  
  export interface APIEvent {
    id: string;
    name: string;
    date: string;
    description: string;
    tickets: Ticket[];
  }