'use client'
import { useEffect, useState } from 'react'
const Calculate = () => {
  const [totalEAS, setTotalEAS] = useState<any[]>([])
  const [page, setPage] = useState<number>(1)

  const load = async () => {
    console.log('load')
    try {
      const response = await fetch(
        `https://optimism.easscan.org/attestations/forSchema/0xfdcfdad2dbe7489e0ce56b260348b7f14e8365a8a325aef9834818c00d46b31b?page=${page}&limit=50&_data=routes%2F__boundary%2Fattestations%2FforSchema%2F%24schemaUID`
      )
      if (!response.ok) {
        throw new Error(
          `Failed to fetch: ${response.status} ${response.statusText}`
        )
      }
      const json = await response.json()
      if (json.attestations.length > 0) {
        setTotalEAS((prev) => [...prev, ...json.attestations])
        setPage((prevPage) => prevPage + 1) // Update page
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <div>
      <h1>Calculate</h1>
      <div>{totalEAS}</div>
    </div>
  )
}
export default Calculate
