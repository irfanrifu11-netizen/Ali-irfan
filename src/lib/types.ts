export type Category =
  | "Burgers"
  | "Pizza"
  | "Pasta"
  | "Salads"
  | "Grills"
  | "Sides"
  | "Drinks"
  | "General";

export type MenuItem = {
  id: number;
  name: string;
  price: number;
  stock: number;
  image: string;
  category: Category;
  description: string;
};

export type CartLine = {
  item: MenuItem;
  quantity: number;
};

export type OrderItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export type Fulfilment = "Pickup" | "Delivery";

export type Order = {
  id: string;
  row?: number;
  createdAt: string;
  customerName: string;
  phone: string;
  items: OrderItem[];
  total: number;
  fulfilment: Fulfilment;
  address: string;
  notes: string;
  paymentMethod: string;
  status: string;
  paymentStatus: string;
  synced: boolean;
};

export type NewOrder = {
  customerName: string;
  phone: string;
  items: OrderItem[];
  total: number;
  fulfilment: Fulfilment;
  address: string;
  notes: string;
  paymentMethod: string;
};

export type Reservation = {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  notes: string;
  status: "Pending" | "Confirmed";
};

export type NewReservation = {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  notes: string;
};

export type ActionResult = {
  success: boolean;
  message?: string;
  id?: number;
  row?: number;
};

export type CouponResult = {
  success: boolean;
  message: string;
  discount?: number;
  finalTotal?: number;
};
