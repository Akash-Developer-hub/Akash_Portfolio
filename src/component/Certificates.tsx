"use client";

import React, { useState } from "react";
import { ExternalLink, Calendar, X } from "lucide-react";

const certificates = [
    {
        title: "Salesforce Certified Agentforce Specialist",
        issuer: "Salesforce",
        description:
            "This certification validates my expertise in Salesforce customer engagement platforms, demonstrating proficiency in CRM solutions and automated support processes.",
        date: "April 2025",
        link: "#",
        image: "./DataBricks.png",
    },
    {
        title: "Postman API Fundamentals Student Expert",
        issuer: "Postman",
        description:
            "Comprehensive demonstration of API development fundamentals including request creation, collection management, and automated testing.",
        date: "June 2025",
        link: "#",
        image: "./DataBricks.png",
    },
    {
        title: "Microsoft Certified: Azure AI Fundamentals",
        issuer: "Microsoft",
        description:
            "Demonstrated foundational knowledge of machine learning and AI concepts with Microsoft Azure services.",
        date: "August 2025",
        link: "#",
        image: "./DataBricks.png",
    },
    {
        title: "Databricks Lakehouse Fundamentals",
        issuer: "Databricks",
        description:
            "Completed the requirements to obtain Databricks Academy Accreditation in Lakehouse Fundamentals.",
        date: "October 2024",
        link: "#",
        image: "./DataBricks.png",
    },
    {
        title: "Academy Accreditation: GenAI Fundamentals",
        issuer: "Databricks",
        description:
            "Completed Databricks Academy Accreditation in Generative AI Fundamentals.",
        date: "October 2024",
        link: "#",
        image: "./DataBricks.png",
    },
];

export function CertificateGallery({ darkMode }: { darkMode: boolean }) {
    const [selectedCertificate, setSelectedCertificate] = useState<typeof certificates[0] | null>(null);

    const openModal = (certificate: typeof certificates[0]) => {
        setSelectedCertificate(certificate);
    };

    const closeModal = () => {
        setSelectedCertificate(null);
    };

    return (
        <div
            className={`px-6 py-10 transition-colors duration-500 ${darkMode ? "bg-black text-white" : "bg-white text-gray-900"
                }`}
        >
            {/* Title */}
            <h1 className="text-3xl font-bold mb-10">My Certificates</h1>

            {/* Certificates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {certificates.map((cert, idx) => (
                    <div
                        key={idx}
                        className={`rounded-lg overflow-hidden shadow-md border transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer ${darkMode
                                ? "bg-gray-800 border-gray-700 hover:bg-gray-750"
                                : "bg-white border-gray-200 hover:bg-gray-50"
                            }`}
                        onClick={() => openModal(cert)}
                    >
                        {/* Certificate Preview - Small preview showing top portion */}
                        <div className="relative h-24 overflow-hidden">
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className="w-full h-full object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>

                        {/* Content - Compact layout */}
                        <div className="p-3">
                            <h2 className="text-sm font-semibold mb-1 line-clamp-2">{cert.title}</h2>
                            <p className="text-xs text-blue-500 font-medium mb-2">{cert.issuer}</p>
                            <p className={`text-xs mb-3 line-clamp-2 ${darkMode ? "text-gray-300" : "text-gray-600"
                                }`}>
                                {cert.description}
                            </p>

                            {/* Footer - Compact */}
                            <div className="flex justify-between items-center">
                                {/* Date */}
                                <div
                                    className={`flex items-center gap-1 px-2 py-1 rounded text-xs ${darkMode
                                            ? "bg-gray-700 text-gray-300"
                                            : "bg-gray-100 text-gray-600"
                                        }`}
                                >
                                    <Calendar className="w-3 h-3" />
                                    {cert.date}
                                </div>

                                {/* Verify link */}
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-xs text-blue-500 hover:text-blue-600 transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    Verify <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for Full Certificate View */}
            {selectedCertificate && (
                <div 
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
                    onClick={closeModal}
                >
                    <div 
                        className={`relative max-w-5xl w-full max-h-[95vh] overflow-auto rounded-xl ${darkMode ? "bg-gray-900" : "bg-white"
                        }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
                        >
                            <X className="w-6 h-6 text-white" />
                        </button>

                        {/* Full Certificate Image */}
                        <div className="p-6">
                            <img
                                src={selectedCertificate.image}
                                alt={selectedCertificate.title}
                                className="w-full h-auto object-contain rounded-lg"
                            />
                            
                            {/* Certificate Details Below Image */}
                            <div className="mt-6 text-center">
                                <h2 className="text-2xl font-bold mb-2">{selectedCertificate.title}</h2>
                                <p className="text-lg text-blue-500 font-medium mb-4">{selectedCertificate.issuer}</p>
                                <p className={`text-base mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"
                                    }`}>
                                    {selectedCertificate.description}
                                </p>
                                
                                <div className="flex justify-center items-center gap-6">
                                    <div
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg ${darkMode
                                                ? "bg-gray-800 text-gray-300"
                                                : "bg-gray-100 text-gray-600"
                                            }`}
                                    >
                                        <Calendar className="w-5 h-5" />
                                        {selectedCertificate.date}
                                    </div>

                                    <a
                                        href={selectedCertificate.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                                    >
                                        Verify Certificate <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}