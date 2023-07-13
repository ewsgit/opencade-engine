export default function randomStringOfLength(length: number): string {
  return Math.random().toString(36).substring(2, length)
}
