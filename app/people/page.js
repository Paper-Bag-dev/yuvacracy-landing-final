'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const People = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/people/advisors')
  }, [router])
  return null;
}

export default People
