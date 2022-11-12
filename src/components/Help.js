import { useState } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

function Help() {
  const [open, setOPen] = useState(false);

  const toggle = () => {
    setOPen(!open);
  };
  return (
    <div className="transition-all delay-150 duration-300 overflow-hidden mb-4 pl-4 p-4 w-full font-sans flex flex-col items-start bg-gradient-to-r from-purple to-purple2 rounded">
      <h2>
        <div className="flex flex-row items-center">
          <button className="mr-2 flex flex-row items-center" onClick={toggle}>
            <p className="bg-purple2 font-extralight p-2 px-3 rounded mr-2">
              Help?
            </p>
            {open === true ? (
              <AiOutlineArrowUp className="animate-bounce " />
            ) : (
              <AiOutlineArrowDown className="animate-bounce " />
            )}
          </button>
        </div>
      </h2>
      {open && (
        <div className="transition-all mt-2 delay-150 duration-300 overflow-hidden">
          <p className="font-sans text-base">
            Type in some keywords in the field under to generate a uniqe image*
          </p>
          <p className="my-2 font-sans text-base font-extralight">
            Example: Northern lights, winter, stars, norway
          </p>
          <p className="font-sans font-extralight text-xs bg-purple2 p-2 rounded">
            *Size of the image that is generated is 1024x1024 pixels.
          </p>
        </div>
      )}
    </div>
  );
}

export default Help;
