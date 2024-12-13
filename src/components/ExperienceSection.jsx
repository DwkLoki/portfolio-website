import { useState } from "react";
import experiences from "../data";

const ExperienceSection = () => {
    const [selectedCompany, setSelectedCompany] = useState(experiences[0]);

    return (
        <div className="flex flex-col md:flex-row">
            {/* Sidebar: List of Companies */}
            <div className="w-full md:w-1/3 pr-6">
                <ul>
                    {experiences.map((experience, index) => (
                        <li
                            key={index}
                            onClick={() => setSelectedCompany(experience)}
                            className={`cursor-pointer p-4 text-sm ${selectedCompany.company === experience.company
                                    ? "border-l-4 border-sky-500 text-sky-500"
                                    : "border-l-4 border-gray-300 text-gray-300 bg-white"
                                } transition-all hover:bg-sky-50 hover:text-sky-500`}
                        >
                            {experience.company}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Main Content: Details of Selected Company */}
            <div className="w-full md:w-2/3 bg-white">
                <h2 className="text-xl font-bold">
                    {selectedCompany.role}
                </h2>
                <p className="text-sm text-gray-500">{selectedCompany.duration}</p>
                <ul className="mt-4">
                    {selectedCompany.description.map((item, index) => (
                        <li key={index} className="relative text-gray-500 text-justify pl-8 mb-3 before:absolute before:content-['‣'] before:left-0 before:-top-2 before:text-3xl before:text-sky-500">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExperienceSection;