import Navigation from "../app/components/Navigation";
import Section from "../app/components/Section";
import SecurityAudit from "../app/components/SecurityAudit";
import BoxComponent from "../app/components/BoxComponent";
import Footer from "../app/components/Footer";

export default function SecurityPage() {
  const audits = [
    {
      date: "February 2024",
      company: "Bishopfox",
      type: "Application Audit (Bishop Fox)",
      status: "Complete",
    },
    {
      date: "January 2023",
      company: "Bishopfox",
      type: "Cloud Pentest (Bishop Fox)",
      status: "Complete",
    },
    {
      date: "September 2022",
      company: "NEAR Protocol",
      type: "NEAR Sweeper Contract Audit (Halborn)",
      status: "Complete",
    },
    {
      date: "July 2024",
      company: "SOC Audit",
      type: "SOC Report",
      status: "Complete",
    },
    {
      date: "August 2024",
      company: "ISO Certification",
      type: "ISO Certification",
      status: "Complete",
    },
    {
      date: "February 2025",
      company: "Bishopfox",
      type: "Cloud Pentest (Bishop Fox)",
      status: "Complete",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <Navigation />
      <div className="container mx-auto px-4 py-8 flex-1">
        <BoxComponent>
          <Section title="Security" defaultExpanded={true}>
            <SecurityAudit audits={audits} />
          </Section>
        </BoxComponent>
      </div>
      <Footer />
    </main>
  );
}


