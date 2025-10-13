// AuditForm.tsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import { n8n_CONFIG } from '@/config/globals';

declare global {
    interface Window {
        __auditPrefill?: any;
    }
}

export default function AuditForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        businessType: '',
        painPoints: '',
        preferredDate: '',
        availableSlot: '',
        uuid:'',
    });

    const [slots, setSlots] = useState([]);
    const [loadingSlots, setLoadingSlots] = useState(false);

    const businessTypes = ['Retail', 'Dental', 'Real Estate', 'Tech', 'Other'];

    // Prefill from global payload
    useEffect(() => {
        const payload = window.__auditPrefill;
        if (payload) {
            const dateOnly = payload.preferredAppointmentISO?.split("T")[0] || "";

            setFormData((prev) => ({
                ...prev,
                ...payload,
                preferredDate: dateOnly,
                uuid: payload.uuid || '',
            }));

            delete window.__auditPrefill;
        }
    }, []);

    // Fetch slots when preferredDate changes
    useEffect(() => {
        if (formData.preferredDate) {
            //const isoDate = new Date(formData.preferredDate).toISOString().split('T')[0] + 'T00:00:00';
            const dateOnly = formData.preferredDate.includes("T")
                ? formData.preferredDate.split("T")[0]
                : formData.preferredDate;

            const isoDate = `${dateOnly}T00:00:00`;
            setLoadingSlots(true);
            axios
                .get(n8n_CONFIG.getTimeSlotsurl, {
                    params: { preferredAppointmentISO: isoDate },
                })
                .then((res) => {
                    const formattedSlots = Array.isArray(res.data)
                        ? res.data.map((slot: string) => ({ label: slot, value: slot }))
                        : [];

                    setSlots(formattedSlots);
                })
                .catch((err) => {
                    console.error("Slot fetch failed:", err);
                    setSlots([]);
                })
                .finally(() => setLoadingSlots(false));
        }
    }, [formData.preferredDate]);

    // Auto-select slot from payload
    useEffect(() => {
        if (slots.length && formData.preferredDate.includes("T")) {
            const time = formData.preferredDate.split("T")[1]?.slice(0, 5); // e.g. "10:00"
            console.log("Auto-selecting slot:", { time, slots });
            const match = slots.find((s) => s.value === time);
            if (match) {
                setFormData((prev) => ({ ...prev, availableSlot: match.value }));
            }
        }
        
    }, [slots]);

    const [confirmationMessage, setConfirmationMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await axios.post(n8n_CONFIG.bookAppointmenturl, formData);
        setConfirmationMessage(`Your confirmation email has been sent to ${formData.email}.`);
    };

    const isFormReady = () => {
        const selectedDate = formData.preferredDate.includes("T")
            ? formData.preferredDate.split("T")[0]
            : formData.preferredDate;

        const today = new Date().toISOString().split("T")[0];
        console.log("isFormReady check:", { selectedDate, today, availableSlot: formData.availableSlot });
        return (
            selectedDate > today &&
            formData.availableSlot !== ""
        );
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow space-y-6">
            <input type="hidden" name="uuid" value={formData.uuid} />
            {/* Name */}
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
            </div>

            {/* Email */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
            </div>

            {/* Phone */}
            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
            </div>

            {/* Business Type */}
            <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
                <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                    <option value="">Select</option>
                    {businessTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>
            </div>

            {/* Pain Points */}
            <div>
                <label htmlFor="painPoints" className="block text-sm font-medium text-gray-700 mb-1">Describe your pain points</label>
                <textarea
                    id="painPoints"
                    name="painPoints"
                    value={formData.painPoints}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
            </div>

            {/* Preferred Date */}
            <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                <input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
            </div>

            {/* Available Slot */}
            <div>
                <label htmlFor="availableSlot" className="block text-sm font-medium text-gray-700 mb-1">Select a Time Slot</label>
                <select
                    id="availableSlot"
                    name="availableSlot"
                    value={formData.availableSlot}
                    onChange={handleChange}
                    required
                    disabled={loadingSlots || !slots.length}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                    <option value="">Select</option>
                    {slots.map((slot) => (
                        <option key={slot.value} value={slot.value}>{slot.label}</option>
                    ))}
                </select>
            </div>

            {/* Submit Button */}
            {confirmationMessage && (
                <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-md shadow">
                    {confirmationMessage}
                </div>
            )}

            <div className="pt-4">
                <button
                    type="submit"
                    disabled={!isFormReady()}
                    className={`w-full py-3 px-6 font-semibold rounded-md transition ${isFormReady()
                            ? "bg-yellow-500 text-white hover:bg-yellow-600"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                >
                    Book Audit
                </button>
                {!isFormReady() && (
                    <p className="text-sm text-gray-500 pt-2">
                        Please select a future date and time slot to proceed.
                    </p>
                )}

            </div>

        </form>

    );
}
