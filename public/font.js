import { Montserrat, Open_Sans } from "next/font/google"

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
})

export const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
})