import React, { useEffect, useState } from 'react';
import './pagination.css';
import { generateArraySizeN } from '@/app/api/getData';
import Link from 'next/link';
import { Character } from '@/app/types';

const Pagination = ({
  currentPage,
  totalPages,
  characters,
}: {
  currentPage: number;
  totalPages: number;
  characters: Character[];
}) => {
  const firstFiveItems = [1, 2, 3, 4, 5];
  const firstNItems = generateArraySizeN(totalPages);
  const pagesBetweenCurrent = [currentPage - 1, currentPage, currentPage + 1];
  const pagesBeforeLastPage = [
    currentPage - 3,
    currentPage - 2,
    currentPage - 1,
  ];

  const lastPages = [currentPage - 2, currentPage - 1, currentPage];

  return (
    <div className={characters.length > 0 ? 'pagination' : 'pagination-bottom'}>
      <Link href={`/${currentPage - 1}`}>
        <button>{`<`}</button>
      </Link>
      <ul className="page-list">
        {totalPages <= 6 &&
          firstNItems.map((index) => (
            <li className="page-number" key={index}>
              <Link href={`/${index}`}>{index}</Link>
            </li>
          ))}
        {totalPages > 6 && currentPage < 6 && (
          <>
            {firstFiveItems.map((index) => (
              <li className="page-number" key={index}>
                <Link href={`/${index}`}>{index}</Link>
              </li>
            ))}
            <li key="ellipsis">...</li>
            <li className="page-number" key={totalPages}>
              <Link href={`/${totalPages}`}>{totalPages}</Link>
            </li>
          </>
        )}
        {totalPages > 6 && currentPage >= 6 && (
          <>
            <li className="page-number" key={1}>
              <Link href={`/1`}>{1}</Link>
            </li>
            <li key="ellipsis">...</li>
            {currentPage < totalPages &&
              pagesBetweenCurrent.map((index) => (
                <li className="page-number" key={index}>
                  <Link href={`/${index}`}>{index}</Link>
                </li>
              ))}
            {currentPage < totalPages - 2 && <li key="ellipsis">...</li>}
            {currentPage < totalPages - 1 && (
              <li className="page-number" key={totalPages}>
                <Link href={`/${totalPages}`}>{totalPages}</Link>
              </li>
            )}
            {currentPage === totalPages &&
              lastPages.map((index) => (
                <li className="page-number" key={index}>
                  <Link href={`/${index}`}>{index}</Link>
                </li>
              ))}
          </>
        )}
      </ul>
      <Link href={`/${currentPage + 1}`}>
        <button>{`>`}</button>
      </Link>
    </div>
  );
};

export default Pagination;
