import usersRestImage from "../assets/users-rest-api.png";
import wikiMoviesImage from "../assets/wiki-movies.png";
import expensesBankImage from "../assets/expenses-bank.png";
import ecommerceImage from "../assets/ecommerce-products.png";

export interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  image: string;
}

export const projects: Project[] = [
  {
    number: "01",
    title: "Users REST-API",
    category: "Full-Stack / Front-End",
    description:
      "Sistema web com autenticação JWT, consumo de API REST, gerenciamento de usuários e rotas protegidas.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "JWT"],
    github: "https://github.com/maxsueldev/UsersREST-API",
    demo: "https://users-rest-api.vercel.app/",
    image: usersRestImage,
  },
  {
    number: "02",
    title: "WikiMovies",
    category: "Front-End",
    description:
      "Aplicação de consulta de filmes com integração à TMDB API, pesquisa e paginação de resultados.",
    technologies: ["React", "TypeScript", "Context API", "CSS Modules"],
    github: "https://github.com/maxsueldev/WikiMovies",
    demo: "https://wiki-movies-max.vercel.app/",
    image: wikiMoviesImage,
  },
  {
    number: "03",
    title: "Expenses Bank",
    category: "Front-End / Firebase",
    description:
      "Aplicação com autenticação e armazenamento de dados utilizando Firebase.",
    technologies: ["React", "TypeScript", "Firebase", "Context API"],
    github: "https://github.com/maxsueldev/expenses-bank",
    demo: "https://expenses-bank-max.vercel.app",
    image: expensesBankImage,
  },
  {
    number: "04",
    title: "Ecommerce Products",
    category: "Front-End",
    description:
      "Aplicação de e-commerce com catálogo de produtos e gerenciamento de carrinho.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Fetch API"],
    github: "https://github.com/maxsueldev/Ecommerce-Products",
    demo: "https://ecommerce-products-max.vercel.app",
    image: ecommerceImage,
  },
];
