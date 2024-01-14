
import TypedRender from '@/components/TypedRender';

export default function Home() {
  return (
    <div className="prose">
      <div className=''>
        <img src='/logo.svg' width={120} height={50} alt='logo' />
      </div>
      <h1>哈咯👋</h1>
      <h3><TypedRender /></h3>

      <h2 className='pt-4'>个人技术栈</h2>
      <div className='flex flex-wrap items-center gap-4'>
        <img className='m-0 h-6' src="/icons/css.svg" />
        <img className='m-0 h-6' src="/icons/js.svg" />
        <img className='m-0 h-6' src="/icons/react.svg" />
        <img className='m-0 h-6' src="/icons/vue.svg" />
        <img className='m-0 h-6' src="/icons/nest.svg" />
        <img className='m-0 h-6' src="/icons/python.svg" />
        <img className='m-0 h-6' src="/icons/django.svg" />
      </div>
    </div>
  )
}
