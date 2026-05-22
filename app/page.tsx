import { client, urlFor } from '../lib/sanity'

export const revalidate = 0

export default async function Home() {
  const homeQuery = `*[_type == "homePage"][0]`
  const productsQuery = `*[_type == "product"] | order(order asc)`
  const technologyQuery = `*[_type == "technology"] | order(order asc)`
  const teamQuery = `*[_type == "teamMember"]`
  const contactQuery = `*[_type == "contact"][0]`

  const home = await client.fetch(homeQuery)
  const products = await client.fetch(productsQuery)
  const technologies = await client.fetch(technologyQuery)
  const team = await client.fetch(teamQuery)
  const contact = await client.fetch(contactQuery)

  return (
    <main className="min-h-screen bg-white text-black">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Helices Logo"
              className="h-12 w-auto"
            />

            <div>
              <h1 className="text-lg tracking-[0.25em] font-semibold">
                HELICES
              </h1>

              <p className="text-xs tracking-[0.18em] text-black/50 mt-1">
                BIOLOGICAL PHOTOLITHOGRAPHY
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-black/70">
            <a href="#home" className="hover:text-black">
              Home
            </a>

            <a href="#products" className="hover:text-black">
              Products
            </a>

            <a href="#technology" className="hover:text-black">
              Technology
            </a>

            <a href="#team" className="hover:text-black">
              Team
            </a>

            <a href="#contact" className="hover:text-black">
              Contact
            </a>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="max-w-7xl mx-auto px-6 py-36 border-b border-black/10"
      >
        <div className="max-w-4xl">

          <p className="text-sm tracking-[0.3em] text-black/50 mb-6">
            PRECISION PHOTOLITHOGRAPHY SYSTEMS
          </p>

          <h2 className="text-6xl md:text-7xl font-light leading-tight tracking-tight">
            {home?.headline}
          </h2>

          <p className="text-xl text-black/70 mt-10 max-w-2xl leading-relaxed">
            {home?.subheadline}
          </p>

          <div className="flex gap-4 mt-12 flex-wrap">

            <a
              href="#products"
              className="px-6 py-3 border border-black hover:bg-black hover:text-white transition-colors"
            >
              Explore MAS 2.0
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-black/20 hover:border-black"
            >
              Contact
            </a>

          </div>

        </div>
      </section>

      {/* PRODUCTS */}
      <section
        id="products"
        className="max-w-7xl mx-auto px-6 py-28 border-b border-black/10"
      >
        <div className="mb-16">

          <p className="text-sm tracking-[0.25em] text-black/50 mb-4">
            PRODUCTS
          </p>

          <h3 className="text-4xl md:text-5xl font-light">
            Maskless Array Synthesizers
          </h3>

        </div>

        <div className="space-y-20">

          {products.map((product: any) => (

            <div
              key={product._id}
              className="grid md:grid-cols-2 gap-16 items-start"
            >

              <div>

                <h4 className="text-3xl font-light mb-6">
                  {product.name}
                </h4>

                <p className="text-black/70 text-lg leading-relaxed whitespace-pre-line">
                  {product.description}
                </p>

              </div>

              <div className="aspect-square overflow-hidden">

                {product.image ? (

                  <img
                    src={urlFor(product.image).width(800).url()}
                    alt={product.name}
                    className="w-full h-64 object-contain bg-white"
                  />

                ) : (

                  <div className="w-full h-full flex items-center justify-center text-black/30 tracking-[0.2em] text-sm">
                    PRODUCT IMAGE
                  </div>

                )}

              </div>

            </div>

          ))}

        </div>
      </section>

      {/* TECHNOLOGY */}
      <section
        id="technology"
        className="max-w-7xl mx-auto px-6 py-28 border-b border-black/10"
      >

        <div className="max-w-3xl mb-16">

          <p className="text-sm tracking-[0.25em] text-black/50 mb-4">
            TECHNOLOGY
          </p>

          <h3 className="text-4xl md:text-5xl font-light mb-8">
            Nucleic Acid Photolithography.
          </h3>

          <p className="text-black/70 text-lg leading-relaxed">
            Helices develops photolithography systems designed for
            massively parallel synthesis of nucleic acids at ultra-large scales.
          </p>

        </div>

        <div className="space-y-20">

  {technologies.map((technology: any) => (

    <div
      key={technology._id}
      className="grid md:grid-cols-2 gap-16 items-start"
    >

      <div>

        <h4 className="text-3xl font-light mb-6">
          {technology.title}
        </h4>

        <p className="text-black/70 text-lg leading-relaxed whitespace-pre-line">
          {technology.description}
        </p>

      </div>

      <div className="aspect-square overflow-hidden">

        {technology.image ? (

          <img
            src={urlFor(technology.image).width(800).url()}
            alt={technology.title}
            className="w-full h-64 object-contain bg-white"
          />

        ) : (

          <div className="w-full h-full flex items-center justify-center text-black/30 tracking-[0.2em] text-sm">
            TECHNOLOGY IMAGE
          </div>

        )}

      </div>

    </div>

  ))}

</div>
      </section>

      {/* TEAM */}
      <section
        id="team"
        className="max-w-7xl mx-auto px-6 py-28 border-b border-black/10"
      >

        <div className="mb-16">

          <p className="text-sm tracking-[0.25em] text-black/50 mb-4">
            TEAM
          </p>

          <h3 className="text-4xl md:text-5xl font-light">
            Meet the founders.
          </h3>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {team.map((member: any) => (

            <div
              key={member._id}
              className="border border-black/10 p-8"
            >

              {member.photo && (

                <img
                  src={urlFor(member.photo).width(400).url()}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mb-8"
                />

              )}

              <h4 className="text-2xl font-light mb-2">
                {member.name}
              </h4>

              <p className="text-black/50 text-sm mb-6">
                {member.role}
              </p>

              <p className="text-black/70 leading-relaxed">
                {member.bio}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-7xl mx-auto px-6 py-28"
      >

        <div className="max-w-3xl">

          <p className="text-sm tracking-[0.25em] text-black/50 mb-4">
            CONTACT
          </p>

          <h3 className="text-4xl md:text-5xl font-light mb-8">
            How to get in touch.
          </h3>

          <div className="space-y-4 text-black/70 text-lg">

            <p>{contact?.email}</p>

            <p>{contact?.address}</p>

            <p>{contact?.linkedin}</p>

          </div>

        </div>

      </section>

    </main>
  )
}