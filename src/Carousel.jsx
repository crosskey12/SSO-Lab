import { useEffect, useState } from 'react'
import { shortList, longList, list } from './data'
import { FaQuoteRight } from 'react-icons/fa'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

const Carousel = () => {
  const [people, setPeople] = useState(list)
  const [currentIndex, setCurrentIndex] = useState(1)
  const prevSlide = () => {
    setCurrentIndex((oldPerson) => {
      return (oldPerson - 1 + people.length) % people.length
    })
  }
  const nextSlide = () => {
    setCurrentIndex((oldPerson) => {
      return (oldPerson + 1) % people.length
    })
  }
  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide()
    }, 2000)
    return () => {
      clearInterval(sliderId)
      console.log('hello')
    }
  }, [currentIndex])
  return (
    <section>
      <div className="slider-container">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person
          return (
            <article
              key={id}
              className="slide"
              style={{
                transform: `translateX(${100 * (personIndex - currentIndex)}%)`,
                opacity: currentIndex === personIndex ? 1 : 0,
                visibility: currentIndex === personIndex ? 1 : 0,
              }}
            >
              {/* <img src={image} alt={name} className="person-img" /> */}
              <h5 className="name">{name}</h5>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <p className="text">{phno}</p>
              {/* <FaQuoteRight className="icon" /> */}
            </article>
          )
        })}
        <button type="button" className="prev" onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button type="button" className="next" onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}
export default Carousel
