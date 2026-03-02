import iitDelhiImg from "../assets/iit_delhi.png";
import bmvbImg from "../assets/bmvb.png";

export const experience = [
  {
    title: "Software Developer",
    company: "Yubi (formerly Credavenue)",
    location: "Chennai, India",
    start_year: "Jul, 2023",
    end_year: "Present",
    description:
      "• Led go-live of multiple high-impact DLP integrations (GPay<>LTFS, SuperMoney<>LTFS, PhonePe<>LTFS) within months of transitioning to the Integration Team.\n• Scaled the integration layer to support increasing transaction traffic by optimizing workflows and implementing Temporal-based orchestration with robust retry and failure handling.\n• Improved system observability by enabling complete loan journey traceability (API payloads, failures, exceptions) directly via Temporal UI, significantly reducing debugging TAT.\n• Architected and developed high-performance Spring Boot microservices exposing REST and gRPC endpoints; implemented concurrency optimizations improving API response time by 5×.\n• Engineered real-time CDC pipelines using Kafka and ksqlDB powering aggregated Elasticsearch/OpenSearch views for analytics and reporting."
  },
  {
    title: "Software Developer Intern",
    company: "Huawei Technologies",
    location: "Bangalore, India",
    start_year: "Jun, 2022",
    end_year: "Jul, 2022",
    description:
      "• Contributed to Huawei’s HarmonyOS consumer software team, developing versatile UI component libraries.\n• Designed and implemented interactive material UI components from scratch in TypeScript for HarmonyOS applications.\n• Streamlined UI development by creating reusable, open-source components that accelerated development timelines for HarmonyOS applications."
  },
  {
    title: "Academic Mentor",
    company: "Board of Student Welfare(BSW), IIT Delhi",
    location: "Delhi, India",
    start_year: "Dec, 2020",
    end_year: "Feb, 2021",
    description:
      "• Took doubt clearing sessions and presented self-help or information sessions for 1st-year students to help them better understand concepts.\n• Planned lessons for the allotted time to strengthen weak topics of the freshers and build skills."
  }
];

export const education = [
  {
    school: "Indian Institute of Technology, Delhi",
    degree: "Bachelor of Technology",
    major: "Electrical Engineering",
    start_year: "2019",
    end_year: "2023",
    location: "Delhi, India",
    cgpa: "8.759/10.00",
    description:
      "",
    image: iitDelhiImg,
  },
  {
    school: "Balvantray Mehta Vidya Bhawan",
    degree: "Senior Secondary School",
    major: "Science",
    start_year: "2017",
    end_year: "2018",
    location: "Delhi, India",
    cgpa: "96.4%",
    description:
      "",
    image: bmvbImg,
  },
];
