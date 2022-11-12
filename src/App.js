import './styles/globals.css';
import { Configuration, OpenAIApi } from 'openai';
import { useState } from 'react';
import previewImage from './img/imgb.png';

function App() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState('Keywords...');

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_VERCEL_ENV,
  });
  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    try {
      setPlaceholder(`Search ${prompt}..`);
      setLoading(true);
      const res = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: '1024x1024',
      });
      setLoading(false);
      setResult(res.data.data[0].url);
    } catch (err) {
      alert(err);
      console.log('hello');
    }
  };

  return (
    <div className="w-full flex justify-center content-center items-center ">
      <div className="max-w-2xl flex flex-col justify-center  p-5">
        <h2 className="text-3xl text-left sm:font-sans font-extrabold sm:text-5xl ">
          A<span className="text-purple">I</span> IMAGE GENERATOR
        </h2>
        <div className="my-5 pl-2 w-full font-sans flex flex-col items-start border-l-4 border-purple">
          <p>Made with OpenAI Dall-e 2 API</p>
          <p>Tailwind and React.</p>
        </div>
        <div className="mt-2 mb-4 pl-2 p-4 w-full font-sans flex flex-col items-start bg-black">
          <p className="font-sans text-xs">
            Type in some keywords in the field under to generate a uniqe image*
            With an AI generator.
          </p>
          <p className="my-2 font-sans text-xs font-extralight">
            Example: Northern lights, winter, realistic, stars
          </p>
          <p className="font-sans text-xs bg-purple2 p-1">
            *Size of the image that is generated is 1024x1024 pixels.
          </p>
        </div>
        <div className="mb-5 flex flex-row w-full md: w-md">
          <input
            className="p-2 font-sans w-full text-xs bg-blue bg-gray"
            placeholder={placeholder}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            className="  font-sans bg-purple rounded p-2 ml-2 font-extralight transition ease-in-out delay-150 hover:bg-purple2 hover:text-purple "
            onClick={generateImage}
          >
            Generate!
          </button>
        </div>
        {loading ? (
          <>
            <h2>Generating..Please Wait..</h2>
            <div className="lds-ripple">
              <div></div>
              <div></div>
            </div>
          </>
        ) : (
          <>
            <container className="font-sans">
              {result.length > 0 ? (
                <>
                  <img className="w-1/2" src={result} alt="result" />
                  <div>
                    <a href={result} target="blank" download>
                      <button className=" transition ease-in-out delay-150 w-full bg-purple font-extralight rounded p-2 mt-5 font-sans  hover:bg-purple2 hover:text-purple">
                        Download image!
                      </button>
                    </a>
                  </div>
                </>
              ) : (
                <img className="w-1/2" src={previewImage} alt="result" />
              )}
            </container>
          </>
        )}
      </div>
      <p className="font-sans absolute bottom-10 left-10">
        Made by{' '}
        <a
          href="https://www.stigark.com"
          className="text-purple transition ease-in-out delay-150 hover:text-purple2"
        >
          Stig Ark
        </a>
      </p>
    </div>
  );
}

export default App;
