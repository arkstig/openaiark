import { useState } from 'react';
import { Transition } from '@tailwindui/react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

function Help() {
  const [open, setOpen] = useState(false);

  return (
    <div className=" mb-4 pl-4 p-4 w-full font-sans flex flex-col items-start bg-gradient-to-r from-purple to-purple2 rounded">
      <h2>
        <div className="flex flex-row items-center">
          <button
            className="mr-2 flex flex-row items-center"
            onClick={() => setOpen(!open)}
          >
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

      <Transition
        show={open}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <p className=" mt-4 font-sans text-base">
          Type in some keywords in the field under to generate a uniqe image*
        </p>
        <p className="my-2 font-sans text-base font-extralight">
          Example: Northern lights, winter, stars, norway
        </p>
        <p className="font-sans font-extralight text-xs bg-purple2 p-2 rounded">
          *Size of the image that is generated is 1024x1024 pixels.
        </p>
      </Transition>
    </div>
  );
}

export default Help;
