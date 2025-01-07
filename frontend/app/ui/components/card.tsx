"use client";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title?: string;
}

export const Card = ({ title = "Titulo de ejemplo" }: CardProps) => {
  // const [isHovered, setIsHovered] = useState(false);
  /*   const [isExpanded, setIsExpanded] = useState(false);
  const [showExpandButton, setShowExpandButton] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null); */

  // Detecta si el contenido excede 3 líneas
  /*   useEffect(() => {
    const element = descriptionRef.current;
    if (element) {
      const lineHeight = parseFloat(getComputedStyle(element).lineHeight);
      const maxHeight = lineHeight * 3; // Altura para 3 líneas
      if (element.scrollHeight > maxHeight) {
        setShowExpandButton(true); // Mostrar "Ver más" si hay más de 3 líneas
      }
    }
  }, []); */

  return (
    <article className="relative flex flex-col justify-center items-center text-slate-900 transition-all ease-in-out duration-300 max-w-[400px] mx-auto overflow-hidden h-full">
      <Link href="#">
        <Image
          className="rounded"
          height={260}
          width={400}
          alt="card image"
          quality={80}
          loading="lazy"
          src="/heroflowers.jpg"
          style={{ height: "260px", objectFit: "cover" }}
        />
        <div className="flex flex-col">
          <h3 className="p-2 text-xl font-bold">{title}</h3>
          <div className="p-2 font-semibold">
            <span className="text-lg">$10</span>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log("added :D");
            }}
            className="py-2 px-4 bg-slate-800 transition-all ease-in-out duration-200 rounded"
          >
            add to cart :D
          </button>
        </div>
      </Link>
    </article>
  );
};
