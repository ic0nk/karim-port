export async function setupHomeAnimations(root: HTMLElement) {
  if (typeof window === 'undefined') return () => {};

  const gsapModule = await import('gsap');
  const stModule = await import('gsap/ScrollTrigger');
  const gsap: any = (gsapModule as any).default ?? (gsapModule as any);
  const ScrollTrigger: any = (stModule as any).ScrollTrigger ?? (stModule as any).default;
  gsap.registerPlugin(ScrollTrigger);

  const ctx = gsap.context(() => {
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: reduce)', () => {
      gsap.set([
        '#hero h1',
        '#hero .portfolio-subtitle',
        '#hero .animate-arrow',
        'section.reveal-section',
        '.reveal-el',
        '.ux-item',
      ], { clearProps: 'all' });
    });

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // Toggle: true enables open/close (reversible) reveals; false runs once-only reveals
      const REVEAL_REVERSIBLE = true;

      // Section-level fade+slide — smooth and professional
      (gsap.utils.toArray('section.reveal-section') as HTMLElement[]).forEach((sec) => {
        // baseline to avoid layout thrash
        gsap.set(sec, { transformOrigin: 'center center', transformPerspective: 800, force3D: true });

        if (REVEAL_REVERSIBLE) {
          // Use a single timeline per section so up/down scrolling feels cohesive
          const children = sec.querySelectorAll('.reveal-el');
          const lines = sec.querySelectorAll('div.h-px');
          gsap.set(sec, { autoAlpha: 0, y: 32, scale: 0.98, skewY: 0.3, willChange: 'transform, opacity' });
          if (children.length) {
            gsap.set(children, { autoAlpha: 0, y: 24, rotateX: 2, transformPerspective: 800, filter: 'blur(2px)', willChange: 'transform, opacity, filter' });
          }
          if (lines.length) {
            gsap.set(lines, { scaleX: 0, transformOrigin: 'right center' });
          }

          const tlSec = gsap.timeline({
            defaults: { ease: 'power2.out' },
            scrollTrigger: { trigger: sec, start: 'top 85%', end: 'top 25%', scrub: 0.65 },
          });
          tlSec
            .to(sec, { autoAlpha: 1, y: 0, scale: 1, skewY: 0, duration: 0.6 }, 0)
            .to(children, { autoAlpha: 1, y: 0, rotateX: 0, filter: 'blur(0px)', duration: 0.55, stagger: 0.1 }, 0.05)
            .to(lines, { scaleX: 1, duration: 0.5, ease: 'power2.out' }, 0.1);

        } else {
          gsap.from(sec, {
            autoAlpha: 0,
            y: 28,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: { trigger: sec, start: 'top 88%', once: true },
          });

          // Stagger children marked as reveal-el (once)
          const children = sec.querySelectorAll('.reveal-el');
          if (children.length) {
            gsap.from(children, {
              autoAlpha: 0,
              y: 20,
              filter: 'blur(2px)',
              duration: 0.6,
              ease: 'power2.out',
              stagger: 0.08,
              scrollTrigger: { trigger: sec, start: 'top 88%', once: true },
              onComplete: () => gsap.set(children, { filter: 'blur(0px)' }),
            });
          }
          const lines = sec.querySelectorAll('div.h-px');
          if (lines.length) {
            gsap.from(lines, {
              scaleX: 0,
              transformOrigin: 'right center',
              duration: 0.5,
              ease: 'power2.out',
              scrollTrigger: { trigger: sec, start: 'top 88%', once: true },
            });
          }
        }
      });

      // Stronger About-specific timeline to ensure visibility
      const about = document.querySelector('#about');
      if (about) {
        // set initial to avoid flash of content
        const aboutEls = about.querySelectorAll('.reveal-el:not(.pop-on-scroll)');
        if (aboutEls.length) gsap.set(aboutEls, { autoAlpha: 0, y: 24, filter: 'blur(2px)' });
        if (REVEAL_REVERSIBLE) {
          const tlAbout = gsap.timeline({
            defaults: { ease: 'power2.out' },
            scrollTrigger: { trigger: '#about', start: 'top 85%', end: 'top 30%', scrub: 0.6 },
          });
          if (aboutEls.length) {
            tlAbout.to(aboutEls, { autoAlpha: 1, y: 0, filter: 'blur(0px)', stagger: 0.12 }, 0);
          }
        } else {
          const tlAbout = gsap.timeline({ defaults: { ease: 'power2.out' } });
          if (aboutEls.length) {
            tlAbout.to(aboutEls, { autoAlpha: 1, y: 0, filter: 'blur(0px)', stagger: 0.1, duration: 0.6 }, 0);
          }
          ScrollTrigger.create({ trigger: '#about', start: 'top 88%', once: true, animation: tlAbout });
        }
      }

      // Footer-specific timeline (mirror About style)
      const footer = document.querySelector('#site-footer');
      if (footer) {
        const footerEls = footer.querySelectorAll('.reveal-el');
        if (footerEls.length) gsap.set(footerEls, { autoAlpha: 0, y: 22, filter: 'blur(2px)' });
        if (footer.querySelector('.footer-logo')) {
          gsap.set('#site-footer .footer-logo', { autoAlpha: 0, scale: 0.96 });
        }

        if (REVEAL_REVERSIBLE) {
          const tlFooter = gsap.timeline({
            defaults: { ease: 'power2.out' },
            scrollTrigger: { trigger: '#site-footer', start: 'top 85%', end: 'top 30%', scrub: 0.6 },
          });
          if (footerEls.length) tlFooter.to(footerEls, { autoAlpha: 1, y: 0, filter: 'blur(0px)', stagger: 0.12 }, 0);
          if (footer.querySelector('.footer-logo')) tlFooter.to('#site-footer .footer-logo', { autoAlpha: 1, scale: 1 }, 0.1);
        } else {
          const tlFooter = gsap.timeline({ defaults: { ease: 'power2.out' } });
          if (footerEls.length) tlFooter.to(footerEls, { autoAlpha: 1, y: 0, filter: 'blur(0px)', stagger: 0.1, duration: 0.6 }, 0);
          if (footer.querySelector('.footer-logo')) tlFooter.to('#site-footer .footer-logo', { autoAlpha: 1, scale: 1, duration: 0.7 }, 0.05);
          ScrollTrigger.create({ trigger: '#site-footer', start: 'top 88%', once: true, animation: tlFooter });
        }
      }

      // Note: No GSAP hero animations per request (static hero)

      // Header auto-hide on scroll down, show on scroll up (with small threshold for stability)
      const showHeader = gsap.from('header', { yPercent: -100, duration: 0.3, ease: 'power2.out', paused: true }).progress(1);
      let lastScrollY = window.scrollY;
      ScrollTrigger.create({
        start: 'top top',
        end: 99999,
        onUpdate: (self: any) => {
          const y = window.scrollY;
          const delta = Math.abs(y - lastScrollY);
          if (delta < 4) return; // ignore tiny jitter
          if (y < 80 || self.direction === -1) showHeader.play(); // near top or scrolling up
          else showHeader.reverse(); // scrolling down
          lastScrollY = y;
        },
      });

      // Section number full rotation + subtle parallax
      (gsap.utils.toArray('.text-number') as HTMLElement[]).forEach((numEl) => {
        const parentSec = numEl.closest('section') as HTMLElement | null;
        gsap.to(numEl, {
          y: -40,
          rotation: '+=360',
          transformOrigin: '50% 50%',
          ease: 'none',
          scrollTrigger: {
            trigger: parentSec ?? numEl,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });

      // Subtle parallax on About image for added depth
      if (document.querySelector('#about img')) {
        gsap.to('#about img', {
          y: -20,
          ease: 'none',
          scrollTrigger: { trigger: '#about', start: 'top bottom', end: 'bottom top', scrub: true },
        });
      }

      // Pop-in/out batch animation for elements marked with .pop-on-scroll
      gsap.set('.pop-on-scroll', { scale: 0.8, autoAlpha: 0, willChange: 'transform, opacity' });
      ScrollTrigger.batch('.pop-on-scroll', {
        start: 'top 85%',
        onEnter: (batch: Element[]) =>
          gsap.to(batch, {
            scale: 1,
            autoAlpha: 1,
            duration: 0.6,
            ease: 'back.out(1.7)',
            stagger: 0.08,
          }),
        onLeaveBack: (batch: Element[]) =>
          gsap.to(batch, {
            scale: 0.8,
            autoAlpha: 0,
            duration: 0.4,
            ease: 'back.in(1.2)',
            stagger: 0.06,
          }),
        onLeave: (batch: Element[]) =>
          gsap.to(batch, {
            scale: 0.8,
            autoAlpha: 0,
            duration: 0.3,
            ease: 'power1.inOut',
          }),
      });
    });
  }, root);

  return () => ctx.revert();
}
