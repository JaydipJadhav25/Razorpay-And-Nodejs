import Card from "@/components/Card";
import Navbar from "@/components/Navbar";


const courses = [
  {
    name: "Mastering JavaScript",
    image: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
    amount: 4999,
    description: "Learn JavaScript from basics to advanced concepts, including ES6+, async programming, and best practices.",
    course: "JavaScript",
  },
  {
    name: "Node.js for Beginners",
    image: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    amount: 3499,
    description: "Get started with Node.js and build scalable backend applications with Express, MongoDB, and REST APIs.",
    course: "Backend Development",
  },
  {
    name: "Python for Data Science",
    image: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
    amount: 5999,
    description: "Master Python for data analysis, machine learning, and AI with hands-on projects and real-world examples.",
    course: "Data Science",
  },
  {
    name: "React.js - From Zero to Hero",
    image: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    amount: 2999,
    description: "Learn React.js with hooks, context API, state management, and build modern web applications.",
    course: "Frontend Development",
  },
  {
    name: "Spring Boot for Java Developers",
    image: "https://cdn.worldvectorlogo.com/logos/spring-3.svg",
    amount: 4499,
    description: "Deep dive into Spring Boot, microservices, and enterprise-level Java development.",
    course: "Java Development",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col  p-4  gap-4  w-screen h-screen bg-gray-200">
      <Navbar />
       
      <div className="flex w-full h-full flex-wrap gap-4 justify-center items-center">
      {courses.map((course, index) => (
          <Card
            key={index}
            courseName={course.name}
            amount={course.amount}
            description={course.description}
            imageUrl={course.image || ""}
          />
        ))}
      </div>
       
 
    </div>
  );
}
