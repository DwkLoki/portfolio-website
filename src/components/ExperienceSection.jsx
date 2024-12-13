import { useState } from "react";
import experiences from "../data";

const ExperienceSection = () => {
    const [selectedCompany, setSelectedCompany] = useState(experiences[0]);

    return (
        <div className="flex flex-col md:flex-row">
            {/* Sidebar: List of Companies */}
            <div className="w-full md:w-1/3 bg-gray-100 p-4">
                <ul>
                    {experiences.map((experience, index) => (
                        <li
                            key={index}
                            onClick={() => setSelectedCompany(experience)}
                            className={`cursor-pointer p-3 rounded-lg mb-2 ${selectedCompany.company === experience.company
                                    ? "bg-yellow-300"
                                    : "bg-white"
                                } hover:bg-yellow-200 transition`}
                        >
                            {experience.company}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Main Content: Details of Selected Company */}
            <div className="w-full md:w-2/3 bg-white p-4 shadow-md">
                <h2 className="text-xl font-bold text-gray-800">
                    {selectedCompany.role} at {selectedCompany.company}
                </h2>
                <p className="text-sm text-gray-600">{selectedCompany.duration}</p>
                <ul className="mt-4 list-disc list-inside">
                    {selectedCompany.description.map((item, index) => (
                        <li key={index} className="text-gray-700 mb-2">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExperienceSection;