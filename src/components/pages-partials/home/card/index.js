import Card from '@/components/card'
import { fetchData } from '@/services/api'
import { useEffect, useState } from 'react'
export default function Products() {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const res = await fetchData()
        setData(res)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchDataAsync()
  }, [])
  return (
    <div className="bg-theme-white ">
      <div className="max-w-7xl mx-auto  my-7">
        <div className="flex flex-col py-10 w-full lg:pl-0 pl-[1.5rem]">
          <div className=" flex flex-col  lg:justify-center lg:items-center justify-start items-start w-full space-y-5">
            <h5 className="text-theme-blue text-2xl font-bold">
              Carts Are Available
            </h5>
            <h1 className="text-theme-black text-[30px] font-bold">
              Lorem Ipsum is simply dummy text
            </h1>
            <p className="text-theme-black text-sm font-normal lg:text-center text-justify  w-[92%] lg:w-full">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="flex sm:flex-row flex-col mt-8 justify-evenly items-center space-y-6 lg:space-y-0 sm:space-x-5 space-x-0 flex-wrap">
            {data &&
              data.length > 0 &&
              data.map((job) => (
                <div className="my-1" key={job.title}>
                  <Card
                    mainTitle={job.brand}
                    jobTitle={job.title}
                    company={job.category}
                    location={job.price}
                    description={job.description}
                    thumbnail={job.thumbnail}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
