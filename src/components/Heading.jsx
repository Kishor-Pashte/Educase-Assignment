export function Heading({content, className=""}) {
  return (
    <h1 className={`text-[28px] font-bold text-primary font-medium ${className}`}>{content}</h1>
  )
}
