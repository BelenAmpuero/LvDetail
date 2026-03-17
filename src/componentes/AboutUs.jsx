import { FaRocket, FaShieldAlt, FaBolt } from "react-icons/fa"

function AboutUs() {
  return (

    <section id="about" className="bg-base-100 text-white py-24">

      <div className="max-w-7xl mx-auto px-8 flex flex-col gap-20">

        {/* HEADER */}

        <div className="text-center max-w-2xl mx-auto flex flex-col gap-6">

          <h2 className="text-4xl md:text-5xl font-bold">
            Sobre <span className="text-accent">iTech</span>
          </h2>

          <p className="text-gray-400">
            En iTech creemos que la tecnología debe ser una herramienta para
            potenciar tu creatividad, tu productividad y tu forma de conectar
            con el mundo.
          </p>

        </div>

        {/* CONTENIDO */}

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* imagen */}

          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475"
            className="rounded-2xl shadow-xl object-cover h-80 w-full"
          />

          {/* texto */}

          <div className="flex flex-col gap-6">

            <p className="text-gray-400">
              Nacimos con la idea de acercar tecnología confiable y accesible
              a personas que buscan herramientas para trabajar, crear y
              disfrutar del mundo digital.
            </p>

            <p className="text-gray-400">
              Seleccionamos productos con buen diseño, calidad comprobada y
              excelente relación precio-rendimiento.
            </p>

          </div>

        </div>

        {/* VALORES */}

        <div className="grid md:grid-cols-3 gap-8">

          {/* valor 1 */}

          <div className="bg-base-200 rounded-xl p-8 flex flex-col gap-4 hover:scale-105 transition">

            <FaRocket className="text-accent text-3xl" />

            <h3 className="text-xl font-semibold">
              Innovación
            </h3>

            <p className="text-gray-400 text-sm">
              Buscamos constantemente productos que impulsen nuevas formas
              de trabajar, crear y explorar.
            </p>

          </div>

          {/* valor 2 */}

          <div className="bg-base-200 rounded-xl p-8 flex flex-col gap-4 hover:scale-105 transition">

            <FaShieldAlt className="text-accent text-3xl" />

            <h3 className="text-xl font-semibold">
              Confianza
            </h3>

            <p className="text-gray-400 text-sm">
              Elegimos dispositivos confiables que cumplen con estándares
              de calidad y durabilidad.
            </p>

          </div>

          {/* valor 3 */}

          <div className="bg-base-200 rounded-xl p-8 flex flex-col gap-4 hover:scale-105 transition">

            <FaBolt className="text-accent text-3xl" />

            <h3 className="text-xl font-semibold">
              Rendimiento
            </h3>

            <p className="text-gray-400 text-sm">
              Tecnología pensada para ofrecer potencia, eficiencia y una
              experiencia fluida.
            </p>

          </div>

        </div>

      </div>

    </section>

  )
}

export default AboutUs;