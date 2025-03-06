export interface Order {
    id: number;
    customer: string;
    price: string;
    paymentMethod: string;
    orderNote: string;
    discount: string;
    status: string;
    statusColor: string;
    statusDots: boolean[]; // Array of booleans for status dots
  }