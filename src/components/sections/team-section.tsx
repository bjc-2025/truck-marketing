import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const teamMembers = [
  {
    name: "Nicolas Fenton",
    role: "Account Manager",
    description: "Nic Fenton is an experienced Account Manager with a keen eye for detail and a passion for delivering exceptional client experiences. Known for building strong relationships, Nic ensures seamless project execution while always keeping clients' goals at the forefront.",
    imageUrl: "https://res.cloudinary.com/dvwug91mb/image/upload/v1748309382/Nic_t96ztc.jpg" // Replace with actual Cloudinary URL
  },
  {
    name: "Maisie Peck",
    role: "Marketing and Social Media",
    description: "Maisie is a graphic designer and photographer by trade, with an eye for quirky content. She loves working with clients to capture and amplify their stories. She specialises in end-to-end social media management, and design.",
    imageUrl: "https://res.cloudinary.com/dvwug91mb/image/upload/v1748309398/Maise_e9fedl.png" // Replace with actual Cloudinary URL
  },
  {
    name: "Dasun Abey",
    role: "Web Developer",
    description: "With over a decade of experience in web design and development, Dasun has collaborated with multinational agencies to create impactful digital solutions. Beyond coding, Dasun specialises in optimising user journeys and conversions, turning websites into powerful tools for businesses.",
    imageUrl: "https://res.cloudinary.com/dvwug91mb/image/upload/v1748309381/Dasun_javj88.png" // Replace with actual Cloudinary URL
  },
  {
    name: "Coral Barclay",
    role: "Marketing & Comms Specialist",
    description: "Coral is a Graphic Designer and Social Media Content Creator with a passion for making design dreams a reality. She loves working with her clients every step of the way, making each project personal and unique.",
    imageUrl: "https://res.cloudinary.com/dvwug91mb/image/upload/v1748309381/Coral_epee40.jpg" // Replace with actual Cloudinary URL
  }
];

export default function TeamSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet Our Expert Team
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our experienced professionals are dedicated to driving your trucking and logistics business forward with specialized marketing expertise that delivers results.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="card-elevation-md group">
              <CardContent className="p-0">
                {/* Team Member Photo */}
                <div className="relative w-full h-80 overflow-hidden rounded-t-lg">
                  <Image
                    src={member.imageUrl}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Gradient overlay for better text readability if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-accent font-semibold mb-4 uppercase tracking-wide text-sm">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}