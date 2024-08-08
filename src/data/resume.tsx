import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aluizio Andrade",
  initials: "AA",
  url: "https://www.instagram.com/maisequilibriomaissaude/",
  location: "São Paulo, SP",
  locationLink: "https://www.google.com/maps/place/recife",
  description:
    "Coach & Palestrante.",
  summary:
    "Aprenda a equilibrar sua vida pessoal, espiritual, famíliar e social🧘🏿‍♀️🧘🏻",
  avatarUrl: "/profile.jpg",
  skills: [
    "Educação",
    "Saúde Mental",
    "Nutrição",
    "Atividade Física",
    "Saúde Ambiental",
    "Saúde Social",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "paulo@mareanalitica.com.br",
    tel: "558196210801",
    social: {
      Whatsapp: {
        name: "Whatsapp",
        url: "https://www.instagram.com/maisequilibriomaissaude/",
        icon: Icons.whatsapp,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Universidade de São Paulo (USP)",
      href: "https://usp.br",
      badges: [],
      location: "São Paulo, SP",
      title: "Professor Associado",
      logoUrl: "/usp.png",
      start: "Março 2015",
      end: "Presente",
      description:
        "Responsável por ministrar disciplinas voltadas para a promoção da saúde integral e bem-estar. Desenvolvi projetos de pesquisa focados na interseção entre saúde mental e física.",
    },
    {
      company: "Hospital das Clínicas",
      badges: [],
      href: "https://hc.fm.usp.br",
      location: "São Paulo, SP",
      title: "Consultor de Saúde Mental",
      logoUrl: "/hc.png",
      start: "Janeiro 2012",
      end: "Fevereiro 2015",
      description:
        "Atuei como consultor de saúde mental, implementando programas de suporte psicológico para pacientes e profissionais de saúde.",
    },
    {
      company: "Secretaria de Saúde do Estado de São Paulo",
      href: "https://saopaulo.sp.gov.br",
      badges: [],
      location: "São Paulo, SP",
      title: "Coordenador de Programas de Nutrição",
      logoUrl: "/secretaria_saude_sp.png",
      start: "Janeiro 2008",
      end: "Dezembro 2011",
      description:
        "Coordenei programas de nutrição voltados para comunidades carentes, promovendo hábitos alimentares saudáveis e combatendo a desnutrição.",
    },
  ],
  education: [
    {
      school: "Universidade de São Paulo (USP)",
      href: "https://usp.br",
      degree: "Doutorado em Saúde Pública",
      logoUrl: "/usp.png",
      start: "2010",
      end: "2014",
    },
    {
      school: "Universidade Estadual de Campinas (UNICAMP)",
      href: "https://unicamp.br",
      degree: "Mestrado em Nutrição",
      logoUrl: "/unicamp.png",
      start: "2006",
      end: "2008",
    },
    {
      school: "Universidade Federal de São Paulo (UNIFESP)",
      href: "https://unifesp.br",
      degree: "Graduação em Educação Física",
      logoUrl: "/unifesp.png",
      start: "2000",
      end: "2004",
    },
  ],
  projects: [
    {
      title: "Programa de Saúde Integral",
      href: "https://programasaudeintegral.com",
      dates: "Jan 2020 - Presente",
      active: true,
      description:
        "Desenvolvimento e implementação de um programa que integra saúde física, mental e social para escolas e empresas.",
      technologies: [
        "Educação",
        "Nutrição",
        "Psicologia",
        "Atividade Física",
      ],
      links: [
        {
          type: "Website",
          href: "https://programasaudeintegral.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://programasaudeintegral.com/video.mp4",
    },
    {
      title: "Projeto Vida Ativa",
      href: "https://projetovidaativa.com",
      dates: "Março 2018 - Dezembro 2019",
      active: false,
      description:
        "Projeto voltado para promover a atividade física regular entre idosos, melhorando sua qualidade de vida.",
      technologies: [
        "Atividade Física",
        "Educação",
        "Saúde Pública",
      ],
      links: [
        {
          type: "Website",
          href: "https://projetovidaativa.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://projetovidaativa.com/video.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hackathon da Saúde 2022",
      dates: "Outubro 15 - 17, 2022",
      location: "São Paulo, SP",
      description:
        "Desenvolvimento de uma plataforma digital para monitoramento de saúde mental em tempo real.",
      image:
        "https://hackathon-saude2022.com/imagem.png",
      mlh: "https://mlh.io/trust-badge/2022/white.svg",
      links: [],
    },
    {
      title: "Hackathon da Nutrição 2021",
      dates: "Novembro 20 - 22, 2021",
      location: "Campinas, SP",
      description:
        "Criação de um aplicativo que ajuda a planejar refeições saudáveis e equilibradas para famílias.",
      image:
        "https://hackathon-nutricao2021.com/imagem.png",
      mlh: "https://mlh.io/trust-badge/2021/white.svg",
      links: [],
    },
  ],
};
