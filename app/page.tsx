import Image from 'next/image'


export default function Home() {

  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-2">
      <div>
        <Image
          src="./"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </section>
  )
}