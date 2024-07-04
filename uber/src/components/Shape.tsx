import React, { useMemo } from 'react';

type ShapeProps = {
  data: number[][];
};

const Shape: React.FC<ShapeProps> = ({ data }) => {


    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
      };
      

  const boxes = useMemo(() => data.flat(Infinity), [data]);

  return (
    <div className='p-12 grid grid-cols-3 items-center align-middle max-w-fit gap-5'>
      {boxes.map((box, index) => {
        const isVisible = box === 1 ? 'cursor-pointer border border-black' : 'cursor-initial opacity-0';
        return (
          <div className={`w-20 h-20 ${isVisible}`} key={`${box}-${index} `} onClick={handleClick}>
            
          </div>
        );
      })}
    </div>
  );
};

export default Shape;