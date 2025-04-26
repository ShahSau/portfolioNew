import { FC } from "react";
import Block from "./Block";

const HeaderBlock: FC = () => (
  <Block className="col-span-12 row-span-2 lg:col-span-8 text-zinc-700 bg-gray-100">
    <h1 className="mb-4 text-xl font-medium leading-tight">
      I'm a Full Stack Developer with 5+ years of experience building scalable
      web applications across media, healthcare, communications, and SaaS
      industries. I specialize in JavaScript/TypeScript (React, Angular,
      Node.js, Next.js), Python (Django), and Go (Gin, Fiber), crafting both
      intuitive frontends and high-performance backends. My toolkit also
      includes working with databases like MongoDB and PostgreSQL, API design
      with GraphQL, RESTApi, and backend technologies like Prisma, Redis, and Kafka. I'm
      experienced in testing with Cypress and Jest, and I deploy containerized
      solutions using Docker and Kubernetes across AWS, GCP environments. Passionate
      about clean code, scalable architecture, and impactful solutions, I love
      turning complex challenges into seamless user experiences. Let's build
      something great together!
    </h1>
  </Block>
);

export default HeaderBlock;
