import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useRef, useState } from "react";

type CategorySliderProps = {
  categories: string[];
};
function CategorySlider({ categories }: CategorySliderProps) {
  const [scrollX, setScrollX] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex items-center relative bb1 py-2">
      <BsChevronLeft
        aria-disabled={scrollX === 0}
        onClick={() => {
          divRef.current?.scrollTo({
            left: scrollX - 100,
          });
        }}
        size={25}
        color="gray"
        className="absolute bg-gradient-to-r from-white to-[#ffffff9c] left-0 cursor-pointer w-10"
      />
      <div
        ref={divRef}
        onScroll={(e) => {
          const { scrollLeft } = e.target as HTMLDivElement;
          setScrollX(scrollLeft);
        }}
        className="flex gap-x-10 border-red-600 max-w-full overflow-auto no-scrollbar px-6 py-1 scroll-smooth"
      >
        {categories.map((category, index) => (
          <p
            key={index}
            className="text-sm text-gray-500 w-fit whitespace-nowrap hover:text-gray-800 cursor-pointer"
          >
            {category}
          </p>
        ))}
      </div>
      {<BsChevronRight
        onClick={() => {
          divRef.current?.scrollTo({
            left: scrollX + 100,
          });
        }}
        size={25}
        color="gray"
        className="absolute bg-gradient-to-r to-white from-[#ffffff9c] right-0 cursor-pointer w-10"
      />}
    </div>
  );
}

export default CategorySlider;
