export const getPixelOfColumns = (templateColumns: string, containerWidth: number): [number, number][] => {
  const columns = templateColumns.split(' ')
  const total = columns.reduce((acc, column) => {
    if (column.endsWith('fr')) {
      return acc + parseFloat(column)
    }
    return acc
  }, 0)

  return columns.map(column => {
    // width and rounded percentage
    const w = parseFloat(column) / total * containerWidth
    return [w, Math.round(w / containerWidth * 100)]
  })
}