export interface ProductInteface {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
  }
  
export interface Props {
    product: ProductInteface;
    onAddToCart: (product: ProductInteface) => void;
    onSeeDetails: (product: ProductInteface) => void;
  }