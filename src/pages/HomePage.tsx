import HeroBillboardBrandFloatingCards from "@/components/sections/hero/HeroBillboardBrandFloatingCards";
import AboutCursorTrail from "@/components/sections/about/AboutCursorTrail";
import FeaturesFilterGrid from "@/components/sections/features/FeaturesFilterGrid";
import FeaturesGridSplitLarge from "@/components/sections/features/FeaturesGridSplitLarge";
import ContactBar from "@/components/sections/contact/ContactBar";
import AuroraBackground from "@/components/backgrounds/AuroraBackground";
import LoaderSwirl from "@/components/loaders/LoaderSwirl";
import { Mail, MessageCircle, Phone } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <AuroraBackground
        className="fixed"
      />

      <LoaderSwirl

      />

      <div id="hero" data-webild-section="HeroBillboardBrandFloatingCards" data-webild-section-id="HeroBillboardBrandFloatingCards-1" data-section="hero">
        <HeroBillboardBrandFloatingCards
          textAnimation="fade-blur"
          brand="Kangen Kopi"
          description="Handcrafted espresso drinks and freshly baked pastries in a warm, welcoming atmosphere. From our first roast to your morning cup, every sip tells a story."
          primaryButton={{
            text: "Order Now",
            href: "#order"
          }}
          secondaryButton={{
            text: "View Menu",
            href: "#menu"
          }}
          videoSrc="https://storage.googleapis.com/webild/default/templates/coffee-shop/hero.mp4"
          floatingCards={[
            {
              imageSrc: "https://storage.googleapis.com/webild/default/templates/coffee-shop/iced-coffee-1600.webp?_wi=1",
              name: "Americano"
            },
            {
              imageSrc: "https://storage.googleapis.com/webild/default/templates/coffee-shop/latte-1600.webp",
              name: "Latte"
            }
          ]}
        />
      </div>

      <div id="about" data-webild-section="AboutCursorTrail" data-webild-section-id="AboutCursorTrail-1" data-section="about">
        <AboutCursorTrail
          textAnimation="fade-blur"
          tag="Move your cursor!"
          title="What are you in the mood for?"
          media={[
            {
              imageSrc: "https://storage.googleapis.com/webild/default/templates/coffee-shop/photo-trail-1-1600.webp"
            },
            {
              imageSrc: "https://storage.googleapis.com/webild/default/templates/coffee-shop/photo-trail-2-1600.webp?_wi=1"
            },
            {
              imageSrc: "https://storage.googleapis.com/webild/default/templates/coffee-shop/photo-trail-3-1600.webp?_wi=1"
            },
            {
              imageSrc: "https://storage.googleapis.com/webild/default/templates/coffee-shop/photo-trail-4-1600.webp"
            },
            {
              imageSrc: "https://storage.googleapis.com/webild/default/templates/coffee-shop/photo-trail-5-1600.webp"
            },
            {
              imageSrc: "https://storage.googleapis.com/webild/default/templates/coffee-shop/photo-trail-6-1600.webp?_wi=1"
            },
            {
              imageSrc: "https://storage.googleapis.com/webild/default/templates/coffee-shop/photo-trail-7-1600.webp?_wi=1"
            },
            {
              imageSrc: "https://storage.googleapis.com/webild/default/templates/coffee-shop/photo-trail-8-1600.webp"
            }
          ]}
          primaryButton={{
            text: "See the Menu",
            href: "#menu"
          }}
          secondaryButton={{
            text: "Find Us",
            href: "#locations"
          }}
        />
      </div>

      <div id="menu" data-webild-section="FeaturesFilterGrid" data-webild-section-id="FeaturesFilterGrid-1" data-section="menu">
        <FeaturesFilterGrid
          textAnimation="fade-blur"
          tag="What We Serve"
          title="Explore What's on Our Menu"
          description="From handcrafted espresso drinks to freshly baked pastries, every item is made with care."
          categories={[
            "Hot Drinks",
            "Cold Drinks",
            "Pastries"
          ]}
          items={[
            {
              name: "Espresso",
              category: "Hot Drinks",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/coffee-shop/espresso-1600.webp"
            },
            {
              name: "Latte",
              category: "Hot Drinks",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/coffee-shop/latte-menu-1600.webp"
            },
            {
              name: "Iced Latte",
              category: "Cold Drinks",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/coffee-shop/photo-trail-2-1600.webp?_wi=2"
            },
            {
              name: "Cappuccino",
              category: "Hot Drinks",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/coffee-shop/cappuccino-1600.webp"
            },
            {
              name: "Iced Americano",
              category: "Cold Drinks",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/coffee-shop/iced-coffee-1600.webp?_wi=2"
            },
            {
              name: "Mocha",
              category: "Hot Drinks",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/coffee-shop/mocha-1600.webp"
            },
            {
              name: "Iced Mocha",
              category: "Cold Drinks",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/coffee-shop/photo-trail-6-1600.webp?_wi=2"
            },
            {
              name: "Flat White",
              category: "Hot Drinks",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/coffee-shop/photo-trail-7-1600.webp?_wi=2"
            },
            {
              name: "Iced Flat White",
              category: "Cold Drinks",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/coffee-shop/iced-flat-white-1600.webp"
            },
            {
              name: "Chai Latte",
              category: "Hot Drinks",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/coffee-shop/chai-latte-1600.webp"
            },
            {
              name: "Croissant",
              category: "Pastries",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/coffee-shop/photo-trail-3-1600.webp?_wi=2"
            },
            {
              name: "Chocolate Chip Cookie",
              category: "Pastries",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/coffee-shop/chocolate-chip-cookie-1600.webp"
            }
          ]}
        />
      </div>

      <div id="features" data-webild-section="FeaturesGridSplitLarge" data-webild-section-id="FeaturesGridSplitLarge-1" data-section="features">
        <FeaturesGridSplitLarge
          textAnimation="fade-blur"
          tag="Beyond the Cup"
          title="Host Your Next Event at Joe's"
          description="From intimate gatherings to full-scale catering, we bring the warmth of Joe's wherever you need it."
          topItems={[
            {
              title: "Private Events",
              description: "Book our space for birthdays, meetings, or just a good excuse to get together. Great coffee and good vibes included.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/coffee-shop/private-events-1600.webp"
            },
            {
              title: "Catering",
              description: "Let us handle the coffee and pastries for your next event. We'll set up, pour, and make sure nobody runs on empty.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/coffee-shop/catering-1600.webp"
            }
          ]}
          bottomItem={{
            title: "Custom Menus",
            description: "Work with our team to build a tailored menu for your event — from espresso bars to pastry platters, we've got you covered.",
            imageSrc: "https://storage.googleapis.com/webild/default/templates/coffee-shop/custom-menus-1600.webp",
            primaryButton: {
              text: "Get in Touch",
              href: "#contact"
            }
          }}
        />
      </div>

      <div id="contact" data-webild-section="ContactBar" data-webild-section-id="ContactBar-1" data-section="contact">
        <ContactBar
          textAnimation="fade-blur"
          tag="Get in Touch"
          title="Speak with one of our experts"
          options={[
            {
              icon: MessageCircle,
              label: "Whatsapp",
              href: "https://wa.me/1234567890"
            },
            {
              icon: Mail,
              label: "Email",
              href: "mailto:hello@joescoffee.com"
            },
            {
              icon: Phone,
              label: "Number",
              href: "tel:+1234567890"
            }
          ]}
        />
      </div>
    </>
  );
}
