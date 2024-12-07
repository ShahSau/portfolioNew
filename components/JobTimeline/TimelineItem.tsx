
import { motion,useTransform,useTime } from 'framer-motion'
import { useInView } from '../../app/hooks/useInView'
import { CalendarDays,Building, MapPin } from 'lucide-react'
import { JSX } from 'react'
import Image from 'next/image'


interface TimelineItemProps {
  year: string
  title: string
  company: string
  description1: string
  description2: string
  description3: string
  index: number
  tech: string[]
  location: string
  image: string
}

const TimelineItem = ({ year, title, company, description1, description2,description3, index,tech,location,image }: TimelineItemProps): JSX.Element => {
  const [ref, isInView] = useInView({ threshold: 0.05 })
  const time = useTime();
  const rotate = useTransform(time, [0, 3000], [0, 360], {
    clamp: false,
  });
  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, #ff4545, #00ff99, #006aff, #ff0095, #ff4545)`;
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`mb-8 flex w-full flex-col sm:mb-12  ${
        index % 2 === 0 ? 'sm:flex-row ' : 'sm:flex-row-reverse'
      }`}
    >
      <div className="flex sm:w-1/2 md:opacity-0 z-10">
        <div className="mr-4 sm:mr-0 sm:ml-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 shadow-xl"
          >
            <CalendarDays  className="h-6 w-6 text-white" />
          </motion.div>
        </div>
        <div className="pt-1 sm:hidden">
          <span className="text-sm font-bold text-indigo-600">{year}</span>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
        className="w-full pl-16 md:w-1/2 sm:pl-0 sm:pr-0"
      >
        <div className="rounded-lg bg-white p-6 shadow-xl transition-shadow duration-300 hover:shadow-2xl">
          <span className="hidden text-sm font-bold text-indigo-600 sm:inline-block">
            {year}
          </span>
          <h3 className="mb-2 text-xl font-bold text-gray-800 sm:text-2xl">{title}</h3>
          <div className="mb-4 flex items-center text-gray-600">
            <Image src={image} width={20} height={20} className="mr-2 h-5 w-5" alt={`${company} logo`} />
            <span>{company}</span> 
          </div>
          <div className="mb-4 flex items-center text-gray-600">
            <MapPin className="mr-2 h-5 w-5" />
            <span>{location}</span> 
          </div>
          <p className="text-sm text-gray-600 sm:text-md md:text-lg mb-6">{description1}</p>
          <p className="text-sm text-gray-600 sm:text-md md:text-lg mb-6">{description2}</p>
          <p className="text-sm text-gray-600 sm:text-md md:text-lg mb-6">{description3}</p>


          <div className='flex flex-wrap gap-4'>
            {tech.map((item,index) => (
                <div className="relative" key={index}>
                    
                    <button className="w-26 relative bg-neutral-100 px-3 py-2 rounded-md  transition-colors duration-200 z-10">
                        <span>{item}</span>
                    </button>
                    <motion.div
                        className="absolute -inset-[1.5px] rounded-md"
                        style={{
                            background: rotatingBg,
                        }}
                    />
                
                </div>
            ))}
            </div>
        </div>
        
      </motion.div>
    </motion.div>
  )
}


export default TimelineItem