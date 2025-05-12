export default function StatusMessage({ children, color }) {
  return (
    <div className="mb-3 flex justify-end items-center gap-2 opacity-90">
      <div className={`size-3 rounded-3xl bg-${color}-400`} ></div>
      <p className="text-xs font-light">{children}</p>
    </div>
  )
}
