import { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Menu from "./components/Menu";
import Space from "./components/Space";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const cursor = document.getElementById("cursor") as HTMLDivElement | null;
    const ring = document.getElementById("cursor-ring") as HTMLDivElement | null;
    const nav = document.getElementById("main-nav") as HTMLElement | null;

    if (!cursor || !ring) return;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;

      cursor.style.left = `${mx}px`;
      cursor.style.top = `${my}px`;
    };

    document.addEventListener("mousemove", onMove);

    let animationId = 0;

    const animateRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;

      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;

      animationId = requestAnimationFrame(animateRing);
    };

    animateRing();

    const interactiveEls = document.querySelectorAll<HTMLElement>(
      "a, button, .menu-card, .testimonial-card, .experience-block, .gallery-item"
    );

    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    function handleEnter() {
      cursor.style.width = "20px";
      cursor.style.height = "20px";
      cursor.style.background = "rgba(201,169,110,0.6)";

      ring.style.width = "56px";
      ring.style.height = "56px";
    }

    function handleLeave() {
      cursor.style.width = "12px";
      cursor.style.height = "12px";
      cursor.style.background = "#c9a96e";

      ring.style.width = "36px";
      ring.style.height = "36px";
    }

    const onScroll = () => {
      if (nav) {
        nav.classList.toggle("scrolled", window.scrollY > 60);
      }

      document.querySelectorAll<HTMLElement>(".bean").forEach((bean, i) => {
        bean.style.transform = `translateY(${window.scrollY * (0.04 + i * 0.01)}px)`;
      });
    };

    window.addEventListener("scroll", onScroll);

    const reveals = document.querySelectorAll<HTMLElement>(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    reveals.forEach((el) => observer.observe(el));

    const handleAnchor = (e: Event) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute("href");

      if (href?.startsWith("#")) {
        const section = document.querySelector(href) as HTMLElement | null;

        if (section) {
          e.preventDefault();
          section.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    };

    const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

    anchors.forEach((a) => a.addEventListener("click", handleAnchor));

    return () => {
      document.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);

      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });

      anchors.forEach((a) => a.removeEventListener("click", handleAnchor));

      observer.disconnect();

      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursor-ring" id="cursor-ring"></div>

      <Nav />
      <Hero />
      <Story />
      <Menu />
      <Space />
      <Experience />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}