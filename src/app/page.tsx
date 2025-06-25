
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Vende Online en 24 Horas" subheadline="Somos únicos: entregamos tu web de ventas al día siguiente y ofrecemos soporte continuo, para que tú solo te concentres en vender." cta1="Empieza Ya" />
<How step1Title="Envía tus datos" step1Desc="Comparte información de tu negocio." step2Title="Web en 24H" step2Desc="Recibe tu tienda online lista." step3Title="Soporte continuo" step3Desc="Asistencia 24/7 para maximizar ventas." />
<Aboutus headline="WebGo: Conquiste el Mundo Digital" subheadline="Digitalizamos sus ventas sin complicaciones, aumentando su alcance de forma eficiente." beneficiotitulo1="Gestión Sencilla" beneficio1="Nos encargamos de todo por usted" beneficiotitulo2="Ventas Crecientes" beneficio2="Aumente clientes y visibilidad online" />
<Services heading="Aumenta Tus Ventas Digitalmente" description="Con asda (Precio: 1234) - asdasd, tendrás una web de ventas en menos de 24 horas que resuelve la falta de ventas online y falta de tiempo." services={[{"name":"Desarrollo Web","icon":"laptop","description":"Webs que capturan clientes."},{"name":"SEO Optimización","icon":"search","description":"Aparece primero en búsquedas."},{"name":"Gestión de Contenido","icon":"edit","description":"Contenido que atrae y retiene."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua y confiable."},{"name":"Integración E-commerce","icon":"shopping-cart","description":"Ventas online fáciles y rápidas."},{"name":"Analítica Web","icon":"chart-bar","description":"Datos que impulsan decisiones."}]} />
<BeforeAndAfter subheadline="Transformamos tu visión en resultados digitales excepcionales." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a vender online si solo vendo por recomendación?","respuesta":"WebGo te ayuda a digitalizar tus ventas creando una tienda online personalizada que atrae a nuevos clientes. Así puedes expandir tu negocio más allá de las recomendaciones, aprovechando el mercado online."},{"pregunta":"¿Qué beneficios obtengo al usar el servicio asda de WebGo?","respuesta":"Con el servicio asda de WebGo, obtienes una tienda online optimizada para atraer más visitantes. Su precio es de 1234 e incluye soporte continuo, para que te enfoques en tu negocio sin preocuparte por la gestión del sitio."},{"pregunta":"No tengo tiempo para manejar un sitio web, ¿cómo me puede ayudar WebGo?","respuesta":"WebGo se encarga de la gestión completa de tu sitio web, desde su creación hasta su mantenimiento. Así, puedes dedicarte a tu negocio mientras nosotros nos ocupamos de atraer y convertir clientes online."},{"pregunta":"¿Es complicado aprender a usar su plataforma para vender online?","respuesta":"No te preocupes, WebGo hace que vender online sea fácil y accesible. Ofrecemos una plataforma intuitiva y soporte dedicado para que aprendas a usarla rápidamente y sin complicaciones."},{"pregunta":"¿Cómo se asegura WebGo de que mi tienda online atraiga ventas?","respuesta":"WebGo utiliza estrategias de SEO y diseño web optimizado para asegurarte de que tu tienda online sea visible y atractiva para los clientes. Así, aumentas tus posibilidades de venta desde el primer día."}]} />
<BookAppointment 
                      heading="Transforma Tus Recomendaciones en Ventas Online" 
                      description="WebGo te ayuda a digitalizar tu negocio fácilmente, para que puedas vender más sin complicaciones. Descubre cómo hacerlo con nuestros servicios en Santiago."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
