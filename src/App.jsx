import Sedans from "./Component/Sedans"
import Suvs from "./Component/Suvs"
import Luxuosos from "./Component/Luxuosos"

export default function App() {
return(
<main className="min-h-shv bg-offwhitebg py-20 px-6 antialiased lg:flex justify-center items-center">
  <section className="lg:flex max-w-[920px]">
  
  <Sedans />
  <Suvs />
  <Luxuosos />
  </section>
</main>
)
}