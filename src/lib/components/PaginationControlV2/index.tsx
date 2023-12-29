import { twMerge } from 'tailwind-merge';

import { PaginationControlV2Props } from './types';
import { Pagination } from '../Pagination';
import React, { useEffect, useState } from 'react';

export default function PaginationControlV2({
  className = '',
  id,
  currentPage,
  totalPages,
}: PaginationControlV2Props) {
  const [visiblePages, setVisiblePages] = useState<number[]>([]);

  useEffect(() => {
    const generateVisiblePages = () => {
      const maxVisiblePages = 5;
      const halfVisiblePages = Math.floor(maxVisiblePages / 2);

      let startPage = currentPage - halfVisiblePages;
      let endPage = currentPage + halfVisiblePages;

      if (startPage < 1) {
        startPage = 1;
        endPage = Math.min(totalPages, maxVisiblePages);
      }

      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, totalPages - maxVisiblePages + 1);
      }

      const pages = [];
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      setVisiblePages(pages);
    };

    generateVisiblePages();
  }, [currentPage, totalPages, setVisiblePages]);

  const handlePageChange = () => {
    // Adicione aqui a lógica para alterar a página
  };

  const handlePreviousPage = () => {
    // Adicione aqui a lógica para ir para a página anterior
  };

  const handleNextPage = () => {
    // Adicione aqui a lógica para ir para a próxima página
  };
  return (
    <div className={twMerge('am-paginationcontrolv2', className)} id={id}>
      <Pagination.Root>
        <Pagination.Content>
          <Pagination.Item>
            <Pagination.Previous onClick={handlePreviousPage} />
          </Pagination.Item>

          {visiblePages.map((page, index) => (
            <React.Fragment key={index}>
              {index > 0 && page !== visiblePages[index - 1] + 1 && (
                <Pagination.Item>
                  <Pagination.Ellipsis />
                </Pagination.Item>
              )}
              <Pagination.Item>
                <Pagination.Link
                  isActive={page === currentPage}
                  onClick={() => handlePageChange()}
                >
                  {page}
                </Pagination.Link>
              </Pagination.Item>
            </React.Fragment>
          ))}

          <Pagination.Item>
            <Pagination.Next onClick={handleNextPage} />
          </Pagination.Item>
        </Pagination.Content>
      </Pagination.Root>
    </div>
  );
}
