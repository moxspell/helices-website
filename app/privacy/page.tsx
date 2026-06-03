export default function Privacy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">

      <a
        href="/"
        className="text-sm text-black/50 hover:text-black"
      >
        ← Back to Home
      </a>

      <h1 className="text-5xl font-light mt-8 mb-12">
        Datenschutzerklärung
      </h1>

      <div className="space-y-8 text-white/70 leading-relaxed">

        <section>
          <h2 className="text-xl text-white mb-3">
            Verantwortlicher
          </h2>

          <p>
            Helices Biological Photolithography GmbH
          </p>

          <p>
            Josef-Holaubek-Platz 2
	    1090 Vienna
            Austria
          </p>

          <p>
            helices.bio (at) gmail.com
          </p>
        </section>

        <section>
          <h2 className="text-xl text-white mb-3">
            Zugriffsdaten
          </h2>

          <p>
            Beim Besuch dieser Website werden technische Daten
            (z. B. IP-Adresse, Browsertyp, Betriebssystem,
            Zugriffszeitpunkt) automatisch verarbeitet, soweit dies
            für den Betrieb der Website erforderlich ist.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-white mb-3">
            Hosting
          </h2>

          <p>
            Diese Website wird über Vercel gehostet.
            Im Rahmen der Bereitstellung der Website können
            personenbezogene Daten verarbeitet werden.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-white mb-3">
            Kontaktaufnahme
          </h2>

          <p>
            Wenn Sie uns per E-Mail kontaktieren,
            werden Ihre Angaben ausschließlich zur Bearbeitung
            Ihrer Anfrage verarbeitet.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-white mb-3">
            Ihre Rechte
          </h2>

          <p>
            Ihnen stehen die Rechte auf Auskunft,
            Berichtigung, Löschung, Einschränkung der Verarbeitung,
            Datenübertragbarkeit sowie Widerspruch gemäß DSGVO zu.
          </p>
        </section>

      </div>

    </main>
  )
}