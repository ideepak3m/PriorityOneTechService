import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import Modal from "@/components/Modal";
import AuditForm from "@/components/AIAuditForm";
import ResetPasswordForm from "@/components/ResetPasswordForm";

const Index = () => {
  const [showAuditModal, setShowAuditModal] = useState(false);
  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);
  const [uuid, setUuid] = useState('');

  useEffect(() => {
    const hash = window.location.hash;

    if (hash.startsWith("#book-audit")) {
      const query = hash.split("?")[1];
      const params = new URLSearchParams(query);
      const prefill = params.get("prefill");

      if (prefill) {
        try {
          const decoded = JSON.parse(decodeURIComponent(prefill));
          window.__auditPrefill = decoded;
        } catch (err) {
          console.warn("Invalid prefill payload:", err);
        }
      }

      setShowAuditModal(true);
    }
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#reset-password')) {
      const query = hash.split('?')[1];
      const params = new URLSearchParams(query);
      const token = params.get('uuid');
      if (token) setUuid(token);
      setShowResetPasswordModal(true);
    }
  }, []);


  return (
    <>
      <div className="min-h-screen">
        <Navigation onOpenAudit={() => setShowAuditModal(true)} />
        <HeroSection />
        <Modal isOpen={showAuditModal} onClose={() => setShowAuditModal(false)}>
          <AuditForm />
        </Modal>
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </div>

      {showResetPasswordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 min-h-screen">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <ResetPasswordForm uuid={uuid} onClose={() => setShowResetPasswordModal(false)} />
          </div>
        </div>
      )}
    </>
  );
}

export default Index;
