import { useEffect } from "react"
import { useLocation } from "react-router"

function ScrollTop() {

  const { pathname, hash } = useLocation()

  useEffect(() => {

    if (hash) {

      const scrollToElement = () => {
        const element = document.querySelector(hash)

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start"
          })
        } else {
          setTimeout(scrollToElement, 100)
        }
      }

      scrollToElement()
      return
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })

  }, [pathname, hash])

  return null
}

export default ScrollTop