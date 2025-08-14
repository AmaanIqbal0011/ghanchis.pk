export type Product = {
   _id?:string; 
  title?: string;
  slug?: { current: string };
  price?: number;
  stock?: number;
  image?: any;
  size?: { name: string } | null;
  collections?: { title: string }[];
  collectionType?: { title: string } | null;
}