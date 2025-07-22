import Image from "next/image";
import D20Icon from '../images/d20.svg'; // Adjust path as needed

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Welcome to DND Character Forge</h1>
      <p className="mt-4 text-lg">
        Create and manage your Dungeons & Dragons characters with ease.
      </p>
      <D20Icon className="w-32 h-32 mt-6 text-green-500" />
      <Image
        src="../images/d20.svg"
        alt="DND Character Creation"
        width={500}
        height={300}
        className="mt-6 rounded-lg"
        color="green"
      />
    </div>
  );
}
