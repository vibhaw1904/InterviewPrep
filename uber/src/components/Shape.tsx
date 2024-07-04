import React, { useMemo, useState } from 'react';

type ShapeProps = {
  data: number[][];
};

const Shape: React.FC<ShapeProps> = ({ data }) => {
    const [show,setShow]=useState(new Set());

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        // e.preventDefault();
        const{target}=e
        const index = (target as HTMLDivElement).getAttribute('data-index');     
        if(index===null){
            return;
        }
        setShow((prev)=>{
            const newSet = new Set(prev);
            newSet.add(Number(index));
            return newSet;
        })
      };
      

  const boxes = useMemo(() => data.flat(Infinity), [data]);

  return (
    <div className='p-12 grid grid-cols-3 items-center align-middle max-w-fit gap-5'>
      {boxes.map((box, index) => {
        const isVisible = box === 1 ? 'cursor-pointer border border-black' : 'cursor-initial opacity-0';
        const isSelected=show.has(index);
        const selected=isSelected?'bg-green-400 cursor-not-allowed':''
        return (
          <div  className={`w-20 h-20 ${isVisible} ${selected}`}
          key={index}
          data-index={index}
          data-status={isVisible}
          onClick={handleClick}>
            
          </div>
        );
      })}
    </div>
  );
};

export default Shape;