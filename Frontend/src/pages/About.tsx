import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

const messages = [
  `TaskBoard is a cloud-based notes application designed to store users' notes securely and make them accessible anytime, anywhere.`,
  `The app is built using popular technologies such as React.js, MongoDB, Express.js, and Node.js.`,
  `Tailwind CSS is used as the styling framework for the application.`,
  `shadcn/ui and Radix UI are used as the component libraries for the app.`,
  `The app is fully type-safe, built using TypeScript.`,
  `All forms in the application are type-safe, implemented using Zod and react-hook-form.`,
  `Vite.js is used as the bundler for faster development and build processes.`,
  `Custom Express APIs are used to fetch notes for the authenticated user.`,
];

const features = [
  `The app uses custom Express APIs to fetch all user data.`,
  `MongoDB is used as the primary database to store and retrieve user notes.`,
  `Users can create, read, update, and delete their notes.`,
  `The application is built using function-based React components.`,
  `It is fully responsive and optimized for accessibility across all devices.`,
];

const About = () => {
  return (
    <div className="container py-10">
      <Heading
        title="TaskBoard"
        description="Your Notes Secured on the Cloud"
        className="text-center"
      />
      <Separator className="mt-5 mb-8" />
      <ul className="flex flex-col max-w-4xl gap-3 mx-auto list-[square]">
        {messages.map((message, i) => (
          <li key={i} className="text-lg font-semibold tracking-wider">
            {message}
          </li>
        ))}

        <li className="text-lg font-semibold tracking-wider">
          Key Features of TaskBoard:
          <ul className="flex flex-col gap-2 px-5 py-3 text-base list-disc">
            {features.map((feature, i) => (
              <li key={i} className="text-lg font-semibold tracking-wider">
                {feature}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default About;
