import { About } from "./ui/about";
import { BestSellers } from "./ui/best-sellers";
import { Delivery } from "./ui/delivery";
import { Hero } from "./ui/hero";
import { PaymentMethods } from "./ui/payment-method";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <BestSellers />
      <About />
      <Delivery />
      <PaymentMethods />
    </div>
  );
}
