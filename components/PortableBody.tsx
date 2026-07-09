import {PortableText} from '@portabletext/react'

export function PortableBody({value}: {value?: any[]}) {
  if (!value?.length) return null
  return (
    <div className="portable">
      <PortableText value={value} />
    </div>
  )
}
