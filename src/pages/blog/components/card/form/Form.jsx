
const Form = (props) => {
  return (
 
      <div className="flex justify-center items-center w-screen min-h-screen bg-white">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="max-w-4xl mx-auto px-4 py-6">
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-blue-800 text-4xl italic">{props.type} Blog</h1>
              </div>

              <form className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input
                  className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Title*"
                  required
                />

                <input
                  className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Subtitle*"
                  required
                />

                <input
                  className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="file"
                  accept="image/*"
                />

                <select
                  className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose Category*
                  </option>
                  <option value="1">Tech</option>
                  <option value="2">Lifestyle</option>
                  <option value="3">Education</option>
                  {/* Add more categories here */}
                </select>
              </form>

              <div className="my-4">
                <textarea
                  placeholder="Description*"
                  className="w-full h-32 bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>

              <div className="my-2 w-1/2 lg:w-1/4">
                <button
                  className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>

 
        <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
          <div>
            <a
              title="Buy me a pizza"
              href="https://www.buymeacoffee.com/Dekartmc"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
            >
              <img
                className="object-cover object-center w-full h-full rounded-full"
                src="https://img.icons8.com/emoji/48/000000/pizza-emoji.png"
                alt="Buy me a pizza"
              />
            </a>
          </div>
        </div>
      </div>
    
  );
}

export default Form
