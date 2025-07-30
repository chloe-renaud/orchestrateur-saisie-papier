import { useTranslation } from 'react-i18next'

import Button from '@/components/Button'
import ArrowLeftIcon from '@/components/icons/ArrowLeftIcon'
import ArrowRightIcon from '@/components/icons/ArrowRightIcon'

interface Props {
  onNext: () => void
  onPrevious: () => void
  isFirstPage?: boolean
  isLastPage?: boolean
}

export default function Navigation({
  onNext,
  onPrevious,
  isFirstPage = false,
  isLastPage = false,
}: Readonly<Props>) {
  const { t } = useTranslation()

  return (
    <div className="flex gap-x-6">
      <Button
        onClick={onPrevious}
        disabled={isFirstPage}
        IconLeft={<ArrowLeftIcon />}
      >
        {t('previous')}
      </Button>
      <Button
        onClick={onNext}
        disabled={isLastPage}
        IconRight={<ArrowRightIcon />}
      >
        {t('next')}
      </Button>
    </div>
  )
}
