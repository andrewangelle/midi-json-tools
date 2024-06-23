/**
 * This function takes in a number and returns a hexadecimal string
 */
export function hexifyNumber(nbr: number): string {
  return nbr.toString(16).toUpperCase().padStart(2, '0');
}
