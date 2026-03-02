import portfolioImg from "../assets/portfolio.png";
import gameImg from "../assets/game_dev.webp";
import circuit from "../assets/circuit.png";
import graph from "../assets/graph.png";
import memory from "../assets/memory.png"
import imageProcessing from "../assets/image_processing.png"
import audio from "../assets/audio.png"

export const sample_projects = [
  {
    title: "Personal Portfolio Website",
    start_date: "Mar. 2026",
    end_date: "Mar. 2026",
    technologies_used: ["React", "TypeScript", "EmailJS", "AI-Assisted Development", "CSS"],
    description:
      "Built a modern, responsive portfolio website leveraging AI tools to accelerate development. Integrated EmailJS for contact functionality and implemented interactive spotlight effects for enhanced user experience.",
    github_link: "https://github.com/garv221/portfolio-site",
    image: portfolioImg,
  },
  {
    title: "2D Multiplayer Game",
    start_date: "Mar. 2022",
    end_date: "Apr. 2022",
    technologies_used: ["C++", "SDL", "Socket Programming", "TCP/IP"],
    description:
      "Designed a strategy-based 2D multiplayer game using C++ and SDL. Set up a client-server network using TCP/IP sockets to enhance multiplayer interaction and stability.",
    github_link: "https://github.com/Ayush1729/COP290-task_2-Capture_The_Campus",
    image: gameImg,
  },
  {
    title: "Audio Processing Library",
    start_date: "Jan. 2022",
    end_date: "Feb. 2022",
    technologies_used: ["C++", "Multi-threading", "Deep Neural Network", "OpenBLAS", "Intel MKL"],
    description:
      "Implemented a deep neural network (DNN) inference for identifying audio keywords in different audio clips. Improved matrix multiplication performance using multi-threading and linear algebra libraries.",
    github_link: "",
    image: audio,
  },
  {
    title: "Morse Code Interpreter",
    start_date: "Dec. 2020",
    end_date: "Dec. 2020",
    technologies_used: ["Digital Circuit Design", "FSMs", "Sequential Circuits"],
    description:
      "Designed a digital circuit that converts Morse code signals (dot-dash) into readable text using FSMs, combinational and sequential circuits, and a 7-segment LED display.",
    github_link: "",
    image: circuit,
  },
  {
    title: "Marvel Characters Graph",
    start_date: "Dec. 2020",
    end_date: "Jan. 2021",
    technologies_used: ["Java", "Graph Data Structure", "DFS", "Hashing"],
    description:
      "Implemented CSV data as a graph structure with efficient retrieval using hashing. Applied DFS and sorting algorithms to answer queries from the dataset.",
    github_link: "",
    image: graph,
  },
  {
    title: "Memory Allocation System",
    start_date: "Oct. 2020",
    end_date: "Nov. 2020",
    technologies_used: ["Java", "Doubly Linked Lists", "Binary Search Trees", "AVL Trees"],
    description:
      "Programmed an efficient memory management system for process execution using Doubly Linked Lists, BSTs, and AVL Trees to optimize time and space complexities.",
    github_link: "",
    image: memory,
  },
  {
    title: "Image Processing (Seam Carving)",
    start_date: "Oct. 2019",
    end_date: "Oct. 2019",
    technologies_used: ["Python", "Image Processing", "Backtracking", "Recursion"],
    description:
      "Implemented the Seam Carving algorithm to intelligently crop images without losing important content using recursion-based array traversing and backtracking.",
    github_link: "",
    image: imageProcessing,
  },
];