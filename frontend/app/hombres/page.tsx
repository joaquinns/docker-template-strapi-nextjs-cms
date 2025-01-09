import { Card } from "../ui/components/card";
import { SearchBar } from "../ui/components/search-bar";
import { SubHero } from "../ui/components/Subhero";

export default function Hombres() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-6xl py-8 px-4 xl:px-0 text-slate-900">
        <SearchBar />
      </div>
      <SubHero
        altImage="Damas hero image alt"
        imgURL="/whisky.jpg"
        title="Regalos para Caballeros"
      />
      <section className="max-w-6xl px-4 xl:px-0 py-8 mx-auto">
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
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </div>
  );
}
