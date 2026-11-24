import { Outlet } from "react-router-dom";
import NavbarFullscreen from "@/components/navbars/NavbarFullscreen";
import FooterBrand from "@/components/sections/footer/FooterBrand";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground">
      <header data-webild-section="Header">
        <NavbarFullscreen
          logo="Joe's Coffee"
          navItems={[
            {
              name: "Menu",
              href: "#menu"
            },
            {
              name: "Find Us",
              href: "#locations"
            }
          ]}
          ctaButton={{
            text: "Order Now",
            href: "#order"
          }}
        />
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer data-webild-section="Footer">
        <FooterBrand
          brand="Joe's Coffee"
          columns={[
            {
              items: [
                {
                  label: "Menu",
                  href: "#menu"
                },
                {
                  label: "Hot Drinks",
                  href: "#menu"
                },
                {
                  label: "Pastries",
                  href: "#menu"
                }
              ]
            },
            {
              items: [
                {
                  label: "Find Us",
                  href: "#locations"
                },
                {
                  label: "Hours",
                  href: "#locations"
                },
                {
                  label: "About",
                  href: "#about"
                }
              ]
            },
            {
              items: [
                {
                  label: "Contact",
                  href: "#contact"
                },
                {
                  label: "Careers",
                  href: "#careers"
                },
                {
                  label: "Gift Cards",
                  href: "#gift-cards"
                }
              ]
            }
          ]}
        />
      </footer>
    </div>
  );
}
