import { BestSellers } from "./ui/best-sellers";
import { Hero } from "./ui/hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <BestSellers />
    </div>
  );
}
