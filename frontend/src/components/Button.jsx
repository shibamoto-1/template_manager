import { twMerge } from 'tailwind-merge'

export default function Button({ children, className, ...props }) {
  return (
    <button 
      className={twMerge(
        "btn",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
