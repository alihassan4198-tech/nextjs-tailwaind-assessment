const data = [
  {
    type: 'Address',
    value: 'abc abc dummy address',
    icon: '/svg/location.svg',
  },
  { type: 'Website', value: 'https://www.abcabc.com/', icon: '/svg/world.svg' },
]

const dataX = [
  { type: 'Email', value: 'abcabc@com', icon: '/svg/mail.svg' },
  { type: 'Contact', value: '+1 234567989', icon: '/svg/phone.svg' },
]

function InfoList({ data }) {
  return (
    <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-4">
      {data.map((info) => (
        <div className=" flex flex-row justify-between lg:w-4/12 ">
          <div className="flex flex-row items-start lg:space-x-2  space-x-6   ">
            <div className="text-base lg:mt-0.5 mt-1">
              <img src={info.icon} alt="" width={15} height={15} />
            </div>
            <div className="flex flex-col space-y-1">
              <h6 className="text-base font-bold">{info.type}</h6>
              <p className="text-xs font-normal">{info.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function getintouch() {
  return (
    <div className="bg-theme-white my-10">
      <div className="max-w-7xl mx-auto px-[1.5rem] ">
        <div className="flex lg:flex-row flex-col ">
          <div className="flex flex-col space-y-7 ">
            <h5 className="text-base font-bold text-theme-blue">
              Get In Touch
            </h5>
            <h1 className="text-[40px] font-bold   ">
              Dont Hesitate <br></br> To Ask a Question
            </h1>
            <p className="text-sm font-normal text-theme-black lg:w-7/12">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>

            <div className="lg:space-y-16 space-y-6">
              <InfoList data={data} />
              <InfoList data={dataX} />
            </div>
          </div>
          {/*form code */}
          <div className="  lg:-ml-5">
            <div className="py-10 lg:px-6 lg:col-span-2 ">
              <form
                action="#"
                method="POST"
                className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-1 sm:gap-x-8  "
              >
                <div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      placeholder="First Name"
                      className="block w-full rounded-md border-color py-3 px-4 text-gray-900 shadow-sm "
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-1">
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-color py-3 px-4 text-gray-900 shadow-sm "
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <div className="mt-1">
                    <input
                      type="email"
                      name="subject"
                      id="subject"
                      placeholder="Email"
                      className="block w-full rounded-md border-color py-3 px-4 text-gray-900 shadow-sm "
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md border-color py-3 px-4 text-gray-900 shadow-sm "
                      aria-describedby="message-max"
                      defaultValue={''}
                      placeholder="Your Message"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 sm:flex ">
                  <button
                    type="submit"
                    className="mt-2 inline-flex w-1/4 items-center justify-center rounded-md  shadow-sm  border border-color p-2 lg:px-7 lg:py-3 px-6 py-3  bg-theme-blue text-theme-white font-sans lg:text-base text-sm font-bold bg-theme-white-hover text-theme-blue-hover"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
