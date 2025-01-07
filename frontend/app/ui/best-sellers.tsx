import { Card } from "./components/card";

export const BestSellers = () => {
  return (
    <section className="relative min-h-screen mx-auto max-w-6xl px-4 xl:px-0">
      <h1 className="font-semibold text-black text-4xl my-12 text-center">
        Mas buscados
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1rem",
        }}
      >
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};
