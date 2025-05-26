import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { ServiceInfo } from '@/data/servicesData';


interface FAQSectionProps {
  service: ServiceInfo;
}

export default function FAQSection({ service }: FAQSectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Common Questions About {service.title}
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {service.faqs.map((faq, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}