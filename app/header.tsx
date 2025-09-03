'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-8 flex items-center space-x-4">
      <div>
        <Image
          src="/shanti.png"
          alt="logo"
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>

      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Shantilal Patliya
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Front-end Developer
        </TextEffect>
      </div>
      {/* 
      <a
        href="/resume.pdf"
        download
        title="Download Resume"
        className="inline-flex items-center justify-center rounded-full bg-zinc-100 p-3 text-zinc-900 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </a> */}
    </header>
  )
}
