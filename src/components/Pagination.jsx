"use client";
import React from "react";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
    const navigateNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    const navigatePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const pageNumbers = Array.from(
        { length: totalPages },
        (_, index) => index + 1
    );

    return (
        <nav className="flex justify-center mt-4">
            <ul className="inline-flex -space-x-px">
                <li>
                    <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg"
                        onClick={navigatePrevPage}
                    >
                        Anterior
                    </a>
                </li>
                {pageNumbers.map((pageNumber) => (
                    <li key={pageNumber}>
                        <a
                            href="#"
                            className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 ${
                                currentPage === pageNumber ? "bg-gray-200" : ""
                            }`}
                            onClick={() => setCurrentPage(pageNumber)}
                        >
                            {pageNumber}
                        </a>
                    </li>
                ))}
                <li>
                    <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg"
                        onClick={navigateNextPage}
                    >
                        Siguiente
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
