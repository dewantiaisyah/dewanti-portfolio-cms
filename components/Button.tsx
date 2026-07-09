type ButtonProps = {label?: string; href?: string; style?: 'primary' | 'secondary' | 'outline'}

export function Button({label, href = '#', style = 'primary'}: ButtonProps) {
  if (!label) return null
  return <a className={`button button--${style}`} href={href}>{label}</a>
}
