import './styles/globals.css';
import { Configuration, OpenAIApi } from 'openai';
import { useState } from 'react';
import previewImage from './img/example.png';
import Help from './components/Help';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { ImSpinner7 } from 'react-icons/im';
import { AiOutlineArrowRight } from 'react-icons/ai';

function App() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState('Keywords...');
  const [error, setError] = useState(false);

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_VERCEL_ENV,
  });
  const openai = new OpenAIApi(configuration);

  const generateImage = async (event) => {
    event.preventDefault();
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
    } catch (error) {
      if (error.response) {
        setLoading(false);
        setError(true);
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        setLoading(false);
        console.log(error.message);
      }
    }
  };

  return (
    <>
      <div className="h-screen bg-gradient-to-b from-dark to-dark2 w-full flex justify-center items-start">
        <div className="max-w-3xl min-w-3xl flex flex-col justify-center  p-5">
          <header>
            <h2 className="text-3xl text-left sm:font-sans font-extrabold s:text-4xl sm:text-6xl ">
              A<span className="text-purple">I</span> IMAGE GENERATOR
            </h2>
            <div className="my-5 pl-2 w-full font-sans text-sm flex flex-col items-start font-extralight border-l-4 border-purple">
              <p>Made with OpenAI Dall-e 2 API, Tailwind and React.</p>
              <p>Deployed with Vercel.</p>
            </div>
          </header>
          <main>
            <Help />
            <form className="flex flex-col mb-5 s:flex s:flex-row w-full md: w-md">
              <input
                className="h-10 p-2 font-sans w-full text-base bg-blue bg-white rounded text-black"
                placeholder={placeholder}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <button
                className="px-4 flex flex-row items-center justify-center  font-sans bg-purple rounded p-2 ml-0 s:ml-4 font-extralight transition ease-in-out delay-150 hover:bg-purple2 hover:text-white "
                onClick={generateImage}
              >
                <p className="pr-2">Generate!</p>
                <AiOutlineArrowRight className=" h-3 w-3  " />
              </button>
            </form>
            {error ? (
              <div className="font-sans font-extralight text-xs mb-4 bg-purple2 p-2 rounded">
                Something went wrong. Try again!
              </div>
            ) : (
              <></>
            )}
            {loading ? (
              <>
                <div className="font-sans p-5 bg-gray2 rounded">
                  <div className="flex flex-col items-center justify-center w-354 h-384 ">
                    <h2 className="mb-20 mt-20">
                      Generating your awesome image!
                    </h2>
                    <ImSpinner7 className="text-purple animate-spin w-20 h-20" />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="font-sans p-5 bg-gray2 rounded">
                  {result.length > 0 ? (
                    <>
                      <img
                        className="w-full sm:w-1/2 rounded"
                        src={result}
                        alt="result"
                      />
                      <div>
                        <a href={result} target="blank" download>
                          <button className="flex flex-row items-center justify-center  bg-purple transition ease-in-out delay-150 w-full font-extralight rounded p-2 mt-5 font-sans  hover:bg-purple2 hover:text-white">
                            <p className="pr-2">Download image!</p>{' '}
                            <HiOutlineExternalLink />
                          </button>
                        </a>
                      </div>
                    </>
                  ) : (
                    <div>
                      <img
                        className="w-full sm:w-1/2 rounded"
                        src={previewImage}
                        alt="result"
                      />
                      {/* <button
                    disabled
                    className=" flex flex-row items-center justify-center transition ease-in-out delay-150 w-full bg-purple2 font-extralight rounded p-2 mt-5 font-sans  hover:bg-purple2 hover:text-purple"
                  >
                    <p className="pr-2">Download image!</p>{' '}
                    <HiOutlineExternalLink />
                  </button> */}
                    </div>
                  )}
                </div>
              </>
            )}
          </main>
        </div>
      </div>
      <footer className=" bg-dark2 p-4">
        <p>
          {' '}
          Made by
          <a
            className="ml-1 transition ease-in-out delay-150 text-purple hover:text-white"
            href="https://www.stigark.com"
          >
            Stig Ark
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
