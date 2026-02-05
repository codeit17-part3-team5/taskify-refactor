// PageNation.tsx
import AngleBrackets from '../icons/AngleBrackets';

type PagiNationProps = {
  page: number;
  totalPages: number;
  onPageChange: (next: number) => void;
  className?: string;
};

export default function PagiNation({
  page,
  totalPages,
  onPageChange,
  className = '',
}: PagiNationProps) {
  const isPrevDisabled = page <= 1;
  const isNextDisabled = page >= totalPages;

  const goPrev = () => {
    if (isPrevDisabled) return;
    onPageChange(page - 1);
  };

  const goNext = () => {
    if (isNextDisabled) return;
    onPageChange(page + 1);
  };

  return (
    <div className="flex w-22 h-9 rounded-xl border border-gray-300 overflow-hidden mt-5">
      <button
        type="button"
        onClick={goPrev}
        disabled={isPrevDisabled}
        aria-label="Previous page"
        className="flex-1 flex items-center justify-center border-r border-gray-300 disabled:opacity-60"
      >
        <AngleBrackets direction="left" />
      </button>

      <button
        type="button"
        onClick={goNext}
        disabled={isNextDisabled}
        aria-label="Next Page"
        className="flex-1 flex items-center justify-center disabled:opacity-60"
      >
        <AngleBrackets direction="right" />
      </button>
    </div>
  );
}

// TODO: 추후 페이지 number 추가 마지막 페이지에서 넘길시 토스트 추가
