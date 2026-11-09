"use client";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  ArrowRight,
  Code2,
  Layers,
  Braces,
  GitBranch,
  Mail,
  Menu,
  X,
} from "lucide-react";
import SpotlightCard from "../components/react-bits/SpotlightCard";
import { portfolio } from "../lib/portfolio";
export default function Home() {
  const [menu, setMenu] = useState(false),
    [filter, setFilter] = useState("Todos"),
    [selected, setSelected] = useState<number | null>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const o = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            o.unobserve(e.target);
          }
        }),
      { threshold: 0.1 },
    );
    document.querySelectorAll(".reveal").forEach((e) => o.observe(e));
    const c = canvas.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    let frame = 0,
      t = 0;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const draw = () => {
      const w = (c.width = c.clientWidth * devicePixelRatio),
        h = (c.height = c.clientHeight * devicePixelRatio);
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = "rgba(190,242,100,.35)";
      ctx.lineWidth = 0.65 * devicePixelRatio;
      for (let j = 0; j < 34; j++) {
        ctx.beginPath();
        for (let i = 0; i <= 90; i++) {
          const x = (i / 90) * w,
            y =
              h * 0.5 +
              Math.sin((i / 90) * 5 + t + j * 0.1) * h * 0.19 +
              Math.cos((i / 90) * 8 - t * 0.5 + j * 0.08) * h * 0.1 +
              (j - 16) * h * 0.013;
          i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
        }
        ctx.stroke();
      }
      t += 0.005;
      if (!reduced) frame = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      o.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);
  useEffect(() => {
    if (selected === null) return;
    const f = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", f);
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", f);
      document.body.style.overflow = old;
    };
  }, [selected]);
  return (
    <>
      <header>
        <a className="logo" href="#inicio" aria-label="Início">
          t<span>e.</span>
          <i />
        </a>
        <nav className={menu ? "open" : ""}>
          {[
            ["Início", "inicio"],
            ["Sobre", "sobre"],
            ["Projetos", "projetos"],
            ["Tecnologias", "tecnologias"],
          ].map(([n, id]) => (
            <a key={id} href={"#" + id} onClick={() => setMenu(false)}>
              {n}
            </a>
          ))}
        </nav>

<a
  className="nav-contact"
  href="https://wa.me/553799814973?s=t"
  target="_blank"
  rel="noopener noreferrer"
>
  Vamos conversar <ArrowUpRight size={16} />
</a>

<button
  className="menu-button"
  aria-label={menu ? "Fechar menu" : "Abrir menu"}
  aria-expanded={menu}
  onClick={() => setMenu(!menu)}
>
  {menu ? <X /> : <Menu />}
</button>
      </header>
      <main>
        <section id="inicio" className="hero">
          <div className="hero-grid" />
          <canvas ref={canvas} className="wave" aria-hidden="true" />
          <div className="hero-content">
            <span className="eyebrow">
              <i className="dot" /> UM POUCO DE CÓDIGO. MUITAS POSSIBILIDADES.
            </span>
            <p className="hello">
              Olá, eu sou o Thiago <em>✳</em>
            </p>
            <h1>
              Ideias ganham
              <br />
              vida em <em>código.</em>
            </h1>
            <p className="hero-description">
              <strong>Thiago Eduardo Alves.</strong>
              <br />
              {portfolio.tagline}
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projetos">
                Explore meus projetos <ArrowUpRight size={19} />
              </a>
              <a className="text-link" href="#sobre">
                Conheça minha história <ArrowRight size={17} />
              </a>
            </div>
          </div>
          <div className="floating-code">
            <span>// transformando ideias</span>
            <code>
              <em>const</em> developer = {"{"}
              <br />
              &nbsp; name: <b>'Thiago Eduardo'</b>,<br />
              &nbsp; mindset: <b>'sempre aprendendo'</b>,<br />
              &nbsp; next: <b>'construir algo incrível'</b>
              <br />
              {"}"};
            </code>
            <div>
              <i className="dot" /> building the next chapter
            </div>
          </div>
          <div className="hero-bottom">
            <a href="#sobre">
              <ArrowDown size={16} /> ROLE PARA EXPLORAR
            </a>
            <span>
              CRIATIVIDADE <em>×</em> TECNOLOGIA <em>×</em> PROPÓSITO
            </span>
          </div>
        </section>
        <div className="ticker" aria-hidden="true">
          <div>
            {[0, 1, 2].map((i) => (
              <span key={i}>
                IDEIAS EM MOVIMENTO <em>✳</em> CÓDIGO COM PROPÓSITO <em>✳</em>{" "}
                SEMPRE EVOLUINDO <em>✳</em>{" "}
              </span>
            ))}
          </div>
        </div>
        <section id="sobre" className="section reveal">
          <div className="section-label">01 / SOBRE MIM</div>
          <div className="about-layout">
            <div>
              <h2>
                Por trás de cada linha,
                <br />
                uma <em>nova ideia.</em>
              </h2>
              <p className="large-text">Muito prazer, sou Thiago.</p>
              <p>{portfolio.about}</p>
              <p className="note">
                Estudante de Sistemas de Informação, desenvolvendo soluções
                web e aprendendo com projetos em equipe.
              </p>
              <a className="text-link accent" href="#contato">
                Vamos nos conectar <ArrowUpRight size={18} />
              </a>
            </div>
            <SpotlightCard className="about-art" spotlightColor="#c0f56a">
              <span className="art-label">A WORK IN PROGRESS. ALWAYS.</span>
              <div className="orbit one" />
              <div className="orbit two" />
              <div className="orbit three" />
              <div className="monogram">
                TE<em>✳</em>
              </div>
              <div className="art-bottom">
                <Code2 size={18} /> Curiosidade é o ponto de partida.{" "}
                <ArrowUpRight size={16} />
              </div>
            </SpotlightCard>
          </div>
        </section>
        <section id="projetos" className="section projects">
          <div className="section-label">02 / PROJETOS SELECIONADOS</div>
          <div className="section-heading">
            <h2>
              Da ideia
              <br />à <em>experiência.</em>
            </h2>
            <div>
              <p>
                Projetos reais desenvolvidos em colaboração.
                <br />
                Tecnologia, aprendizado e soluções na prática.
              </p>
              <span className="sample">PROJETOS COLABORATIVOS</span>
            </div>
          </div>
          <div className="filters" aria-label="Filtrar projetos">
            {["Todos", ...new Set(portfolio.projects.map((p) => p.category))].map((f) => (
              <button
                key={f}
                className={filter === f ? "active" : ""}
                onClick={() => setFilter(f)}
              >
                {f}
                {f === "Todos" && <span>{portfolio.projects.length.toString().padStart(2, "0")}</span>}
              </button>
            ))}
          </div>
          <div className="project-grid">
            {portfolio.projects
              .filter((p) => filter === "Todos" || p.category === filter)
              .map((p) => (
                <button
                  className="project-card"
                  key={p.id}
                  onClick={() => setSelected(p.id)}
                >
                  <div className={"project-visual visual-" + p.id}>
                    <span className="preview-tag">PROJETO EM EQUIPE</span>
                    {p.id === 1 ? (
                      <div className="mock-dashboard">
                        <aside>
                          BI<span>◈</span>
                          <span>▦</span>
                          <span>◷</span>
                        </aside>
                        <div>
                          <small>REDE COMERCIAL AURORA</small>
                          <h4>Indicadores comerciais</h4>
                          <div className="stats">
                            <span>Receitas<b>BI</b></span>
                            <span>Vendas<b>SQL</b></span>
                          </div>
                          <div className="chart">
                            {[38, 56, 45, 75, 60, 90, 72, 110, 82, 98, 87, 120].map((v, i) => (
                              <i key={i} style={{ height: v }} />
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : p.id === 2 ? (
                      <div className="mock-browser">
                        <div className="browser-bar">
                          ● ● ● <span>MedFlow / gestão de saúde</span>
                        </div>
                        <div className="mock-site">
                          <small>MEDFLOW</small>
                          <strong>
                            Cuidado que
                            <br />
                            <em>conecta.</em>
                          </strong>
                          <div className="mock-shape" />
                          <footer>AGENDAMENTOS • MÉDICOS • CLÍNICAS</footer>
                        </div>
                      </div>
                    ) : (
                      <div className="experiment">
                        <i />
                        <i />
                        <i />
                        <strong>
                          INDIANA
                          <br />
                          JHONES
                          <br />
                          <em>JOGUE.</em>
                        </strong>
                      </div>
                    )}
                    <span className="project-open">
                      <ArrowUpRight size={20} />
                    </span>
                  </div>
                  <div className="project-info">
                    <div>
                      <small>
                        0{p.id} / {p.category.toUpperCase()}
                      </small>
                      <h3>{p.title}</h3>
                    </div>
                    <ArrowUpRight size={22} />
                  </div>
                  <p>{p.description}</p>
                  <div className="tags">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </button>
              ))}
          </div>
        </section>
        <section id="tecnologias" className="section reveal tech">
          <div className="section-label">03 / CAIXA DE FERRAMENTAS</div>
          <div className="section-heading">
            <h2>
              Aprender. Criar.
              <br />
              <em>Evoluir.</em>
            </h2>
            <p>
              As ferramentas mudam.
              <br />A vontade de construir continua.
            </p>
          </div>
          <div className="tech-grid">
            {portfolio.technologies.map((t, i) => (
              <div className="tech-item" key={t.name}>
                {i === 0 ? (
                  <Braces />
                ) : i === 1 ? (
                  <Layers />
                ) : i === 4 ? (
                  <GitBranch />
                ) : (
                  <Code2 />
                )}
                <span>{t.name}</span>
                <small>{t.description}</small>
              </div>
            ))}
          </div>
          <p className="note">
            Tecnologias aplicadas nos meus estudos e projetos colaborativos.
          </p>
        </section>
        <section id="contato" className="section contact reveal">
          <span className="eyebrow">
            <i className="dot" /> O PRÓXIMO PROJETO COMEÇA COM UM OLÁ.
          </span>
          <h2>
            Vamos construir
            <br />
            algo <em>juntos?</em>
            <span className="contact-star">✳</span>
          </h2>
          <div className="contact-bottom">
  <p>
    Uma ideia, uma oportunidade ou uma boa conversa.
    <br />
    Este espaço está aberto para novas conexões.
  </p>

  <a
    className="button primary"
    href="https://wa.me/553799814973?text=Ol%C3%A1%21%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Entrar em contato pelo WhatsApp"
  >
    Vamos conversar <ArrowUpRight size={18} />
  </a>
</div>
        </section>
      </main>
      <footer className="site-footer">
        <a className="logo" href="#inicio">
          t<span>e.</span>
          <i />
        </a>
        <span>© {new Date().getFullYear()} Thiago Eduardo Alves</span>
        <div>
          {portfolio.github && (
            <a href={portfolio.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          )}
          {portfolio.linkedin && (
            <a href={portfolio.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          )}
          <a href="#inicio">
            De volta ao topo <ArrowUpRight size={16} />
          </a>
        </div>
      </footer>
      {selected !== null && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              autoFocus
              className="close-modal"
              aria-label="Fechar projeto"
              onClick={() => setSelected(null)}
            >
              <X />
            </button>
            <span className="section-label">PROJETO COLABORATIVO</span>
            <h2 id="project-title">
              {portfolio.projects.find((p) => p.id === selected)?.title}
            </h2>
            <p>{portfolio.projects.find((p) => p.id === selected)?.details}</p>
            <p className="note">
              {portfolio.projects.find((p) => p.id === selected)?.role || "Colaboração em equipe"}
              {" · "}
              {portfolio.projects.find((p) => p.id === selected)?.type || "Projeto acadêmico"}
            </p>
            {portfolio.projects.find((p) => p.id === selected)?.github && (
              <a
                className="button primary"
                href={portfolio.projects.find((p) => p.id === selected)?.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver repositório no GitHub <ArrowUpRight size={18} />
              </a>
            )}
            <button
              className="button primary"
              onClick={() => setSelected(null)}
            >
              Continuar explorando <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
