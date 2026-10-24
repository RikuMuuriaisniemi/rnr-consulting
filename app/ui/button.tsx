import clsx from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'm-2 flex h-10 items-center rounded-lg bg-cyan-600 px-3 text-sm font-medium text-white shadow-md shadow-black transition-colors hover:bg-blue-400 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
        className
      )}
    >
      <div>{children}</div>
    </button>
  )
}
